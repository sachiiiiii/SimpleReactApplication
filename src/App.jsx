// Create a few simple components to display some content.
function Header() {
  return (<h1>A Simple React Application (My 2nd one!)</h1>);
}

function Content(props) {
  // Add inline styling
  return (
    <>
      <h2 style={{ color: props.color }}>{props.text}</h2>
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
      <Content color="green" text="I think I've got it!" />
      <Footer />
    </>
  )
}

export default App
