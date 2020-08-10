import React from 'react'
import { PostMasonry, MasonryPost, PostGrid } from '../components/common/'
import trending from '../assets/mocks/trending'
import featured from '../assets/mocks/featured'

const trendingConfig = {
  1: {
    gridArea: '1 / 2 / 3 / 3'
  }
}

const featuredConfig = {
  0: {
    gridArea: '1 / 1 / 2 / 3',
    height: '300px'
  },
  1: {
    height: '300px'
  },
  3: {
    height: '630px',
    marginLeft: '30px',
    width: '630px'
  }
}

const mergeStyles = function (posts, config) {
  posts.forEach((post, index) => {
    post.style = config[index]
    post.author = 'Bryan Roof'
    post.description = "Bryan is a Full Stack Web Developer who enjoys local sports and wanted to make a project that includes local sports."
  })
}

const recentPosts = [...trending, ...featured, ...featured]

mergeStyles(featured, featuredConfig)
mergeStyles(trending, trendingConfig)

const lastPost = featured.pop()

export default function Home () {
  return (
    <main className="home">
      <section className="container">
        <div className="row">
          <section className="featured-posts-container">
            <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
            <MasonryPost post={lastPost} tagsOnTop={true} />
          </section>
        </div>
      </section>

      <section className="container">
        <div className="row">
          <h1>Recent Posts</h1>
          <PostGrid posts={recentPosts} />
        </div>
      </section>
      <section className="container">
        <div className="row">
          <PostMasonry posts={trending} columns={3}/>
        </div>
      </section>
    </main>
  )
}