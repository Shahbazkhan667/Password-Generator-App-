import React, { useContext } from 'react'
import { PasswordContext } from '../context/passwordContext'
import { RiPoliceBadgeLine } from "react-icons/ri";
export default function passwordStrenth() {
    const  {
        
         password,
        setPassword,
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
        strength, 
        setStrength,
        strengthPercent,
         setStrengthPercent

    } = useContext(PasswordContext)
  return (
    <div className='flex mt-2 items-center justify-center gap-10' >
     
      <input
        type="range"
        min="1"
        max="100"
        value={strengthPercent}
        onChange={(e) => setStrengthPercent(Number(e.target.value))}
        className={`w-[500px] h-3 bg-gray-300 rounded-lg  ${strength === "Weak" ? "accent-red-500" : "accent-blue-500"}   cursor-text` } 
      
      disabled/>
         {/* <progress value=  max="100" /> */}
<p className={`${ strength === "Weak" ? "text-red-600" : "text-black" } font-semibold flex items-center justify-center gap-1`} > { <RiPoliceBadgeLine />} { strength} 
      </p>
    </div>
  )
}
