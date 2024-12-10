import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'


export default function Footer() {
  return (
   <footer className={styles.footer}>
    <h2 style={{color:"white"}}>Made with me</h2>
    <Link href='/'>Ruslan Aliyev</Link>
   </footer>
  )
}
