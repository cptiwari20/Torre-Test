
import { useState } from 'react';
import Search from './Search';
import Results from './Results';

const Home = () => {
    const [results, setResults] = useState([])
    const [seachType, setSeachType] = useState('')
    const getResults = (res) => {

        console.log(res)
        setResults(res.results);
        setSeachType(res.seachType);
    }
    return <>
        <Search 
            getResults={getResults}
        />
        {results.length !== 0 ? <Results results={results} type={seachType}/> : ''}
    </>
}
export default Home;