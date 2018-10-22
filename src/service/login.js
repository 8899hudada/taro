import Taro from '@tarojs/taro'
import API_URL from '../constants/api-url'
import baseOption from './baseOption'

const { LOGIN } = API_URL.login

// 登陆
const login = (data) => {
  return baseOption(LOGIN(), data)
}

export {
  login
}
