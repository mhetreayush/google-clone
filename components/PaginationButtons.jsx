import { useRouter } from "next/router";
import Link from "next/link";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const PaginationButtons = () => {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;
  return (
    <div
      className={`flex max-w-lg justify-${
        startIndex >= 10 ? "between" : "center"
      } text-blue-700 mb-10`}
    >
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="paginationButton">
            <HiChevronLeft />
            <p>Previous</p>
          </div>
        </Link>
      )}
      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="paginationButton">
          <HiChevronRight />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default PaginationButtons;
