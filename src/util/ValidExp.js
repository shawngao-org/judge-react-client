export const emailExp = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
export const emailErr = "电子邮箱不符合规范";
export const passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9~!@#$%^&*]{8,16}$/;
export const passwordErr = "必须包含大小写和数字, 长度在 8 到 16 个字符之间，可以使用：~!@#%^&*";
