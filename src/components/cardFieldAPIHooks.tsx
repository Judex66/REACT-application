import "../styles/cardField.css";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import axios from "axios";
import Pagination from "./pagination";
import { Link } from "react-router-dom";
import { data } from "../../../data";
import { SVGicons } from "../assets/svgIcons";

// interface Data {
//   flags: Flags;
//   name: Name;
//   key: number;
//   i: null;
//   population: string;
// }

// interface Name {
//   common: string;
//   official: string;
// }
// interface Flags {
//   png: string;
// }
interface Data {
  id: string;
  snippet: Snippet;

  statistics: Statistics;
}
interface Statistics {
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  favoriteCount: number;
  commentCount: number;
}
interface Snippet {
  publishedAt: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
}
interface Thumbnails {
  medium: Medium;
}
interface Medium {
  url: string;
  width: number;
  height: number;
}

export function CardFieldHook() {
  const [post, setPost] = useState(Array<Data>());
  const [loading, setloading] = useState(false);
  const [modalData, setModalData] = useState<Data | null>(null);
  const [forDatafull, setforDataFull] = useState({});
  const [filters, setFilter] = useState("");
  const [searchResalt, setSearchResult] = useState(Array<Data>());
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setPost(res.data);
      setloading(true);
    });
    const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);
    const filteredData = currentPosts.filter((card) => {
      console.log(filters);
      return card.snippet.title.toLowerCase().includes(filters.toLowerCase());
    });
    setSearchResult(filteredData);
  });
  const onClose = () => setModalData(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    console.log(e.target.value);
  };
  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);
  return (
    <div>
      <div className="header">
        <input
          type="text"
          className="searchPlace"
          placeholder="Search..."
          onChange={handleChange}
        />
        <button className="search">search</button>
      </div>
      {!loading ? (
        <div>Loading</div>
      ) : (
        <div className="page">
          {searchResalt.map((card) => (
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
                  <button
                    id="more"
                    onClick={() => {
                      setModalData(card);
                    }}
                  >
                    more...
                  </button>
                </a>
              </div>
            </div>
          ))}
          <Modal isOpen={!!modalData} onRequestClose={onClose}>
            {modalData && (
              <div className="container">
                <a href="main">
                  <img src="../assets/back_button.png" alt="" />
                </a>
                <div className="main_flex">
                  <img src={modalData.snippet.thumbnails.medium.url} alt="" />
                  <div className="information">
                    <div className="text_info">
                      <div className="titltes">
                        <p className="title">{modalData.snippet.publishedAt}</p>
                        <p className="time">{modalData.id}</p>
                        <p className="time">{modalData.snippet.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Modal>
        </div>
      )}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={post.length}
        paginate={paginate}
      />
    </div>
  );
}
