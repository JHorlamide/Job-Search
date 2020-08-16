import React, { useState } from 'react';
import { useFetch } from './Components/UseFetch/UseFetch';
import { Container } from 'react-bootstrap';
import Job from './Components/Job/Job';

/*** Custom Component ***/
import SearchJob from './Components/SearchJob/SearchJob';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { loading, jobs, error } = useFetch(params, page);

  const handleParams = (e) => {
    const params = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return {
        ...prevParams,
        [params]: value,
      };
    });
  };

  return (
    <div className="App">
      <Container className="my-4">
        <h1 className="mb-4">Github Job</h1>
        <SearchJob params={params} onParamChange={handleParams} />
        {loading && <h2>Loading Jobs...</h2>}
        {error && <h2>Error Loading Jobs. Try Refreshing.</h2>}
        {jobs &&
          jobs
            .filter((job) => job.company_logo)
            .map((job) => {
              return <Job key={job.id} job={job} />;
            })}
      </Container>
    </div>
  );
}

export default App;
