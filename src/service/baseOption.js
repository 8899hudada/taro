import Taro from '@tarojs/taro'
import API_ROOT from '../constants/api-root'
import HTTP_STATUS from '../constants/http-status'

let baseUrl = API_ROOT[process.env.ENV]

const logError = (title = '') => {
  wx.showToast({
    title: title,
    icon: 'error',
    duration: 2000
  })
}

const baseOptions = ({ url, method, contentType }, data = {}) => {

  // 这里判断token 是否登陆 没有登陆的跳转至登陆页面  根据后续的存储方式而定
  let token = ''
  // let token = getApp().globalData.token
  // if (!token) {
  //   Taro.redirectTo({
  //     url: '/pages/login/index'
  //   })
  // }

  // 这儿加一个全局的 loading 效果
  Taro.showLoading({
    title: '加载中...'
  })

  let option = {
    url: baseUrl + url,
    method: method.toUpperCase(),
    data: data,
    header: { 
      'content-type': contentType || 'application/json', 
      'token': token 
    },
    success (res) {
      switch (res.code) {
        case(HTTP_STATUS.SUCCESS):
          return res.data
          break
        case(HTTP_STATUS.CLIENT_ERROR):
          return logError('请求参数有误')
          break
        case(HTTP_STATUS.AUTHENTICATE):
          return logError('没有权限')
          break
        case(HTTP_STATUS.NOT_FOUND):
          return logError('请求资源不存在')
          break
        case(HTTP_STATUS.SERVER_ERROR):
          return logError('服务端出现了问题')
          break
        case(HTTP_STATUS.BAD_GATEWAY):
          return logError('服务端出现了问题')
          break
        case(HTTP_STATUS.GATEWAY_TIMEOUT):
          return logError('请求超时')
          break
        default:
          return logError(res.code)
          break
      }
    },
    fail (e) {
      logError('请求接口出现问题')
    },
    complete (res) {
      // 这儿可以写 全局 关闭 loading Toast 的方法
      Taro.hideLoading()
    }
  }

  return Taro.request(option)
}


export default baseOptions