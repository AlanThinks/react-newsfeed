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
  checkForEnterKey(e) {
    if (e.which === 13) {
      this.createPost(); // After checking for the key #13, the function addToTaskList is executed
    }
  }
  createPost() {
    console.log("Post Created");
    const images = [
      "https://scontent.fmia1-2.fna.fbcdn.net/v/t1.0-9/25994838_1878994825764492_4334127421007341285_n.jpg?oh=737e7b635c8de6c7a8ab3b50a936ce46&oe=5B1089B2",
      "https://scontent.fmia1-2.fna.fbcdn.net/v/t1.0-9/27337074_1897483883915586_3491382990945963179_n.jpg?oh=df264084b296570ddc93d9dc2b2c67d1&oe=5B210AB4",
      "https://upload.wikimedia.org/wikipedia/commons/9/91/F-15_vertical_deploy.jpg",
      "https://images.fineartamerica.com/images-medium-large/reflections-of-longs-peak-vertical-image-james-bo-insogna.jpg",
      "https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Nature-1080-x-1920-Image-Vertical-PIC-WPD004233.jpg"
    ];
    let randomIndex = Math.floor(Math.random() * 5);
    let randomImageUrl = images[randomIndex];


    if (this.state.name !== "" && this.state.message !== "") {
      let updatingFeed = this.state.feed;
      let newPostObject = {
        name: this.state.name,
        message: this.state.message,
        image: randomImageUrl
      };

      updatingFeed.unshift(newPostObject);

      this.setState({
        feed: updatingFeed,
        name: "",
        message: "",
      });
    } else alert("Please Fill Out Both Fields Before Pressing Post");
  }

  render() {
    return (
      <div className="App">
        <header className="page-header">
          <div className="container">
            <img
              alt="cool nature alanthinks shot"
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
                    onKeyDown={e=>this.checkForEnterKey(e)}
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
          <Feed allPosts={this.state.feed} />
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
      allPosts: props.allPosts,
    };
  }

  render() {
    return (
      <div>
        {this.state.allPosts.map((postObject, index, arr) => {
          return (
            <div className="frame" key={postObject + index}>
              <h2>{postObject.name}</h2>
              <div className="photo">
                {console.log("current:", this.state)}

                <img
                  alt="cool nature alanthinks shot"
                  src={postObject.image}
                />
              </div>
              <div className="caption">
                <p>{postObject.message}</p>
              </div>
            </div>
          );
        })}{" "}
      </div>
    );
  }
}
