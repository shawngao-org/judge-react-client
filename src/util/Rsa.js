import {JSEncrypt} from "jsencrypt";

export function rsaEncrypt(s) {
    let tmp = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0BkQgPNgP7xY7HtpQthO
kmEqGOBx9jqUxQuRHJ6GoIIJGVFGxfK+IxVPFrkLHeww071JPPBHJDMkl2NmuuTs
pu56UweseAdOgGYIFuM3e3Kjlz9pP3EiLpBNtAgAaGL86CFlCJdcYgEt0jnxsbV6
vTXDA0v0Law9WjJoiIN5OA7Yvb96xBZvEedPU7CSWoLMD7KMeHGb+zSD3PxP5aIH
01JZp38hPS7lwo2S0ukJNxZuUSTuXdNjLEcVqC8lN3a6fCgXomDRhNEho9Vsqyup
lYBCqq9rXQ3Z2+Wkd/Ax9K281RiuB4RASUkB9mAmyLq2+qaB2GaALbR0QXutEnvC
oQIDAQAB
-----END PUBLIC KEY-----
`;
    let encrypt = new JSEncrypt();
    encrypt.setPublicKey(tmp);
    return encrypt.encrypt(s.toString());
}