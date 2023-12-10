import Link from "next/link";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    return (
        <div className="mt-4 flex justify-between">
            <div>
                {prevPage && (
                    <Link href={`/users?page=${prevPage}`} passHref>
                        <a className="text-blue-500">Previous</a>
                    </Link>
                )}
            </div>
            <div>
                {nextPage && (
                    <Link href={`/users?page=${nextPage}`} passHref>
                        <a className="text-blue-500">Next</a>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Pagination;
