import { BsCartPlus } from "react-icons/bs";

export function Home() {
  return (
    <div className="min-h-screen ">
        <main className="w-full max-w-7xl px-4 mx-auto "></main>
        <div className="grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-5">
            <section className="w-full">
                <img src="https://i.pinimg.com/736x/69/e9/1c/69e91c687144aec896a9e0e6241afd9d.jpg" 
                alt="logo produto" />
                <p className="font-medium mt-1 mb-2 text-zinc-100">produto poster</p>
                <div className="flex items-center gap-3">
                    <strong className="text-zinc-100 text-lg">
                        R$16.00
                    </strong>
                    <button className="bg-white text-white rounded-md px-2 py-1 hover:bg-slate-300 transition-colors">
                        <BsCartPlus size={20} color="#000000" />
                    </button>
                </div>
            </section>
        </div>

    </div>
  )
}