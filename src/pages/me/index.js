import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import BottomTab from '../../components/BottomTab/index'

import './index.less'

class Me extends Component {

  config = {
    navigationBarTitleText: '我的',
    navigationBarBackgroundColor: block,
    navigationBarTextStyle: 'black'
  }

  render () {
    return (
      <View>
        <View><Text>Hello, address</Text></View>
        <BottomTab tab={3} />
      </View>
    )
  }
}

export default Me