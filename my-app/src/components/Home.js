
import { useState } from 'react';
import Search from './Search';
import Results from './Results';

export default () => {
    const [results, setResults] = useState([])
    const getResults = (res) => {
        setResults(res)
    }
    return <>
        <Search 
            getResults={getResults}
        />
        {results.length !== 0 ? <Results results={results}/> : ''}
    </>
}