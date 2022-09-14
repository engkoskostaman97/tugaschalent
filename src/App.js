import React, { Component } from "react";
import Home from "./component/Home";
import Account from "./component/Account";
import { Route, Routes, BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account/:index" element={<Account />} />
          </Routes >
        </BrowserRouter>

      </>

    );
  }
}
export default App;