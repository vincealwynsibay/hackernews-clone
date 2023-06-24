"use client"

import { fetchUser } from "@/utils/stories";
import {  convertTimePassedToString } from "@/utils/time";
import { useSearchParams } from "next/navigation"


export default async function PageItem() {
    const searchParams = useSearchParams()
    const pageId: string = searchParams.get("id") || ""
    const page = await fetchUser(pageId);

    return (
        <div>
            <p>user: {page.id}</p>
            <p>created: {convertTimePassedToString(page.created)}</p>
            <p>karma: {page.karma}</p>
        </div>
    )
}