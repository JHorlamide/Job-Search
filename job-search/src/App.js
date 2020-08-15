import React, { useState } from "react";
import { useFetch } from "./Components/UseFetch/UseFetch";
import { Container } from "react-bootstrap";
import Job from "./Components/Job/Job";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { loading, jobs, error } = useFetch(params, page);

  return (
    <div className="App">
      <Container>
        {loading && <h2>Loading Jobs...</h2>}
        {error && <h2>Error Loading Jobs. Try Refreshing.</h2>}
        {jobs && jobs.length}
      </Container>
    </div>
  );
}

export default App;
