

export async function  fetchTopItems() {
    const res = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json", {
     cache: "force-cache"     
    })
    return await res.json()
}

export async function fetchCategoryItems(category: string) {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/${category}stories.json`, {
     cache: "force-cache"     
    })
    return await res.json()
}

export async function fetchPosts(posts: any[], pageNumber: number) {
    let pages = []

  for (let i = 0; i < pageNumber * 30; i++) {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${posts[i]}.json`, {
        cache: "force-cache"   
    })
    const data = await res.json()
    pages.push(data)
  }
  return pages
}

export async function fetchPost(id: number) {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, {
    cache: "force-cache"   
  })
  const data = await res.json()
  return data
}


export async function fetchUser(id: string) {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json`, {
    cache: "force-cache"   
  })
  const data = await res.json()
  return data
}



export async function fetchComments(comments: any[]) {
  let pages = {}

  for (let i = 0; i < comments.length; i++) {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${comments[i]}.json`, {
        cache: "force-cache"   
    })
    const data = await res.json()
    pages = {...pages, [data.id]: data}
  }
  return pages
}

export async function fetchAllComments(id: string) {
  const res = await fetch(`https://hn.algolia.com/api/v1/search?tags=comment,story_${id}`,{
    cache: "force-cache"   
  });
  const data = await res.json();
  return data;
}
