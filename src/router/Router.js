import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "../view/home/Home";
import {Login} from "../view/login/Login";
import {MainLayout} from "../view/MainLayout";
import {Dashboard} from "../view/dashboard/Dashboard";
import {SettingOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";

export const routers = [
    {
        path: "/",
        icon: null,
        element: <Home/>,
        children: [],
        name: "",
        visible: false,
    },
    {
        path: "/login",
        icon: null,
        element: <Login/>,
        children: [],
        name: "",
        visible: false,
    },
    {
        path: "/portal",
        icon: null,
        element: <MainLayout/>,
        name: "",
        visible: false,
        children: [
            {
                path: "dashboard",
                icon: "",
                element: <Dashboard/>,
                name: "仪表板",
                visible: true,
                children: [],
            },
            {
                path: "user",
                icon: <UserOutlined />,
                name: "用户管理",
                visible: true,
                children: [
                    {
                        path: "activeUser",
                        icon: null,
                        element: <Home/>,
                        name: "活跃用户",
                        visible: true,
                    },
                    {
                        path: "deletedUser",
                        icon: null,
                        element: <Home/>,
                        name: "已删除的用户",
                        visible: true,
                    },
                ],
            },
            {
                path: "group",
                icon: <TeamOutlined />,
                name: "组织和个体",
                visible: true,
                children: [
                    {
                        path: "groupManage",
                        icon: null,
                        element: <Home/>,
                        name: "组织管理",
                        visible: true,
                    },
                    {
                        path: "teacherManage",
                        icon: null,
                        element: <Home/>,
                        name: "教师管理",
                        visible: true,
                    },
                    {
                        path: "studentManage",
                        icon: null,
                        element: <Home/>,
                        name: "学生管理",
                        visible: true,
                    },
                ],
            },
            {
                path: "setting",
                icon: <SettingOutlined />,
                name: "设置",
                visible: true,
                children: [
                    {
                        path: "announcementManage",
                        icon: null,
                        element: <Home/>,
                        name: "公告设置",
                        visible: true,
                    },
                ],
            },
        ],
    },
];

function parseJson2Router(items) {
    let routerArray = [];
    for (const item of items) {
        if (item.children.length === 0) {
            routerArray.push(<Route key={item.path} path={item.path} element={item.element}/> );
        } else {
            let tmp = [];
            for (const childrenKey of item.children) {
                if (childrenKey.children.length === 0) {
                    tmp.push(<Route key={childrenKey.path} path={childrenKey.path} element={childrenKey.element}/>);
                } else {
                    let tmp2 = [];
                    for (const childrenKeyElement of childrenKey.children) {
                        tmp2.push(<Route key={childrenKeyElement.path} path={childrenKeyElement.path} element={childrenKeyElement.element}/>);
                    }
                    tmp.push(<Route key={childrenKey.path} path={item.path}>{tmp2}</Route>)
                }
            }
            routerArray.push(<Route key={item.path} path={item.path} element={item.element}>{tmp}</Route>);
        }
    }
    return <BrowserRouter><Routes>{routerArray}</Routes></BrowserRouter>;
}

export const getRouterComponent = () => {
    return parseJson2Router(routers);
}
