import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import { ipcRenderer } from 'electron'

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
          ipcRenderer.send('get-root-path', '')
          ipcRenderer.on('reply-root-path', (event, arg: string) => {
            if (arg) {
              console.log('应用程序路径: ', arg)
            } else {
              console.log('获取应用程序的路径出错')
            }
          })
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
