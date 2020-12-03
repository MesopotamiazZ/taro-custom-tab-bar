import React from 'react'
import { useDidShow, getCurrentInstance, getCurrentPages } from '@tarojs/taro';
import { View } from '@tarojs/components'
import Navbar from '../../components/Navbar'

import './style.scss'


const Personal = () => {
  useDidShow(() => {
    console.log(getCurrentPages(), getCurrentInstance())
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

