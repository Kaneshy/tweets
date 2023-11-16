'use client'
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import '@/styles/home.css'

const callFetchB = async (username, email, tweet, imagen, id, router) => {
    try {
        const response = await fetch(`/api/tweets/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ username, email, tweet, imagen }),
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
    const [f5content, setf5content] = useState('')

    useEffect(() => {
        fetch(`/api/tweets/${params.id}`)
            .then((response) => response.json())
            .then((data) => {
                setf2content(data.username)
                setf3content(data.email)
                setf4content(data.tweet)
                setf5content(data.imagen)
            })
    }, [])

    const onsubmitFA = async (e) => {
        e.preventDefault()
        const tweetsA = await callFetchB(f2content, f3content, f4content, f5content, params.id, router)
    }

    return (
        <section className="h-screen flex justify-center items-center " >
            <form onSubmit={onsubmitFA} className="flex rounded text-black flex-col gap-2 p-6 w-8/12 bg-slate-300 formmedia"  >

                <h1 className="flex items-center justify-center " >EDIT POST</h1>

                <label className="text-neutral-500" htmlFor="username">Autor</label>
                <input id="username"
                    type="text"
                    onChange={(e) => setf2content(e.target.value)}
                    placeholder="Natalia"
                    value={f2content}
                />

                <label className="text-neutral-500" htmlFor="email">Categorie</label>
                <input id="email"
                    type="textarea"
                    onChange={(e) => setf3content(e.target.value)}
                    placeholder="natalia@gmail.com"
                    value={f3content}
                />

                <label className="text-neutral-500" htmlFor="tweet">Description</label>
                <textarea id="tweet"
                    className="text-area"
                    type="text"
                    onChange={(e) => setf4content(e.target.value)}
                    placeholder="insert tweet"
                    value={f4content}
                />

                <label className="text-neutral-500" htmlFor="tweet">Imagen</label>
                <textarea id="tweet"
                    type="text"
                    onChange={(e) => setf5content(e.target.value)}
                    placeholder="insert tweet"
                    value={f5content}
                />
                <button className="p-3  bg-indigo-400" type="submit" >EDIT</button>
            </form>
        </section>
    )
}

export default EditPage