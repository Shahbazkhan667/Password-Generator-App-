 import React from 'react'
 import Navbar from './components/navbar'
 import Passwordgenerator from './components/passwordgenerator'
 import { PasswordProvider } from './context/passwordContext'
 export default function App() {
   return (
     <div>
       <Navbar/>
       
        <PasswordProvider>
      <Passwordgenerator />
    </PasswordProvider> 
     </div>
   )
 }
 