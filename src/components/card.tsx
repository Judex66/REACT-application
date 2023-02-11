import { SVGicons } from "../assets/svgIcons";
import "../styles/erroPage.css";
import { InfoType } from "../Interface/interface";

export const Card: React.FC<InfoType> = (cardinfo: InfoType) => {
  return (
    <div className="card">
      <img
        className="main_img"
        src={cardinfo.cardinfo.snippet.thumbnails.medium.url}
        alt="Card_IMG"
      />
      <div className="statistics">
        <button className="commentes">
          <SVGicons id="comments" />
        </button>
        <div className="views">{cardinfo.cardinfo.statistics.likeCount}</div>
        <button className="commentes">
          <SVGicons id="viewed" />
        </button>
        <div className="likes">{cardinfo.cardinfo.statistics.viewCount}</div>
        <button className="commentes">
          <SVGicons id="likes" />
        </button>
        <div className="dislikes">
          {cardinfo.cardinfo.statistics.dislikeCount}
        </div>
        <button className="commentes">
          <SVGicons id="dislike" />
        </button>
        <div className="comments">
          {cardinfo.cardinfo.statistics.commentCount}
        </div>
      </div>
      <div className="titile">{cardinfo.cardinfo.snippet.title}</div>
      <a>
        <button id="more">more...</button>
      </a>
    </div>
  );
};
