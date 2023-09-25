import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CardDonation = () => {
    const [card, setCard] = useState({})
    const { id } = useParams()

    const Cards = useLoaderData()

    useEffect(() => {

        const findCard = Cards?.find(card => card.id == id)


        setCard(findCard)

    }, [id, Cards])

    console.log(card)
    return (
        <div>
         <div className="relative">
            <img className="rounded-lg " src="https://i.ibb.co/s2mJzzn/Rectangle-4282.png" alt="" />
         <div style={{ position: 'absolute', width:'100%',height: '20%',left: '0', right: '0',bottom:'0', backgroundColor: 'rgba(0,0,0,0.5)', zIndex:'2'}}> 
         <button className="btn">Donate</button>
          </div>
        </div>
        <div className="py-5 px-2">
            <h1 className="text-xl font-bold">Good Education</h1>
            <small className="text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis facere illo animi vel amet eos alias deserunt, similique at earum nesciunt ex laudantium sapiente quia expedita adipisci, repudiandae fuga necessitatibus vitae dolorem. Asperiores obcaecati, fugit rerum vitae perferendis, illo, sunt maxime doloremque mollitia ut quidem sapiente! Molestiae sequi ullam incidunt?</small>
        </div>
        </div >
    );
};

export default CardDonation;