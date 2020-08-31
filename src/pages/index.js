import React from 'react'
import Layout from '../components/Layout'
import { ItemList } from '../components/itemList'

function HomePage() {
  return (
    <Layout title="Home">
      <main>
        <h1>Home Page</h1>
        <ItemList />
      </main>
    </Layout>
  )
}

export default HomePage
