 
import React, { useContext } from "react";
import { PasswordContext } from "../context/passwordContext";

export default function progressbar() {
  const {
    length,
    setLength,
    uppercase,
    setUppercase,
    lowercase,
    setLowercase,
    numbers,
    setNumbers,
    symbols,
    setSymbols,
    createPassword,
  } = useContext(PasswordContext);

  return (
    <div className="flex flex-col items-center justify-center mt-10 p-8 bg-[#D8E6D8]   rounded gap-20">
      <div className="flex gap-5 items-center justify-center ">
         <p className="text-black text-[18px] font-bold">Password length: {length}</p>

      {/* <input
        type="range"
        min="1"
        max="50"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        className="w-[500px] h-3 bg-gray-300 rounded-lg accent-blue-500 cursor-pointer"
      /> */}

      <input
  type="range"
  min="1"
  max="50"
  value={length}
  onChange={(e) => setLength(Number(e.target.value))}
  className="w-[500px] h-3 rounded-lg bg-black accent-black cursor-pointer"
  style={{ WebkitAppearance: "none" }} // removes default Chrome style
/>
<style>
{`
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;   /* THIS CHANGES THE THUMB COLOR */
  cursor: pointer;
}

input[type=range]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;   /* Firefox thumb color */
  cursor: pointer;
}
`}
</style>


      </div>

<div className="flex gap-10  mt-15 w-full text-[16px]   uppercase text-black font-bold uppercase  items-center justify-center "> 
     <div className="text">
          <p>
            characters used 
        </p>
      </div>
     <div className="check-boxes flex gap-12 ">
         <div className="uppercase flex gap-2 ">
              <label htmlFor='uppercase'> uppercase</label>
         <input type='checkbox' className=" w-4 accent-black "   checked={uppercase} onChange={() => setUppercase(!uppercase)}/>
         </div>
         <div className="numbers flex gap-2 ">
                    <label htmlFor=' lowercase'> lowercase </label>
         <input type='checkbox'  className=" w-4 accent-black " checked={lowercase} onChange={() => setLowercase(!lowercase)} />
                  </div>
                   <div className="numbers flex gap-2 ">
                      <label htmlFor=' numbers'> numbers </label>
         <input type='checkbox'  className=" w-4 accent-black " checked={numbers} onChange={() => setNumbers(!numbers)}  />
                 </div>
                <div className="symbols flex gap-2">
                     <label htmlFor='symbols'>  symbols</label>
        <input type='checkbox'  className=" w-4 accent-black " checked={symbols} onChange={() => setSymbols(!symbols)}  />
                 </div>
          
     </div>
  
</div>
 </div>
 
//    <button onClick={createPassword} className='bg-gray-400 p-1  mt-20 text-white capitalize  rounded border-[1px]'>
//         genrate code 
//     </button>
      /* <div className="flex gap-8 mt-4">
        <label>
          <input type="checkbox" checked={uppercase} onChange={() => setUppercase(!uppercase)} /> Uppercase
        </label>
        <label>
          <input type="checkbox" checked={lowercase} onChange={() => setLowercase(!lowercase)} /> Lowercase
        </label>
        <label>
          <input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)} /> Numbers
        </label>
        <label>
          <input type="checkbox" checked={symbols} onChange={() => setSymbols(!symbols)} /> Symbols
        </label>
      </div>

      <button
        onClick={createPassword}
        className="bg-gray-400 p-2 mt-5 text-white rounded border-[1px]"
      >
        Generate Password
      </button> */
    
  )
}
