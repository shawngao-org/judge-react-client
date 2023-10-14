import {Field, Form} from "react-final-form";
import {useRef} from "react";
import {emailErr, emailExp, passwordErr, passwordExp} from "../../util/ValidExp";
import {useNavigate} from "react-router-dom";
import {loginApiImpl} from "../../api/ApiRouter";
import {Button, Col, Input, Row} from "antd";
import {MailOutlined, KeyOutlined} from "@ant-design/icons";

export const LoginForm = () => {
    const msgs = useRef();
    const nav = useNavigate();
    async function login(data) {
        await loginApiImpl(msgs, nav, data);
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
            <Form onSubmit={login} initialValues={{email: "", password: ""}} validate={validate} render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Field name="email" render={({input, meta}) => (
                        <div className="mt-10 field">
                                <span className="p-input-icon-left">
                                    <Input size="large" placeholder="电子邮箱" {...input} type="email" id="email" prefix={<MailOutlined />} style={{width: "20rem"}}/>
                                </span>
                            {getFormErrMsg(meta)}
                        </div>
                    )}></Field>
                    <Field name="password" render={({input, meta}) => (
                        <div className="mt-3">
                                <span className="p-input-icon-left">
                                    <Input.Password size="large" placeholder="密码" {...input} type="password" id="password" prefix={<KeyOutlined />} style={{width: "20rem"}}/>
                                </span>
                            {getFormErrMsg(meta)}
                        </div>
                    )}></Field>
                    <div style={{margin: "0 auto", width: "20rem"}}>
                        <Row>
                            <Col span={12}>
                                <div style={{textAlign: "left"}}>
                                    <a href="/" style={{textDecoration: "none"}} className="text-secondary">
                                        忘记密码
                                    </a>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div style={{textAlign: "right"}}>
                                    {/*<a href="/" style={{textDecoration: "none"}} className="text-secondary">*/}
                                    {/*    注册新账号*/}
                                    {/*</a>*/}
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="mt-7">
                        <Button type="submit" shape="round" size="large" className="ant-btn-primary" style={{width: "20rem"}} >
                            登录
                        </Button>
                    </div>
                </form>
            )}>
            </Form>
        </div>
    );
}
