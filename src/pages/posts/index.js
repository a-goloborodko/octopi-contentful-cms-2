import { client } from '@/lib/contentful/client'
import PostCard from '@/components/posts/PostCard'
//import { throwIfDisallowedDynamic } from 'next/dist/server/app-render/dynamic-rendering';

const Postspage = ({ posts }) => {
  return (
    // <div>
    //   <h1 className="text-3xl font-bold">Posts Page</h1>
    // </div>
    <section className='section'>
      <div className='container'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10'>
          {posts.map((post, i) => (
            <PostCard key={post.fields.slug} post={post} />
          ))}

          {/* {posts.map((post, i) => (
            <span>{post.fields.title}</span>
          ))} */}
        </ul>
      </div>
    </section>
  );
};

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'articlePage' })

  return {
    props: {
      posts: response.items,
      revalidate: 60
    }
  }
}


export default Postspage;