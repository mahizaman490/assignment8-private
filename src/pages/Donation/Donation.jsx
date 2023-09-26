import { useEffect, useState } from "react";
// import DonationCard from "./DonationCard";

const Donation = () => {
    const [donations,setDonations] = useState([])
    // const [noFound,setNoFound] = useState(false)
    useEffect(()=>{

        const DonationItems = JSON.parse(localStorage.getItem('donations'))
        setDonations(DonationItems)
    
    },[])
    console.log(donations);
    return (
        <div>
gggggggggggg

{/* 
          {noFound ? <h2 className="h-screen flex justify-center items-center text-4xl text-red-700 font-bold">{noFound}</h2> :<div>{donations.map(card => <DonationCard key={card.id} card={card}></DonationCard>)}</div>} */}
           
        </div>
    );
};

export default Donation;