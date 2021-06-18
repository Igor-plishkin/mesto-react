function PopupWithForm(props) {
  return (
      <div className={`popup popup_${props.name} ${props.isOpen}`}>
        <div className="popup__container">
          <h2 className="popup__title">{props.title}</h2>
          <button className="popup__close-btn" type="reset"></button>
          <form
            className="popup__form"
            method="POST"
            name={props.name}
            novalidate
          >
          {props.children}
            <button className="popup__submit-btn" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
  );
}

export default PopupWithForm;
