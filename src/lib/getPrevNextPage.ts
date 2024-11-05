import type { ImageResults } from "@/models/Images";

function getPageNumber (url: string){
  const {searchParams} = new URL(url)
  return searchParams.get('page')
}


export default function getPrevNextPage(images: ImageResults) {
   let nextPage = images?.next_page ? getPageNumber(images.next_page) : null

   const prevPage = images?.prev_page ? getPageNumber(images.prev_page) : null

   const totalPage = images.total_results % images.per_page ? Math.ceil(images.total_results / images.per_page) : (images.total_results / images.per_page) + 1

   if (prevPage && (parseInt(prevPage) + 5) < totalPage){
    nextPage = (parseInt(prevPage) + 5 ).toString()
   }

   if (nextPage && parseInt(nextPage) >= totalPage) nextPage = null

   return {prevPage, nextPage}
}
