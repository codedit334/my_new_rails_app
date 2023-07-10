import React, { useEffect } from 'react'

export default function Home() {


  useEffect(() => {
    console.log(greeting)
  }, [greeting]);

  return (
    <div>
      <h1>Welcome to the Rails React Webapp!</h1>
    </div>
  )
}
