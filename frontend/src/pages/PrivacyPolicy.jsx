import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <div>
        <Link to={'/signup'}>Back</Link>
        <h1>Privacy Policy</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus excepturi aut nesciunt quam reprehenderit vero expedita vitae libero molestias cumque atque quasi ullam hic rerum, quo deserunt culpa esse facilis.</p>
    </div>
  )
}

export default PrivacyPolicy