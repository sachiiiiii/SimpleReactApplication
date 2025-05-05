import Objectives from "./components/Objectives";

// A few simple components to display some content.
function Header() {
  return (<h1>A Simple React Application (My 2nd one!)</h1>);
}

function Content(props) {
  return (
    <>
      {/* Add props to Content component */}
      <h2 style={{ color: props.color }}>{props.text}</h2>
      {/* Add Objectives component with props to Content component */}
      <Objectives fontSize="20" listStyle="url('https://img.icons8.com/?size=20&id=123603&format=png&color=000000" />
    </>

  );
}

function Footer() {
  return (<p>Created by Osinachi O</p>);
}

function App() {
  return (
    <>
      {/* Add components to the App function */}
      <Header />
      {/* Add inline styling */}
      <Content color="turquoise" text="By completing this lab, I demonstrated my ability to:" />
      <Footer />
    </>
  )
}

export default App
