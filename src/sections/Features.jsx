"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HeaderGrid } from "@/sections/HeaderGrid";
import { FeatureCard } from "@/components/FeatureCard";

import Announcements from "@/assets/bullhorn.svg";
import Bible from "@/assets/book-bible.svg";
import Broadcast from "@/assets/signal-stream.svg";
import CommunityService from "@/assets/hands-holding-heart.svg";
import Calendar from "@/assets/calendar-days.svg";
import Members from "@/assets/users.svg";
import Messages from "@/assets/messages.svg";
import Permissions from "@/assets/users-gear.svg";
import Plate from "@/assets/plate-utensils.svg";

const ICON_CLASS = "size-7 inline-flex justify-center items-center";

const features = [
  {
    title: "Announcements",
    description:
      "Let the congregation, community and other churches know what is going on at your church.",
    dataAos: "fade-right",
    icon: <Announcements className={ICON_CLASS} />
  },
  {
    title: "Broadcasts",
    description:
      "Send messages to nearby churches. Invite them to attend or support programs being offered by your church.",
    dataAos: "fade-left",
    icon: <Broadcast className={ICON_CLASS} />
  },
  {
    title: "Calendar",
    description:
      "Add upcoming church events to the calendar. GenesisApp will automatically sync phone calendars of all members.",
    dataAos: "fade-down",
    icon: <Calendar className={ICON_CLASS} />
  },
  {
    title: "Community Services",
    description:
      "Let your community know how your church can be a blessing to them.",
    dataAos: "fade-left",
    icon: <CommunityService className={ICON_CLASS} />
  },
  {
    title: "Members Directory",
    description:
      "List of members, including birthdays, anniversaries and roles within the church.",
    dataAos: "fade-right",
    icon: <Members className={ICON_CLASS} />
  },
  {
    title: "Messages",
    description:
      "Anyone in the world can now send your church a message. Members with the delegated permission can respond.",
    dataAos: "fade-up",
    icon: <Messages className={ICON_CLASS} />
  },
  {
    title: "Outreach",
    description:
      "Keep track of leads within your community and assign members to follow-up with them.",
    dataAos: "fade-left",
    icon: <Bible className={ICON_CLASS} />
  },
  {
    title: "Permissions",
    description:
      "Roles and permissions can be delegated to members in GenessisApp.",
    dataAos: "fade-left",
    icon: <Permissions className={ICON_CLASS} />
  },
  {
    title: "Potluck",
    description:
      "Turn pot-luck into pot-managed. Now all members can collaborate on dishes for the next fellowship meal.",
    dataAos: "fade-left",
    icon: <Plate className={ICON_CLASS} />
  }
];

export const Features = () => {
  return (
    <section className="overflow relative py-[72px] md:py-24">
      <div className="container">
        <div
          className="lg:text-center max-w-3xl lg:mx-auto"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h3 className="text-4xl  font-display">Key Features</h3>
          <p className="text-onyx-300 mt-4">
            Perks so good you'll never need to go
            <span className="md:block">
              {" "}
              anywhere else for your design. Seriously.
            </span>
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-x-6 mt-24 lg:gap-y-4 lg:text-center ">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
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
      </div>
    </section>
  );
};
