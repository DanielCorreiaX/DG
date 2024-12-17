import { AllPosts } from '../queries/posts'
import Link from 'next/link'
import {HygraphClient} from '@/utils/client'
async function getPosts() {
  const client = HygraphClient()
  const allPosts = await client.request(AllPosts)
  console.log(allPosts)
  return allPosts.posts
}

export const metadata = {
  title: 'Blog Boa Nova'
}

export default async function Home({}) {
  const allPosts = await getPosts()
  return (
    <div className="divide-y divide-gray-200">
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Bog Boa Nova
        </h1>
        <p className="text-lg leading-7 text-gray-500">
          As Publicações mais recentes
        </p>
      </div>

      {/* Lista de posts */}
    </div>
  )
}
