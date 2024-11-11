'use client'
import slackLogo from "../assets/images/slack-logo.png";
import dockerLogo from "../assets/images/docker-logo.png";
import figmaLogo from "../assets/images/figma-logo.png";
import githubLogo from "../assets/images/github-logo.png";
import vsCodeLogo from "../assets/images/vs-code-logo.png";
import notionLogo from "../assets/images/notion-logo.png";
import jiraLogo from "../assets/images/jira-logo.png";
import gcpLogo from "../assets/images/gcp-logo.png";
import SectionBorder from "@/components/SectionBorder";
import SectionContent from "@/components/SectionContent";
import Button from "@/components/Button";
import Orbit from "@/components/Orbit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Logo from "@/components/Logo";
import Image from "next/image";
import {motion} from 'framer-motion'
export const features = [
  "Effortless integration",
  "Intelligent automation",
  "Robust security",
];

export const logos = [
  {
    src: slackLogo,
    alt: "slack logo",
    rotate: 0,
  },
  {
    src: dockerLogo,
    alt: "docker logo",
    rotate: 45,
  },
  {
    src: figmaLogo,
    alt: "figma logo",
    rotate: 90,
  },
  {
    src: githubLogo,
    alt: "github logo",
    rotate: 135,
  },
  {
    src: vsCodeLogo,
    alt: "vs code logo",
    rotate: 180,
  },
  {
    src: notionLogo,
    alt: "notion logo",
    rotate: 225,
  },
  {
    src: jiraLogo,
    alt: "jira logo",
    rotate: 270,
  },
  {
    src: gcpLogo,
    alt: "gcp logo",
    rotate: 315,
  },
];

export const Features = () => {
  return <section id="features" className="">
    <div className="container">
      <SectionBorder borderTop>
        <SectionContent className=" md:px-20 lg:px-40">

          <div className="grid grid-cols-1 gap-20 md:grid-cols-2">

          <div>
            <h2 className="text-3xl md:text-4xl leading-[40px] font-semibold text-gray-200">Your AI-powered collaboration companion</h2>
            <ul className="mt-12 flex flex-col gap-8 mb-16">
              {features.map((feature)=>(
                <li key={feature} className="flex items-center gap-4"><FontAwesomeIcon icon={faCircleCheck} 
                className="size-6 text-violet-400"/> <span className="text-xl font-medium">{feature}</span> </li>
              ))}
            </ul>

            <Button variant="primary">Try it now</Button>

          </div>

          <div className="flex justify-center flex-shrink-0">
            <div className="size-[270px] md:size-[450px] relative flex-shrink-0">
              <div className="absolute inset-0">
                <Orbit className="size-full" />
              </div>
              <div className="absolute absolute-center">
                <Orbit className="size-[180px] md:size-[300px]" />
              </div>

              <div className="absolute-center">
                <Logo className="size-24" />
              </div>

              {logos.map(({src, alt, rotate})=>(
                <motion.div key={alt} className=" absolute inset-0"
                // style={{
                //   transform:`rotate(${rotate}deg)`
                // }}
                initial={{
                  rotate:rotate
                }}
                animate={{
                  rotate:[
                    rotate,  
                    rotate + 45, 
                    rotate + 45, 
                    rotate + 90, 
                    rotate + 90, 
                    rotate + 135,
                    rotate + 135,
                    rotate + 180,
                    rotate + 180, 
                    rotate + 225, 
                    rotate + 225, 
                    rotate + 270, 
                    rotate + 270, 
                    rotate + 315, 
                    rotate + 315, 
                    rotate + 360,
                    rotate + 360
                  ]
                }}
                transition={{
                  duration:10,
                  repeat:Infinity
                }}
              >
                <motion.div
                animate={{
                  rotate:[
                    -rotate,
                    -rotate - 45, 
                    -rotate - 45, 
                    -rotate - 90, 
                    -rotate - 90, 
                    -rotate - 135,
                    -rotate - 135,
                    -rotate - 180,
                    -rotate - 180, 
                    -rotate - 225, 
                    -rotate - 225, 
                    -rotate - 270, 
                    -rotate - 270, 
                    -rotate - 315, 
                    -rotate - 315, 
                    -rotate - 360,
                    -rotate - 360
                  ]
                }}
                initial={{
                   transform:`translate(-50%, -50%)`,
                   rotate:-rotate
                }}
              
                className=" inline-flex size-10 md:size-14 items-center justify-center border border-[var(--color-border)] rounded-lg absolute
                  left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-0 bg-gray-950"
                  style={{
                    translate:`-50%, -50%`
                  }}
                  transition={{
                    duration:10,
                    repeat:Infinity
                  }}
                  >
                  <Image src={src} alt={alt}  className="size-6 md:size-9 "/>
                </motion.div>
              </motion.div>
              ))}
            

            </div>
          </div>
          </div>
        </SectionContent>
      </SectionBorder>
    </div>
  </section>;
};

export default Features;
