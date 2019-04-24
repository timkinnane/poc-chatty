import React, { useState } from 'react'
import { render, Color } from 'ink'
import { Box } from 'ink-box'
import { TextInput } from 'ink-text-input'

export const MessagesBox = () => {
  const [messages, setMessages] = useState([{ usr: 'system', msg: 'hello world' }])
  return (
    <Box>
      {
        messages.map(({ usr, msg }, index) => {
          return (
            <Box key={index}>
              <Color green>@{ usr }</Color> | { msg }
            </Box>
          )
        })
      }
    </Box>
  )
}

export const MessageBox = () => {
  return (
    <Box borderStyle='round' borderColor='cyan' float='left' padding={1}>

    </Box>
  )
}

export const Client = () => {
  const [messages, setMessages] = useState([{ usr: 'system', msg: 'hello world' }])
  
}

render(<Client />)
