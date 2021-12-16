import './App.css';
import { useState, useEffect } from 'react';
import CollectionCard from './Components/CollectionCard';
import Header from './Components/Header';
import axios from 'axios'
import PunkList from './Components/PunkList';
function App() {
  const [punkListData, setPunkListData] = useState([])
  useEffect(() => {
    const getMyNFT = async () => {
      const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x1Dbbe7663F856f8Ff5E57f3E538ba9D3209497D5&order_direction=asc')
      console.log(openSeaData.data.assets);
      setPunkListData(openSeaData.data.assets);
    }
    return getMyNFT();
  }, [])
  return (
    <div className='app'>
      <Header />
      <PunkList punkListData={punkListData} />
    </div>

  );
}

export default App;
