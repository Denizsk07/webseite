"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "../data";
import { PinContainer } from "../ui/Pin";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className="py-20 mt-20">
      <h1 className="heading text-foreground text-center">
        Eine kleine Auswahl an{" "}
        <span className="text-primary">aktuellen Projekten</span>
      </h1>
      <div className="grid-cols-1 md:grid-cols-2 flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] no-underline"
          >
            <div className="flex flex-col items-center justify-center w-full h-full">
              <PinContainer title={item.title}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-surface"
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-foreground line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-foregroundMuted"
                  style={{
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex justify-center items-center mt-7 mb-3">
                  <p className="flex lg:text-xl md:text-xs text-sm text-foreground">
                    Zum Projekt
                  </p>
                  <FaLocationArrow className="ml-3 text-accent" />
                </div>
              </PinContainer>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
