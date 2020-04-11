import React, { Component } from "react";
import { connect } from "react-redux";
import { UPDATE_LOG } from "../js/actions/index";
import {Link} from 'react-router-dom';


const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {

        UPDATE_LOG: (PageName) => {
            dispatch(UPDATE_LOG(PageName))
        }
    };
}
class Home extends Component {

    constructor() {
        super();
        this.state = {
          loading: true,
          authenticated: false,
          user: null
        }
      };
      
    componentDidMount = () => {
        document.title = "Uday K Vatti | Web Developer";
        this.props.UPDATE_LOG('HomePage')
    }

    render() {
        return (
            <React.Fragment>
                <div className="home-content">
                    <div className="container h-100 justify-content-center d-flex flex-column align-items-center">
                        <h1>Hello, I'm <span className="theme-color-hover">Uday Vatti.</span><br/>
                        <span style={{fontSize:'2rem'}}>I'm a Web Developer.</span></h1>
                        <br/>
                        <Link to='/portfolio' className="d-block btn btn-primary">View my work</Link>
                    </div>
                </div>
            </React.Fragment>
        )

    }




};


export default connect(mapStateToProps, mapDispatchToProps)(Home);