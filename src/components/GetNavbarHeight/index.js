import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { getSystemInfo } from '@tarojs/taro'
import { useDispatch } from 'react-redux'

import { SETNAVHEIGHT } from '../../constants/global'

const GetNavbarHeight = (props) => {
  const dispatch = useDispatch();

  const init = async () => {
    const navbarHeight = await (await getSystemInfo()).statusBarHeight
    dispatch({
      type: SETNAVHEIGHT,
      value: navbarHeight,
    })
  };

  useEffect(() => {
    init()
  }, [])

  return (
    <View>
      {props.children}
    </View>
  )
}

export default GetNavbarHeight
