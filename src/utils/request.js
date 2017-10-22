import 'whatwg-fetch'

export default {
    /**
     * @param url
     * @param params {}
     * @param headers
     * @returns {Promise}
     */
    get(url, params, headers) {
        if (params) {
            let paramsArray = [];
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'GET',
                headers: headers,
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        reject({ status: response.status })
                    }
                })
                .then((response) => {
                    resolve(response);
                })
                .catch((err) => {
                    reject({ status: -1 });
                })
        })
    },
    /**
     * @param url
     * @param formData
     * @param headers
     * @returns {Promise}
     */
    post(url, formData, headers) {
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'POST',
                headers: headers,
                body: formData,
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        reject({ status: response.status })
                    }
                })
                .then((response) => {
                    resolve(response);
                })
                .catch((err) => {
                    reject({ status: -1 });
                })
        })
    }
}