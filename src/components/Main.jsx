import { useEffect } from "react";
import { useState } from "react";
import api from '../utils/Api';
import Card from "./Card";
import trashIconImg from '../images/Trash.svg';
function Main(props) {

    const [userName, setUserName] = useState();
    const [userDescription, setUserDescription] = useState();
    const [userAvatar, setUserAvatar] = useState();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo()
            .then((data) => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
        api.getInitialCards()
            .then((data) => {
                setCards(data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <main className="main">
            <section className="profile">
                <div onClick={props.onEditAvatar} className="profile__overlay">
                    <img src={userAvatar} alt="Фото профиля" className="profile__avatar" />
                </div>
                <div className="profile__profile-info">
                    <div className="profile__profile-title">
                        <h1 className="profile__name">{userName}</h1>
                        <button onClick={props.onEditProfile} type="button" className="profile__edit-btn"></button>
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button onClick={props.onAddPlace} type="button" className="profile__add-btn"></button>
            </section>
            <section className="elements">
                <ul className="elements__list">
                    {cards.map((card) => (
                        <Card onCardClick={props.onCardClick} key={card._id} link={card.link} name={card.name} likes={card.likes.length} trashIcon={trashIconImg} />
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Main;