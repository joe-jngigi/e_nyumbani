import React from 'react'
import { useState } from 'react'

function Questions({title, info}) {
    const [showInfo, setShowInfo] = useState(false)
  return (
    <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="i-btn" onClick={
            () => setShowInfo(!showInfo)}>
            {
              showInfo? 'minus' : 'plus'
            }
          </button>
        </header>
        {
          showInfo && <p>{info}</p>
        }
    </article>
  )
}

export default Questions