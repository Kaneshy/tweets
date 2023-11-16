"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion"

function Part1(id) {

    const b = id.value
    const [modifyB, setmodifyB] = useState(false)
    const router = useRouter()

    const handleDelete = async () => {
        const response = await fetch(`/api/tweets/${b}`, {
          method: 'DELETE',
        })
        router.push('/')
        router.refresh()
        return response
      }

    const handleEdit = async () => {
        router.push(`/edit/${b}`)
      }


    return (
        <div className='flex flex-col gap-2 p-2  justify-end absolute top-0 right-0' >
            <motion.button  
            onClick={() => setmodifyB(!modifyB)}
            className='flex justify-end'
            >
                <img  src="https://i.ibb.co/NStwfcV/menu.png" alt="menu" border="0"/> 
            </motion.button>
            {modifyB && (
                <div className='flex p-2 flex-col gap-1 rounded-xl bg-black text-white handleModify ' >
                    <button className='btnTweet p-2 rounded-xl' onClick={handleDelete} >Delete tweet</button>
                    <button className='btnTweet p-2 rounded-xl' onClick={handleEdit} >Edit tweet</button>
                </div>
            )}
        </div>
    )
}

export default Part1