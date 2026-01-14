
 import React, { useEffect } from "react";
 import { createContext , useState } from "react";

 export const PasswordContext = createContext();
 export const PasswordProvider = ({ children }) => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [  strength  ,setStrength] = useState("");
  const [strengthPercent, setStrengthPercent] = useState(0);


  // Function to generate password
  const createPassword = () => {
    const symb = "!@#$%^&*()_+-={}[]|;:,./?~";
    const num = "1234567890";
    const alphabetsCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const low = "abcdefghijklmnopqrstuvwxyz";
    let chars = "";
    if (uppercase) chars += alphabetsCapital;
    if (lowercase) chars += low;
    if (numbers) chars += num;
    if (symbols) chars += symb;

    if (!chars) {
      alert("Please select at least one character type!");
      return;
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      pass += chars[randomIndex];
    }
    setPassword(pass);
  };
  useEffect(() =>{
createPassword();
  }, [length, uppercase, lowercase, numbers, symbols])

   useEffect(() =>{
    if(password.length < 9 ){
      setStrength("Weak");
  }
  else{
    setStrength("strong")
  }
   },[password])
   
useEffect(() => {
  const len = password.length;

  if(len <= 5) setStrengthPercent(20);
  else if(len <= 8) setStrengthPercent(40);
  else if(len <= 12) setStrengthPercent(60);
  else if(len <= 16) setStrengthPercent(80);
  else setStrengthPercent(100);
}, [password]);

  return (
    <PasswordContext.Provider
      value={{
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
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};
