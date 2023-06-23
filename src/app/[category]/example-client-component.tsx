'use client'
 
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
 
export default function ExampleClientComponent() {
  const pathname = usePathname()
//   const searchParams = useSearchParams()
 
console.log(pathname.search("category"));



  return <div>nice</div>
}