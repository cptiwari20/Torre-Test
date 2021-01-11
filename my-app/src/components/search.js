import React, { useState } from 'react';

export default ({getResults}) => {
    const [searchString, setSearchString] = useState('');
    const [seachType, setSeachType] = useState('opportunities');
    const [results, setSetResults] = useState([]);

    const handleSearch = (e) => {
        const url = `https://search.torre.co/${seachType}/_search/?offset=0&size=10&aggregate=true&lang=en`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({name: { term: searchString}})
        }).then(async (res) => {
            let data = await res.json()
            setSetResults(data.results)
            getResults(data.results);
        }).catch((e) => {   
            console.log(e)
        })
    }

    return <div className={results.length !== 0 ? "section-container-left": "section-container-center"}>
      <div className="section-search">
        <h1 className="heading-main fw-bold">Find Jobs & People.</h1>
        <input 
            onChange={e => setSearchString(e.target.value)} 
            className="input-element"
            type="text" 
            placeholder="Enter the search term" />
        <select 
            onChange={e => setSeachType(e.target.value)}
            className="input-element">
            <option value="opportunities">Jobs</option>
            <option value="people">People</option>
        </select>
        <button onClick={handleSearch} className="input-element btn-search fw-bold">Find</button>
      </div>
    </div>   
}