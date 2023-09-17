function Card(props) {

    function handleClick() {
        const card = { link: props.link, name: props.name };
        props.onCardClick(card);
    }

    return (
        <li className="elements__el">
            <img src={props.trashIcon} alt="Удалить" className="elements__trash" />
            <img onClick={handleClick} alt={props.name} id="new-img" src={props.link} className="elements__img" />
            <div className="elements__subtitle">
                <h2 id="new-place" className="elements__place">{props.name}</h2>
                <ul className="elements__likelist">
                    <button type="button" className="elements__like"></button>
                    <p className="elements__like-number">{props.likes}</p>
                </ul>
            </div>
        </li>
    )
}

export default Card;