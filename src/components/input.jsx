  import React, { useContext, useState } from "react";
import { RiRefreshLine } from "react-icons/ri";
import { PasswordContext } from "../context/passwordContext";

export default function input() {
  const { password, createPassword } = useContext(PasswordContext);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="input-field flex border-1 rounded-4 mt-5 w-[800px] p-5 h-[100px] border-black items-center gap-2">
      <input
        type="text"
        className="border-none text-xl font-semibold outline-none flex-grow"
        placeholder="Password"
        value={password}
        readOnly
      />

      <button
        className="px-4 py-2 hover:bg-gray-100 transition"
        onClick={createPassword}
      >
        <RiRefreshLine className="text-xl" />
      </button>

      <button
        className="bg-[#D71340] text-white font-semibold px-4 py-2 rounded hover:bg-red-500 transition shadow-sm"
        onClick={handleCopy}
      >
        {copied ? "Copied password" : "Copy password"}
      </button>
    </div>
  );
}
