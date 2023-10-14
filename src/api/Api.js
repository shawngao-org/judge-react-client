import axios from "axios";

axios.defaults.timeout = 100000;
axios.defaults.baseURL = window.reactGlobalConfig.backend;

axios.interceptors.request.use((c) => {
    // request interceptors handle
    return c;
}, (e) => {
    return Promise.reject(e);
});

axios.interceptors.response.use((r) => {
    // response interceptors handle
    if (!(r.status) || r.status !== 200) {
        return;
    }
    return r;
}, (e) => {
    return Promise.resolve(e);
});

export function msg(msgs, status = "success", msg = "") {
    if (msgs.current) {
        msgs.current.clear();
    }
    if (status === "success") {
        msgs.current.show([
            {
                severity: 'success',
                detail: msg,
                sticky: true,
                closable: false
            }
        ]);
    } else {
        msgs.current.show([
            {
                severity: 'error',
                detail: msg,
                sticky: true,
                closable: true
            }
        ]);
    }
    setTimeout(() => {
        if (!msgs.current) {
            return;
        }
        msgs.current.clear();
    }, 5000);
}

export function get(u, p = {}) {
    return axios.get(u, p);
}

export function post(u, o, p = {}) {
    return axios.post(u, o, p);
}
