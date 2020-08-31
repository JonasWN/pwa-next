import React from 'react'
import styled from 'styled-components'
import ItemList from '../components/itemList'

export const User = () => {
  return (
    <StyledUser>
      <input placeholder="username"></input>
      <ItemList />
    </StyledUser>
  )
}

const StyledUser = styled.section``
