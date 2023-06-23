"use client"

import { fetchPost } from "@/utils/stories";
import { useSearchParams } from "next/navigation"


export default async function PageItem() {
    const searchParams = useSearchParams()
    const pageId: number = parseInt(searchParams.get("id") || "1")
    const page = await fetchPost(pageId);
    console.log(pageId)

    return (
        <div>
            <h1>{page.title}</h1>
            <p>{page.text && page.text}</p>
        </div>
    )
}