import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import BottomTab from '../../components/BottomTab/index'

import './index.less'

class Address extends Component {

  config = {
    navigationBarTitleText: '通讯录',
    navigationBarBackgroundColor: block,
    navigationBarTextStyle: 'black'
  }

  render () {
    return (
      <View>
        <View><Text>Hello, address</Text></View>
        <BottomTab tab={2} />
      </View>
    )
  }
}

export default Address