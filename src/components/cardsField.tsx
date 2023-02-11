import "../styles/cardField.css";
import data from "../data/videos.json";
import { SVGicons } from "../assets/svgIcons";
export function CardField() {
  function Clean() {
    localStorage.removeItem("Search");
  }

  return (
    <div>
      <div className="header">
        <a href="/creatForm">
          <button className="creat_form">Creat</button>
        </a>
        <input
          type="text"
          className="searchPlace"
          placeholder="Search..."
          onChange={(e) => localStorage.setItem("Search", e.target.value)}
        />
        <button className="search">search</button>
        <button onClick={Clean}>Clean LokalStorage</button>
      </div>
      <div className="page">
        {data.posts.map((card) => (
          <div key={card.id}>
            <div className="card">
              <img
                className="main_img"
                src={card.snippet.thumbnails.medium.url}
                alt="Card_IMG"
              />
              <div className="statistics">
                <button className="commentes">
                  <SVGicons id="comments" />
                </button>
                <div className="views">{card.statistics.likeCount}</div>
                <button className="commentes">
                  <SVGicons id="viewed" />
                </button>
                <div className="likes">{card.statistics.viewCount}</div>
                <button className="commentes">
                  <SVGicons id="likes" />
                </button>
                <div className="dislikes">{card.statistics.dislikeCount}</div>
                <button className="commentes">
                  <SVGicons id="dislike" />
                </button>
                <div className="comments">{card.statistics.commentCount}</div>
              </div>
              <div className="titile">{card.snippet.title}</div>
              <a>
                <button id="more">more...</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
