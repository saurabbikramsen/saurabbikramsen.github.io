import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <>
      <div className="pt-3 pb-5 pr-5 pl-5 bg-[#0A192F]">
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
        <div className="flex items-center justify-center h-screen w-full border-white">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-start border-red-500 h-full items-center"
          >
            <div className="flex gap-10 border-yellow-500 w-2/12 h-full">
              <div className="flex flex-col justify-end gap-5">
                <div className="w-10 h-10 bg-[#64FFDA] rounded-full"></div>
                <div className="w-10 h-10 bg-[#64FFDA] rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col p-5 gap-10 border-white w-7/12 ">
              <div className="flex flex-col gap-5">
                <span className="text-md text-[#64FFDA]">Hi, my name is</span>
                <div className="flex flex-col gap-3">
                  <h1 className="text-6xl font-bold text-gray-300">
                    Saurab Bikram Sen.
                  </h1>
                  <h1 className="text-6xl font-bold text-[#818bab]">
                    I build scalable backend systems.
                  </h1>
                </div>
              </div>
              <p className="text-md text-gray-400 w-2/3">
                I’m a backend developer passionate about designing and
                implementing robust server-side solutions. Currently, I focus on
                creating high-performance, scalable architectures and APIs that
                power seamless, data-driven applications.
              </p>
              <button className="text-md px-4 py-4 w-2/6 border border-[#64FFDA] text-[#64FFDA] rounded hover:bg-[#64FFDA]/10 transition-colors">
                check out my cv!!
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default App;
