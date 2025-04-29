// import { useState } from 'react'
// import './App.css'

// Create a few simple components to display some content.
function Header() {
  return (<h1>Simple React Application</h1>);
}

function Content() {
  return (<h2>This is my second React Application!</h2>);
}

function Footer() {
  return (<p>Created by Osinachi</p>);
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* Add components to the App function */}
      <Header />
      <Content />
      <Footer />
    </>
  )
}

export default App
