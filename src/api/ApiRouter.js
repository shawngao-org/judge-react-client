import {post} from "./Api";
import {rsaEncrypt} from "../util/Rsa";

export const userApi = {
  login: "/login",
}

export const loginApi = (o) => {
  let form = new FormData();
  form.append("email", o.email);
  form.append("password", rsaEncrypt(o.password).toString());
  return post(userApi.login, form);
}

export const loginApiImpl = async (m, n, d) => {
  const {response: r, data: dat} = await loginApi(d);
  if (dat) {
    localStorage.setItem("token", dat.token);
    msg(m, "success", dat.message);
    n("/portal/dashboard");
  } else {
    console.log(r);
    msg(m, "error", r.data.exception);
  }
}
