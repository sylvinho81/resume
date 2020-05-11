import React, { Component } from 'react';
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
                          {item.Achievements}
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
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div>
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>
            <div>
              <div className="nine columns main-col">

                 <p className="lead center">
                 {resumeData.skillsDescription}
                 </p>
              </div>

   				    <div className="bgrid-quarters s-bgrid-thirds cf row">
                {
                  resumeData.skills1 && resumeData.skills1.map((item, index) => {
                    return(
                      <div key={index} className="col-md-4 columns feature-item">
                        <img className="skill"  src={item.urlimage} alt={item.skillname} />
                        <h5>{item.skillname}</h5>
                        <p>{item.description}</p>
                      </div>
                    )
                  })
                }
   					 </div>
             <div className="bgrid-quarters s-bgrid-thirds cf row">
               {
                 resumeData.skills2 && resumeData.skills2.map((item, index) => {
                   return(
                     <div key={index} className="col-md-4 columns feature-item">
                       <img className="skill"  src={item.urlimage} alt={item.skillname} />
                       <h5>{item.skillname}</h5>
                       <p>{item.description}</p>
                     </div>
                   )
                 })
               }
            </div>
            <div className="bgrid-quarters s-bgrid-thirds cf row">
              {
                resumeData.skills3 && resumeData.skills3.map((item, index) => {
                  return(
                    <div key={index} className="col-md-4 columns feature-item">
                      <img className="skill"  src={item.urlimage} alt={item.skillname} />
                      <h5>{item.skillname}</h5>
                      <p>{item.description}</p>
                    </div>
                  )
                })
              }
           </div>
           <div className="bgrid-quarters s-bgrid-thirds cf row">
             {
               resumeData.skills4 && resumeData.skills4.map((item, index) => {
                 return(
                   <div key={index} className="col-md-4 columns feature-item">
                     <img className="skill"  src={item.urlimage} alt={item.skillname} />
                     <h5>{item.skillname}</h5>
                     <p>{item.description}</p>
                   </div>
                 )
               })
             }
          </div>
          <div className="bgrid-quarters s-bgrid-thirds cf row">
            {
              resumeData.skills5 && resumeData.skills5.map((item, index) => {
                return(
                  <div key={index} className="col-md-4 columns feature-item">
                    <img className="skill"  src={item.urlimage} alt={item.skillname} />
                    <h5>{item.skillname}</h5>
                    <p>{item.description}</p>
                  </div>
                )
              })
            }
         </div>
   				  </div>


         </div>

      </section>
    );
  }
}
