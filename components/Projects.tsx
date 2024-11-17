import { projects } from "@/data";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { link } from "fs";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { FaLocationArrow } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { TbClick, TbListDetails } from "react-icons/tb";
import { BiSolidUserDetail } from "react-icons/bi";
import MyButton from "./ui/MyButton";

const Projects = () => {
  return (
    <div className="py-5">
      <h1 className=" heading">
        Some of My <span className=" text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center  gap-x-24 gap-y-8 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <CardContainer className="inter-var">
              <CardBody className=" relative group/card  dark:hover:shadow-2xl sm:w-[620px] w-[80vw] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="50" className="w-full mt-4 mb-4">
                  <img
                    src={project.img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="25"
                  as="h1"
                  className="font-bold  lg:text-2xl md:text-xl text-base line-clamp-1"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="30"
                  className="lg:text-xl lg:font-normal text-[#BEC1DD] font-light text-sm line-clamp-2"
                >
                  {project.des}
                </CardItem>

                <div className="flex justify-between items-center mt-6">
                  <CardItem
                    translateZ={10}
                    as="a"
                    href={project.link}
                    target="__blank"
                    className="px-4 py-2 flex justify-center items-center rounded-xl "
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <GoArrowUpRight
                      className="ms-2"
                      size={25}
                      color="#CBACF9"
                    />
                  </CardItem>
                  <Modal>
                    <ModalTrigger className="flex justify-center items-center">
                      <MyButton
                        title="Visit My Work"
                        icon={<FaLocationArrow />}
                        position="right"
                        otherClasses="h-8 w-24"
                      />
                    </ModalTrigger>
                    <ModalBody>
                      <ModalContent>
                        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                          Book your trip to{" "}
                          <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                            Bali
                          </span>{" "}
                          now! ✈️
                        </h4>
                        <div className="flex justify-center items-center"></div>
                        <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                          <div className="flex  items-center justify-center">
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                              5 connecting flights
                            </span>
                          </div>
                          <div className="flex items-center justify-center">
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                              12 hotels
                            </span>
                          </div>
                          <div className="flex items-center justify-center">
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                              69 visiting spots
                            </span>
                          </div>
                          <div className="flex  items-center justify-center">
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                              Good food everyday
                            </span>
                          </div>
                          <div className="flex items-center justify-center">
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                              Open Mic
                            </span>
                          </div>
                          <div className="flex items-center justify-center">
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                              Paragliding
                            </span>
                          </div>
                        </div>
                      </ModalContent>
                      <ModalFooter className="gap-4">
                        <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                          Cancel
                        </button>
                        <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                          Book Now
                        </button>
                      </ModalFooter>
                    </ModalBody>
                  </Modal>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
