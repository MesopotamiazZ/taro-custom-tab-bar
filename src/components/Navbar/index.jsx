import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from '@tarojs/components';

import './style.scss';

const Navbar = ({ title = '', bgColor = '', back = null }) => {
  const navbarRef = useRef(null);
  const { navbarHeight } = useSelector(state => state.global)

  useEffect(() => {
    // getSystemInfo().then(val => {
    navbarRef.current.style.height = 44 + navbarHeight + 'px'
    navbarRef.current.style.paddingTop = navbarHeight + 'px'
    // })
  }, [])

  return (
    <View
      className='navbar-wrap'
      style={{ background: bgColor }}
      ref={navbarRef}
    >
      {
        back ? (
          <view className='navbar-left'>
            <View className='at-icon at-icon-settings'></View>
          </view>
        ) : ''
      }
      <view className='navbar-content'>
        <Text>{title}</Text>
      </view>
      <view className='navbar-right'></view>
    </View>
  )
};

export default Navbar;
