import React, { memo, useState } from 'react'
import { switchTab } from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import './style.scss'

export default memo(() => {

  const [tabBars] = useState([
    {
      url: '/pages/index/index',
      icon: '',
      text: '首页',
    },
    {
      url: '/pages/personal/index',
      icon: '',
      text: '我的',
    },
  ])

  const handleClick = url => {
    switchTab({ url })
  }


  return (
    <View className='tabbar-wrap'>
      {
        tabBars.map(item => {
          return (
            <View key={item.text} onClick={() => handleClick(item.url)} >
              <Text>{item.icon}</Text>
              <Text>{item.text}</Text>
            </View>
          )
        })
      }

    </View >
  )
})