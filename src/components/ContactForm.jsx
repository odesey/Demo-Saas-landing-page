import { useState } from "react";
import NeumorphInput from "@/components/NeumorphInput";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log({ firstName, lastName, emailAddress, message, subject });

    // const res = await fetch("/api/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     firstName,
    //     lastName,
    //     emailAddress,
    //     message,
    //     subject
    //   })
    // });

    // const { msg, success } = await res.json();
    // setError(msg);
    // setSuccess(success);

    // if (success) {
    setFirstName("");
    setLastName("");
    setEmailAddress("");
    setMessage("");
    setSubject("");
    // }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="z-10" autoComplete="off">
        <NeumorphInput
          value={firstName}
          autoComplete="given-name"
          inputType="text"
          label="First Name"
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <NeumorphInput
          value={lastName}
          autoComplete="family-name"
          inputType="text"
          label="Last Name"
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />
        <NeumorphInput
          value={emailAddress}
          autoComplete="email"
          inputType="text"
          label="Email Address"
          id="email"
          onChange={(e) => setEmailAddress(e.target.value)}
        />
        <NeumorphInput
          value={subject}
          autoComplete="off"
          inputType="text"
          label="Subject"
          id="subject"
          onChange={(e) => setSubject(e.target.value)}
        />
        <NeumorphInput
          value={message}
          autoComplete="off"
          inputType="text"
          label="Message"
          id="message"
          textArea
          onChange={(e) => setMessage(e.target.value)}
        />
        {/* <div className="relative mb-12 w-full">
          <input
            id="email"
            type="email"
            className={`w-full peer block border border-white dark:border-onyx-900 px-4 pb-1 pt-6 bg-primeBlue-50 dark:bg-onyx-800 rounded
                    focus:outline-none focus:ring-0 focus:dark:border-onyx-900 focus:border-white

          transition-all ease-in-out duration-200

          shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(40,_149,_255,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(40,_149,_255,_0.3)]
              dark:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(52,50,63,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(52,50,63,_0.3)]

              `}
            placeholder=""
          />
          <label className="text-lg dark:text-onyx-300 text-onyx-500 absolute left-4 top-4 origin-[0] -translate-y-3 scale-75 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75">
            Email
          </label>
        </div> */}

        {/* <input
          className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded border border-gray-200 focus:outline-none pl-4 mb-10"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          type="text"
          id="firstName"
          placeholder="Jane"
        /> */}
        {/* <input
          className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded border border-gray-200 focus:outline-none pl-4 mb-10"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          type="text"
          id="lastName"
          placeholder="Smith"
        />
        <input
          className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded border border-gray-200 focus:outline-none pl-4 mb-10"
          onChange={(e) => setSubject(e.target.value)}
          value={messageSubject}
          type="text"
          id="messageSubject"
          placeholder="Subject"
        />
        <input
          className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded border border-gray-200 focus:outline-none pl-4 mb-10"
          onChange={(e) => setEmailAddress(e.target.value)}
          value={emailAddress}
          type="text"
          id="emailAddress"
          placeholder="user@mail.com"
        /> */}
        {/* <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="w-full h-32 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 border border-gray-200 focus:outline-none pl-4 mb-10"
          id="message"
          placeholder="Type your message here..."
        ></textarea> */}
        <div className="justify-center flex flex-1 align-middle items-center flex-col">
          <button
            id="neumorphism-button"
            className="bg-primeBlue-50 dark:bg-onyx-900 font-bold text-xl shadow-mdbl dark:shadow-big "
          >
            SUBMIT
          </button>
          <p className="text-xl mt-4 font-bold text-red-400">Coming Soon</p>
        </div>
        {/* <button
          type="submit"
          className="w-full h-12 text-white text-base font-semibold leading-6 rounded transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm"
        >
          Send
        </button> */}
      </form>

      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e, i) => (
            <div
              key={i}
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
}
