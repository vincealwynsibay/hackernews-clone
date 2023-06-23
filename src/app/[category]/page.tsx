import { fetchCategoryItems, fetchTopItems } from "@/utils/stories";
import PageList from "./PageList";
import ExampleClientComponent from "./example-client-component";

export default async function Page({params}: any) {
    // const topPages = await fetchCategoryItems("");
    const pages = await fetchCategoryItems(params.category)
    return(
      <div>
        <PageList pages={pages}/>
      </div>
    )
}