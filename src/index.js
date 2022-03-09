// Boot da Aplicação - ponto de entrada da aplicação
import React from 'react';
// somente aqui é citado o import do react-dom
import ReactDOM from 'react-dom';
// arquivo CSS importado dentro do JS, o LPACK por baixo dos panos vai pegar todos os imports de css
// vai formar um bundle como um unico arquivo e vai pra aplicação importado pelo arquivo html
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import First from './component/first';
// Boot do React  
ReactDOM.render(
  //<App/>
  <React.StrictMode>
    <First></First>
  </React.StrictMode>,
  // VAI RENDERIZAR NO ARQUIVO index.html do diretorio public
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
