import Link from "next/link"
import '@/styles/home.css'

function NavBar() {
    return (
        <nav className="Navbar"  >
            <div className="container mx-auto flex justify-between items-center p-3 " >
                <Link className=" font-bold"  href={'/'} >
                    <h3>OWL</h3>
                </Link>
                <ul className="flex text-lg" >
                    <li className="flex flex-row gap-4 " >
                        <Link className="text-slate-300" href='/api/tweets' >
                            api tweets
                        </Link>
                        <Link href='/new' >
                            <div>
                                <p className=" border border-white-50 px-2 rounded-xl flex hover:bg-white hover:text-gray-500  " > New Post +</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar