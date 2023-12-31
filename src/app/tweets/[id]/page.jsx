"use client"
import '@/styles/home.css'
import Part1 from '@/components/Part1'
import { useEffect, useState } from 'react'


function TweetsHome({ params }) {


  const [tweetsB, settweetsB] = useState('')

  useEffect(() => {
    fetch(`/api/tweets/${params.id}`)
    .then((response) => response.json())
    .then((data)=> {
      settweetsB(data)
    })
  }, [])

  

  let { id, username, email, tweet, imagen } = tweetsB

  return (
    <section className=' bodyA min-h-screen' >
      <div className='tweetP' >
        <div className='tweet' >
          <div className='flex flex-row justify-start gap-4 align-middle items-center relative' >
            <h2>Autor: {username}</h2>
            <p className='text-slate-500'>{email}</p>
            <Part1 value={id} />
          </div>
          <div className='p-2' >
            <h2 className='text-slate-500'>Post: </h2>
            <p className='p-3 bgtext rounded-xl' >{tweet}</p>
          </div>
          <div className='flex align-middle justify-center' >
            <img className='img-lg' src={imagen} alt="" />
          </div>
        </div>
      </div>
    </section>

  )
}
export default TweetsHome