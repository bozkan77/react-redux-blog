import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

// custom components
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import AddContent from "./components/AddContent";




function App() {
  
  return (
    <Router>
    <div className="main-container">
      <Header title={'React - Redux - Blog'} />
      
      <section className="ui raised very padded text container segment">
        <Route path="/" exact component={PostList} />
        <Route path="/posts/:id"  component={PostDetail} />
        <Route path="/add-content"  component={AddContent} />
      </section>
    </div>
    </Router>
  );
}
export default App;
