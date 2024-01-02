const app = document.getElementById('app')

// Clasico
// ReactDOM.render(<h1>Develop. Preview. Ship.</h1>, app)

// Components

function Header() {
  return (<h1>Develop. Preview. Ship.</h1>)
}

function HomePage() {
  return (
    <div>
      {/* Nesting the Header component */}
      <Header />
    </div>
  );
}
 
ReactDOM.render(<HomePage />, app)