import React, { Component } from "react";
import "./App.css";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      feed: [],
      name: "",
      message: "",
    };
  }

  createPost() {
    console.log("create post");
    if (this.state.name !== "" && this.state.message!=="") {
      let updatingFeed = this.state.feed;
      let newPostObject = {name:this.state.name,message:this.state.message}

      updatingFeed.push(newPostObject); 
      this.setState({
        feed: updatingFeed,
        name: "",
        message: ""
      }); 
    } else alert("Please Fill Out Both Fields Before Pressing Post") 
  }

  render() {
    return (
      <div className="App">
        <header className="page-header">
          <div className="container">
            <img
              className="header-pic"
              src="https://scontent.fmia1-2.fna.fbcdn.net/v/t1.0-9/19059086_1784377821892860_5925592639836358930_n.jpg?oh=7fa1aecadda027e4d8e83b650083cfaa&oe=5B1E12EB"
            />
            <h1>The @AlanThinks Feed</h1>
          </div>
        </header>
        <div className="container">
          <div className="first frame">
            <h2>Submit Your Message</h2>
            <div className="photo">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-margin"
                    id="nameInput"
                    placeholder="Your Name"
                    onChange={e => this.setState({ name: e.target.value })}
                    value={this.state.name}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control input-margin"
                    id="messageInput"
                    rows="3"
                    placeholder="Enter Message Here"
                    onChange={e => this.setState({ message: e.target.value })}
                    value={this.state.message}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => this.createPost()}
                >
                  Post
                </button>
              </form>
            </div>
            <div className="caption" />
          </div>
          <Feed allPosts = {this.state.feed}/>
        </div>
      </div>
    );
  }
}

export default App;

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: props.allPosts
    };
  }
  render() {
    return (
      <div>
      {
        this.state.allPosts.map((postObject,index,arr)=>{
          return(
      <div className="frame">
        <h2>{postObject.name}</h2>
        <div className="photo">
          <img src="https://scontent.fmia1-2.fna.fbcdn.net/v/t1.0-9/25994838_1878994825764492_4334127421007341285_n.jpg?oh=737e7b635c8de6c7a8ab3b50a936ce46&oe=5B1089B2" />
        </div>
        <div className="caption">
          <p>{postObject.message}</p>
        </div>
      </div>
    )})
  } </div>
  );
  }
}
