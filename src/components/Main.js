function Main(props) {
  

  return (
    <main className="main-content">
      <section className="profile">
        <div className="profile__wrapper">
          <button className="profile__avatar-btn" onClick={props.onEditAvatar}>
            <div className="profile__avatar"></div>
          </button>
          <div className="profile__info">
            <div className="profile__title-inner">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button className="profile__edit-btn" type="button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__job">Исследователь океана</p>
          </div>
        </div>
        <button className="profile__add-btn" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="places"></section>
    </main>
  );
}

export default Main;
