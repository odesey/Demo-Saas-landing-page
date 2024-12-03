"use client";

import React, {
  forwardRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef
} from "react";
import { motion, AnimatePresence } from "framer-motion";

// import { HeaderGrid } from "@/sections/HeaderGrid";
import { FeatureCard } from "@/components/FeatureCard";

// import { useInView } from "react-intersection-observer";

import ThumbsUp from "@/assets/thumbs-up.svg";
import Radio from "@/assets/radio.svg";
import Announcements from "@/assets/bullhorn.svg";
import Bible from "@/assets/book-bible.svg";
import Broadcast from "@/assets/signal-stream.svg";
import CommunityService from "@/assets/hands-holding-heart.svg";
import Calendar from "@/assets/calendar-days.svg";
import Members from "@/assets/users.svg";
import Messages from "@/assets/messages.svg";
import Permissions from "@/assets/users-gear.svg";
import Plate from "@/assets/plate-utensils.svg";
// import ChipTabs from "@/components/ChipTabs";
// import { FiSend } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";
import LogoPing from "@/components/Ping";
import NeumorphismButton from "@/components/NeumorphismButton";

const ICON_CLASS = "size-10 md:size-12 inline-flex justify-center items-center";

const FEATURES = [
  [
    {
      id: 1,
      title: "Announcements",
      description:
        "Let the congregation, community and other churches know what is going on at your church.",
      dataAos: "fade-right",
      icon: <Announcements className={ICON_CLASS} />,
      src: Announcements
    },

    {
      id: 2,
      title: "Calendar",
      description:
        "Add upcoming church events to the calendar. GenesisApp will automatically sync phone calendars of all members.",
      dataAos: "fade-down",
      icon: <Calendar className={ICON_CLASS} />,
      src: Calendar
    },
    {
      id: 3,
      title: "Members Directory",
      description:
        "List of members, including birthdays, anniversaries and roles within your congregation",
      dataAos: "fade-right",
      icon: <Members className={ICON_CLASS} />,
      src: Members
    },
    {
      id: 4,
      title: "Messages",
      description:
        "Anyone in the world can now send your church a message. Members with the delegated permission can respond.",
      dataAos: "fade-up",
      icon: <Messages className={ICON_CLASS} />,
      src: Messages
    },
    {
      id: 5,
      title: "Permissions",
      description:
        "Roles and permissions can be delegated to members in GenessisApp.",
      dataAos: "fade-left",
      icon: <Permissions className={ICON_CLASS} />,
      src: Permissions
    },
    {
      id: 6,
      title: "Potluck",
      description:
        "Turn pot-luck into pot-managed. Now all members can communicate on dishes for the next fellowship meal.",
      dataAos: "fade-left",
      icon: <Plate className={ICON_CLASS} />,
      src: Plate
    }
  ],
  [
    {
      id: 7,
      title: "Community Services",
      description:
        "Let your community know how your church can be a blessing to them",
      dataAos: "fade-left",
      icon: <CommunityService className={ICON_CLASS} />,
      src: CommunityService
    },
    {
      id: 8,
      title: "Outreach",
      description:
        "Keep track of leads within your community and assign members to follow-up with them",
      dataAos: "fade-left",
      icon: <Bible className={ICON_CLASS} />,
      src: Bible
    },
    {
      id: 9,
      title: "Messages",
      description:
        "Anyone in the world can now send your church a message. Members with the delegated permission can respond",
      dataAos: "fade-up",
      icon: <Messages className={ICON_CLASS} />,
      src: Messages
    }
  ],
  [
    {
      id: 10,
      title: "Broadcasts",
      description:
        "Communicate with nearby churches. Invite them to attend and support programs being offered by your church",
      dataAos: "fade-left",
      icon: <Broadcast className={ICON_CLASS} />,
      src: Broadcast
    },
    {
      id: 11,
      title: "Screen Messages",
      description:
        "Messages from other churches must be approved before they are sent to church members",
      dataAos: "fade-left",
      icon: <ThumbsUp className={ICON_CLASS} />,
      src: ThumbsUp
    },
    {
      id: 12,
      title: "Bulletin Board",
      description:
        "Accepted messages from other churches will be posted to your church's bulletin board",
      dataAos: "fade-left",
      icon: <Radio className={ICON_CLASS} />,
      src: Radio
    }
  ]
];

const FEATURE_TABS = [
  {
    id: 0,
    label: "Congregation"
  },
  {
    id: 1,
    label: "Community"
  },
  {
    id: 2,
    label: "Churches"
  }
];

const NEUMORPH_TABS = [
  {
    title: "Congregation",
    Feature: () => <ExampleFeature Icon={FiSearch} />,
    Svg: () => <Congregation className="sizee-12 fill-white" />
  },
  {
    title: "Community",
    Feature: () => <ExampleFeature Icon={FiSave} />,
    Svg: () => <Church className="sizee-12 fill-white" />
  },
  {
    title: "Churches",
    Feature: () => <ExampleFeature Icon={FiMonitor} />,
    Svg: () => <Community className="sizee-12 fill-white" />
  }
];

export const Features = () => {
  const [selected, setSelected] = useState(0);

  const { ref } = useSectionInView("#features");

  return (
    <section ref={ref} className="relative scroll-mt-24 mb-12" id="features">
      <div className="container">
        <div
          className="text-center "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h3 className="text-6xl font-display font-semibold">Key Features</h3>
          <p className="text-onyx-300 mt-8 text-xl">
            Here are some of the ways that GenesisApp helps your church
            communicate better.
          </p>
          <div className=" w-full flex relative justify-center items-center align-middle -z-1">
            <LogoPing id="element-a" />
          </div>
          <div className=" min-h-[200px] flex items-center w-full justify-center">
            {FEATURE_TABS.map((tab, index) => (
              <NeumorphismButton
                key={index}
                label={tab.label}
                selected={selected}
                setSelected={setSelected}
                id={tab.id}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="flex relative w-full">
          <AnimatePresence mode="wait">
            {NEUMORPH_TABS.map((tab, index) => {
              return selected === index ? (
                <motion.div
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  key={index}
                >
                  <FeatureTab selected={selected} />
                </motion.div>
              ) : undefined;
            })}
          </AnimatePresence>
        </div>
        <div className="text-center max-w-3xl lg:mx-auto mt-16">
          <h4 className="text-2xl font-display">Plus much, much more!</h4>
        </div>
      </div>
    </section>
  );
};

const FeatureTab = ({ selected }) => (
  <div className="flex w-full relative min-h-[760px]">
    <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-x-6 mt-8 lg:gap-y-4 lg:text-center mx-8 justify-start align-top items-start">
      {FEATURES[selected].map((feature, index) => (
        <FeatureCard
          index={index}
          key={feature.id}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          src={feature.src}
        />
      ))}
    </div>
  </div>
);
