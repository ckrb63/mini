import React from "react"
import Exit from "../icon/exit.svg";
import Star from "../icon/star.svg";
import Comment from "../icon/comment.svg";
import Heart from "../icon/heart.svg";
import Empty from "../icon/star-empty.svg";
import "./Feed.scss";

interface FeedProp {
  feedId: number;
  title: string;
  reader: string;
  bookImg: string;
  content: string;
  rating: number;
  comment: number;
  heart: number;
}

function Feed({ feedId, title, reader, bookImg, content, rating, comment, heart }: FeedProp) {
  let stars;
  if (rating === 5) {
    stars = <div className="stars">
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
    </div>
  } else if (rating === 4) {
    stars = <div className="stars">
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Empty} alt="star" />
    </div>
  } else if (rating === 3) {
    stars = <div className="stars">
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Empty} alt="star" />
      <img src={Empty} alt="star" />
    </div>
  } else if (rating === 2) {
    stars = <div className="stars">
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Empty} alt="star" />
      <img src={Empty} alt="star" />
      <img src={Empty} alt="star" />
    </div>
  } else if (rating === 1) {
    stars = <div className="stars">
      <img src={Star} alt="star" />
      <img src={Empty} alt="star" />
      <img src={Empty} alt="star" />
      <img src={Empty} alt="star" />
      <img src={Empty} alt="star" />
    </div>
  }
  return <div className="feed">
    <img className="feed-img" src={bookImg} alt="feed-img" />
    <div className="feed-info">
      <div className="feed-info-header">
        <div className="feed-info-header-title">
          <div className="feed-info-header-title-t">
            {title}
          </div>
          <span>읽은이 : {reader}</span>
        </div>
        <img src={Exit} alt="x" />
      </div>
      <p>{content}</p>
      <div className="feed-info-rating">
        {stars}
        <div className="feed-info-rating-icon">
          <img className="feed-info-rating-comment" src={Comment} alt="comment" />
          {comment}
          <img className="feed-info-rating-heart" src={Heart} alt="heart" />
          {heart}
        </div>
      </div>
    </div>
  </div>
};

export default Feed;