import React from 'react'
import { PostMasonry } from '../components/common'
import trending from '../assets/mocks/trending'

export default function Home() {
  return (
    <section className="container-home">
      <div className="row">
        <h2>Trending Post</h2>
        <PostMasonry post={trending} columns={3}/>
      </div>
    </section>
  )
}