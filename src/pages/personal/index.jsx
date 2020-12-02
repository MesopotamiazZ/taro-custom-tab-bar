import React from 'react'
import { useScope, useDidShow } from '@tarojs/taro';
import { View } from '@tarojs/components'
import Navbar from '../../components/Navbar'

import './style.scss'


const Personal = () => {
  const scope = useScope();

  useDidShow(() => {
    if (typeof scope.getTabBar === 'function' && scope.getTabBar()) {
      scope.getTabBar().$component.setState({
        // 如果不想用全局变量这里直接写index即可
        selected: 1,
      });
    }
  })

  return (
    <View className='personal'>
      <Navbar
        title='个人中心'
        bgColor='lightpink'
      // back={() => { }}
      />
      个人中心
    </View>
  )
}

export default Personal

