import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';

// 创建axios实例
const instance: AxiosInstance = axios.create({
  baseURL: '',
  timeout: 120 * 1000, // 超时
  withCredentials: true
});

// 接口返回数据接口类型
export interface ResponseData {
  code: number,
  data: any,
  msg: string
}

// 扩展请求参数接口
export interface RequestConfig extends AxiosRequestConfig {
  successNotice?: boolean,
  errNotice?: boolean,
  appid?: number,
  path?: string
}


// 请求错误处理
const err = (error: any) => {
  if (error.message.includes('timeout')) {
    ElMessage({
      message: '请求超时，请刷新网页重试',
      type: 'error'
    });
  }
  if (error.response) {
    const data = error.response.data;
    const token = '';
    if (error.response.status === 403) {
      ElMessage({
        message: 'Forbidden',
        type: 'error'
      });
    }
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      ElMessage({
        message: 'Unauthorized',
        type: 'error'
      });
      if (token) {
        // store.dispatch('Logout').then(() => {
        // 	setTimeout(() => {
        // 		window.location.reload();
        // 	}, 1500);
        // });
      }
    }
  }
  return Promise.reject(error);
};


// 请求拦截
instance.interceptors.request.use((config: RequestConfig) => {
  const token = '';
  const uid = ''; // 用户id
  config.headers!['Access-Token'] = token;
  return config;
}, err);

// 响应拦截
instance.interceptors.response.use((response: AxiosResponse) => {
  const config: RequestConfig = response.config || '';
  const code = Number(response.data.code);
  if(response.data) {
    if (code === 0) {
      if (config && config.successNotice) {
        ElMessage({
          message: response.data.msg,
          type: 'success'
        });
      }
    } else {
      ElMessage({
        message: response.data.msg || '接口报错!',
        type: 'warning'
      });
    }
    return response.data || {};
  } else {
    return Promise.reject(response);
  }
  
}, err);

const request = async (config: RequestConfig): Promise<ResponseData> => {
  const { data } = await instance(config);

  return data;
};

const get = function (url: string, params: object, errNotice = true, successNotice = false){
	return request({
		url,
		method: 'get',
		params,
		errNotice,
		successNotice
	});
};

const post = function (url: string, params: object, errNotice = true, successNotice = false) {
	return request({
		url,
		method: 'post',
		data: params,
		headers: {
			'Content-Type': 'application/json;charset=UTF-8'
		},
		errNotice,
		successNotice
	});
};


export { request, get, post };