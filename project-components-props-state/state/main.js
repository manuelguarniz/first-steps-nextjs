const app = document.getElementById('app')

function createTitle(title) {
  if (title) {
    return title;
  } else {
    return 'Default title';
  }
}
 
// function Header(props) {
function Header({title}) {
  return (<h1>{`Cool ${createTitle(title)}`}</h1>)
}

function HomePage() {

  const [likes, setLikes] = React.useState(0);

  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  function handleClick() {
    setLikes(likes + 1)
  }

  return (
    <div>
      <Header title={'Titulo inicializado'} />
      <Header />

      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes}) 👍</button>
    </div>
  );
}
 
ReactDOM.render(<HomePage />, app)