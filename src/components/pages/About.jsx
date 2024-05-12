import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
          Welcome to our innovative blogging platform built on 
          cutting-edge technologies such as React.js, Node.js,
          MongoDB, and Cloudinary Console. Our platform offers a dynamic
          space where users can engage with diverse content spanning various 
          topics including lifestyle, technology, sports, travel, business, and economy.
 </p>
        <p>Users can register as either an Author or a Reader. Authors have the privilege
           to create and upload engaging blog posts on topics of their choice, contributing 
           to the rich tapestry of knowledge and experience available on our platform. 
           Readers, on the other hand, have access to a vast array of captivating articles,
            gaining insights and perspectives across a wide spectrum of interests.
        </p>
        <p>
        Our platform prioritizes user experience, ensuring seamless navigation and 
        accessibility for all users. With a sleek and intuitive interface, 
        users can effortlessly explore the latest content, discover new insights, 
        and engage with the vibrant community of bloggers and readers.
        </p>
        <p>Join us on this exciting journey as we redefine the landscape of 
          digital content creation and consumption. Whether you're passionate 
          about sharing your expertise or seeking inspiration and knowledge, 
          our platform offers a vibrant ecosystem where ideas flourish and
           connections thrive. Embrace the power of technology and embark on 
           a journey of discovery with us.
        </p>
      </div>
    </article>
  );
};

export default About;