import ReadFullArticle from "@/components/ReadFullArticle"

const page =  async ({ params, searchParams }) => {
  return (
    <ReadFullArticle param={params} searchParam={searchParams}/>
  )
}

export default page