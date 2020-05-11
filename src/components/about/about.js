import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.png" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">
                  <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
         						<span>{resumeData.name}</span>
                      <br></br>
         						  <span>
                       {resumeData.locality}
                       <br></br>
                       {resumeData.address}
                      </span>
         					   </p>
                  </div>
                  <div className="columns download">
                    <p><a className="button" target="_blank" href="/cv/pablo_torre_rodriguez_en_cv.pdf"><i className="fa fa-download"></i>Download Resume</a></p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
