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
