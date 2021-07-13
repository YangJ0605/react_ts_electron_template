import { Button, message } from 'antd'
import React, { memo } from 'react'

export default memo(function HomePage() {
  return (
    <div>
      <Button onClick={() => message.info('info----')}>+++++++2</Button>
    </div>
  )
})
