import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on gaining practical experience in design, construction
          processes,
          <br /> and project management.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Designing</motion.b>{" "}
            Spaces
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Shaping</motion.b>{" "}
            Skylines.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>AutoCAD</h2>
          <p>
            <ul>
              Created a modern home layout Focus on efficient space use and
              stylish design.
            </ul>
          </p>

          <a
            href="https://drive.google.com/drive/folders/1AYuXtQj8hGnSdyC9pLo7Ap1XNRIvLOks"
            target="_blank"
          >
            <button
              style={{
                border: "1px solid black",
                borderRadius: "10px",
              }}
            >
              Demo
            </button>
          </a>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>CSI SAP</h2>
          <p>
            <ul>
              Conducted a detailed structural analysis of a building using SAP
              2000, ensuring stability and safety through accurate load
              calculations and material optimization.
            </ul>
          </p>
          <a
            href="https://drive.google.com/drive/folders/1AfG4LOc4NeKejPA3T8Ee6A9Qd1uJh2dE"
            target="_blank"
          >
            <button
              style={{
                border: "1px solid black",
                borderRadius: "10px",
              }}
            >
              Demo
            </button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Construction Drawings and Specifications</h2>
          <p>
            Created precise construction drawings and specifications to guide
            contractors in building a residential project to design and
            safety standards.
          </p>
          <br />
          <a
            href="https://drive.google.com/drive/folders/1Ad0JpDE92BgLFxZ2HDs22XS3R6QLHDa2"
            target="_blank"
          >
            <button
              style={{
                border: "1px solid black",
                borderRadius: "10px",
              }}
            >
              Demo
            </button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Wondershare Filmora</h2>
          <p>
            Edited and produced a polished video using Filmora, enhancing
            visuals and sound to create a compelling final product.
          </p>
          <br />
          <a href="https://www.youtube.com/watch?v=b9Lq76Xbh40" target="_blank">
            <button
              style={{
                border: "1px solid black",
                borderRadius: "10px",
              }}
            >
              Demo
            </button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
