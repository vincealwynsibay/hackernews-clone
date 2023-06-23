

export async function  fetchTopItems() {
    const res = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json", {
          cache: "no-store",
        next: {
            revalidate: 60
        }
    })
    return await res.json()
}

export async function fetchCategoryItems(category: string) {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/${category}stories.json`, {
          cache: "no-store",
        next: {
            revalidate: 60
        }
    })
    return await res.json()
}

export async function fetchPosts(posts: any[], pageNumber: number) {
    let pages = []

  for (let i = 0; i < pageNumber * 30; i++) {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${posts[i]}.json`, {
        cache: "no-store",
        next: {
            revalidate: 60
        }
    })
    const data = await res.json()
    pages.push(data)
  }
  return pages
}

export async function fetchPost(id: number) {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, {
    cache: "no-store",
    next: {
        revalidate: 60
    }
  })
  const data = await res.json()
  return data
}