import swal from "sweetalert";
const SingleDonationCard = ({card}) => {
    const {id, picture, title, text_color, description, price } = card || {}

    const buttonStyle = {
    
        backgroundColor: text_color,
    
    };

    const handleAddToDonation = () =>{

        const addedDonationArray = []
        const DonationItems = JSON.parse(localStorage.getItem('donation'))
        if(!DonationItems){
            addedDonationArray.push(card)
            localStorage.setItem('donation',JSON.stringify(addedDonationArray))
            swal("Good job!", "Your Donation successful!", "success");
        }else{
            const isExits = DonationItems.find((card) => card.id == id)
        
            if(!isExits){
                addedDonationArray.push(...DonationItems,card)
            localStorage.setItem('donation',JSON.stringify(addedDonationArray))
            
            swal("Good job!", "Your Donation successful!", "success");

            }else{
                addedDonationArray.push(...DonationItems,card)
                localStorage.setItem('donation',JSON.stringify(addedDonationArray))
             swal("already donated!", "already donated for this!!!", "error");
             
            }
         
        }
    }
    return (
      
        <div className=" ">
        <div className="relative md:h-[450px]">
           <img className=" w-full md:h-full " src={picture} alt=""  />
        <div style={{ position: 'absolute', width:'100%',height: '20%',left: '0', right: '0',bottom:'0', backgroundColor: 'rgba(0,0,0,0.5)', zIndex:'2'}}> 
        <button onClick={handleAddToDonation} className="btn py-3 ml-3 text-white px-3 mt-3 rounded-md md:mt-6 lg:mt-6" style={buttonStyle} >Donate ${price}</button>
         </div>
       </div>
       <div className="py-5 px-2">
           <h1 className="text-xl font-bold">{title}</h1>
           <small className="text-slate-600">{description}</small>
       </div>
       </div >
    );
};

export default SingleDonationCard;