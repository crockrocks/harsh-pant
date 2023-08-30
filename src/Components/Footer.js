import React from 'react'
import "/home/harsh/Desktop/websites/harsh/src/styles.css"

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