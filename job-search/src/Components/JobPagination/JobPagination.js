import React from 'react';

import { Pagination } from 'react-bootstrap';

const JobPagination = ({ page, setPage }) => {
  return (
    <Pagination>
      {page !== 1 && <Pagination.Prev />}
      {page !== 1 && <Pagination.Item>{page - 1}</Pagination.Item>}
      <Pagination.Item>{page}</Pagination.Item>
      <Pagination.Item>{page + 1}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
  );
};

export default JobPagination;
