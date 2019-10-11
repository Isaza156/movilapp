import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/CardPqrs";
import CallToAction from "../components/CallToAction";

export default class FeedSugerencias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      esQueja: false
    };
  }

  async traerTodo() {
    try {
      let data = await fetch("https://aka-geek.appspot.com/api/publicaciones/");
      data = await data.json();

      data = data
        .filter(post => post.esQueja === false)
        .sort((b, a) => a.timestamp - b.timestamp);

      console.log(data);

      this.setState({ data });
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.traerTodo();
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid text-right pt-5 mt-5">
          <Link to="/quejas" className="align-top text-dark">
            Ir a quejas
            <li className="fas fa-chevron-right fa-2x color-orange align-middle"></li>
          </Link>
        </div>
        <div className="container mb-5">
          {!this.state.data
            ? "loading feed..."
            : this.state.data.map((entry, i) => <Card data={entry} key={i} />)}
        </div>
        <CallToAction laQueja={this.state.esQueja} />
      </React.Fragment>
    );
  }
}
