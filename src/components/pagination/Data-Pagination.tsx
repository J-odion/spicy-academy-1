import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

  type PaginationProps = {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
  };


const Datapagination = ({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
  }: PaginationProps) => {

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleClick = (page: number) => {
        if (page >= 1 && page <= totalPages) {
        onPageChange(page);
        }
    };

  return (
    <Pagination className=''>
        <PaginationPrevious
        // disabled={currentPage === 1}
        onClick={() => handleClick(currentPage - 1)}
      />
      <PaginationContent>
        {Array.from({ length: totalPages }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              isActive={index + 1 === currentPage}
              onClick={() => handleClick(index + 1)}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
      <PaginationNext
        // disabled={currentPage === totalPages}
        onClick={() => handleClick(currentPage + 1)}
      />
    </Pagination>
  )
}

export default Datapagination
