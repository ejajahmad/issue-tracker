import Image from 'next/image'
import { Inter } from 'next/font/google'
import IssueContainer from '@/components/IssueContainer'

const inter = Inter({ subsets: ['latin'] })


// issue type

/* 
 
 issue = {
  id: number,
  title: string,
  description: string,
  status: string,
  priority: string,
  type: string,
  image: string,
  created: date,
  updated: date,
 }

*/

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="text-gray-700 text-6xl font-bold mb-5">Issue Tracker</h1>
      <IssueContainer />
    </main>
  )
}
