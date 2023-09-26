
import { useLoaderData } from 'react-router-dom';
// import Cards from '../../components/Cards/Cards';
import Banner from '../../components/Header/Banner/Banner';
import { useEffect, useState } from 'react';
import Card from '../../components/Cards/Card';

const Home = () => {
    const cards = useLoaderData()
   const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

   

    useEffect(()=>{
     fillterData()
    },[searchTerm])

    const fillterData = ()=>{
        const filteredData = cards.filter(item => item.category.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilteredData(filteredData)

    }
    return (
        <>
         <div>
          <Banner setSearchTerm={setSearchTerm}></Banner> 
          <div className='grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center'>
            {
                filteredData.map(card => <Card key={card.id} card={card}> </Card> )
            }
          </div>
          {/* <Cards cards={cards}></Cards>  */}
         </div>  
      
        </>
      
    );
};

export default Home;