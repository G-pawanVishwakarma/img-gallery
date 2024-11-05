import Link from "next/link";

type Props = {
  topic: string;
  page: string | undefined;
  prevPage: string | null;
  nextPage: string | null;
};

export default function Footer({ topic, page, prevPage, nextPage }: Props) {
  if (!prevPage && !nextPage) return null; // Return null if no prev or next page

  const currentPage = parseInt(page || "1"); // Default to page 1 if no page is provided
  const prevPageNum = prevPage ? parseInt(prevPage) : 1;
  const nextPageNum = nextPage ? parseInt(nextPage) : currentPage + 1;

  const pageNums: number[] = [];

  // Generate page numbers between prevPage and nextPage
  if (prevPage && nextPage) {
    for (let i = prevPageNum + 1; i < nextPageNum; i++) {
      pageNums.push(i);
    }
  }

  // Link for next page
  const nextPageArea = nextPage ? (
    <Link href={`/results/${topic}/${nextPage}`} className={!prevPage ? "more" : ""}>
      {!prevPage ? "more" : ""} &gt;&gt;&gt;
    </Link>
  ) : null;

  // Link for prev page and page numbers
  const prevPageArea = prevPage ? (
    <>
      <Link href={`/results/${topic}/${prevPage}`} className={!nextPage ? "more" : ""}>
        {!nextPage ? "more" : ""} &lt;&lt;&lt;
      </Link>

      {/* Render page numbers */}
      {pageNums.map((num) => (
        <Link
          key={num}
          href={`/results/${topic}/${num}`}
          className={num === currentPage ? "font-bold text-blue-600" : "underline"}
        >
          {num}
        </Link>
      ))}
    </>
  ) : null;

  return (
    <footer className="flex flex-row justify-between items-center px-2 py-4 font-bold w-60 mx-auto text-blue-700">
      {prevPageArea}
      {nextPageArea}
    </footer>
  );
}
