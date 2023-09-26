import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleDonationCard from "./SingleDonationCard";

const CardDonation = () => {
    const [card, setCard] = useState({})
    const { id } = useParams()

    const Cards = useLoaderData()

    useEffect(() => {

        const findCard = Cards?.find(card => card.id == id)


        setCard(findCard)

    }, [id, Cards])

   
    return (
       <div>
        <SingleDonationCard card={card}></SingleDonationCard>
       </div>
    );
};

export default CardDonation;