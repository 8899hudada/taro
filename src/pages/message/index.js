import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import BottomTab from '../../components/BottomTab/index'

import './index.less'

class Message extends Component {

  config = {
    navigationBarTitleText: '消息',
    navigationBarBackgroundColor: block,
    navigationBarTextStyle: 'black'
  }

  render () {
    return (
      <View>
        <View><Text>Hello, message</Text></View>
        <BottomTab tab={1} />
      </View>
    )
  }
}

export default Message