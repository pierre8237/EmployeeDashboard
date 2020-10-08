import React, { Component, Fragment } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";
import API from "../utils/API";
export default class DataArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filteredUsers: []
    };
  }

  componentDidMount() {
    API.searchUsers
      .then(response =>
        // handle success
        //console.log(response.data.results);
        this.setState({ users: response.data.results })
      )
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  headings = [
    { name: "Image" },
    { name: "Name" },
    { name: "Phone" },
    { name: "Email" },
    { name: "DOB" }
  ];

  handleSearchChange = event => {
    console.log(event.target.value);
  };

  render() {
    console.log(this.state.users);
    return (
      <Fragment>
        <Nav handleSearchChange={this.handleSearchChange} />
        <div className="data-area">
          <DataTable
            headings={this.headings}
            users={this.state.filteredUsers}
          />
        </div>
      </Fragment>
    );
  }
}
