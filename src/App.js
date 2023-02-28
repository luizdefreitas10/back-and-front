import React, {useEffect, useState} from 'react';
import api from './services';
import GlobalStyles from './styles/GlobalStyles';

function App() {

const [ cursos, setCursos ] = useState([])

useEffect(() => {
  // const res = api.get('/api/v1/cursos').then(response => console.log(response.data)).then(data => console.log(data));
  // setCursos(res.data);
  // console.log(cursos)

  // console.log(res);
  const fetchData = async () => {
    try {
      const response = await api.get('/api/v1/cursos');
      console.log(response.data);
      setCursos(response.data);
      console.log(cursos);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
}, [])


  return (
    <div className="App">
      <GlobalStyles />
      <header className="App-header">
        <h1>App de teste back and front with LuizoDevScripts</h1>
        { cursos.map((curso) => 
          (
            <div key={curso.id}>
              <p>{ `O nome do curso é : ${curso.titulo}` }</p>
              <p>{ `A URL do curso é: ${curso.url}` }</p>
              <p>{ `Este curso foi criado em: ${curso.criacao}`}</p>
            </div>
          )
        )}
      </header>
    </div>
  );
}

export default App;
