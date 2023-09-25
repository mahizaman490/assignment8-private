const Card = ({ card }) => {
    const { id, picture, title, category_bg, card_bg, text_color, description, price, category } = card || {}
    return (
        <div>
            <div className="card md:w-56 card-compact bg-base-100 shadow-xl">
                <figure ><img src={picture} alt="" /></figure>
                <div className="card-body p-4">
                    <div className="card-actions">
                        <button className="btn btn-primary">{category}</button>
                    </div>
                    <h2 className="card-title">{title}</h2>


                </div>
            </div>
        </div>
    );
};

export default Card;