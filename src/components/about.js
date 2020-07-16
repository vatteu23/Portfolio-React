import React, { Component } from "react";
import { connect } from "react-redux";
import { UPDATE_LOG } from "../js/actions/index";
import { Link } from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    UPDATE_LOG: (PageName) => {
      dispatch(UPDATE_LOG(PageName));
    },
  };
};
class About extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      authenticated: false,
      user: null,
    };
  }

  componentDidMount = () => {
    document.title = "Uday K Vatti | Web Developer";
    this.props.UPDATE_LOG("AboutPage");
  };

  render() {
    return (
      <React.Fragment>
        <div className="content">
          <div className="container h-100 mt-4 text-left">
            <div className="row">
              
              <div className="col-12 col-md-12 text-justify theme-color-hover">
               I am a Web Developer passionate about creating beautiful solutions and is inspired by Google Material Design.
                I love photography and would see everything as a frame including Web Pages.
              </div>
              <div className="col-12 text-center mt-3">
                <a className="btn btn-primary" 
                href="https://firebasestorage.googleapis.com/v0/b/portfolio-react-f2bc7.appspot.com/o/pdfs%2FResume.pdf?alt=media&token=2e38a77f-9c75-47ca-b3d8-b8db21834f3f"
                target="_blank">View Resume</a>
              </div>
              <div className="col-12 text-center mt-5">
              <h2 className="theme-color-hover">Work Experience</h2>
              </div>
              <div className="col-12">
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#272727', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  #7d7d7d' }}
                  date="2017 - present"
                  iconStyle={{ background: '#272727', color: '#fff' }}
                  icon={<img className="mt-2 img img-fluid align-middle"
                    src='https://firebasestorage.googleapis.com/v0/b/portfolio-react-f2bc7.appspot.com/o/images%2FTCPOrangeW70.png?alt=media&token=a0bdd667-d5ae-488a-b9fd-c0e19d85a601'>
                  </img>}

                >
                  <h3 className="vertical-timeline-element-title">Triple Crown Products</h3>
                  <h4 className="vertical-timeline-element-subtitle">Web Developer</h4>
                  <p className="vertical-timeline-element-description">
                   
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#272727', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid #7d7d7d' }}
                  date="2016 - 2017"
                  iconStyle={{ background: '#272727', color: '#fff' }}

                  icon={<img className="ml-2 ml-lg-3 mt-lg-2 img img-fluid align-middle"
                    style={{ maxHeight: '40px' }}
                    src='https://firebasestorage.googleapis.com/v0/b/portfolio-react-f2bc7.appspot.com/o/images%2Fcgs.png?alt=media&token=43e551ff-8d80-44e3-9dae-aa54e2b73f2f'>
                  </img>}
                >
                  <h3 className="vertical-timeline-element-title">Center for Governmental Studies</h3>
                  <h4 className="vertical-timeline-element-subtitle">Web Developer</h4>
                  <p className="vertical-timeline-element-description">
                   
                  </p>
                </VerticalTimelineElement>

              </VerticalTimeline>
            
              </div>
             </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
