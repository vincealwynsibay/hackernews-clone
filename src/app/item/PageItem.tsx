"use client"

import { fetchPost } from "@/utils/stories";
import { convertTimePassedToString } from "@/utils/time";
import Link from "next/link";
import { useSearchParams } from "next/navigation"
import CommentsList from "./CommentsList";


export default async function PageItem() {
    const searchParams = useSearchParams()
    const pageId: number = parseInt(searchParams.get("id") || "1")
    const page = await fetchPost(pageId);
    return (
        <div>
            <h1>{page.title} {page.url}</h1>
            <div>
              <p>{page.score} points by  </p>
              <Link href={`/user/?id=${page.by}`}>{page.by}</Link> 
              <Link href={`/item/?id=${page.id}`}>{convertTimePassedToString(page.time)}</Link>
              <Link href={`/item/?id=${page.id}`}>{page.descendants} comments</Link>
            </div>
            <p>{page.text && page.text}</p>
        </div>
    )
}