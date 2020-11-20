import "./App.css";

import axios from "axios";

import React from "react";

//standard component for listing
import Listing from "./components/listing";

//datastructure
import { Data } from "./components/datastructure";

//props
type Props = {
  data?: Array<any>;
};
export default class App extends React.Component<
  {},
  { data: Array<any>; loading: boolean }
> {
  constructor(props: Props) {
    super(props);

    //state
    this.state = {
      data: [],
      loading: false,
    };
  }
  componentDidMount() {
    axios.get(`https://www.reddit.com/r/pics/.json`).then((res) => {
      const data = res.data.data.children.map((ele: any) => {
        return new Data(ele.data); // own data structure
      });
      console.log(data);
      //new state
      this.setState({ data, loading: true });
    });
  }

  render() {
    const { data } = this.state;
    return (
      //**===============================template================================== */
      <div className="App">
        {this.state.loading ? <Listing data={data} /> : "Loading..."}
      </div>
    );
  }
}
