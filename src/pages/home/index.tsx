import { BsCartPlus } from "react-icons/bs";

export function Home() {
  return (
    <div>
        <main className="w-full max-w-7xl px-4 mx-auto"></main>
        <h1 className="text-2xl font-bold mb-4 mt-10 text-center">Welcome to the Home Page</h1>
        <div className="grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-5">
            <section className="w-full">
                <img src="https://i.pinimg.com/736x/69/e9/1c/69e91c687144aec896a9e0e6241afd9d.jpg" 
                alt="logo produto" />
                <p className="font-medium mt-1 mb-2">produto poster</p>
                <div className="flex items-center gap-3">
                    <strong className="text-zinc-800 text-lg">
                        R$16.00
                    </strong>
                    <button className="bg-black text-white rounded-md px-2 py-1 hover:bg-gray-600 transition-colors">
                        <BsCartPlus size={20} color="#FFF" />
                    </button>
                </div>
            </section>
            <section className="w-full">
                <img src="https://i.pinimg.com/736x/69/e9/1c/69e91c687144aec896a9e0e6241afd9d.jpg" 
                alt="logo produto" />
                <p className="font-medium mt-1 mb-2">produto poster</p>
                <div className="flex items-center gap-3">
                    <strong className="text-zinc-800 text-lg">
                        R$16.00
                    </strong>
                    <button className="bg-black text-white rounded-md px-2 py-1 hover:bg-gray-600 transition-colors">
                        <BsCartPlus size={20} color="#FFF" />
                    </button>
                </div>
            </section>
        </div>

    </div>
  )
}