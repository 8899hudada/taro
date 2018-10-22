import Taro, { Component } from '@tarojs/taro'

import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'
import configStore from './store'

import Login from './pages/login/index'

import './app.less'

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/login/index',
      'pages/office/index',
      'pages/message/index',
      'pages/address/index',
      'pages/me/index',
      'pages/home/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#005499',
      navigationBarTitleText: '极案',
      navigationBarTextStyle: '#fff',
      enablePullDownRefresh: true
    }
  }

  render () {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
