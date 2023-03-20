import { useEffect, useState } from 'react'
import './App.css'
import Header from './header'
import Card from './card'

function App() {
const [apiData, setApiData] = useState([]);
const [Navdata, setNavData] = useState([]);

  useEffect(() =>{
    async function getData(){
      const response = await fetch("https://admin.naxa.com.np/api/services");
      const data = await response.json()
      setApiData(data);
    }
    getData();
  },[]);

  useEffect(() =>{
    const titles = apiData.map((x) => {
      return { id: x.id, title: x.title};
    });
    setNavData(titles);
  },[apiData]);

  return (
    <div>
      <Header Navdata = {Navdata}/>

      {apiData.map((x) => (
        <Card data={x} />
        ))}
    </div>
  );
}

export default App
