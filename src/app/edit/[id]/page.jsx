'use client'
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import '@/styles/home.css'

const callFetchB = async (username, email, tweet, id, router) => {
    try {
        const response = await fetch(`/api/tweets/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ username, email, tweet }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.log('error')
    }
    router.refresh()
    router.push('/')
}

function EditPage({ params }) {
    const router = useRouter()
    const [f2content, setf2content] = useState('')
    const [f3content, setf3content] = useState('')
    const [f4content, setf4content] = useState('')

    useEffect(() => {
        fetch(`/api/tweets/${params.id}`)
            .then((response) => response.json())
            .then((data) => {
                setf2content(data.username)
                setf3content(data.email)
                setf4content(data.tweet)
            })
    }, [])

    const onsubmitFA = async (e) => {
        e.preventDefault()
        const tweetsA = await callFetchB(f2content, f3content, f4content, params.id, router)
    }

    return (
        <section className="h-screen flex justify-center items-center " >
            <form onSubmit={onsubmitFA} className="flex rounded text-black flex-col gap-2 p-6 w-8/12 bg-slate-300 formmedia"  >

                <h1 className="flex items-center justify-center " >EDIT POST</h1>

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
                <button className="p-3  bg-indigo-400" type="submit" >EDIT</button>
            </form>
        </section>
    )
}

export default EditPage