import React from "react";
import { api } from "../utils/api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUser()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  React.useEffect(() => {
    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <main className="main-content">
      <section className="profile">
        <div className="profile__wrapper">
          <button
            className="profile__avatar-btn"
            onClick={props.onEditAvatar}
            style={{ backgroundImage: `url(${userAvatar})` }}
          >
            <div className="profile__avatar"></div>
          </button>
          <div className="profile__info">
            <div className="profile__title-inner">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-btn"
                type="button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-btn"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="places">
        {cards.map((card) => {
          return (
            <Card key={card._id} card={card} onCardClick={props.onCardClick}/>
          );
        })}
      </section>
    </main>
  );
}

export default Main;
