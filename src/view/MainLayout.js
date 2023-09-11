import {Outlet} from "react-router-dom";
import { Layout } from 'antd';
import {Aside} from "./component/Aside";
import {HeaderMenu} from "./component/HeaderMenu";
import {FooterComponent} from "./component/FooterComponent";

const {Content} = Layout;
export const MainLayout = () => {
    return (
        <Layout hasSider>
            <Aside></Aside>
            <Layout className="site-layout" style={{marginLeft: 200}}>
                <HeaderMenu></HeaderMenu>
                <Content style={{margin: "24px, 16px, 0", overflow: "initial"}}>
                    <Outlet></Outlet>
                </Content>
                <FooterComponent></FooterComponent>
            </Layout>
        </Layout>
    );
}
