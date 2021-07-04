import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  const cardDeleteButtonClassName = `place__delete-btn ${
    isOwn && 'place__delete-btn_active'
  }`;
  const cardLikeButtonClassName = `place__like ${
    isLiked && 'place__like_active'
  }`;
  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <article className="place">
      <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
      <div
        className="place__image"
        style={{ backgroundImage: `url(${props.card.link})` }}
        onClick={handleClick}
      ></div>
      <div className="place__footer">
        <h2 className="place__name">{props.card.name}</h2>
        <div className="place__like-wrapper">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
          <p className="place__counter">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}
export default Card;
