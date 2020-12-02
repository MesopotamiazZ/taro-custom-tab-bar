import React from 'react'
import { useScope, useDidShow, getCurrentInstance, get } from '@tarojs/taro';
import { View } from '@tarojs/components'
import Navbar from '../../components/Navbar'

import './index.scss'


const Index = () => {
  // const scope = useScope();
  // console.log(scope)

  // useDidShow(() => {
  //   if (typeof scope.getTabBar === 'function' && scope.getTabBar()) {
  //     scope.getTabBar().$component.setState({
  //       // 如果不想用全局变量这里直接写index即可
  //       selected: 0,
  //     });
  //   }
  // })

  return (
    <View className='index'>
      <Navbar
        title='首页'
        bgColor='lightpink'
      // back={() => { }}
      />
      首页
    </View>
  )
}

export default Index

