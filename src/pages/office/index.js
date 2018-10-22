import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import BottomTab from '../../components/BottomTab/index'

import './index.less'

class Office extends Component {

  config = {
    navigationBarTitleText: '办公',
    navigationBarBackgroundColor: block,
    navigationBarTextStyle: 'black'
  }

  render () {
    return (
      <View>
        <View><Text>Hello, office</Text></View>
        <BottomTab tab={0} />
      </View>
    )
  }
}

export default Office
