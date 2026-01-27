import React, { useState } from "react";

const App = () => {
  let totalPages = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const goTopage = (num) => {
    setCurrentPage(num);
  };
  return (
    <div>
      <h2>Page {currentPage}</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => goTopage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, i) => {
          const pageNum = i + 1;
          return <button onClick={() => goTopage(pageNum)}>{pageNum}</button>;
        })}
        <button
          onClick={() => goTopage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
