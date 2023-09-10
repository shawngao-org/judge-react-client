import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Field, Form} from "react-final-form";
import {classNames} from "primereact/utils";
import {msg} from "../../api/Api";
import {EmailOutlined, KeyOutlined} from "@mui/icons-material";
import {loginApi} from "../../api/ApiRouter";
import {useRef} from "react";
import {Messages} from "primereact/messages";
import {emailErr, emailExp, passwordErr, passwordExp} from "../../util/ValidExp";

export const LoginForm = () => {
    const msgs = useRef();
    async function login(data) {
        const {response: res, data: dat} = await loginApi(data);
        if (dat) {
            localStorage.setItem("token", dat.token);
            msg(msgs, "success", dat.message);
        } else {
            console.log(res);
            msg(msgs, "error", res.data.exception);
        }
    }
    const validate = (data) => {
        let err = {};
        if (!data.email || !(emailExp.test(data.email))) {
            err.email = emailErr;
        }
        if (!data.password || !(passwordExp.test(data.password))) {
            err.password = passwordErr;
        }
        return err;
    }
    const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
    const getFormErrMsg = (meta) => {
        return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
    }
    return (
        <div>
            <Messages ref={msgs}></Messages>
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
    );
}
