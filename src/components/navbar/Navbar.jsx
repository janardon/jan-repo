import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Janardan Gyawali
        </motion.span>

        <div className="social">
          <a
            href="https://www.linkedin.com/in/janardangyawali/"
            target="_blank"
          >
            <img
              className="linke"
              src="/linkedin.png"
              width="10"
              height="300"
              alt=""
            />
          </a>
          <a target="_blank" href="https://www.facebook.com/janrdon.g">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/janrdon/" target="_blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.youtube.com/@janrdon8346" target="_blank">
            <img src="/youtube.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
