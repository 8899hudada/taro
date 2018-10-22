import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

import Office from '../office/index'
import Address from '../address/index'
import Message from '../message/index'
import Me from '../me/index'

import './index.less'

const tabList = [
  { title: '办公', iconType: 'video' },
  { title: '消息', iconType: 'calendar' },
  { title: '通讯录', iconType: 'user' },
  { title: '我的', iconType: 'user' }
]

class Home extends Component {

  config = {
    navigationBarTitleText: '办公',
    navigationBarBackgroundColor: block,
    navigationBarTextStyle: '#fff'
  }

  state = {
    tab: 0 // 默认是办公页面
  }

  setCurrentInfo (index, title) {
    this.setState({
      tab: index
    })
    wx.setNavigationBarTitle({
      title: title
    })
  }

  showTab(index) {
    switch (index) {
        case 0:
          this.setCurrentInfo(index, '办公')
          break;
        case 1:
          this.setCurrentInfo(index, '消息')
          break;
        case 2:
          this.setCurrentInfo(index, '通讯录')
          break;
        case 3:
          this.setCurrentInfo(index, '我的')
          break;
        default:
          break;
    }
  }

  render () {
    const { tab } = this.state
    return (
      <View>
        { tab === 0 &&  <Office />}
        { tab === 1 &&  <Address />}
        { tab === 2 &&  <Message />}
        { tab === 3 &&  <Me />}
        <AtTabBar fixed tabList={tabList} onClick={this.showTab} current={tab} />
      </View>
    )
  }
}

export default Home
