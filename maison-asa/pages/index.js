import Head from 'next/head'

import Banner from '../component/Banner'

import Header from '../component/Header'
import Ingredient from '../component/Ingredient'
import Pub from '../component/Pub'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (

    
    <div className={styles.container_app}>
    <Head>
  
  <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=320, height=device-height, target-densitydpi=medium-dpi" />
      </Head>
      


      

    <Header />

    
    
     <Banner />

      
     <Ingredient />


     <Pub />
    
  

    </div>
  )
}
