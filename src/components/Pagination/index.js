import "./style.css";

function Pagination({ pages, currentPage, setCurrentPage }) {
    return (
        <div className="pagination">
            {Array.from(Array(pages), (articles, index) => {
                return <button
                   className={index === currentPage ? 'selected' : 'none'}
                   value={index}
                   onClick={(event) => setCurrentPage(Number(event.target.value))}
                   key={index}
                   >
                    { index + 1 }
                  </button>
            })}
        </div>
    )
}

export default Pagination;
