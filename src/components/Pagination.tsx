interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (newPage: number) => void
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <section className='container flex justify-center mt-12 mb-24 join'>
      <button
        className='join-item btn'
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        «
      </button>
      <button className='join-item btn'>
        Page {currentPage} of {totalPages}
      </button>
      <button
        className='join-item btn'
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        »
      </button>
    </section>
  )
}

export default Pagination
