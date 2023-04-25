import React, { useMemo, useState } from "react";
import Star from "../icon/star.svg";
import Empty from "../icon/star-empty.svg";
import { books } from "./books";

interface book {
  title: string;
  img: string;
}

function PostPage() {
  const [rating, setRating] = useState(0);
  const [entered, setEntered] = useState('');
  const [image, setImage] = useState('');
  const [option, setOption] = useState<book[]>([]);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEntered(e.target.value);
    if (e.target.value.length > 1) {
      const autoComplete = books.filter((book) => {
        return book.title.includes(e.target.value);
      });
      setOption(autoComplete);
    }
  };

  const autoCompleteContext = option.map((book) => {
    const onClickHandler = () => {
      setOption([]);
      setEntered(book.title);
      setImage(book.img);
    };
    return <div className="post-title-auto" aria-hidden onClick={onClickHandler}>
      {book.title}
    </div>
  })

  console.log(autoCompleteContext);

  const stars = useMemo(() => {
    return <div className="post-stars">
      <img id="1" src={rating > 0 ? Star : Empty} alt="star" onClick={() => setRating(1)} />
      <img src={rating > 1 ? Star : Empty} alt="star" onClick={() => setRating(2)} />
      <img src={rating > 2 ? Star : Empty} alt="star" onClick={() => setRating(3)} />
      <img src={rating > 3 ? Star : Empty} alt="star" onClick={() => setRating(4)} />
      <img src={rating > 4 ? Star : Empty} alt="star" onClick={() => setRating(5)} />
    </div>
  }, [rating]);

  return <div className="post">
    <div className="post-title">글쓰기</div>
    <img className="post-save" src="" alt="save" />
    {stars}
    <input placeholder="책 이름" onChange={inputChangeHandler} />
    {option.length > 0 && entered.length > 0 && autoCompleteContext}
    <input placeholder="내용을 입력하세요" />
  </div>
};

export default PostPage;