import React from "react"
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Heart from "../icon/heart.svg";
import Logo from "../icon/dog.svg";
import "./FeedDetail.scss";
import Back from "./Back";

function FeedDetail() {
  const feed = useSelector((state: RootState) => state.currentPost);
  return <div className="detail">
    <Back />
    <img className="detail-logo" src={Logo} alt="logo" />
    <img className="detail-img" src={feed.bookImg} alt="bookimg" />
    <div className="detail-title">{feed.title}
      <div className="detail-reader">읽은이 : {feed.reader}</div></div>

    <p className="detail-content">{feed.content}</p>
    <div className="detail-heart">
      <img src={Heart} alt="heart" />
      <div className="detail-heart-count">{feed.heart}</div>
    </div>
    <div className="detail-comments">
      {feed.comment}
    </div>
  </div>
};

export default FeedDetail;