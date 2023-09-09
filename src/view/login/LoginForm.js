import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Field, Form} from "react-final-form";
import {classNames} from "primereact/utils";
import {post} from "../../api/Api";
import {EmailOutlined, KeyOutlined} from "@mui/icons-material";
import {rsaEncrypt} from "../../util/Rsa";

const loginTitle = {
    fontSize: "2rem",
    fontWeight: "700",
    fontFamily: "PingFang-SC-Bold",
}

export const LoginForm = () => {
    function login(data) {
        let form = new FormData();
        form.append("email", data.email);
        form.append("password", rsaEncrypt(data.password));
        post("/login", form)
            .then((r) => {
                console.log(r);
            })
            .catch((e) => {
                console.log(e);
            });
    }
    const validate = (data) => {
        let err = {};
        if (!data.email || !(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(data.email))) {
            err.email = "电子邮箱不符合规范";
        }
        if (!data.password || !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9~!@#$%^&*]{8,16}$/.test(data.password)) {
            err.password = "必须包含大小写和数字, 长度在 8 到 16 个字符之间，可以使用：~!@#%^&*";
        }
        return err;
    }

    const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
    const getFormErrMsg = (meta) => {
        return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
    }

    return (
        <div>
            <div style={loginTitle} className="text-primary">登&nbsp;&nbsp;&nbsp;&nbsp;录</div>
            <div style={{width: "20rem", margin: "0 auto"}}>
                <Form onSubmit={login} initialValues={{email: "", password: ""}} validate={validate} render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="email" render={({input, meta}) => (
                            <div className="mt-3 field">
                                <span className="p-input-icon-left">
                                    <EmailOutlined />
                                    <InputText placeholder="电子邮箱" {...input} className={classNames({'p-invalid': isFormFieldValid(meta)})} type="email" id="email" style={{width: "20rem"}}/>
                                </span>
                                {getFormErrMsg(meta)}
                            </div>
                        )}></Field>
                        <Field name="password" render={({input, meta}) => (
                            <div className="mt-3">
                                <span className="p-input-icon-left">
                                    <KeyOutlined />
                                    <InputText placeholder="密码" {...input} className={classNames({'p-invalid': isFormFieldValid(meta)})} type="password" id="password" style={{width: "20rem"}}/>
                                </span>
                                {getFormErrMsg(meta)}
                            </div>
                        )}></Field>
                        <div style={{margin: "0 auto", width: "20rem"}} className="grid">
                            <div style={{textAlign: "left"}} className="col-6">
                                <a href="/" style={{textDecoration: "none"}} className="text-color-secondary">
                                    忘记密码
                                </a>
                            </div>
                            <div style={{textAlign: "right"}} className="col-6">
                                <a href="/" style={{textDecoration: "none"}} className="text-primary">
                                    注册新账号
                                </a>
                            </div>
                        </div>
                        <div className="mt-5">
                            <Button label="登录" type="submit" rounded style={{width: "20rem"}} />
                        </div>
                    </form>
                )}>
                </Form>
            </div>
        </div>
    );
}
