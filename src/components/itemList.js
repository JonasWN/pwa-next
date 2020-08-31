import React from 'react'
import styled from 'styled-components'
import useSWR from 'swr'

const apiBase = 'https://api.twitch.tv/helix'
const clientId = 's8kiuunc8o3dzofforg4mni87haedx'
const clientSecret = '8qqb0e05rqlecjlyhnp48ytii37uec'

const request = async () => {
  try {
    const getToken = await fetch(
      `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
      {
        method: 'POST',
      }
    )

    const response = await getToken.json()
    return response.access_token
  } catch (err) {
    console.log(err)
  }
}

const fetcher = async (...args) => {
  let authToken = await request()
  fetch(...args, {
    headers: {
      Authorization: 'Bearer ' + authToken,
      'Client-ID': clientId,
    },
  }).then(res => console.log(res.json()))
}

export const ItemList = () => {
  const { data: result } = useSWR(`${apiBase}/streams?game_id=33214`, fetcher)

  return (
    <StyleditemList>
      {result &&
        result.data.map(stream => <div key={stream.id}>{stream.id}</div>)}
    </StyleditemList>
  )
}

const StyleditemList = styled.section``
