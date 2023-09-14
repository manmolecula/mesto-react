import React from 'react';
import { useState } from 'react';
import '../index.css';
import trashIcon from '../images/Trash.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  return (
    <body className="body">
      <div className="root">

        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />

        <PopupWithForm isOpen={isAddPlacePopupOpen} name='add' title='Новое место'>
          <div className="popup__input-span">
            <input required minLength="2" maxLength="30" id="form-title" className="popup__input popup__input_profile_name" name="title" type="text" placeholder="Название" />
            <span id="title-error" className="popup__error"></span>
          </div>
          <div className="popup__input-span">
            <input required id="form-link" className="popup__input popup__input_profile_subtitle" name="link" type="url" placeholder="Ссылка на картинку" />
            <span id="link-error" className="popup__error"></span>
          </div>
          <button className="popup__btn" type="submit">Создать</button>
        </PopupWithForm>

        <PopupWithForm isOpen={isEditProfilePopupOpen} name='edit' title='Редактировать профиль'>
          <div className="popup__input-span">
            <input required minLength="2" maxLength="40" id="form-name" className="popup__input popup__input_profile_name" name="name" type="text" placeholder="Введите новое имя" />
            <span id="name-error" className="popup__error"></span>
          </div>
          <div className="popup__input-span">
            <input required minLength="2" maxLength="200" id="form-sub" className="popup__input popup__input_profile_subtitle" name="info" type="text" placeholder="Введите новое описание" />
            <span id="info-error" className="popup__error"></span>
          </div>
          <button className="popup__btn" type="submit">Сохранить</button>
        </PopupWithForm>

        <PopupWithForm isOpen={isEditAvatarPopupOpen} name='avatar' title='Обновить аватар'>
          <div className="popup__input-span">
            <input required id="form-avatar-link" className="popup__input popup__input_profile_subtitle" name="avatar" type="url" placeholder="Ссылка на картинку" />
            <span id="avatar-error" className="popup__error"></span>
          </div>
          <button className="popup__btn" type="submit">Создать</button>
        </PopupWithForm>

        <PopupWithForm name='sure' title='Вы уверены?'>
          <button className="popup__sure-btn" type="submit">Да</button>
        </PopupWithForm>

        <ImagePopup />
      </div>
      <template id="card">
        <li className="elements__el">
          <img src={trashIcon} alt="Удалить" className="elements__trash" />
          <img id="new-img" src="#" className="elements__img" />
          <div className="elements__subtitle">
            <h2 id="new-place" className="elements__place"></h2>
            <ul className="elements__likelist">
              <button type="button" className="elements__like"></button>
              <p className="elements__like-number"></p>
            </ul>
          </div>
        </li>
      </template>
    </body>
  );
}

export default App;
