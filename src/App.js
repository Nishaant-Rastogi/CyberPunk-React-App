import './App.css';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import axios from 'axios'
import PunkList from './Components/PunkList';
import Main from './Components/Main';
function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0);
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
      {
        punkListData.length > 0 &&
        (
          <>
            <Main selectedPunk={selectedPunk} punkListData={punkListData} />
            <PunkList setSelectedPunk={setSelectedPunk} punkListData={punkListData} />
          </>
        )
      }

    </div>

  );
}

export default App;
