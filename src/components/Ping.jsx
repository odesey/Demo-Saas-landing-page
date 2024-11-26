import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Handle, Position } from "@xyflow/react";
import LogoWhite from "@/public/LogoWhite.svg";

const LogoPing = forwardRef(function Pinging(props, ref) {
  // const LogoPing = () => {
  return (
    <div ref={ref} className="grid place-content-center  my-36 ">
      <Ping />
    </div>
  );
  // };
});

const LOOP_DURATION = 7;

const Ping = () => {
  return (
    <div className="relative">
      <Logo />
      <Band delay={0} />
      <Band delay={LOOP_DURATION * 0.25} />
      <Band delay={LOOP_DURATION * 0.5} />
      <Band delay={LOOP_DURATION * 0.75} />
    </div>
  );
};

const Logo = () => {
  return (
    // <div className="relative flex">
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 4167 4167"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className="relative z-10 fill-white size-16"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2
      }}
      initial={{
        opacity: 0,
        scale: 0.85
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1,
        ease: "easeOut"
      }}
    >
      <path
        d="M3181.93,2083.33l158.25,356.78l430.155,-0.001c-45.826,217.796 -132.805,420.417 -252.346,599.438l-0.521,8.433l-2.034,-4.541c-309.433,460.741 -835.27,763.933 -1432.03,763.933c-952.17,0 -1724.1,-771.871 -1724.1,-1724.04c-0,-952.15 771.925,-1724.05 1724.1,-1724.05c547.104,-0 1034.64,254.891 1350.48,652.345l436.383,0c-364.321,-606.083 -1028.19,-1011.63 -1786.87,-1011.63c-1150.64,0 -2083.41,932.746 -2083.41,2083.33c0,1150.61 932.771,2083.32 2083.41,2083.32c1145.04,0 2074.19,-923.704 2083.17,-2066.6l0.084,-0l-0,-16.742l-984.734,0.012Z"
        style={{ fill: "#ffffff", fillRule: "nonzero" }}
      />
      <path
        d="M945.491,3262.48l88.654,-199.879l434.384,-979.409l614.804,-1386.16l614.796,1386.16l-0.025,0l522.737,1178.61c96.379,-92.675 181.704,-197.088 253.409,-311.263l-1100.53,-2480.98c-94.829,-16.883 -191.891,-25.662 -290.304,-25.662c-99.125,-0 -196.216,8.841 -290.562,25.783l-1100.39,2480.7c71.488,114.183 156.571,218.983 253.029,312.092"
        style={{ fill: "#ffffff", fillRule: "nonzero" }}
      />
      <path
        d="M2345.4,2261.7c-0,68.845 -26.709,131.395 -70.005,178.329l488.617,-0l-158.279,-356.838l-330.533,0c43.408,46.954 70.2,109.579 70.2,178.509"
        style={{ fill: "#ffffff", fillRule: "nonzero" }}
      />
      <path
        d="M1820.83,2261.7c-0,-68.93 26.783,-131.555 70.191,-178.509l-330.121,0l-158.241,356.838l488.175,-0c-43.304,-46.934 -70.004,-109.484 -70.004,-178.329"
        style={{ fill: "#ffffff", fillRule: "nonzero" }}
      />
      <path
        d="M2261,2261.7c0,-98.525 -79.646,-178.395 -177.887,-178.395c-98.242,-0 -177.892,79.87 -177.892,178.395c-0,97.821 78.492,177.142 175.717,178.33l4.345,-0c97.225,-1.188 175.717,-80.509 175.717,-178.33"
        style={{ fill: "#ffffff", fillRule: "nonzero" }}
      />
    </motion.svg>
    // </div>
  );
};

const Band = ({ delay }) => {
  return (
    <motion.span
      style={{
        translateX: "-50%",
        translateY: "-50%"
      }}
      initial={{
        opacity: 0,
        scale: 0.25
      }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: 1
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        times: [0, 0.5, 0.75, 1],
        duration: LOOP_DURATION,
        ease: "linear",
        delay
      }}
      className="absolute left-[50%] top-[50%] z-0 h-56 w-56 rounded-full border-[1px] border-primeBlue-200 bg-gradient-to-br from-primeBlue-500/50 to-primeBlue-500/20 shadow-xl shadow-primeBlue-500/40"
    />
  );
};

export default LogoPing;
