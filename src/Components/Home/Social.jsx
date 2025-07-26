/* eslint-disable no-unused-vars */
import React from "react";
import "./home.css";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/itzzz.yashuuuu/"
        className="home__social-icon"
        target="_blank"
      >
        <img src="https://cdn-icons-png.flaticon.com/128/3621/3621435.png" alt="" style={{width:"45px"}} />
      </a>
      <a
        href="https://www.linkedin.com/in/yashwanth-raju-2a09a42a5/"
        className="home__social-icon"
        target="_blank"
      >
        <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"  alt="" />
      </a>
      <a
        href="https://github.com/Yashwanth-raju005"
        className="home__social-icon"
        target="_blank"
      >
        <img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="" />
      </a>


       <a
        href="https://leetcode.com/u/Yashwanth_raju005/"
        className="home__social-icon"
        target="_blank"
      >
        <img src="https://miro.medium.com/v2/resize:fit:1020/0*xJCLQQRZv3XFMUd1" alt="" style={{width:"45px"}} />
      </a>

       <a
        href="https://codeforces.com/profile/yashu.raju005"
        className="home__social-icon"
        target="_blank"
      >
        <img src="https://img.icons8.com/?size=160&id=GO78dOMqYNlA&format=png" alt="" />
      </a>
    </div>
  );
};

export default Social;
