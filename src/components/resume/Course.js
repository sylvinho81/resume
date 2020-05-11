import React, { Component } from 'react';
export class Course extends Component {

  render() {
    let resumeData = this.props.resumeData;
    return(

        <ul className="fa-ul mb-0">
              {
                resumeData.courses && resumeData.courses.map((item, index) => {
                  return(
                    <li key={index} >
                      <i className="fa-li fa fa-trophy text-warning"></i>
                      {<a href={item.url} target="_blank">{item.title}</a>}
                    </li>

                  )
                })
              }
        </ul>


    )
  }
}
