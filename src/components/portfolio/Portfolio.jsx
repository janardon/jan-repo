import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Design of PSC-I Girder Bridge over Jhiku Khola",
    img: "/bridge.jpg",
    desc: (
      <>
        <span
          style={{
            color: "skyblue",
          }}
        >
          Ashar, 2080 - Falgun, 2080 Pachkhal, Kavrepalanchowk
        </span>
        <br /> Analysis of bridge on SAP software Detail drawings of the
        structural members (Slab,Girder,Abutment,Foundation,etc.),
      </>
    ),
    link: "https://drive.google.com/drive/folders/10VZ_N4qiKp89t0pXYEg27EGUUayB0ALK?usp=sharing",
  },
  {
    id: 2,
    title: "Survey Camp at NEA Training Center",
    img: "/survey.jpg",
    desc: (
      <>
        <div style={{ color: "skyblue" }}>
          Jestha, 2079 - Ashar, 2079 Bhaktapur, Kharipati
        </div>
        Use of Theodolite, Total Station and Auto level Topographic map
        preparation in AutoCAD Report Writing, Presentation and Documentation",
      </>
    ),

    link: "https://drive.google.com/drive/folders/1mCmz1OuYDgdT-6o0sebF_Auq5ps6qqL0",
  },
  {
    id: 3,
    title: "Custom AutoCAD Designs for Personal Space Enhancement",
    img: "./cad.png",
    desc: "Demonstration of proficiency in AutoCAD and a strong understanding of architectural and interior design principles",
    link: "https://drive.google.com/file/d/1xFfWmkVZegO1W01WNQjkGCjCb76r4KWf/view?usp=sharing",
  },
  {
    id: 4,
    title: "Cinematic Video Edit",
    img: "./vg.jpg",
    desc: "Edited and produced a polished video using Filmora, enhancing visuals and sound to create a compelling final product.",
    link: "https://youtube.com/shorts/LsKENnD09zM?si=2DJz2soSXUGOi_cf",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
