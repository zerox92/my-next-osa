import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Amplify from 'aws-amplify';
// import amplifyconfig from '../src/amplifyconfiguration.json';
// import awsconfig from '../src/aws-exports.js';


// Amplify.configure(amplifyconfig);


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          My Next.js Amplify app III
        </h1>
      </main>
    </div>
  )
}
