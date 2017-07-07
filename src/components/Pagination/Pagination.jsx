import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({pageCount, onPageChange}) =>
	<div className='paginationWrap'>
		<ReactPaginate
			onPageChange={onPageChange}
			pageCount={pageCount}
			containerClassName={"pagination"}
			activeClassName={"active"}
			previousLabel={"prev"}
			nextLabel={"next"}
			breakLabel={<a>...</a>}
			breakClassName={"break-me"}
			marginPagesDisplayed={2}
			pageRangeDisplayed={3}
		/>
	</div>

export default Pagination;
