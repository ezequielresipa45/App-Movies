import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <p>LOGO</p>
        <nav>
            <input type="text" placeholder='Escriba aquí..' />
            <button>Buscar</button>
        </nav>
    </div>
  )
}
