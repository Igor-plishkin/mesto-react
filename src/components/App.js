import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  

  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <div className="popup popup_edit-profile">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <button className="popup__close-btn" type="reset"></button>
          <form
            className="popup__form"
            method="POST"
            name="profileNameForm"
            novalidate
          >
            <div className="popup__form-field">
              <input
                className="popup__input popup__input_name"
                id="profile-name"
                type="text"
                name="name"
                placeholder="Имя"
                required
                minlength="2"
                maxlength="40"
              />
              <span className="popup__error" id="profile-name-error"></span>
            </div>
            <div className="popup__form-field">
              <input
                className="popup__input popup__input_job"
                id="profile-job"
                type="text"
                name="about"
                placeholder="О себе"
                required
                minlength="2"
                maxlength="200"
              />
              <span className="popup__error" id="profile-job-error"></span>
            </div>
            <button className="popup__submit-btn" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_add-place">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <button className="popup__close-btn" type="reset"></button>
          <form
            className="popup__form"
            method="POST"
            name="placeNameForm"
            novalidate
          >
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
            <button className="popup__submit-btn" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_avatar">
        <div className="popup__container popup__avatar-container">
          <h2 className="popup__title">Обновить аватар</h2>
          <button className="popup__close-btn" type="reset"></button>
          <form
            className="popup__form"
            method="POST"
            name="avatarForm"
            novalidate
          >
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
            <button className="popup__submit-btn" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_delete-card">
        <div className="popup__container popup__delete-container">
          <h2 className="popup__title popup__delete-title">Вы уверены?</h2>
          <button className="popup__close-btn" type="reset"></button>
          <form
            className="popup__form"
            method="POST"
            name="confirmDeleteCard"
            novalidate
          >
            <button className="popup__submit-btn" type="submit">
              Да
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_zoom-place">
        <div className="popup__container-place">
          <button className="popup__close-btn" type="button"></button>
          <img className="popup__place-image" src="#" alt="Эльбрус" />
          <h2 className="popup__place-title"></h2>
        </div>
      </div>
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
