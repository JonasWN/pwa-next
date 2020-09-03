import React, { useState } from 'react'
import styled from 'styled-components'
import ItemList from '../components/itemList'

export const User = () => {
  const [userName, setUserName] = useState('')

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      setUserName(e.target.value)
    }
  }

  return (
    <StyledUser>
      <h1>{userName} is following</h1>
      <input
        placeholder="type twitch username"
        type="text"
        onKeyDown={handleKeyDown}
      ></input>
      <ItemList userName={userName} />
    </StyledUser>
  )
}

const StyledUser = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;

  h1 {
    text-align: center;
    margin-top: 10vh;
  }

  input {
    margin: 10vh auto;
    width: 300px;
  }
`
