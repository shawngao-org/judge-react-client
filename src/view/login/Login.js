import {LoginForm} from "./LoginForm";
import {Col, Row} from "antd";

const loginStyle = {
    background: "#f7f7f7",
    height: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};
const loginContentStyle = {
    position: "absolute",
    left: "50%",
    top: "45%",
    transform: `translate(-50%, -50%)`,
    width: "60rem",
    height: "28rem",
    background: "#fff",
    borderRadius: "1rem",
};
const loginLeftBlk = {
    // backgroundImage: `url("assets/login-img-1.jpg")`,
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};
const loginTitle = {
    fontSize: "2rem",
    fontWeight: "700",
    fontFamily: "PingFang-SC-Bold",
};

export const Login = () => {
    return (
        <div style={loginStyle} className={"flex justify-content-center"}>
            <div style={loginContentStyle}>
                <div style={{height: "100%"}}>
                    <Row>
                        <Col span={12}>
                            <div style={loginLeftBlk}>
                                <img src="/assets/login-img-1.jpg" alt="With pictures" style={{borderRadius: "1rem", width: "100%"}}></img>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div style={{paddingTop: "8%"}}>
                                <div style={loginTitle} className="text-primary">登&nbsp;&nbsp;&nbsp;&nbsp;录</div>
                                <div style={{width: "20rem", margin: "0 auto"}}>
                                    <LoginForm></LoginForm>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
