"use server";

import connectDB from "@/lib/mongodb";
import Contact from "@/app/models/Contact";
// import Contact from "../../../app/models/Contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose"; //npm install mongoose

export async function POST(req) {
  const { firstName, lastName, subject, emailAddress, message } =
    await req.json();

  try {
    console.log("Connect DB NEXT");
    await connectDB();

    await Contact.create({
      firstName,
      lastName,
      subject,
      emailAddress,
      message
    });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true
    });
  } catch (error) {
    console.log("ERROR: ---> ", error);
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}
