/* eslint-disable no-unused-vars */
import React from "react";
import "./home.css";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/_._yashu7_._/"
        className="home__social-icon"
        target="_blank"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/3621/3621435.png"
          alt=""
          style={{ width: "45px" }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/yashwanth-raju-s-2a09a42a5/"
        className="home__social-icon"
        target="_blank"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
          alt=""
        />
      </a>
      <a
        href="https://github.com/Yashwanth-raju005"
        className="home__social-icon"
        target="_blank"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/733/733553.png"
          alt=""
        />
      </a>

      <a
        href="https://leetcode.com/u/Yashwanth_raju005/"
        className="home__social-icon"
        target="_blank"
      >
        <img
          src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
          alt=""
          style={{ width: "45px" }}
        />
      </a>

      <a
        href="https://codeforces.com/profile/yashu.raju005"
        className="home__social-icon"
        target="_blank"
      >
        <img
          src="https://img.icons8.com/?size=160&id=GO78dOMqYNlA&format=png"
          alt=""
        />
      </a>
    </div>
  );
};

export default Social;
