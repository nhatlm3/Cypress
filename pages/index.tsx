import Layout from '@/components/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
            <Head>
              <title>Kido</title>
              <link rel="icon" href="/favicon.ico" />
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
              <meta name="keywords" content="" />
              <meta name="description" content="" />
              <meta name="author" content="" />
              {/* <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css" /> */}
              {/* <link href="https://fonts.googleapis.com/css?family=Dosis:400,500|Poppins:400,600,700&display=swap" rel="stylesheet"> */}
            </Head>

            {/* <main className={styles.main}>
              <h1 className={styles.title}>
                Welcome to <a href="https://nextjs.org">Next.js!</a>
              </h1>

              <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/index.tsx</code>
              </p>

              <div className={styles.grid}>
                <a href="https://nextjs.org/docs" className={styles.card}>
                  <h2>Documentation &rarr;</h2>
                  <p>Find in-depth information about Next.js features and API.</p>
                </a>

                <a href="https://nextjs.org/learn" className={styles.card}>
                  <h2>Learn &rarr;</h2>
                  <p>Learn about Next.js in an interactive course with quizzes!</p>
                </a>

                <a
                  href="https://github.com/vercel/next.js/tree/canary/examples"
                  className={styles.card}
                >
                  <h2>Examples &rarr;</h2>
                  <p>Discover and deploy boilerplate example Next.js projects.</p>
                </a>

                <a
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  className={styles.card}
                >
                  <h2>Deploy &rarr;</h2>
                  <p>
                    Instantly deploy your Next.js site to a public URL with Vercel.
                  </p>
                </a>
              </div>
            </main> */}
      </div>
    </Layout>
    
  )
}

export default Home
