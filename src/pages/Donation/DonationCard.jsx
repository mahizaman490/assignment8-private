
const DonationCard = ({card}) => {
    console.log(card)
    const {category, picture, title, text_color, price ,category_bg, card_bg} = card || {}

    const cardStyle = {
      backgroundColor: card_bg,
  };
  const buttonStyle = {
      color: text_color,
      backgroundColor: category_bg,
  
  };
  const priceStyle = {
      color: text_color,
     
  
  };
  const viewDetails = {
      backgroundColor: text_color,
  };


   
    return (
       <div>
      
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl  bg-clip-border  shadow-md" style={cardStyle}>
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-clip-border">
    <img
      src={picture}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <button className="btn py-1 px-3 rounded-md" style={buttonStyle} >
     {category}
    </button>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal  antialiased">
      {title}
    </h4>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed antialiased" style={priceStyle}>
  ${price}
    </p>
    <a className="inline-block" href="#">



      
      <button style={viewDetails}
        className="flex select-none text-white items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase  transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        View Details
   
      </button>
    </a>
  </div>
</div>
       </div>
    );
};

export default DonationCard;