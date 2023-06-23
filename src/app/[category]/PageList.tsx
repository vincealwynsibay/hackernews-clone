"use client"

import { fetchPosts } from "@/utils/stories"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default async function PageList({pages}: any) {
    const searchParams = useSearchParams()
  const search: number = parseInt(searchParams.get("p") || "1")
    const storyPages = await fetchPosts(pages, search)
    return(
    <div>
      {storyPages.map((page: any) => {
        
        if (page.url) {
          return (<div>
            <Link href={page.url}>{page.title}</Link>
          </div>)
        }

        return (<div>
          <Link href={`/item/?id=${page.id}`}>{page.title}</Link>
        </div>)
      })}
    </div>)
}