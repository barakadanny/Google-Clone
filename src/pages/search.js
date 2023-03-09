import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header'

function Search() {
  return (
    <div>
        <Head>
            <title>Search</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        {/* Header */}
        <Header />
        {/* Body */}
    </div>
  )
}

export default Search
