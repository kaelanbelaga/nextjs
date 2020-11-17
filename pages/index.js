import Head from 'next/head'
import dynamic from 'next/dynamic'

import styles from '../styles/Home.module.css'

const Test = dynamic(() => import('../components/test'))
const Test2 = dynamic(() => import('../components/test2'))
const Test3 = dynamic(() => import('../components/test3'))
const Test4 = dynamic(() => import('../components/test4'))
const Test5 = dynamic(() => import('../components/test5'))
const Test6 = dynamic(() => import('../components/test6'))
const Test7 = dynamic(() => import('../components/test7'))
const Test8 = dynamic(() => import('../components/test8'))
const Test9 = dynamic(() => import('../components/test9'))
const Test10 = dynamic(() => import('../components/test10'))
const Test11 = dynamic(() => import('../components/test11'))
const Test12 = dynamic(() => import('../components/test12'))
const Test13 = dynamic(() => import('../components/test13'))
const Test14 = dynamic(() => import('../components/test14'))
const Test15 = dynamic(() => import('../components/test15'))
const Test16 = dynamic(() => import('../components/test16'))
const Test17 = dynamic(() => import('../components/test17'))
const Test18 = dynamic(() => import('../components/test18'))
const Test19 = dynamic(() => import('../components/test19'))
const Test20 = dynamic(() => import('../components/test20'))


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Test />
      <Test2 />
      <Test3 />
      <Test4 />
      <Test5 />
      <Test6 />
      <Test7 />
      <Test8 />
      <Test9 />
      <Test10 />
      <Test11 />
      <Test12 />
      <Test13 />
      <Test14 />
      <Test15 />
      <Test16 />
      <Test17 />
      <Test18 />
      <Test19 />
      <Test20 />
      
    </div>
  )
}
