import { BackgroundGradient } from "./ui/background-gradient";
import { ContainerScroll } from "./ui/container-scroll-animation";

const ABOUT = () => {
  return (
    <section id="about">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                ABOUT ME
              </span>
            </h1>
          </>
        }
      >
        <BackgroundGradient className=" grid grid-cols-3  gap-5 rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <div className="flex col-span-1 gap-3 justify-center content-center">
            <div className="h-full w-full justify-center content-center ">
              <img
                src="/profile.png"
                className="rounded-[22px]"
                alt="/profile.png"
              />
            </div>
            <BackgroundGradient></BackgroundGradient>
          </div>
          <div className="col-span-2">
            <br />
            <div className="mb-6 text-xs sm:text-sm md:text-base lg:text-lg leading-tight tracking-wide md:tracking-wider">
  Hi, I'm Prajyot Porje! I'm a passionate web developer currently pursuing Bachelor of Engineering in Artificial Intelligence and Machine Learning (AIML) at PES Modern College of Engineering. As a second-year student, I’m focused on honing my skills in coding and developing projects that bridge creativity and functionality. My technical toolkit includes a solid command of Data Structures and Algorithms (DSA), which strengthens my problem-solving approach in web development. 
  <br />
  Beyond coding, I have a diverse set of interests that keep me balanced and motivated. Whether it's playing video games, hitting the gym, or playing cricket, I believe in maintaining a well-rounded lifestyle. Each of these pursuits fuels my creativity, determination, and teamwork skills, which I bring to my projects. Welcome to my portfolio
</div>


          </div>
        </BackgroundGradient>
      </ContainerScroll>
    </section>
  );
};

export default ABOUT;
