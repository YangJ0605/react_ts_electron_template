import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import { renderRoutes } from 'react-router-config'
import routes from './router'

import { GlobalStyle } from '@src/styles/global-style'
import Title from '@src/components/title'
import { Spin } from 'antd'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div>这是 Electron + React </div>
      <Title text='text' />
      <button
        onClick={() => {
          console.log(1111)
        }}
      >
        打开viz
      </button>
      <Suspense
        fallback={
          <div className='loading-wrapper'>
            <Spin size='large' />
          </div>
        }
      >
        {renderRoutes(routes)}
      </Suspense>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
