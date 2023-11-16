import '@/styles/home.css'
import Part1 from '@/components/Part1'


async function TweetsHome({ params }) {

  const response = await fetch(`http://localhost:3000/api/tweets/${params.id}`)
  const data = await response.json()
  let { id, username, email, tweet } = data

  return (
    <section className=' bodyA min-h-screen' >
      <div className='tweetP' >
        <div className='tweet' >
          <div className='flex flex-row justify-start gap-4 align-middle items-center relative' >
            <h2>Username: {username}</h2>
            <p>{email}</p>
            <Part1 value={id} />
          </div>
          <div className='p-2' >
            <h2>Post: </h2>
            <p className='p-3 bgtext rounded-xl' >{tweet}</p>
          </div>
        </div>
      </div>
    </section>

  )
}
export default TweetsHome