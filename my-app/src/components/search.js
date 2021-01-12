import React, { useState } from 'react';

export default ({getResults}) => {
    const [searchString, setSearchString] = useState('');
    const [seachType, setSeachType] = useState('opportunities');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = (e) => {
        if(!searchString) return setError('Please add some charachers to search!')
        setLoading(true)
        const url = `https://search.torre.co/${seachType}/_search/?offset=0&size=10&aggregate=true&lang=en`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({name: { term: searchString}})
        }).then(async (res) => {
            let data = await res.json()
            getResults({
                seachType,
                results: data.results
            });
            setResults(data.results)
            if(data.results.length === 0){
                setError('No results found! Please search again!')
            }
            setLoading(false)
        }).catch((e) => {   
            console.log(e)
            setLoading(false)
        })
    }

    const handleValueChange = (value, key) => {
        setError('')
        setLoading(false)
        setResults([])
        switch (key) {
            case 'string':
                return setSearchString(value)
            case 'type':
                return setSeachType(value)
            default:
                break;
        }
    }

    return <div className={results.length !== 0 ? "section-container-left": "section-container-center"}>
      <div className="section-search">
        <h1 className="heading-main fw-bold">Find Jobs & People.</h1>
        <input 
            onChange={e => handleValueChange(e.target.value, 'string')} 
            className="input-element"
            type="text" 
            placeholder="Enter the search term" />
        <select 
            onChange={e => handleValueChange(e.target.value, 'type')}
            className="input-element">
            <option value="opportunities">Jobs</option>
            <option value="people">People</option>
        </select>
        <button onClick={handleSearch} className="input-element btn-search fw-bold">
            {loading ? "Loading..." : "Find"}  
        </button>
        {error && <p className='error'>{error}</p>}
      </div>
    </div>   
}