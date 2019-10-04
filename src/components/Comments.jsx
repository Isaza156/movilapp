import React from "react";
import { MockComment } from "../assets/utils/mocks/comments";

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: this.props.data.uid,
      text: this.props.data.texto
    }
  }

  render() {
    const { userName, text } = this.state
    return (
      <React.Fragment>
        <div className="container mx-auto text-left mt-2 animated slideInRight w-100">
          <div className="card">
            <div className="card-body">
              <h5>
                {userName}
              </h5>
              <p>
                {text}
              </p>
              <div className="btn btn-sm bg-orange text-white">
                <i className="fas fa-star mr-3"></i>
                Like
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Comments;
