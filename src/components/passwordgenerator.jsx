 
import React, { useContext } from "react";
import Input from "./input";
import Progressbar from "./progressbar";
import PasswordStrenth from "./passwordStrenth";
import { PasswordContext } from "../context/passwordContext";

export default function passwordgenerator() {
  const { password } = useContext(PasswordContext);

  return (
    <div className="container-text flex text-black flex-col items-center justify-center">
      <h1 className="text-4xl mt-5 pb-4 text-center">
        Instantly generate a secure, random password
        <br></br>
        password with the LastPass online tool
      </h1>
      <p className="text-xl text-center mb-6">
        Use our online password generator tool to instantly create a secure, random <br>
        </br> password.
      </p>

      <Input />
      <PasswordStrenth/>
      <Progressbar />
    </div>
  );
}
