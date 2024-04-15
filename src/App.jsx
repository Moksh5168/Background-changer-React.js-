import {useState} from"react"
function App() {
  const [color, setColor] = useState() 
  // const [count, setCount] = useState(0)

  return (
    
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={() => setColor("red")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Orange"}}>Orange</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={() => setColor("grey")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"grey"}}>Grey</button>
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>Black</button>
          <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={() => setColor("brown")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"brown"}}>Brown</button>
          <button onClick={() => setColor("aqua")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"aqua"}}>Aqua</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={() => setColor("magenta")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"magenta"}}>Magenta</button>
          
        </div>
      </div>
      </div> 
  )
}

export default App
//onclick use callback function
//onclick always want function not a return value