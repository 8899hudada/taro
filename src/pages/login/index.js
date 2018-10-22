import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtAvatar, AtButton, AtInput } from 'taro-ui'
import { login } from '../../service/login'

// import PropTypes from 'prop-types';
import './index.less'

class Login extends Component {

  config = {
    navigationBarTitleText: '极案',
    navigationBarBackgroundColor: block,
    navigationBarTextStyle: '#fff'
  }

  state = {
    phone: '',
    password: ''
  }

  componentDidMount () {}

  handleLogin () {
    // 获取登陆账号 密码 并校验
    const { phone, password } = this.state
    login({phone, password}).then( res => {
      console.log(res.data.data)
      Taro.redirectTo({
        url: '/pages/home/index'
      })
    })
  }

  handlePhoneChange (value) {
    console.log(value)
  }

  handlePasswordChange (value) {
    console.log(value)
  }

  render () {
    const {phone, password, loading} = this.state
    return (
      <View>
        <View className='avatar-warp'>
          <AtAvatar image='http://pics.sc.chinaz.com/Files/pic/icons128/7133/b9.png' className='avatar' size='small'></AtAvatar>
        </View>
        <View>
          <AtInput
              name='phone'
              type='text'
              placeholder='请输入手机密码'
              value={phone}
              onChange={this.handlePhoneChange.bind(this)}
            />
          <AtInput
            name='password'
            type='text'
            placeholder='输入登陆密码'
            value={password}
            onChange={this.handlePasswordChange.bind(this)}
          />
          <AtButton loading={loading} type='primary' onClick={this.handleLogin.bind(this)}>登陆</AtButton>
        </View>
      </View>
    )
  }
}

export default Login
