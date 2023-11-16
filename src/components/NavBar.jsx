import Link from "next/link"

function NavBar() {
    return (
        <nav className=" text-white  bg-black w-screen "  >
            <div className="container mx-auto flex justify-between items-center p-3 " >
                <Link  href={'/'} >
                    <h3>OWL</h3>
                </Link>
                <ul className="flex gap-4 text-lg" >
                    <li>
                        <Link href='/new' >
                            <div>
                                <p className="border border-white-50 px-2 hover:scale-110 transition-transform rounded-xl" > New Post +</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className="text-slate-600" href='/api/tweets' >
                            api tweets
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default NavBar