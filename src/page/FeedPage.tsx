import React from "react"
import Pencil from "../icon/pencil.svg";
import Logo from "../icon/dog.svg";
import Feed from "./Feed";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import "./FeedPage.scss";

function FeedPage() {
  const reviews = useSelector((state: RootState) => state.feeds);
  const feeds = reviews.map((r) => {
    return <Feed
      feedId={r.id}
      rating={r.rating}
      bookImg={r.img}
      title={r.title}
      comment={r.comment}
      content={r.content}
      heart={r.heart}
      reader={r.reader} />
  })
  return <div className="feedpage">
    <div className="feedpage-header">
      <div className="feedpage-header-logo">
        <img src={Logo} alt="logo" />
        <div className="feedpage-header-logo-title">개서리</div>
      </div>
      <img className="feedpage-header-pencil" src={Pencil} alt="pencil" />
    </div>
    {feeds}
  </div>
};

export default FeedPage;