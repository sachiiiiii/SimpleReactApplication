// Create a few simple components to display some content.
function Header() {
  return (<h1>A Simple React Application (My 2nd one!)</h1>);
}

function Content(props) {
  // Add inline styling
  return (
    <>
      <h2 style={{ color: props.color }}>{props.text}</h2>
      <ul style={{fontSize: 20}}>
        <li>Use npm create vite@latest to make a pre-configured React application.</li>
        <li>Create React components.</li>
        <li>Render React components within an application.</li>
        <li>Pass <span style={{fontFamily: "monospace"}}>props</span> to React components to modify their behavior.</li>
      </ul>
    </>

  );
}

function Footer() {
  return (<p>Created by Osinachi</p>);
}

function App() {
  return (
    <>
      {/* Add components to the App function */}
      <Header />
      {/* Add props to Content component */}
      <Content color="red" text="By completing this lab, I demonstrated my ability to " />
      <Footer />
    </>
  )
}

export default App
