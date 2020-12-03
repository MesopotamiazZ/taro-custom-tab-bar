import React from 'react'
import { useDidShow, getCurrentInstance, getCurrentPages } from '@tarojs/taro';
import { View } from '@tarojs/components'
import Navbar from '../../components/Navbar'

import './index.scss'


const Index = () => {
  useDidShow(() => {
    console.log(getCurrentPages(), getCurrentInstance())
  })

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

