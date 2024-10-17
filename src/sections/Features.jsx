"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HeaderGrid } from "@/sections/HeaderGrid";

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
      "Replaces a web department, agency, or freelancer with a simple monthly fee, without any hidden fees or contracts.",
    dataAos: "fade-right",
    icon: <Announcements className={ICON_CLASS} />
  },
  {
    title: "Broadcasts",
    description:
      "Not happy with the result? Get your money back in your first month.",
    dataAos: "fade-left",
    icon: <Broadcast className={ICON_CLASS} />
  },
  {
    title: "Calendar",
    description:
      "Submit as many requests as you like. We will adapt respectively and work on them one by one as you submit them.",
    dataAos: "fade-down",
    icon: <Calendar className={ICON_CLASS} />
  },
  {
    title: "Community Services",
    description:
      "With more than 5 years of experience in the web industry and more than 100k customers, we deliver high quality.",
    dataAos: "fade-left",
    icon: <CommunityService className={ICON_CLASS} />
  },
  {
    title: "Members Directory",
    description: "Simple communication in email or Slack.",
    dataAos: "fade-right",
    icon: <Members className={ICON_CLASS} />
  },
  {
    title: "Messages",
    description:
      "Pause or cancel your plan anytime. No long-term contracts or unexpected fees.",
    dataAos: "fade-up",
    icon: <Messages className={ICON_CLASS} />
  },
  {
    title: "Outreach",
    description:
      "Not happy with the result? Get your money back in your first month.",
    dataAos: "fade-left",
    icon: <Bible className={ICON_CLASS} />
  },
  {
    title: "Permissions",
    description:
      "Not happy with the result? Get your money back in your first month.",
    dataAos: "fade-left",
    icon: <Permissions className={ICON_CLASS} />
  },
  {
    title: "Potluck",
    description:
      "Not happy with the result? Get your money back in your first month.",
    dataAos: "fade-left",
    icon: <Plate className={ICON_CLASS} />
  }
];

export const Features = () => {
  return (
    <section className="overflow-hidden relative">
      <div className="px-8 py-12 mx-auto md:px-12 lg:py-24 lg:px-36 max-w-7xl">
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
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-x-6 mt-24 lg:gap-y-24 lg:text-center">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="pb-4 border-b dark:border-onyx-800 border-primeBlue-200"
            >
              <div>
                <div
                  data-aos={feature.dataAos}
                  data-aos-duration="2000"
                  className="flex items-center justify-center w-16 h-16 fill-primeBlue-400 text-primeBlue-400 rounded-xl bg-gradient-to-tr dark:from-onyx-950 dark:to-onyx-700 lg:mx-auto border dark:border-onyx-800 border-white shadow-mdbl dark:shadow-massive"
                >
                  {feature.icon}
                </div>
                <p className="mt-12 text-xl font-medium leading-6 dark:text-white text-onyx-400">
                  {feature.title}
                </p>
              </div>
              <p className="mt-4 text-base text-onyx-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
