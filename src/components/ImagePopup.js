function ImagePopup(){
    return (
        <section id="popup-img" className="popup popup_place_img">
          <div className="popup__img-container">
            <button id="close-img" type="button" className="popup__close popup__close_place_img"></button>
            <figure className="popup__figure">
              <img src="#" className="popup__img" />
              <figcaption className="popup__caption"></figcaption>
            </figure>
          </div>
        </section>
    )
}

export default ImagePopup;