function ImagePopup() {
  return (
    <div className="popup popup_zoom-place">
        <div className="popup__container-place">
          <button className="popup__close-btn" type="button"></button>
          <img className="popup__place-image" src="#" alt="Эльбрус" />
          <h2 className="popup__place-title"></h2>
        </div>
      </div>
  );
}

export default ImagePopup;