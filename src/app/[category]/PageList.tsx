"use client"

import { fetchPosts } from "@/utils/stories"
import { convertTimePassedToString } from "@/utils/time"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default async function PageList({pages}: any) {
    const searchParams = useSearchParams()
  const search: number = parseInt(searchParams.get("p") || "1")
    const storyPages = await fetchPosts(pages, search)

    return(
    <div>
      {storyPages.map((page: any, idx) => {
        
        if (page.url) {
          return (<div>
            <div>
              <p>{idx + 1}.</p>
              <Link href= {page.url}>{page.title} ({page.url})</Link>
            </div>
            <div>
              <p>{page.score} points by  </p>
              <Link href={`/user/?id=${page.by}`}>{page.by}</Link>
              <Link href={`/item/?id=${page.id}`}>{convertTimePassedToString(page.time)}</Link>
              <Link href={`/item/?id=${page.id}`}>{page.descendants} comments</Link>
            </div>
          </div>)
        }

        return (<div>
          <Link href={`/item/?id=${page.id}`}>{page.title}</Link>
        </div>)
      })}
    </div>)
}