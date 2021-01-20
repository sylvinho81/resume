import React, { Component, Fragment } from 'react';
import {Skill} from './Skill'
import {Course} from './Course'

export default  class Resume extends Component {


  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item, index)=>{
                  return(
                    <div key={index} className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.YearOfStart} - {item.YearOfPassing}</em></p>
                          <p>
                          {(item.Achievements)}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item, index) => {
                  return(
                    <div key={index} className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfStart} {item.YearOfStart} - {item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p dangerouslySetInnerHTML={{__html: item.Achievements}}>
                          
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div>
         </div>


         <div className="row skills">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>
            <div>
              <div className="nine columns main-col">
                 <p className="lead center">
                 {resumeData.skillsDescription}
                 </p>
              </div>

   				    <Skill skills={resumeData.skills1}/>
              <Skill skills={resumeData.skills2}/>
              <Skill skills={resumeData.skills3}/>
              <Skill skills={resumeData.skills4}/>
              <Skill skills={resumeData.skills5}/>
   				  </div>


         </div>

         <div className="row course">
           <div className="three columns header-col">
              <h1><span>Courses</span></h1>
           </div>
           <div>
             <div className="nine columns main-col">
                <Course resumeData={resumeData}/>
             </div>

           </div>
         </div>

      </section>
    );
  }
}
