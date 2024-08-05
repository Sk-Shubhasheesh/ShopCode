import { useState } from "react"

const Layout = ({children})=>{
    const [size, setSize] = useState(280)
    const [accountMenu, setAccountMenu] = useState(false)

    return (
        <div>
            <aside 
                className="bg-indigo-600 fixed top-0 left-0 h-full"
                style={{
                    width: size,
                    transition: '0.3s'
                }}
            ></aside>
            <section 
                className="bg-gray-100 h-screen"
                style={{
                    marginLeft: size,
                    transition: '0.3s'
                }}
            >
                <nav className="bg-white p-6 shadow flex items-center justify-between">
                    <div className="flex gap-4 items-center">
                        <button 
                            className="bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8"
                            onClick={()=>setSize(size === 280 ? 0 : 280)}
                        >
                            <i className="ri-menu-2-line text-xl"></i>
                        </button>
                        <h1 className="text-md font-semibold">Shopcode</h1>
                    </div>

                    <div>
                        <button className="relative">
                            <img 
                                src="/images/avt.avif" 
                                className="w-10 h-10 rounded-full" 
                                onClick={()=>setAccountMenu(!accountMenu)} 
                            />
                            {
                                accountMenu && 
                                <div className="absolute top-18 right-0 bg-white w-auto p-6 shadow-lg">
                                    <div>
                                        <h1 className="text-lg font-semibold">Er Shubhasheesh</h1>
                                        <p className="text-gray-500">example@gmail.com</p>
                                        <div className="h-px bg-gray-200 my-4" />
                                        <button>
                                            <i className="ri-logout-circle-r-line mr-2"></i>
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            }          
                        </button>
                    </div>
                </nav>
                <div className="p-6">
                   {children} 
                </div>
            </section>
        </div>
    )
}

export default Layout