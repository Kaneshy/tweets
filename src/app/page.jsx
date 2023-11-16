import { prisma } from '@/libs/prisma.js'
import Link from 'next/link'
import '@/styles/home.css'

const loadTweets = async () => {
  const tweetsDB = await prisma.Tweet.findMany()
  return tweetsDB
}

export const dynamic = 'force-dynamic'

const Home = async () => {

  const tweets = await loadTweets()

  return (
    <section className=' bodyA  min-h-screen'>
      <div className='tweetP' >
        {tweets.reverse().map((x) => {
          return (
            <Link href={`/tweets/${x.id}`} key={x.id}
              className='tweet' >
              <div className='flex flex-row justify-between' >
                <h2>Username: {x.username}</h2>
                <p>{x.email}</p>
              </div>
              <div className='p-2' >
                <h2>Post: </h2>
                <p className='p-3 bgtext rounded-xl' >{x.tweet}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Home