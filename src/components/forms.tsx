import axios from "axios";
import { Component } from "react";
import "../styles/card-form.css";
export class Froms extends Component {
  state = {
    postTitle: "",
    postDiscription: "",
    postImg: "",
    errors: { postTitle: " ", postDisc: "", postImg: "" },
  };
  onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
      postTitle: e.target.value,
    });
    this.formValidation();
  };
  onChangeDisc = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
      postDiscription: e.target.value,
    });
    this.formValidation();
  };
  onChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
      postImg: e.target.value,
    });
    this.formValidation();
  };

  formValidation = () => {
    const { postTitle, postDiscription, postImg } = this.state;
    let validTitle = true;
    let validDisc = true;
    let validImg = true;
    const errors = { postTitle: " ", postDisc: "", postImg: "" };
    if (postTitle.trim().length < 5) {
      validTitle = false;
      console.log("invalid");
      errors.postTitle = "invalid";
    }
    if (
      postDiscription.trim().length < 5 ||
      postDiscription.trim().length > 200
    ) {
      validDisc = false;
      console.log("invalid");
      errors.postDisc = "invalid";
    }
    if (
      !postImg.match("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")
    ) {
      validImg = false;
      console.log("invalid");
      errors.postImg = "invalid";
    }
    this.setState({ errors });
    return validTitle && validImg && validDisc;
  };
  onSumit = (e: React.FormEvent) => {
    e.preventDefault();
    const validIs = this.formValidation();
    if (validIs) {
      console.log("valid");
      const newPost = {
        snippet: {
          publishedAt: Date.now(),
          title: this.state.postTitle,
          description: this.state.postDiscription,
          thumbnails: {
            medium: { url: this.state.postImg, width: 320, height: 180 },
          },
        },
        statistics: {
          viewCount: 0,
          likeCount: 0,
          dislikeCount: 0,
          favoriteCount: 0,
          commentCount: 0,
        },
      };
      axios.post("http://localhost:3001/posts", newPost);
    } else {
      console.log("no");
    }
  };

  render() {
    const { postTitle, postDiscription, postImg } = this.state;
    return (
      <div className="section">
        <form className="login_container" onSubmit={this.onSumit}>
          <div className="create">Create new card</div>
          <div className="info">
            <div>
              <label htmlFor="title">Title</label>
            </div>
            <input
              type="text"
              name="postTitle"
              data-testid="postingTitle"
              value={postTitle}
              placeholder="Title"
              onChange={this.onChangeTitle}
            />

            <div className="mistake">{this.state.errors.postTitle}</div>
          </div>
          <div className="info">
            <div>
              <label htmlFor="discription">Discription</label>
            </div>
            <input
              type="text"
              name="postDiscription"
              data-testid="postingDics"
              value={postDiscription}
              placeholder="Discription"
              onChange={this.onChangeDisc}
            />

            <div className="mistake">{this.state.errors.postDisc}</div>
          </div>
          <div className="info">
            <div>
              <label htmlFor="Img">Img</label>
            </div>
            <input
              type="text"
              name="postImg"
              data-testid="postingIMG"
              value={postImg}
              placeholder="Img"
              onChange={this.onChangeImg}
            />
            <div className="mistake">{this.state.errors.postImg}</div>
          </div>
          <div className="info">
            <div>
              <label htmlFor="Img">Date</label>
            </div>
            <input
              type="date"
              name="postImg"
              data-testid="postingIMG"
              value={postImg}
              placeholder="Img"
              onChange={this.onChangeImg}
            />
            <div className="mistake">{this.state.errors.postImg}</div>
          </div>
          <div className="info"></div>
          <button type="submit" id="creat" data-testid="postBut">
            Creat card
          </button>
        </form>
      </div>
    );
  }
}
