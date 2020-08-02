import React from 'react'
import { MasonryPost } from './'

export default function PostMasonry ({posts, columns, tagsOnTop}) {
  return (
    <section className="masonry" style={{gridTemplateColumms: `repeat(${columns}, minmax(275px, 1fr))`}}>
      { posts.map((posts, index) =>
        <MasonryPost {...{posts, index, tagsOnTop, key: index}} />
      )}
    </section>
  )
}
