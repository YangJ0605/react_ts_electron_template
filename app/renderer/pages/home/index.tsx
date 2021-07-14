import { Button, message } from 'antd'
import React, { memo } from 'react'

import vizHtml from '@viz'

console.log(vizHtml)

export default memo(function HomePage() {
  return (
    <div>
      <Button onClick={() => message.info('info----')}>+++++++2</Button>
      <webview
        src={vizHtml}
        style={{
          height: 500
        }}
      />
    </div>
  )
})
