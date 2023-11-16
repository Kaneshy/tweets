'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"


const callFetch = async (username, email, tweet, router) => {
    try {
        const response = await fetch(`/api/tweets`, {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                tweet
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
    } catch (error) {
        console.log('error')
    }
    router.push('/')
    router.refresh()
}

function NewPage() {

    const router = useRouter()
    const [f2content, setf2content] = useState('')
    const [f3content, setf3content] = useState('')
    const [f4content, setf4content] = useState('')

    const onsubmitF = async (e) => {
        e.preventDefault()
        const tweetsA = await callFetch(f2content, f3content, f4content, router)
    }

    return (
        <section className="h-screen flex justify-center items-center  " >
            <form onSubmit={onsubmitF} className="flex rounded-xl text-black flex-col gap-2 p-6 w-8/12 bg-slate-300 formmedia"  >

                <h1 className="flex items-center justify-center " >NEW POST</h1>

                <label htmlFor="username">Username</label>
                <input id="username"
                    type="text"
                    onChange={(e) => setf2content(e.target.value)}
                    placeholder="Natalia"
                    value={f2content}
                />

                <label htmlFor="email">Email</label>
                <input id="email"
                    type="textarea"
                    onChange={(e) => setf3content(e.target.value)}
                    placeholder="natalia@gmail.com"
                    value={f3content}
                />

                <label htmlFor="tweet">Tweet</label>
                <textarea id="tweet"
                    type="text"
                    onChange={(e) => setf4content(e.target.value)}
                    placeholder="insert tweet"
                    value={f4content}
                />
                <button className="p-3  bg-indigo-400" type="submit" >POST</button>
            </form>
        </section>
    )
}

export default NewPage
