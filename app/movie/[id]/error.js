'use client'
import React from 'react'
import Link from 'next/link'


export default function MovieNotFound() {
  return (
    <div style={{
        height:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
    }}
    >
        <h1>An Error has occured.Sorry for that!</h1>
        <Link href="/" style={{textDecoration:"underline",fontSize:20,marginTop:8}}>Go Home</Link>
    </div>
  )
}
