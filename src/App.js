

function App() {
  return (
    <div class="page">
    <header class="header">
      <div class="header__logo"></div>
    </header>
    <main class="main-content">
      <section class="profile">
        <div class="profile__wrapper">
          <button class="profile__avatar-btn">
            <div class="profile__avatar"></div>
          </button>
          <div class="profile__info">
            <div class="profile__title-inner">
              <h1 class="profile__name">Жак-Ив Кусто</h1>
              <button class="profile__edit-btn" type="button"></button>
            </div>
            <p class="profile__job">Исследователь океана</p>
          </div>
        </div>
        <button class="profile__add-btn" type="button"></button>
      </section>
      <section class="places">
      </section>
    </main>
    <footer class="footer">
      <p class="footer__copy">© 2020 Mesto Russia</p>
    </footer>
    <div class="popup popup_edit-profile">
      <div class="popup__container">
        <h2 class="popup__title">Редактировать профиль</h2>
        <button class="popup__close-btn" type="reset"></button>
        <form class="popup__form" method="POST" name="profileNameForm" novalidate>
          <div class="popup__form-field">
            <input class="popup__input popup__input_name" id="profile-name" type="text" name="name" placeholder="Имя"
              required minlength="2" maxlength="40"/>
            <span class="popup__error" id="profile-name-error"></span>
          </div>
          <div class="popup__form-field">
            <input class="popup__input popup__input_job" id="profile-job" type="text" name="about" placeholder="О себе"
              required minlength="2" maxlength="200"/>
            <span class="popup__error" id="profile-job-error"></span>
          </div>
          <button class="popup__submit-btn" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
    <div class="popup popup_add-place">
      <div class="popup__container">
        <h2 class="popup__title">Новое место</h2>
        <button class="popup__close-btn" type="reset"></button>
        <form class="popup__form" method="POST" name="placeNameForm" novalidate>
          <div class="popup__form-field">
            <input class="popup__input popup__input_name" id="place-name" type="text" name="name" placeholder="Название"
              required minlength="2" maxlength="30"/>
            <span class="popup__error" id="place-name-error">Ошибка</span>
          </div>
          <div class="popup__form-field">
            <input class="popup__input popup__input_url" id="place-url" type="url" name="link"
              placeholder="Ссылка на картинку" required/>
            <span class="popup__error" id="place-url-error"></span>
          </div>
          <button class="popup__submit-btn" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
    <div class="popup popup_avatar">
      <div class="popup__container popup__avatar-container">
        <h2 class="popup__title">Обновить аватар</h2>
        <button class="popup__close-btn" type="reset"></button>
        <form class="popup__form" method="POST" name="avatarForm" novalidate>
          <div class="popup__form-field">
            <input class="popup__input popup__input_url" id="avatar-url" type="url" name="avatar"
              placeholder="Ссылка на картинку" required/>
            <span class="popup__error" id="avatar-url-error"></span>
          </div>
          <button class="popup__submit-btn" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
    <div class="popup popup_delete-card">
      <div class="popup__container popup__delete-container">
        <h2 class="popup__title popup__delete-title">Вы уверены?</h2>
        <button class="popup__close-btn" type="reset"></button>
        <form class="popup__form" method="POST" name="confirmDeleteCard" novalidate>
          <button class="popup__submit-btn" type="submit">Да</button>
        </form>
      </div>
    </div>
    <div class="popup popup_zoom-place">
      <div class="popup__container-place">
        <button class="popup__close-btn" type="button"></button>
        <img class="popup__place-image" src="#" alt="Эльбрус"/>
        <h2 class="popup__place-title"></h2>
      </div>
    </div>
    <template class="template__place">
      <article class="place">
        <button class="place__delete-btn" type="button"></button>
        <div class="place__image">
        </div>
        <div class="place__footer">
          <h2 class="place__name">Карачаево-Черкессия</h2>
          <div class="place__like-wrapper">
            <button class="place__like" type="button"></button>
            <p class="place__counter"></p>
          </div>
        </div>
      </article>
    </template>
  </div>
  );
}

export default App;
