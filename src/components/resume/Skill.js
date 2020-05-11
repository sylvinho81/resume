import React, { Component } from 'react';
export class Skill extends Component {
  render() {
    return (
      <div className="bgrid-quarters s-bgrid-thirds cf row">
        {
          this.props.skills && this.props.skills.map((item, index) => {
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
    )
  }
}
