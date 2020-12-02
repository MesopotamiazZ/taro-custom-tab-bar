import React from 'react'
import { Provider } from 'react-redux'
import GetNavbarHeight from './components/GetNavbarHeight'

import configStore from './store'


import './app.scss'
import './assets/css/public.scss'

const store = configStore()

// class App extends Component {
//   componentDidMount() { }

//   componentDidShow() { }

//   componentDidHide() { }

//   componentDidCatchError() { }

//   // 在 App 类中的 render() 函数没有实际作用
//   // 请勿修改此函数
//   render() {
//     return (
//       <Provider store={store}>
//         {this.props.children}
//       </Provider>
//     )
//   }
// }

const App = (props) => {

  return (
    <Provider store={store}>
      <GetNavbarHeight>
        {props.children}
      </GetNavbarHeight>
    </Provider>
  )
}

export default App
