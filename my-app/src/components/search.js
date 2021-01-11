import React from 'react';
import Layout from '../layout/search';

export default () => {
    return <Layout>
        <h1 className="heading-main fw-bold">Find Jobs & People.</h1>
        <input className="input-element" type="text" placeholder="Enter the search term" />
        <select className="input-element">
            <option value="Jobs">Jobs</option>
            <option value="People">People</option>
        </select>
        <button className="input-element btn-search fw-bold">Find</button>
    </Layout>
}