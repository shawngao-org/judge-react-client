import axios from "axios";

axios.defaults.timeout = 100000;
axios.defaults.baseURL = "http://localhost:8089/";

axios.interceptors.request.use((c) => {
    // request interceptors handle
    return c;
}, (e) => {
    return Promise.reject(e);
});

axios.interceptors.response.use((r) => {
    // response interceptors handle
    return r;
}, (e) => {
    console.log(e);
});

export function get(u, p = {}) {
    return new Promise((resolve, reject) => {
        axios.get(u, {params: p})
            .then((r) => {
                // response handle
                resolve(r.data);
            }).catch((e) => {
                // error handle
                reject(e)
        });
    });
}

export function post(u, o, p = {}) {
    return new Promise((resolve, reject) => {
        axios.post(u, o, {params: p})
            .then((r) => {
                // response handle
                resolve(r.data);
            }).catch((e) => {
            // error handle
            reject(e)
        });
    });
}
