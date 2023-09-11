import {Header} from "antd/es/layout/layout";

export const HeaderMenu = () => {
    return (
        <Header style={{
            padding: 0,
            background: "#fff",
            zIndex: 1,
            position: "sticky",
            top: 0,
            display: "flex",
            alignItems: "center",
        }}></Header>
    );
}