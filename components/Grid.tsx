import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">

          <BentoGridItem
            id = {1}
            key= {1}
            title={"About Me"}
            description={"Hello! I’m Prajyot Porje, a passionate web developer dedicated to crafting seamless, interactive digital experiences. With a focus on modern design and efficient code, I bring a futuristic, professional touch to every project. Whether developing from scratch or enhancing existing platforms, I’m driven by a commitment to quality and innovation."}
            className={"lg:col-span-2 md:col-span-6 md:row-span-4 h-fit text-3xl "}
            titleClassName={"ml-10"}
            descClassName={"text-2xl"}
          />
          <div className="flex justify-center h-full ">
            <div className=" absolute">
                <img
                  src={"/profile.png"}
                  alt={"/profile.png"}
                  className={" rounded-full border-2 border-purple"}              
                />
            </div>
          </div>
      </BentoGrid>
      
    </section>
  )
}

export default Grid