import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import Response from '../../Response'
import { useRouter } from 'next/router'
import SearchResults from '../../components/SearchResults'
// import { API_KEY, CONTEXT_KEY } from '../../Keys'

function Search({results}) {
  const router = useRouter();

  console.log(results)

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <SearchResults results={results} />
      

    </div>
  )
}

export default Search;


export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || '0'

  const apiKey = process.env.API_KEY;
  const contextKey = process.env.CONTEXT_KEY;

  const data = useDummyData ? Response : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${contextKey}&q=${context.query.term}&start=${startIndex}`
        ).then(response => response.json());

  return {
    props: {
      results: data,
    }
  }
}
