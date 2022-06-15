/* eslint-disable @next/next/no-img-element */

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useState, useEffect} from "react";
import Link from "next/link";

export default function Home() {

  const[pokemon, setPokenmon]= useState([]);

  useEffect(()=> {
    async function getPoke(){
      const res = await fetch (
        "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
      );
      setPokenmon(await res.json());
    }
    getPoke();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon App</title>      
      </Head>
      <h2 className={styles.h2}>POKEMONS</h2>
      <br/>
      <div className={styles.grid}>
      {pokemon.map((pokemon)=> (
        <div className={styles.card} key={pokemon.id}>
        <Link href = {`/component/${pokemon.id}`}>
          <a>
            <img
            src = {`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
            alt = {pokemon.name}
            />
            <h3>{pokemon.name}</h3>
          </a>
        </Link>
        </div>      
      ))}
      </div>  
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
