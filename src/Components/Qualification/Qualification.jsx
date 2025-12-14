/* eslint-disable no-unused-vars */
import React from "react";
import "./qualif.css";

const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title text-white">Qualification</h2>
      <span className="section__subtitle text-white">
        My Learning Roadmap
      </span>

      <div className="qualification__roadmap">

        {/* STEP 1 */}
        <div className="roadmap__item">
          <div className="roadmap__index">01</div>
          <div className="roadmap__card">
            <h3>Computer Science Engineering</h3>
            <p>Amrita University, Chennai</p>
            <span>2023 – 2027</span>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="roadmap__item">
          <div className="roadmap__index">02</div>
          <div className="roadmap__card">
            <h3>MPC</h3>
            <p>Narayana Junior College, Nellore</p>
            <span>2021 – 2023</span>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="roadmap__item">
          <div className="roadmap__index">03</div>
          <div className="roadmap__card">
            <h3>State Board</h3>
            <p>Narayana E.M High School, Kadapa</p>
            <span>2020 – 2021</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Qualification;
