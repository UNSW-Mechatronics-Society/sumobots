"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TimelineData } from "./data/TimelineData";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const targetDate = new Date("2024-07-26T03:24:00");
  const currentDate = new Date();
  const timeDifference = targetDate.getTime() - currentDate.getTime();
  let totalSeconds = Math.floor(timeDifference / 1000);
  const [showdownDate, setShowdownDate] = useState("--:--:--:--");
  // Define a function to update the countdown timer
  function updateCountdown() {
    // Calculate the remaining hours, minutes, and seconds
    const days = Math.floor(Math.floor(totalSeconds / 3600) / 24)
      .toString()
      .padStart(2, "0");
    const hours = Math.floor((totalSeconds / 3600) % 24)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(totalSeconds % 60)
      .toString()
      .padStart(2, "0");
    const timeString = `${days}:${hours}:${minutes}:${seconds}`;
    // Display the countdown timer

    // Decrease the totalSeconds by 1
    totalSeconds--;
    // Check if the countdown has reached zero
    return timeString;
  }
  useEffect(() => {
    const intervalId = setInterval(
      () => setShowdownDate(updateCountdown()),
      1000
    );
    return () => {
      clearInterval(intervalId);
    };
  });
  // Call the updateCountdown function every second

  return (
    <>
      <main className="w-full">
        <div className="container h-[66vh] flex flex-col items-center justify-center gap-8">
          <h1 className="flex flex-col items-center font-display leading-none col-span-full w-full">
            <span className="text-[4.5vw] xl:text-[6.5vw] md:text-[8vw]">
              UNSW MTRNSOC PRESENTS
            </span>
            <span className="text-[7.2vw] xl:text-[10.3vw] md:text-[12.57vw] text-blue-400">
              SUMOBOTS 2024
            </span>
          </h1>
          <span className="flex flex-col items-center font-display leading-snug col-span-full w-full">
            <span className="text-[3vw] xl:text-[4.27vw] md:text-[7.27vw] ">
              {showdownDate}
            </span>
            <span className="text-[2vw] xl:text-[3vw] md:text-[5.2vw] ">
              UNTIL SHOWDOWN
            </span>
          </span>
        </div>
        <div className="min-h-screen pt-12 w-full bg-black">
          <section className="container">
            <h2 className="font-display col-span-full">What is Sumobots</h2>
            <div className="col-span-7 lg:col-span-full">
              <p>
                Sumobots is a sport in which two robots attempt to push each
                other out of a circle. You will be competing in a team of 1-6
                people to build a robot that can defeat other bots. The
                competition is divided into the basic and the advanced stream,
                depending on your experience.
              </p>
              <Link
                className="button mt-8"
                href={
                  "https://docs.google.com/document/d/1xwoSjIgcmcuwyC4FDiTnI7eXwgkGNUIS/edit?usp=sharing&ouid=102570205003270756266&rtpof=true&sd=true"
                }
                target="_blank"
              >
                Rulebook
              </Link>
            </div>
            <div className="col-span-5 h-full flex items-center overflow-hidden lg:hidden">
              <Image
                width={445}
                height={250}
                src={"/VR_005.gif"}
                alt="silly gif of robot"
              ></Image>
            </div>
          </section>
          <section className="container">
            <h2 className="col-span-full">Next Up</h2>
            <div className="w-full col-span-5 lg:col-span-full">
              <Image
                width={445}
                height={250}
                src={"/2024 Week 4 Sumo.png"}
                alt="silly gif of robot"
              ></Image>
            </div>
            <div className="col-span-7 flex flex-col lg:mt-8 lg:col-span-full">
              <h3 className="font-display text-blue-400">
                Soldering, Wiring and Motor Control Workshop
              </h3>
              <div className="flex flex-col text-xl">
                <p>
                  UNSW Design Next Studio, Ainsworth Building (J17), Level 5,
                  Rooms 503-504
                </p>
                <p>Thursday, June 20, 2024 at 6 PM</p>
              </div>
            </div>
          </section>
          <section className="container">
            <h2 className="col-span-full">Timeline</h2>
            <p className="col-span-full">
              From Week 1 - Week 4 we will be hosting workshops on CAD, Arduino,
              soldering, laser cutting, etc (check our{" "}
              <Link className="text-link" href={"https://shorturl.at/yJMCJ"}>
                info pack
              </Link>{" "}
              for more details). We host the same workshops twice a week on
              Tuesday and Thursday 6-8pm, so attend the day that suits you best
              (you will only need to attend one day a week). We also provide
              pre-recorded workshops if you are unable to attend. Pizza and
              drinks will be provided.
            </p>
            <table className="col-span-full border-separate border-spacing-y-8">
              <thead className="text-blue-400">
                <tr>
                  <th className="font-semibold">Week</th>
                  <th className="font-semibold">Topics</th>
                  <th className="font-semibold">Date</th>
                  <th className="font-semibold">Location</th>
                </tr>
              </thead>
              <tbody>
                {TimelineData.map((data, index) => {
                  return (
                    <tr
                      key={index}
                      className=" text-white text-opacity-70 text-xl text-center"
                    >
                      <td>{data.week}</td>
                      <td>{data.topics}</td>
                      <td>{data.date}</td>
                      <td>{data.location}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
          <section className="container">
            <h2 className="col-span-full">Resources</h2>
            <div className="col-span-full">
              <p>
                Dive deeper into the world of SumoBots with our curated
                collection of resources. Find tutorials on designing and
                building your own robot warrior, learn essential programming
                skills, and explore the rules and regulations of sumo
                competitions. Whether you&apos;re a beginner or a seasoned
                veteran, these resources will equip you with the knowledge and
                inspiration to conquer the ring.
              </p>
              <Link className="mt-8 button" href={"/resources"}>
                Learn More
              </Link>
            </div>
          </section>
          <section className="container  pb-24">
            <h2 className="col-span-full">Proudly Sponsored By</h2>
            <div className="col-span-full grid grid-cols-8 gap-8 justify-items-center max-h-64 h-full">
              <div className="col-span-2 lg:col-span-4 rounded-full h-full aspect-square overflow-hidden">
                <Image
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                  src={"/images/sponsors/Ant.webp"}
                  alt="Ant61 sponsor logo"
                ></Image>
              </div>
              <div className="col-span-2 lg:col-span-4 rounded-full h-full aspect-square overflow-hidden">
                <Image
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                  src={"/images/sponsors/EA.webp"}
                  alt="Engineers Australia sponsor logo"
                ></Image>
              </div>
              <div className="col-span-2 lg:col-span-4 rounded-full h-full aspect-square overflow-hidden">
                <Image
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                  src={"/images/sponsors/Makerspace.webp"}
                  alt="Makerspace sponsor logo"
                ></Image>
              </div>
              <div className="col-span-2 lg:col-span-4 rounded-full h-full aspect-square overflow-hidden">
                <Image
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                  src={"/images/sponsors/robogals.webp"}
                  alt="Robogals sponsor logo"
                ></Image>
              </div>
            </div>
          </section>
          {/* <section className="container">
          <h2 className="col-span-full">Contact Us</h2>
        </section> */}
        </div>
      </main>
    </>
  );
}
