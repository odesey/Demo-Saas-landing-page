"use client";

import React, {
  forwardRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef
} from "react";
import { motion } from "framer-motion";
import { HeaderGrid } from "@/sections/HeaderGrid";
import { FeatureCard } from "@/components/FeatureCard";
import { FeatureCard2 } from "@/components/FeatureCard2";
import { useInView } from "react-intersection-observer";
import Connector, {
  SConnector,
  LineConnector,
  NarrowSConnector
} from "react-svg-connector";

import Announcements from "@/assets/bullhorn.svg";
import Bible from "@/assets/book-bible.svg";
import Broadcast from "@/assets/signal-stream.svg";
import CommunityService from "@/assets/hands-holding-heart.svg";
import Calendar from "@/assets/calendar-days.svg";
import Members from "@/assets/users.svg";
import Messages from "@/assets/messages.svg";
import Permissions from "@/assets/users-gear.svg";
import Plate from "@/assets/plate-utensils.svg";
import ChipTabs from "@/components/ChipTabs";
import { FiSend } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";
import Pinging from "@/components/Ping";

import "@xyflow/react/dist/style.css";

const ICON_CLASS = "size-10 md:size-12 inline-flex justify-center items-center";

const features = [
  {
    title: "Announcements",
    description:
      "Let the congregation, community and other churches know what is going on at your church.",
    dataAos: "fade-right",
    icon: <Announcements className={ICON_CLASS} />,
    src: Announcements
  },
  {
    title: "Broadcasts",
    description:
      "Communicate with nearby churches. Invite them to attend and support programs being offered by your church.",
    dataAos: "fade-left",
    icon: <Broadcast className={ICON_CLASS} />,
    src: Broadcast
  },
  {
    title: "Calendar",
    description:
      "Add upcoming church events to the calendar. GenesisApp will automatically sync phone calendars of all members.",
    dataAos: "fade-down",
    icon: <Calendar className={ICON_CLASS} />,
    src: Calendar
  },
  {
    title: "Community Services",
    description:
      "Let your community know how your church can be a blessing to them.",
    dataAos: "fade-left",
    icon: <CommunityService className={ICON_CLASS} />,
    src: CommunityService
  },
  {
    title: "Members Directory",
    description:
      "List of members, including birthdays, anniversaries and roles within the church.",
    dataAos: "fade-right",
    icon: <Members className={ICON_CLASS} />,
    src: Members
  },
  {
    title: "Messages",
    description:
      "Anyone in the world can now send your church a message. Members with the delegated permission can respond.",
    dataAos: "fade-up",
    icon: <Messages className={ICON_CLASS} />,
    src: Messages
  },
  {
    title: "Outreach",
    description:
      "Keep track of leads within your community and assign members to follow-up with them.",
    dataAos: "fade-left",
    icon: <Bible className={ICON_CLASS} />,
    src: Bible
  },
  {
    title: "Permissions",
    description:
      "Roles and permissions can be delegated to members in GenessisApp.",
    dataAos: "fade-left",
    icon: <Permissions className={ICON_CLASS} />,
    src: Permissions
  },
  {
    title: "Potluck",
    description:
      "Turn pot-luck into pot-managed. Now all members can communicate on dishes for the next fellowship meal.",
    dataAos: "fade-left",
    icon: <Plate className={ICON_CLASS} />,
    src: Plate
  }
];

const FEATURE_TABS = [
  {
    id: 0,

    title: "Congregation"
  },
  {
    id: 1,

    title: "Community"
  },
  {
    id: 2,
    title: "Churches"
  }
];

const padding = 25;

