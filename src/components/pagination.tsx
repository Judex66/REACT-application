import "../styles/paginait.css";
interface Paginationer {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: React.SetStateAction<number>) => void;
}
const Pagination = ({ postsPerPage, totalPosts, paginate }: Paginationer) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination11">
      {pageNumbers.map((number, index) => (
        <div key={index} className="page-item">
          <a onClick={() => paginate(number)} className="page-link">
            {number}
          </a>
        </div>
      ))}
    </div>
  );
};
export default Pagination;
