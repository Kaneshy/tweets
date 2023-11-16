import { useRouter } from 'next/navigation'

export function callRouterId(id) {
    router.push(`/edit/${id}`)
}

export function callrouter(id) {

    const router = useRouter()

    const routerCall = () => {
        router.push('/')
        router.refresh()
    }
}