export const Features3 = () => {
  const [selected, setSelected] = useState(0);
  const [pingLocation, setPingLocation] = useState(0);

  const [boxLocation, setBoxLocation] = useState({});

  const [box2Location, setBox2Location] = useState({});

  const { ref } = useSectionInView("#features");

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  console.log("PAGE Y OFFSET: ---> ", window.scrollY);
  console.log("PAGE X OFFSET: ---> ", window.scrollX);

  useEffect(() => {
    if (ref1.current) {
      console.log("RED-CUBE --->> ", ref1.current.getBoundingClientRect());
      console.log("RED-CUBE OFFSET --->> ", {
        top: ref1.current.offsetTop,
        left: ref1.current.offsetLeft
      });
      setBoxLocation({ x1: ref1.current.offsetLeft + 64 });
      const element1 = ref1.current.getBoundingClientRect();
      // console.log("REF1 BOTTOM --->> ", ref1);
    }
    if (ref2.current) {
      console.log("PURP-CUBE --->> ", ref2.current.getBoundingClientRect());
      console.log("PURP-CUBE OFFSET --->> ", {
        top: ref2.current.offsetTop,
        left: ref2.current.offsetLeft
      });
      setBox2Location({ x2: ref2.current.offsetLeft });
    }
  }, []);

  return (
    <section ref={ref} className="relative scroll-mt-24 mb-12" id="features">
      <div className="container">
        <div
          className="text-center "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h3 className="text-4xl font-display">Key Features</h3>
          <p className="text-onyx-300 mt-4">
            Here are some of the features that GenesisApp offers
          </p>
          <div className=" w-full flex min-h-[450px] flex-row items-center justify-around relative h-96 ">
            <div
              id="red"
              ref={ref1}
              className="flex relative size-16 bg-red-400 top-16 "
            ></div>
            <Connector
              el1={ref1.current}
              el2={ref2.current}
              shape="narrow-s"
              direction="r2r"
              stem={10}
              // roundCorner={true}
              endArrow={false}
              startArrow={false}
              minStep={10}
              strokeDasharray="5,10,5"
            />
            <Pinging />
            // x1 is left offset + cube width // x2 is left offset // y1 is
            <MyLine
              x1={boxLocation.x1}
              y1={381}
              x2={box2Location.x2}
              y2={222}
            />
            {/* <MyLine x1={680} y1={66} x2={680} y2={326} /> */}
            {/* <MyLine x1={680} y1={66} x2={1140} y2={326} /> */}
            <div
              ref={ref2}
              className="flex relative size-16 bg-violet-400 bottom-20 right-20"
            ></div>
          </div>

          <div className=" w-full flex min-h-[450px] flex-col items-center justify-center  relative overflow-hidden"></div>
          {/* <div className="w-full flex relative items-center justify-center align-middle"> */}
          <div className=" min-h-[200px] flex items-center w-full justify-around">
            {/* {FEATURE_TABS.map((tab) => ( */}
            <NeumorphismButton
              // ref={ref2}
              label="Congregation"
              selected={selected}
              setSelected={setSelected}
              id={0}
            />
            <NeumorphismButton
              label="Community"
              selected={selected}
              setSelected={setSelected}
              id={1}
            />
            <NeumorphismButton
              label="Churches"
              selected={selected}
              setSelected={setSelected}
              id={2}
            />
            {/* ))} */}
          </div>
          {/* </div> */}
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-x-6 mt-24 lg:gap-y-4 lg:text-center mx-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              src={feature.src}
            />
          ))}
        </div>
        <div className="text-center max-w-3xl lg:mx-auto mt-16">
          <h4 className="text-2xl font-display">Plus much, much more!</h4>
        </div>
      </div>
    </section>
  );
};
// shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]

// const NeumorphismButton = forwardRef(function (props, ref) {
const NeumorphismButton = (props) => {
  // console.log("BTN PROPS: --> ", props);
  const { label, selected, setSelected, id } = props;
  return (
    <button
      // ref={ref}
      onClick={() => setSelected(id)}
      className={`
          z-10
        mx-1 md:mx-4 lg:mx-10
        px-4 py-2 rounded-[8px]
        flex items-center gap-2
        dark:text-onyx-300 text-onyx-500
        border border-white dark:border-onyx-900
        transition-all ease-in-out duration-200
        ${
          selected === id
            ? `shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(40,_149,_255,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(40,_149,_255,_0.3)]
            dark:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(52,50,63,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(52,50,63,_0.3)]`
            : "shadow-[-4px_-4px_8px_rgba(255,_255,_255,_0.8),_4px_4px_8px_rgba(40,_149,_255,_0.3)] dark:shadow-[-4px_-4px_8px_rgba(0,_0,_0,_0.4),_4px_4px_8px_rgba(0,_0,_0,_0.1)]"
        }
    `}
    >
      {/* <FiSend /> */}
      <p
        className={`text-sm tracking-tighter md:tracking-wide lg:text-2xl lg:p-2 min-w-16 md:min-w-24 z-12 ${
          selected === id ? "font-bold text-primeBlue-400" : "font-semibold"
        }`}
      >
        {label}
      </p>
    </button>
  );
};
// });

const MyLine = (props) => {
  return (
    <svg className="absolute min-h-[600px] w-full" style={{}}>
      <line {...props} style={{ stroke: "red" }} />
      {/* <path
        style={{ stroke: "red", strokeWidth: 3, fill: "none" }}
        d="M
                    917.78125 985,
                    h 0,
                    q 0 0,
                    0 0,
                    V 1377,
                    q 0 0,
                    0 0,
                    H 917.7812"
      /> */}
    </svg>
  );
};
