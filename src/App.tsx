import axios from "axios"
import { useEffect, useState } from "react";
import Country from "./components/Country";
import Loading from "./components/Loading";
import { CountryType } from "./types";

const App = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading,setLoading] = useState<boolean>(false);

  const getCountries = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get<CountryType[]>("https://restcountries.com/v2/all")
      setCountries(data)
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    getCountries();
  }, []);

  return <>
    <h1>Countries App with Typescript React Exercise</h1>
    <Loading loading={loading}>
    {
     countries.map(country => {
        return <Country key={country.name} country={country}/>
      })
    }
    </Loading>


  </>;
};

export default App;
