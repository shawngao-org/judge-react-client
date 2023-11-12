import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "../view/home/Home";
import {Login} from "../view/login/Login";
import {MainLayout} from "../view/MainLayout";
import {Dashboard} from "../view/dashboard/Dashboard";
import {DashboardOutlined, SettingOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {ActiveUser} from "../view/user/ActiveUser";
import {routerTest} from "../api/ApiRouter";

export const routerElementMapping = {
    "home": {e: <Home />, i: null,},
    "login": {e: <Login />, i: null,},
    "portal": {e: <MainLayout/>, i: null,},
    "dashboard": {e: <Dashboard />, i: <DashboardOutlined />,},
    "user": {e: null, i: <UserOutlined />},
    "activeUser": {e: <ActiveUser/>, i: null,},
    "deletedUser": {e: <Home/>, i: null,},
    "group": {e: null, i: <TeamOutlined/>,},
    "groupManage": {e: <Home/>, i: null,},
    "teacherManage": {e: <Home/>, i: null,},
    "studentManage": {e: <Home/>, i: null,},
    "setting": {e: null, i: <SettingOutlined/>,},
    "announcementManage": {e: <Home/>, i: null,},
    "routerManage": {e: <Home/>, i: null,},
};

export const routers = await originRouter();

function jC2R(o) {
    let r = [];
    o.forEach(v => {
        let t = [];
        if (v.children !== undefined) {
            t = jC2R(v.children);
        }
        r.push({
            id: v.id, path: v.path,
            icon: routerElementMapping[v.key].i,
            element: routerElementMapping[v.key].e,
            name: v.name, visible: v.visible,
            children: t
        });
    });
    return r;
}

function buildTree(data, parentId) {
    let tree = [];
    data.forEach(item => {
        if (item.parent === parentId) {
            const children = buildTree(data, item.id);
            if (children.length > 0) {
                item.children = children;
            }
            tree.push(item);
        }
    });
    return tree;
}

function j2r(o) {
    let r = [];
    o.forEach(v => {
        let t = [];
        if (v.children !== undefined) {
            t = j2r(v.children);
        }
        r.push(<Route key={v.path} path={v.path} element={v.element}>{t}</Route>);
    });
    return r;
}

async function originRouter() {
    const {data: res} = await routerTest();
    let dat = buildTree(res, null);
    return jC2R(dat);
}

function parseJson2Router() {
    return <BrowserRouter><Routes>{j2r(routers)}</Routes></BrowserRouter>;
}

export const getRouterComponent = () => {
    return parseJson2Router(routers);
}
