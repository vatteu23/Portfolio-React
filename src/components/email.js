import React, { Component } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unreadCount: 0,
      cflist: false,
    };
  }

  componentDidMount = () => {
    const cf_ref = db.ref("/contactform");
    let emailsexist = false;

    cf_ref.orderByChild("contactform_name").once("value", (snapshot) => {
      if (snapshot.val()) {
        emailsexist = true;
        this.setState({ cflist: snapshot });
      }
    });

    let unreadCount = 0;
    if (emailsexist) {
      cf_ref
        .orderByChild("contactform_viewed")
        .equalTo(false)
        .once("value", function (snapshot) {
          return unreadCount;
        })
        .then((unreadCount) => {
          let count;
          if (unreadCount.val()) {
            count = Object.keys(unreadCount.val()).length;
          } else {
            count = 0;
          }
          this.setState({ unreadCount: count });
        });
    }
  };

  getNumberOfDaysAgo = (date) => {
    const date2 = new Date(Date.now());
    const date1 = new Date(date);
    const diffTime = Math.abs(date2 - date1);

    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  };

  render() {
    return (
      <React.Fragment>
        <div className="container page-content">
          {this.state.cflist ? (
            <div className="my-3">
              <p>{this.state.unreadCount} unread email(s)</p>
            </div>
          ) : null}
          <div className="list-group">
            {this.state.cflist
              ? Object.keys(this.state.cflist.val()).map((id) => {
                  let cf = this.state.cflist.val();
                  return (
                    <Link
                      key={id}
                      className={
                        "text-left list-group-item list-group-item-action no-text-decoration " +
                        (cf[id]["contactform_viewed"] ? " " : "email-unread")
                      }
                      to={{ pathname: `/email-details/${[id]}` }}
                    >
                      <div className="d-flex w-100 justify-content-between">
                        <h6 className="mb-2 text-dark">
                          <b>From:</b> {cf[id]["email"]}
                        </h6>
                        <small>
                          {this.getNumberOfDaysAgo(cf[id]["created_at"])} day(s)
                          ago
                        </small>
                      </div>
                      <small className="text-muted text-left">
                        <b>SUBJECT:</b> {cf[id]["message"]}
                      </small>
                    </Link>
                  );
                })
              : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Email;
