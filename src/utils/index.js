import {
  config
} from '../config'

export default {
  setTitle(title) {
    document.title = title;
    dd.biz.navigation.setTitle({
      title: title,
    });
  },

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

    headers = {
      accept: 'application/vnd.api+json',
      'x-ibm-client-secret': config.client_secret,
      'x-ibm-client-id': config.client_id
    };

    return new Promise(function (resolve, reject) {
      fetch(config.baseUrl + url, {
          method: 'GET',
          headers: headers,
        })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            reject({
              status: response.status
            })
          }
        })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject({
            status: -1
          });
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
    headers = {
      accept: 'application/vnd.api+json',
      'x-ibm-client-secret': config.client_secret,
      'x-ibm-client-id': config.client_id
    };
    return new Promise(function (resolve, reject) {
      fetch(config.baseUrl + url, {
          method: 'POST',
          headers: headers,
          body: formData,
        })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            reject({
              status: response.status
            })
          }
        })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject({
            status: -1
          });
        })
    })
  }
}
