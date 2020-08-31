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
  return fetch(...args, {
    headers: {
      Authorization: 'Bearer ' + authToken,
      'Client-ID': clientId,
    },
  }).then(res => res.json())
}

const ItemList = () => {
  const { data: result, error } = useSWR(`${apiBase}/games/top`, fetcher)

  if (error) return <p>failed to load</p>
  if (!result) return <p>loading...</p>
  return (
    <StyleditemList>
      {result.data.map(s => {
        return (
          <React.Fragment key={s.id}>
            <img
              src={s.box_art_url
                .replace('{width}', '250')
                .replace('{height}', '350')}
              alt="game-cover"
            />
            <h3>{s.name}</h3>
          </React.Fragment>
        )
      })}
    </StyleditemList>
  )
}

const StyleditemList = styled.section``

export default ItemList
