
import { useState } from 'react';
import Search from './Search';
import Results from './Results';

export default () => {
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