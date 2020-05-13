import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Personal Projects.</h1>
          <p className="lead center">If you want to take a look at some of the projects for different companies I was working on, you can download my resume in the 'About' section</p>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item, index)=>{
              var modal = "#modal-" + index
              var modalPopUp = "modal-" + index
              return(
                <div>
                <div key={modalPopUp} className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href={modal}>
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.smallDescription}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div key={index} id={modalPopUp}  className="popup-modal mfp-hide">

          		      <img className="scale-with-grid" src={`${item.imgurl}`} alt=""/>

          		      <div className="description-box">
          			      <h4>{item.name}</h4>
          			      <p>{item.description}</p>
                         <span className="categories"><i className="fa fa-tag"></i>Web Development</span>
          		      </div>

                      <div className="link-box">
                         <a href={item.urlSite} target="_blank">Details</a>
          		         <a className="popup-modal-dismiss">Close</a>
                      </div>

          	      </div>
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
