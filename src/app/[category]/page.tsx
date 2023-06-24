import { fetchCategoryItems, fetchTopItems } from "@/utils/stories";
import PageList from "./PageList";

export const dynamicParams = false 

export default async function Page({params}: any) {
    // const topPages = await fetchCategoryItems("");
    const pages = await fetchCategoryItems(params.category)
    return(
      <div>
        <PageList pages={pages}/>
      </div>
    )
}

export async function generateStaticParams() {
  let params = ["top", "new", "best", "ask", "show", "job"]
  return params.map((item) => ({category: item}))
}
 