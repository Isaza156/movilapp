import React from "react";
import { MockComment } from "../assets/utils/mocks/comments";

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.mocks = {
      MockComment
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.mocks.MockComment.map(comment => {
          return (
            <div className="container mx-auto text-right mt-2 animated slideInUp" key={comment.id}>
              <div className="card">
                <div className="card-body">
                  <p>
                      {comment.body}
                  </p>
                  <a href="/" className="btn btn-small bg-orange text-white">
                    Comentar
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Comments;
