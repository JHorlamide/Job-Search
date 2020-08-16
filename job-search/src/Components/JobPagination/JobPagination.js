import React from 'react';

import { Pagination } from 'react-bootstrap';

const JobPagination = ({ page, setPage, hasNextPage }) => {
  const adjustpage = (amount) => {
    setPage((prevPage) => {
      return prevPage + amount;
    });
  };

  return (
    <Pagination>
      {page !== 1 && <Pagination.Prev onClick={adjustpage(-1)} />}
      {page !== 1 && (
        <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>
      )}
      {page > 2 && <Pagination.Ellipsis />}
      {page > 2 && (
        <Pagination.Item onClick={adjustpage(-1)}>{page - 1}</Pagination.Item>
      )}
      <Pagination.Item active>{page}</Pagination.Item>
      {hasNextPage && <Pagination.Item onClick={adjustpage(1)}>{page + 1}</Pagination.Item>}
      {hasNextPage && <Pagination.Next onClick={adjustpage(1)}/>}
    </Pagination>
  );
};

export default JobPagination;
