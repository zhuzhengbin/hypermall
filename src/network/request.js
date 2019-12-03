import originAxios from 'axios'

export default function axios(option) {
  return new Promise((resolve, reject) => {
    const instance = originAxios.create({
      baseURL: '/api',
      timeout: 5000,
      headers: ''
    });

    // 配置请求拦截器
    instance.interceptors.request.use(config => {
      console.log('来到了request拦截success中');
      return config;
    }, err => {
      return err;
    });

    instance.interceptors.response.use(response => {
      return response.data
    }, err => {
      return err
    })


    instance(option).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })

  })
}