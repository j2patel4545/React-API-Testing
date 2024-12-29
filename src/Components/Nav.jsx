import React from 'react'

function Nav() {
  return (
    <div className=' w-screenv px-10 items-center flex h-16 bg-black text-white text-md justify-between'>
      <h2>LOGO</h2>
      <div className=' flex gap-10  '>
        <a href="/">Home</a>
        <a href="/reg">Sign up</a>
        <a href="/log">Sign in</a>

      </div>
    </div>
  )
}

export default Nav
