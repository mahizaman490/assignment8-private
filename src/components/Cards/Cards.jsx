import Card from "./Card";

const Cards = ({cards}) => {
  

    return (
        <div className="md:w-10/12 mx-auto">
            <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 lg:grid-cols-4  md:gap-y-5 mt-10 md:mt-20">
                {
                    cards?.map(card => <Card key={card.id} card={card}></Card> )
                }
            </div>
        </div>
    );
};

export default Cards;