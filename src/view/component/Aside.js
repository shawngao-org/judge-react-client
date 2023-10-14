import {Menu} from "antd";
import Sider from "antd/es/layout/Sider";
import {routers} from "../../router/Router";
import {useLocation, useNavigate} from "react-router-dom";

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

function getNav() {
    let items = [];
    let tmp = routers.filter(v => v.path === "/portal");
    for (const child of tmp[0].children) {
        if (child.children.length === 0) {
            items.push(getItem(child.name, "/portal/" + child.path, child.icon));
        } else {
            let t = [];
            for (const child1 of child.children) {
                t.push(getItem(child1.name, "/portal/" + child1.path));
            }
            items.push(getItem(child.name, "/portal/" + child.path, child.icon, t));
        }
    }
    return items;
}

export const Aside = () => {
    const nav = useNavigate();
    const location = useLocation()
    function redirectRouter(event) {
        nav(event.key);
    }
    return (
        <Sider theme="light" style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
        }}>
            <div className="logo-vertical">
                <img src="/assets/logo.svg" alt="Logo" style={{width: "23%"}}/>
            </div>
            <Menu
                mode="inline"
                theme="light"
                items={getNav()}
                onSelect={redirectRouter}
                defaultSelectedKeys={[location.pathname]}
                defaultOpenKeys={[location.pathname]}
            />
        </Sider>
    );
}
