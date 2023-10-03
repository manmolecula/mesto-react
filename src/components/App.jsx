import { useEffect, useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { Api } from '../utils/api';
import configApi from '../utils/const';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [cards, setCards] = useState([]);

  const api = new Api(configApi);

  useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch(err => console.error(err));
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch(err => console.log(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLike(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(err => console.log(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((cards) => {
          cards.filter(item => item._id !== card._id);
        });
      })
      .catch(err => console.log(err));
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="root">
          <Header />
          <Main
            cards={cards}
            onCardDelete={handleCardDelete}
            onCardLike={handleCardLike}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />

          <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name='add' title='Новое место' buttonText="Создать">
            <div className="popup__input-span">
              <input required minLength="2" maxLength="30" id="form-title" className="popup__input popup__input_profile_name" name="title" type="text" placeholder="Название" />
              <span id="title-error" className="popup__error"></span>
            </div>
            <div className="popup__input-span">
              <input required id="form-link" className="popup__input popup__input_profile_subtitle" name="link" type="url" placeholder="Ссылка на картинку" />
              <span id="link-error" className="popup__error"></span>
            </div>
          </PopupWithForm>

          <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name='edit' title='Редактировать профиль' buttonText="Сохранить">
            <div className="popup__input-span">
              <input required minLength="2" maxLength="40" id="form-name" className="popup__input popup__input_profile_name" name="name" type="text" placeholder="Введите новое имя" />
              <span id="name-error" className="popup__error"></span>
            </div>
            <div className="popup__input-span">
              <input required minLength="2" maxLength="200" id="form-sub" className="popup__input popup__input_profile_subtitle" name="info" type="text" placeholder="Введите новое описание" />
              <span id="info-error" className="popup__error"></span>
            </div>
          </PopupWithForm>

          <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name='avatar' title='Обновить аватар' buttonText="Создать">
            <div className="popup__input-span">
              <input required id="form-avatar-link" className="popup__input popup__input_profile_subtitle" name="avatar" type="url" placeholder="Ссылка на картинку" />
              <span id="avatar-error" className="popup__error"></span>
            </div>
          </PopupWithForm>

          <PopupWithForm name='sure' title='Вы уверены?' onClose={closeAllPopups} buttonText="Да">
          </PopupWithForm>

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
