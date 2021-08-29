import React, { Component } from "react";
import { Icon } from "@iconify/react";
import python from "@iconify/icons-logos/python";
import reactIcon from "@iconify/icons-logos/react";
import ruby from "@iconify/icons-logos/ruby";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                    <Icon
                      icon={reactIcon}
                      style={{ fontSize: "400%", margin: "7% 5% 0 3%" }}
                    />
                    <Icon
                      icon={ruby}
                      style={{ fontSize: "400%", margin: "7% 5% 0 3%" }}
                    />
                  <Icon
                    icon={python}
                    style={{ fontSize: "400%", margin: "7% 4% 0 3%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
                <a
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="/resumeFolder/resume.pdf"
                          download
                          target="_blank"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-file" />
                          </span>
                          <span className="btn-inner--text">
                            See My Resume 
                          </span>
                          
                </a>
                <br></br>
                <span className="btn-inner--text" id="or"> or </span>
                <a href="mailto:canberkvarli@gmail.com"
                className="btn-inner--text"
                className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                >canberkvarli@gmail.com</a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
