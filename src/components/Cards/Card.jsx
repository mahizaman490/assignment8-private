const Card = ({ card }) => {
    const { id, picture, title, category_bg, card_bg, text_color, description, price, category } = card || {}

    const cardStyle = {
        backgroundColor: card_bg,
    };
    const buttonStyle = {
        color: text_color,
        backgroundColor: category_bg,
    
    };
    const titleStyle = {
        color: text_color,
    };

    return (
        <div>
            <div className="card md:w-56 card-compact bg-base-100 shadow-xl" style={cardStyle}>
                <figure ><img src={picture} alt="" /></figure>
                <div className="card-body p-4">
                    <div className="card-actions">
                        <button className="btn py-1 px-3 rounded-md" style={buttonStyle}>{category}</button>
                    </div>
                    <h2 className="card-title" style={titleStyle}>{title}</h2>


                </div>
            </div>
        </div>
    );
};

export default Card;