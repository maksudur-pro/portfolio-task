import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import jwt from "../assets/jwt.svg";
import TanStack from "../assets/TanStack.png";
import daisyui from "../assets/daisyui.png";
import {
  SiTailwindcss,
  SiReactrouter,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiEslint,
  SiNetlify,
  SiVercel,
  SiAxios,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const Skills = () => {
  return (
    <div className="bg-white px-4 py-4  md:h-[303px] lg:h-[303px] font-Montserrat shadow-lg rounded-lg">
      <h3 className="font-bold text-[#4F4F4F] text-lg uppercase mt-2 text-left ">
        Skills
      </h3>
      <div className="mt-4">
        {/* {skills.map((skill) => (
          <div className="container flex mt-4" key={skill.name}>
            <div className="w-1/4 text-left sm:text-sm">
              <span className="mr-8 text-left text-[#4F4F4F] font-medium">
                {skill.name}
              </span>
            </div>
            <div className="w-1/2 ml-8 justify-start items-start">
              <progress
                className="progress progress-info rounded-xl lg:w-56"
                value={skill.progress}
                max="100"
              />
            </div>
          </div>
        ))} */}
        <div className="grid grid-cols-2 p-6 lg:p-0 lg:grid-cols-6 gap-x-14 gap-y-4">
          <div className="flex gap-1 items-center">
            <div>
              <FaHtml5 className="w-8 h-8 text-red-600"></FaHtml5>
            </div>

            <h1 className="text-[#4F4F4F] font-medium">HTML</h1>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <FaCss3Alt className="w-8 h-8 text-blue-600"></FaCss3Alt>
            </div>

            <h1 className="text-[#4F4F4F] font-medium">CSS</h1>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <SiTailwindcss className="w-8 h-8 text-cyan-500"></SiTailwindcss>
            </div>

            <h1 className="text-[#4F4F4F] font-medium">Tailwind</h1>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <FaBootstrap className="w-8 h-8 text-[#7F11F9]"></FaBootstrap>
            </div>

            <h1 className="text-[#4F4F4F] font-medium">Bootstrap</h1>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <img src={daisyui} className="w-8 h-8 " alt="" />
            </div>

            <h1 className="text-[#4F4F4F] font-medium">DaisyUI</h1>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <TbBrandJavascript className="w-8 h-8 text-yellow-500"></TbBrandJavascript>
            </div>

            <h1 className="text-[#4F4F4F] font-medium">Javascript</h1>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <FaReact className="w-8 h-8 text-rose-600"></FaReact>
            </div>

            <h1 className="text-[#4F4F4F] font-medium">React</h1>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <FaVuejs className="w-8 h-8 text-[#3FB27F]"></FaVuejs>
            </div>

            <h1 className="text-[#4F4F4F] font-medium">Vue JS</h1>
          </div>

          <div className="flex gap-1 items-center">
            <div>
              <SiReactrouter className="w-8 h-8"></SiReactrouter>
            </div>

            <h1 className="text-[#4F4F4F] font-medium">React Router</h1>
          </div>
          <div className="flex gap-1 items-center">
            <div className="rounded-full">
              <FaNodeJs className="w-8 h-8  text-green-600"></FaNodeJs>
            </div>

            <h1 className="text-[#4F4F4F] font-medium">Node JS</h1>
          </div>
          <div className="flex gap-1 items-center">
            <div className="rounded-full">
              <SiMongodb className="w-8 h-8  text-green-600"></SiMongodb>
            </div>

            <h1 className="text-[#4F4F4F] font-medium">MongoDB</h1>
          </div>
          <div className="flex gap-1 items-center">
            <div className="rounded-full">
              <SiExpress className="w-8 h-8  text-black"></SiExpress>
            </div>

            <h1 className="text-[#4F4F4F] font-medium">Express JS</h1>
          </div>
          <div className="flex gap-1 items-center">
            <div className="rounded-full">
              <img src={jwt} className="w-8 h-8  text-black" alt="" />
            </div>

            <h1 className="text-[#4F4F4F] font-medium">JWT</h1>
          </div>
          <div className="flex gap-1 items-center">
            <div className="rounded-full">
              <img src={TanStack} className="w-8 h-8  text-black" alt="" />
            </div>

            <h1 className="text-[#4F4F4F] font-medium">TanStack Query</h1>
          </div>
          <div className="flex gap-1 items-center">
            <div className="rounded-full">
              <SiFirebase className="w-8 h-8  text-amber-500"></SiFirebase>
            </div>

            <h1 className="text-[#4F4F4F] font-medium">Firebase</h1>
          </div>
          <div className="flex gap-1 items-center">
            <div className="rounded-full">
              <SiAxios className="w-8 h-8  text-[#AC93F1]"></SiAxios>
            </div>

            <h1 className="text-[#4F4F4F] font-medium">AXIOS</h1>
          </div>
          <div className="flex gap-1 items-center">
            <div className="rounded-full">
              <TbBrandVscode className="w-8 h-8  text-blue-800"></TbBrandVscode>
            </div>

            <h1 className="text-[#4F4F4F] font-medium">VS Code</h1>
          </div>
          <div className="flex gap-1 items-center">
            <div className="rounded-full">
              <FaGithub className="w-8 h-8  text-black"></FaGithub>
            </div>

            <h1 className="text-[#4F4F4F] font-medium">Github </h1>
          </div>
          <div className="flex gap-1 items-center">
            <div className=" rounded-full">
              <SiEslint className="w-8 h-8  text-[#4930BD]"></SiEslint>
            </div>

            <h1 className="text-[#4F4F4F] font-medium">Eslint </h1>
          </div>
          <div className="flex gap-1 items-center">
            <div className=" rounded-full">
              <FaFigma className="w-8 h-8  text-[#4930BD]"></FaFigma>
            </div>

            <h1 className="text-[#4F4F4F] font-medium">Figma </h1>
          </div>
          <div className="flex gap-1 items-center">
            <div className="rounded-full">
              <SiNetlify className="w-8 h-8  text-[#0ABEBB]"></SiNetlify>
            </div>

            <h1 className="text-[#4F4F4F] font-medium">Netlify </h1>
          </div>
          <div className="flex gap-1 items-center">
            <div className="rounded-full">
              <SiVercel className="w-8 h-8  text-black"></SiVercel>
            </div>

            <h1 className="text-[#4F4F4F] font-medium">Vercel </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
