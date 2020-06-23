import React, { Component } from "react";
import { connect } from "react-redux";
import { UPDATE_LOG } from "../js/actions/index";
import { Link } from "react-router-dom";

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
        <div className="home-content">
          <div className="container h-100 mt-4 text-left">
            <div className="row">
              <div className="col-12 mb-3">
                <h2>About</h2>
              </div>

              <div className="col-12 col-md-12">
                I am a Web Developer at Triple Crown Products. I love to create
                beautiful solutions.
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
