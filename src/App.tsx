import { motion } from "framer-motion";
import "./App.css";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

function App() {
  return (
    <>
      <div className="pt-3 pb-5 pr-5 pl-5 h-screen bg-[#0A192F]">
        <div className=" flex items-center w-full h-16 md:h-20">
          <div className="flex pl-5">
            <svg
              viewBox="0 0 100 100"
              className="w-8 h-8 md:w-14 md:h-14 hover:fill-[#151817]"
              aria-label="Brand logo"
            >
              <polygon
                points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                fill="none"
                stroke="#7FFFD4"
                strokeWidth="5"
                className="transition-all duration-300 hover:stroke-[#9FFFDD]"
              />
              <text
                x="50"
                y="65"
                fontSize="40"
                fontFamily="system-ui"
                fontWeight="bold"
                fill="#7FFFD4"
                textAnchor="middle"
                className="transition-all duration-300 hover:fill-[#9FFFDD]"
              >
                S
              </text>
            </svg>
          </div>
          <div className="flex justify-end  w-full gap-8">
            <div className="text-xs hidden md:flex items-center gap-8">
              <a
                href="#about"
                className=" hover:text-[#64FFDA] transition-colors"
              >
                <span className=" text-[#64FFDA]">01. </span>
                <span className="text-sm text-white hover:text-[#64FFDA]">
                  About
                </span>
              </a>
              <a
                href="#experience"
                className="hover:text-[#64FFDA] transition-colors"
              >
                <span className=" text-[#64FFDA]">02. </span>
                <span className="text-sm text-white hover:text-[#64FFDA]">
                  Experience
                </span>
              </a>
              <a
                href="#work"
                className=" hover:text-[#64FFDA] transition-colors"
              >
                <span className="text-[#64FFDA]">03. </span>
                <span className="text-sm text-white hover:text-[#64FFDA]">
                  Work
                </span>
              </a>
              <a
                href="#contact"
                className="hover:text-[#64FFDA] transition-colors"
              >
                <span className="text-[#64FFDA]">04. </span>
                <span className="text-sm text-white hover:text-[#64FFDA]">
                  Contact
                </span>
              </a>
              <a
                href="/resume.pdf"
                className="text-sm px-4 py-2 border border-[#64FFDA] text-[#64FFDA] rounded hover:bg-[#64FFDA]/10 transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-8 border-yellow-500 justify-center fixed md:w-[5%] left-6 bottom-0">
          <div className="flex flex-col justify-end gap-5">
            <div className="flex flex-col gap-5 items-center">
              <a
                href="https://instagram.com/saurab_bikram_sen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#64FFDA] rounded-full flex items-center justify-center hover:bg-[#4cd3b3] transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://facebook.com/sbkrm.sen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#64FFDA] rounded-full flex items-center justify-center hover:bg-[#4cd3b3] transition-colors"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/saurab-sen-36653b250"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#64FFDA] rounded-full flex items-center justify-center hover:bg-[#4cd3b3] transition-colors"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a
                href="https://x.com/saurab_bkrm_sen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#64FFDA] rounded-full flex items-center justify-center hover:bg-[#4cd3b3] transition-colors"
              >
                <FaXTwitter className="text-xl" />
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[1px] h-20 bg-white mt-4"></div>
            </div>
          </div>
        </div>
        <div className="flex gap-8 border-yellow-500 justify-center right-5 fixed md:w-[5%] bottom-0">
          <div className="flex flex-col justify-end gap-5">
            <div className="flex flex-col items-center">
              <a
                href="mailto:saurabsen0@gmail.com"
                className="text-white text-sm hover:text-[#4cd3b3] transition-colors vertical-text"
                style={{ writingMode: "vertical-rl" }}
              >
                saurabbikramsen@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[1px] h-20 bg-white mt-4"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-[75vh] border-white">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-start border-red-500 items-center"
          >
            <div className="flex flex-col p-5 gap-10 w-full ml-[12%] border-white ">
              <div className="flex flex-col gap-10 w-9/12 border-red-500">
                <div className="flex flex-col gap-5">
                  <span className="text-sm text-[#64FFDA]">Hi, my name is</span>
                  <div className="flex flex-col gap-3">
                    <h1 className="text-6xl font-bold text-gray-300">
                      Saurab Bikram Sen.
                    </h1>
                    <h1 className="text-6xl font-bold text-[#818bab]">
                      I build scalable backend systems.
                    </h1>
                  </div>
                </div>
                <p className="text-sm text-gray-400 w-2/3">
                  I’m a backend developer passionate about designing and
                  implementing robust server-side solutions. Currently, I focus
                  on creating high-performance, scalable architectures and APIs
                  that power seamless, data-driven applications.
                </p>
                <button className="text-sm px-4 py-4 w-2/6 border border-[#64FFDA] text-[#64FFDA] rounded hover:bg-[#64FFDA]/10 transition-colors">
                  check out my cv!!
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default App;
