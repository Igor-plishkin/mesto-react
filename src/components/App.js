import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      {isEditAvatarPopupOpen && (
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          children={
            <div className="popup__form-field">
              <input
                className="popup__input popup__input_url"
                id="avatar-url"
                type="url"
                name="avatar"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__error" id="avatar-url-error"></span>
            </div>
          }
          isOpen="popup_opened"
        />
      )}
      {isEditProfilePopupOpen && (
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          children={
            <div className="popup__form-field">
              <input
                className="popup__input popup__input_url"
                id="avatar-url"
                type="url"
                name="avatar"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__error" id="avatar-url-error"></span>
            </div>
          }
          isOpen="popup_opened"
        />
      )}
      {isAddPlacePopupOpen && (
        <PopupWithForm
          name="add-place"
          title="Новое место"
          children={
            <>
              <div className="popup__form-field">
                <input
                  className="popup__input popup__input_name"
                  id="place-name"
                  type="text"
                  name="name"
                  placeholder="Название"
                  required
                  minlength="2"
                  maxlength="30"
                />
                <span className="popup__error" id="place-name-error">
                  Ошибка
                </span>
              </div>
              <div className="popup__form-field">
                <input
                  className="popup__input popup__input_url"
                  id="place-url"
                  type="url"
                  name="link"
                  placeholder="Ссылка на картинку"
                  required
                />
                <span className="popup__error" id="place-url-error"></span>
              </div>
            </>
          }
          isOpen="popup_opened"
        />
      )}

      <template className="template__place">
        <article className="place">
          <button className="place__delete-btn" type="button"></button>
          <div className="place__image"></div>
          <div className="place__footer">
            <h2 className="place__name">Карачаево-Черкессия</h2>
            <div className="place__like-wrapper">
              <button className="place__like" type="button"></button>
              <p className="place__counter"></p>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
