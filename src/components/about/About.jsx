import { useRef } from "react";
import "./about.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

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
          {/* <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div> */}
          <motion.div className="textContainer" style={{ y }}>
            <h2>A Dedicated Civil Engineer from Nepal</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
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
        <h1>About Me</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        <Single
          item={{
            desc: (
              <>
                <br />
                <br />
                <br />
                👋 Hello there! I'm Janardan Gyawali, a passionate Civil
                Engineer from Nepal, born on July 17, 2000. I hold a Bachelor's
                Degree in Civil Engineering from Kantipur Engineering College,
                affiliated with Tribhuvan University. My academic journey
                provided me with a strong foundation in civil engineering
                principles and practices, culminating in a final year project
                where I designed a prestressed concrete girder bridge over Jhiku
                Khola in Timal Besi, Kavrepalanchowk district. This experience
                not only honed my technical skills but also ignited my passion
                for structural engineering and bridge design.
                <br />
                <br />
                📐 My expertise extends beyond bridge design; I have developed a
                broad range of technical skills through various training
                programs. I am proficient in industry-standard tools like
                AutoCAD, CSI SAP 2000, and Microsoft Excel. My problem-solving
                and decision-making abilities have been sharpened through
                rigorous academic and field tasks, enabling me to approach
                challenges with a methodical and detail-oriented mindset.
                Whether it's creating detailed construction drawings or
                preparing topographic maps during survey camps, I strive for
                excellence in every project I undertake.
                <br />
                <br />
                🚀 I am driven by a deep commitment to contribute to the
                development of my country, Nepal. I believe that through
                innovation, dedication, and a collaborative spirit, I can make a
                significant impact in the field of civil engineering. If my
                journey and skills resonate with your professional network, I
                would be thrilled to connect and explore opportunities to work
                together towards a brighter future for our communities.
                <br />
                <a
                  href="https://drive.google.com/file/d/1u5ogFF14Y0SDoNbu8Jyt0tUyBglgD60_/view?usp=drivesdk"
                  target="_blank"
                >
                  <button
                    style={{
                      marginTop: "30px",
                      textDecoration: "underline",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#ffffff";
                      e.target.style.color = "#000000";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "pink";
                      e.target.style.color = "black";
                    }}
                  >
                    Resume
                  </button>
                </a>
              </>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default About;
