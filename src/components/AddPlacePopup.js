import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const nameRef = React.createRef();
  const linkRef = React.createRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="add-place"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <div className="popup__form-field">
        <input
          className="popup__input popup__input_name"
          id="place-name"
          type="text"
          name="name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          ref={nameRef}
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
          ref={linkRef}
        />
        <span className="popup__error" id="place-url-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
