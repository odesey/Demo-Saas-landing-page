"use client";

import { useState } from "react";
const INPUT_CLASS = `w-full peer block border border-white dark:border-onyx-900 px-4 pb-1 pt-6 bg-primeBlue-50 dark:bg-onyx-800 rounded
                focus:outline-none focus:ring-0 focus:dark:border-onyx-900 focus:border-white
                transition-all ease-in-out duration-200
                required text-xl
              shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(40,_149,_255,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(40,_149,_255,_0.3)]
              dark:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(52,50,63,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(52,50,63,_0.3)]
              `;

export default function NeumorphInput({
  autoComplete,
  id,
  label,
  inputType = "text",
  value,
  onChange,
  textArea = false
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [messageSubject, setMessageSubject] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  return (
    <div className="relative mb-12 w-full">
      {textArea ? (
        <textarea
          required
          onChange={onChange}
          value={value}
          className={INPUT_CLASS}
          id={id}
          placeholder=""
        ></textarea>
      ) : (
        <input
          required
          autoComplete={autoComplete}
          onChange={onChange}
          id={id}
          type={inputType}
          className={INPUT_CLASS}
          placeholder=""
          value={value}
        />
      )}
      <label
        htmlFor={id}
        className="text-lg dark:text-onyx-300 text-onyx-500 absolute left-4 top-4 origin-[0] -translate-y-3 scale-75 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
      >
        {label}
      </label>
    </div>
  );
}
