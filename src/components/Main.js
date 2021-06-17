function Main() {
  function handleEditAvatarClick() {}

  function handleEditProfileClick() {}

  function handleAddPlaceClick() {}

  return (
    <main className="main-content">
      <section className="profile">
        <div className="profile__wrapper">
          <button className="profile__avatar-btn">
            <div className="profile__avatar"></div>
          </button>
          <div className="profile__info">
            <div className="profile__title-inner">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button className="profile__edit-btn" type="button"></button>
            </div>
            <p className="profile__job">Исследователь океана</p>
          </div>
        </div>
        <button className="profile__add-btn" type="button"></button>
      </section>
      <section className="places"></section>
    </main>
  );
}

export default Main;
