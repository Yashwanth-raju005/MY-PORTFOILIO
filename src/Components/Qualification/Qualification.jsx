/* eslint-disable no-unused-vars */
import React from "react";
import "./qualif.css";

const Qualification = () => {
  return (
    <section className="qualification section " id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personel Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          {/* <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div> */}
        </div>

        <div className="qualification__section">
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Science Engineering</h3>
                <span className="qualification__subtitle">Amrita University,Chennai</span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2023-2027</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">MPC</h3>
                <span className="qualification__subtitle">Narayana Junior College,Nellore</span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2021-2023</i>
                </div>
              </div>
            </div>


            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">State Board</h3>
                <span className="qualification__subtitle">Narayana E.M High School,Kadapa</span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2020-2021</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


            




          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
