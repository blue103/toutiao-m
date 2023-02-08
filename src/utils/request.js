import axios from 'axios'

const request = axios.create({
  // 配置基础路径
  baseURL: 'http://ttapi.research.itcast.cn/'
})

export default request
