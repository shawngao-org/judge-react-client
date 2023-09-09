import {LoginForm} from "./LoginForm";

const loginStyle = {
    // backgroundImage: `url("assets/login-bg.jpg")`,
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
    height: "30rem",
    background: "#fff",
    borderRadius: "1rem",
};

const loginLeftBlk = {
    // backgroundImage: `url("assets/login-img-1.jpg")`,
    width: "50%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
}

export const Login = () => {
    return (
        <div style={loginStyle} className={"flex justify-content-center"}>
            <div style={loginContentStyle}>
                <div className="grid" style={{height: "100%"}}>
                    <div className="col-6" style={loginLeftBlk}>
                        <img src="assets/login-img-1.jpg" alt="With pictures" style={{borderRadius: "1rem"}} height="100%"></img>
                    </div>
                    <div className="col-6" style={{paddingTop: "8%"}}>
                        <LoginForm></LoginForm>
                    </div>
                </div>
            </div>
        </div>
    )
}
