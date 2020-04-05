import React, { Component } from "react";
import { connect } from "react-redux";
import { UPDATE_LOG } from "../js/actions/index";
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import CardProject from './cardproject';


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
class Portfolio extends Component {
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
        //this.props.UPDATE_LOG("PortfolioPage");
        this.getProjectList();
    }

    getProjectList = () => {

        let dref = db.ref("/projects");

        dref.orderByChild("title").once("value", snapshot => {

            if (snapshot) {
                console.log(snapshot.val());
                this.setState({ projects: snapshot.val() })
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="content">
                    <div className="container ">
                        <h2 className="text-left">Work and Projects</h2>
                        <div className="row mt-5">
                            {this.state.projects ?
                            Object.keys(this.state.projects).map(id =>{
                                let data = this.state.projects;
                                return(
                                    <div className="col-12 col-sm-6 col-lg-4 mb-3" key={id}>
                                      
                                        <CardProject
                                        title={data[id]["title"]}
                                        url={data[id]["url"]}
                                        backgroundImage={data[id]["image"]}
                                        technologies={data[id]["technolgoies"]}
                                        startdate={data[id]["startdate"]}
                                        enddate={data[id]["enddate"]}
                                        role={data[id]["role"]}
                                        />
                                    </div>
                                )
                            })
                            :null}
                            
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )

    }




};


export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);