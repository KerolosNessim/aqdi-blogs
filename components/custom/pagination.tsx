import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PaginationData } from "@/types";



export function CustomPagination({
  pagination,
}: {
  pagination: PaginationData;
}) {
  const { current_page, last_page } = pagination;

  const getPageHref = (page: number) => `?page=${page}`;

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, current_page - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(last_page, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink href={getPageHref(i)} isActive={current_page === i}>
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }
    return pages;
  };

  return (
    <Pagination dir="rtl">
      <PaginationContent>
        <PaginationItem>
          {current_page > 1 ? (
            <PaginationPrevious href={getPageHref(current_page - 1)} />
          ) : (
            <PaginationPrevious
              href="#"
              className="pointer-events-none opacity-50"
            />
          )}
        </PaginationItem>

        {renderPageNumbers()}

        <PaginationItem>
          {current_page < last_page ? (
            <PaginationNext href={getPageHref(current_page + 1)} />
          ) : (
            <PaginationNext
              href="#"
              className="pointer-events-none opacity-50"
            />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
