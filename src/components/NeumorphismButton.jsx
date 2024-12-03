import { forwardRef } from "react";

const NeumorphismButton = forwardRef(function (props, ref) {
  // 1-800-299-5865
  // const NeumorphismButton = (props) => {
  const { label, selected, setSelected, index } = props;
  return (
    <button
      ref={ref}
      onClick={() => setSelected(index)}
      className={`
            z-10
          mx-1 md:mx-4 lg:mx-10
          px-4 py-2 rounded-[8px]
          flex items-center gap-2
          dark:text-onyx-300 text-onyx-500
          border border-white dark:border-onyx-900
          transition-all ease-in-out duration-200
          ${
            selected === index
              ? `shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(40,_149,_255,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(40,_149,_255,_0.3)]
              dark:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(52,50,63,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(52,50,63,_0.3)]`
              : "shadow-[-4px_-4px_8px_rgba(255,_255,_255,_0.8),_4px_4px_8px_rgba(40,_149,_255,_0.3)] dark:shadow-[-4px_-4px_8px_rgba(0,_0,_0,_0.4),_4px_4px_8px_rgba(0,_0,_0,_0.1)]"
          }
      `}
    >
      <p
        className={`text-sm tracking-tighter md:tracking-wide lg:text-2xl lg:p-2 min-w-16 md:min-w-24 z-12 ${
          selected === index ? "font-bold text-primeBlue-400" : "font-semibold"
        }`}
      >
        {label}
      </p>
    </button>
  );
  // };
});
export default NeumorphismButton;
