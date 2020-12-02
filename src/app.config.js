export default {
  pages: [
    'pages/index/index',
    'pages/personal/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom',
  },
  tabBar: {
    color: '#666',
    selectedColor: '#ed6c00',
    backgroundColor: '#fafafa',
    borderStyle: 'black',
    custom: true,
    list: [{
      pagePath: 'pages/index/index',
      // iconPath: 'assets/home.png',
      // selectedIconPath: 'assets/home-active.png',
      text: '主页'
    }, {
      pagePath: 'pages/personal/index',
      // iconPath: 'assets/user.png',
      // selectedIconPath: 'assets/user-active.png',
      text: '我的'
    }]
  }
}
