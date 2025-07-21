export function Cart() {    
  return (
    <div className=" h-fit">  
      <div className="w-full max-w-7xl mx-auto  pb-4">  
        <h1 className="font-medium text-2xl text-center py-4 text-white">My cart</h1>
        <section className="flex items-center justify-between border-b-2 border-slate-800">
          <img 
            src="https://i.pinimg.com/1200x/f2/57/d9/f257d95d4f443b372de1f923bc85eaca.jpg" 
            alt="produto logo" 
            className="w-28"
          />
          <strong className="text-white">Price: 120.00</strong>
          <div className="flex items-center justify-center gap-3">
            <button className="bg-white px-2 cursor-pointer rounded text-black font-medium flex items-center justify-center">
              -
            </button>
            <strong className="text-white">2</strong>
            <button className="bg-white px-2 cursor-pointer rounded text-black font-medium flex items-center justify-center">
              +
            </button>
          </div>
          <strong className="text-white float-right">
            Subtotal: 120.00
          </strong>
        </section>
        <strong className="text-white block mt-4">Total: 120.00</strong>  {/* ← Adicione block mt-4 para espaçamento controlado */}
      </div>
    </div>
  );
}