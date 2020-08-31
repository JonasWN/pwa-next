import React from 'react'
import Layout from '../components/Layout'
import { User } from '../components/user'

function HomePage() {
  return (
    <Layout title="Home">
      <main>
        <h1>Home Page</h1>
        <User />
      </main>
    </Layout>
  )
}

export default HomePage
