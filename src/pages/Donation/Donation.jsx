import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  
    const [donations,setDonations] = useState([])
    const [noFound,setNoFound] = useState(false)
    const [dataLength,setDataLength] = useState(4)

    const DonationItems = JSON.parse(localStorage.getItem('donation'))
    console.log(DonationItems)
    useEffect(()=>{
        if(DonationItems){
            setDonations(DonationItems)
        }else{
            setNoFound('no Data')
        }
  
    },[])


   
    return (
  <>
        <div>
          {noFound ? <h2 className="h-screen flex justify-center items-center text-4xl text-red-700 font-bold">{noFound}</h2> :<div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-x-10 lg:gap-x-24 md:gap-y-5 mt-10 md:mt-20">{donations.slice(0,dataLength).map(card => <DonationCard key={card.id} card={card}></DonationCard>)}</div>}
           

        </div>
        <div className={dataLength === donations.length  && 'hidden'}>
            <div className="flex justify-center items-center ">
          <button onClick={() => setDataLength(donations.length)} className="btn py-3  text-white bg-lime-800 px-3 mt-3 rounded-md md:mt-6 lg:mt-6"> See All</button>
     </div>
        </div>
          
    
  
  </>
    );
};

export default Donation;



