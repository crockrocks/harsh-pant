import React from 'react'
import "../index.css"

function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className='footer'>
        <footer>
        <p>Harsh Pant ⓒ {year}</p>
        </footer>
    </div>
  )
}

export default Footer