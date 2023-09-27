import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const { id, picture, title, category_bg, card_bg, text_color, category } = card || {}

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
           <Link to={`/cards/${id}`}>
           
           <div className=" m-2 card rounded-lg md:w-56 card-compact bg-base-100 shadow-xl" style={cardStyle}>
                <figure  ><img className="w-full md:h-40 rounded-t-lg"src={picture} alt="" /></figure>
                <div className="card-body p-2 ">
                    <div className="card-actions">
                        <button className="btn py-1 px-3 rounded-md" style={buttonStyle}>{category}</button>
                    </div>
                    <h2 className="card-title" style={titleStyle}>{title}</h2>


                </div>
            </div>
           
           </Link>
        </div>
    );
};

export default Card;