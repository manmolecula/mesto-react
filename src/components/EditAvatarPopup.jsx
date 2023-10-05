import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

function EditAvatarPopup(props){

    const avatarRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
        props.onClose();
        avatarRef.current.value = null;
      }

    return(
        <PopupWithForm onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} name='avatar' title='Обновить аватар' buttonText="Создать">
            <div className="popup__input-span">
              <input ref={avatarRef} required id="form-avatar-link" className="popup__input popup__input_profile_subtitle" name="avatar" type="url" placeholder="Ссылка на картинку" />
              <span id="avatar-error" className="popup__error"></span>
            </div>
          </PopupWithForm>
    )
}

export default EditAvatarPopup;