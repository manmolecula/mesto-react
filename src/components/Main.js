function Main(props) {
    return (
        <main className="main">
            <section className="profile">
                <div onClick={props.onEditAvatar} className="profile__overlay">
                    <img src="#" alt="Фото профиля" className="profile__avatar" />
                </div>
                <div className="profile__profile-info">
                    <div className="profile__profile-title">
                        <h1 className="profile__name"></h1>
                        <button onClick={props.onEditProfile} type="button" className="profile__edit-btn"></button>
                    </div>
                    <p className="profile__subtitle"></p>
                </div>
                <button onClick={props.onAddPlace} type="button" className="profile__add-btn"></button>
            </section>
            <section className="elements">
                <ul className="elements__list">
                </ul>
            </section>
        </main>
    )
}

export default Main;