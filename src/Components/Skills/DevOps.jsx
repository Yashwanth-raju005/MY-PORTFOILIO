/* eslint-disable no-unused-vars */
import React from "react";

const DevOps = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">DevOps & Tools</h3>

      <div className="skills__icons">
        <div className="skill__item">
          <i className="bx bxl-docker skill__icon"></i>
          <p className="skill__text">Docker</p>
        </div>

        <div className="skill__item">
          <i className="bx bx-cloud skill__icon"></i>
          <p className="skill__text">Kubernetes</p>
        </div>

        <div className="skill__item">
          <i className="bx bx-git-branch skill__icon"></i>
          <p className="skill__text">CI / CD</p>
        </div>

        <div className="skill__item">
          <i className="bx bxl-github skill__icon"></i>
          <p className="skill__text">GitHub</p>
        </div>

        <div className="skill__item">
          <i className="bx bx-test-tube skill__icon"></i>
          <p className="skill__text">Postman</p>
        </div>
      </div>
    </div>
  );
};

export default DevOps;
