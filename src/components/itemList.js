import React from 'react'
import styled from 'styled-components'
import useSWR from 'swr'

const apiBase = 'https://api.twitch.tv/helix'
const clientId = 's8kiuunc8o3dzofforg4mni87haedx'
const clientSecret = '115hkw0a7luhysejp2fo5srcqexhpi'

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
    null
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

const ItemList = ({ userName }) => {
  const { data: result } = useSWR(`${apiBase}/users?login=${userName}`, fetcher)
  const { data: follows, error: userError } = useSWR(
    () => `${apiBase}/users/follows?from_id=${result.data[0].id}`,
    fetcher
  )
  const { data: streams, error } = useSWR(
    () =>
      `${apiBase}/streams?${follows.data
        .map(s => `user_login=${s.to_name}&`)
        .join('')}`,
    fetcher
  )

  if (error && userError) return <p>failed to load</p>
  if (!streams) return <p>loading...</p>
  return (
    <StyleditemList>
      {streams.data.map(s => {
        return (
          <li key={s.id}>
            <a href={`https://twitch.tv/${s.user_name}`}>
              <h3>{s.user_name}</h3>
              <h4>{s.title}</h4>
              <img
                src={s.thumbnail_url
                  .replace('{width}', '250')
                  .replace('{height}', '200')}
                alt="stream-thumb"
              />
              <p>viewers: {s.viewer_count}</p>
            </a>
          </li>
        )
      })}
    </StyleditemList>
  )
}

const StyleditemList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;

  h4 {
    width: 150px;
    white-space: nowrap;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    object-fit: contain;
  }
`

export default ItemList
