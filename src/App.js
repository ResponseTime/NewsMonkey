import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  state = {
    progress: 0,
    mode: "light",
  };
  changeMode = () => {
    if (this.state.mode == "light") {
      this.setState({ mode: "dark" });
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
    } else {
      this.setState({ mode: "light" });
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  setProgress = (value) => {
    this.setState({ progress: value });
  };
  name = "app";
  pageSize = 6;
  render() {
    return (
      <>
        <Router>
          <LoadingBar
            color="#f11946"
            height={4}
            progress={this.state.progress}
          />
          <Navbar mode={this.state.mode} set={this.changeMode} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  mode={this.state.mode}
                  set={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  mode={this.state.mode}
                  set={this.setProgress}
                  key="business"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"business"}
                />
              }
            />
            <Route
              exact
              path="/tech"
              element={
                <News
                  mode={this.state.mode}
                  set={this.setProgress}
                  key="tech"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"technology"}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  mode={this.state.mode}
                  set={this.setProgress}
                  key="health"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"health"}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  mode={this.state.mode}
                  set={this.setProgress}
                  key="science"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  mode={this.state.mode}
                  set={this.setProgress}
                  key="sports"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"sports"}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  mode={this.state.mode}
                  set={this.setProgress}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"entertainment"}
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
