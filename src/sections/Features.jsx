"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HeaderGrid } from "@/sections/HeaderGrid";
import { FeatureCard } from "@/components/FeatureCard";
import { FeatureCard2 } from "@/components/FeatureCard2";
import { useInView } from "react-intersection-observer";

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
          <h3 className="text-4xl font-display">Key Features</h3>
          <p className="text-onyx-300 mt-4">
            Here are some of the features that GenesisApp offers
          </p>
          <div className="w-full flex relative items-center justify-center align-middle">
            <div className=" min-h-[200px] flex items-center justify-center w-full">
              {FEATURE_TABS.map((tab) => (
                <NeumorphismButton
                  key={tab.id}
                  label={tab.title}
                  selected={selected}
                  setSelected={setSelected}
                  id={tab.id}
                />
              ))}
            </div>
          </div>
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
            // <div
            //   key={feature.title}
            //   className="p-4 border dark:border-onyx-800 border-primeBlue-200 rounded-sm"
            // >
            //   <div>
            //     <div
            //       data-aos={feature.dataAos}
            //       data-aos-duration="2000"
            //       className="flex items-center justify-center w-16 h-16 fill-primeBlue-400 text-primeBlue-400 rounded-xl bg-gradient-to-tr dark:from-onyx-950 dark:to-onyx-700 lg:mx-auto border dark:border-onyx-800 border-white shadow-mdbl dark:shadow-massive"
            //     >
            //       {feature.icon}
            //     </div>
            //     <p className="mt-12 text-xl font-medium leading-6 dark:text-white text-onyx-400">
            //       {feature.title}
            //     </p>
            //   </div>
            //   <p className="mt-4 text-base text-onyx-300">
            //     {feature.description}
            //   </p>
            // </div>
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

const NeumorphismButton = ({ label, selected, setSelected, id }) => {
  return (
    <button
      onClick={() => setSelected(id)}
      className={`
        mx-1 md:mx-4 lg:mx-10
        px-4 py-2 rounded-[8px]
        flex items-center gap-2
        dark:text-onyx-300 text-onyx-500
        border border-white dark:border-onyx-800
        transition-all ease-in-out duration-200
        ${
          selected === id
            ? "shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(40,_149,_255,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(40,_149,_255,_0.3)]"
            : "shadow-[-4px_-4px_8px_rgba(255,_255,_255,_0.8),_4px_4px_8px_rgba(40,_149,_255,_0.3)]"
        }
    `}
    >
      {/* <FiSend /> */}
      <p
        className={`text-sm tracking-tighter md:tracking-wide lg:text-2xl lg:p-2 min-w-16 md:min-w-24  ${
          selected === id ? "font-bold text-primeBlue-400" : "font-semibold"
        }`}
      >
        {label}
      </p>
    </button>
  );
};
