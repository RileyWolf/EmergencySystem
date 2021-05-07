import axios from 'axios'

export function post(url, paramObj) {
    return new Promise((resolve) => {
        axios.post(url, paramObj).then(
            response => {
                resolve(response.data);
            },
            err => {
                console.log(err.response)
                resolve(err.response.data);
                // resolve(err.response.request.response);
            }
        );
    });
}

export function get(url) {
    return new Promise((resolve) => {
        axios.get(url).then(
            response => {
                resolve(response.data);
            },
            err => {
                console.log(err.response)
                resolve(err.response.data);
                // resolve(err.response.request.response);
            }
        );
    });
}

export function put(url, paramObj) {
    return new Promise((resolve) => {
        axios.put(url, paramObj).then(
            response => {
                resolve(response.data);
            },
            err => {
                console.log(err.response)
                resolve(err.response.data);
            }
        );
    });
}

export function del(url, paramObj) {
    return new Promise((resolve) => {
        axios.delete(url, { data: paramObj }).then(
            response => {
                resolve(response.data);
            },
            err => {
                console.log(err.response)
                resolve(err.response.data);
                // resolve(err.response.request.response);
            }
        );
    });
}



export const getApiurl = () => get('/api') // 登入使用者