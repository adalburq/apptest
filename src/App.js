import logo from './logo.svg';
import './App.css';

// Componente é uma ou função ou classe 
// Essa retorna o que é pra ser apresentado na tela, retorna pro REACT o que deve mostrar na tela
// essa forma do que deve apresentar a gente expressa isso com JSX 
//  *JSX* Criado pela equipe de desenvolvimento do React, o JSX é uma forma de criar elementos para serem utilizadas 
//  como templates de aplicações React. Basicamente, os elementos criados com o JSX são bem similares com código HTML 
//  e fornecem aos desenvolvedores uma forma mais simples e intuitiva de criar os componentes de uma aplicação. 
//  Porém, apesar de muito similar ao HTML, o JSX não é interpretado pelo navegador. 
//  Por este motivo, deve-se utilizar um “transpilador” para essa conversão. Atualmente, o mais conhecido deles é o Babel,

function App() {
  return (
    // deve ter somente um único div raiz
    <div className="App">
      <header className="App-header">
        <button type="button">Mostrar</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
