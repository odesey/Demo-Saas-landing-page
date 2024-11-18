import { motion } from "framer-motion";
import { useState } from "react";

const tabs = ["Congregation", "Community", "Churches"];

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className=" p-2 md:p-4 bg-transparent flex items-center flex-wrap md:gap-2 border dark:border-onyx-800 rounded-lg justify-between border-white">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

const Chip = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 dark:hover:bg-onyx-700"
      } text-sm md:text-lg lg:text-xl transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-tr from-primeBlue-400 to-primeBlue-300 border-white rounded-md flex items-center justify-center dark:from-onyx-950 dark:to-onyx-700 lg:mx-auto border dark:border-onyx-800"
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;
