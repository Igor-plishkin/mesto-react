function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="place">
      <button className="place__delete-btn" type="button"></button>
      <div
        className="place__image"
        style={{ backgroundImage: `url(${props.card.link})` }}
        onClick={handleClick}
      ></div>
      <div className="place__footer">
        <h2 className="place__name">{props.card.name}</h2>
        <div className="place__like-wrapper">
          <button className="place__like" type="button"></button>
          <p className="place__counter">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}
export default Card;
