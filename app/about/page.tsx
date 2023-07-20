
// NextJS doesn't cache this page because there is not any data fetching process.
// Anyway, if we want to be explicit, we can add this configuration
export const dynamic = 'force-static'

import { Metadata } from "next"

/* Add metadata for the page */ 
export const metadata: Metadata = {
    title: 'About us',
    description: 'It`s a creash application to test new features of NextJS'
}
export default async function Home() {
  return (
    <main>
        <h1>About page</h1>
        <p>It`s a crash application in NextJS</p>
    </main>
  )
}