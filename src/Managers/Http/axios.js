/* eslint-disable class-methods-use-this */
import axios from 'axios';

// import { getFileNameFromContentDisposition } from 'helpers/getFileNameFromContentDisposition';
import { RequestError } from './../../Helpers/RequestError' //'Helpers/RequestError';

import  notificationUseCases  from './../../modules/Notification/providers/notification.useCases'  //'Modules/Notification/providers';

// import { notificationUseCases } from 'modules/Notification/providers';

export class Axios {
  constructor(config) {
    this.instance = axios.create(config);
    this.cancelTokenSources = [];
  }

  mapRequestOptions(options) {
    return options;
  }

  useInterceptor(interceptor) {
    return this.instance.interceptors.request.use(interceptor, error => {
      console.error('[Axios] error', error);
      return Promise.reject(error);
    });
  }

  addToBag() {
    const axiosCancelTokenSource = axios.CancelToken.source();

    this.cancelTokenSources.push(axiosCancelTokenSource);

    return axiosCancelTokenSource.token;
  }

  disposeRequests(cancelMessage = 'Request canceled by user') {
    while (this.cancelTokenSources.length > 0) {
      const cancelSource = this.cancelTokenSources.shift();
      cancelSource.cancel(cancelMessage);
    }
  }

  async handleErrors(error) {
    const errorData = error.response ? error.response.data : error.message;

    if (!error?.config?.skipErrorHandling) {
      notificationUseCases.error(errorData, { namespace: 'ERROR' });
    }

    return Promise.reject(new RequestError(error.message, error.response));
  }

  handleRequest(promise) {
    return promise
      .then(res => {
        const { data } = res;
        if (data.error || data.error_message) {
          const error = data.error || data.error_message;
          return Promise.reject(new Error(error));
        }

        return Promise.resolve(data);
      })
      .catch(this.handleErrors);
  }

  handleFileRequest(promise) {
    return promise
      .then(res => {
        const { data } = res;

        if (data.error || data.error_message) {
          const error = data.error || data.error_message;
          return Promise.reject(new Error(error));
        }

        // const fileName = getFileNameFromContentDisposition(res);

        return Promise.resolve({ blob: data, fileName: 'fileName' });
      })
      .catch(this.handleErrors);
  }

  get(url, options = {}) {
    return this.handleRequest(
      this.instance.get(
        url,
        this.mapRequestOptions({
          ...{
            data: {},
            ...options,
            headers: {
              accept: 'application/json',
              ...options.headers
            }
          },
          cancelToken: this.addToBag()
        })
      )
    );
  }

  getFile(url, options) {
    return this.handleFileRequest(
      this.instance.get(
        url,
        this.mapRequestOptions({
          responseType: 'blob',
          cancelToken: this.addToBag(),
          ...options
        })
      )
    );
  }

  post(url, data, options) {
    return this.handleRequest(
      this.instance.post(
        url,
        data,
        this.mapRequestOptions({
          ...options,
          cancelToken: this.addToBag()
        })
      )
    );
  }

  put(url, data, options) {
    return this.handleRequest(
      this.instance.put(
        url,
        data,
        this.mapRequestOptions({
          ...options,
          cancelToken: this.addToBag()
        })
      )
    );
  }

  patch(url, data, options) {
    return this.handleRequest(
      this.instance.patch(
        url,
        data,
        this.mapRequestOptions({
          ...options,
          cancelToken: this.addToBag()
        })
      )
    );
  }

  delete(url, options) {
    return this.handleRequest(
      this.instance.delete(url, {
        ...options,
        cancelToken: this.addToBag()
      })
    );
  }
}
