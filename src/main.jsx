import React from 'react' // importando todas las prop de react
import ReactDOM from 'react-dom/client' // importando todas las prop de react dom
import App from './App.jsx' // lo estams importando porque mas abajo lo usamos
import './index.css' // importando el css desde src
import Colores from './Colores.jsx' // importamos el componente de Colores

ReactDOM.createRoot(document.getElementById('root')).render( //indicamos que la root del proy es una carpeta creada anteriormente cuyo id es root
  <React.StrictMode>

    <Colores/>
    <App />
    
  </React.StrictMode>,
) // el React.StrictMode es opcional. Sirve para que nos salgan errores si hay alguna linea mal escrita


/*

public: carpeta de archivos estáticos, como imagenes, fuentes, algun css externo...
assets: carpeta también de archivos que se importarán como imagenes, etc...

VITE permite que sin escribir arriba el import, eso se escriba solo con tan solo meter el <Colores/> dentro del render

Con REACT no hace falta que cada componente tenga su propio CSS. Podemos crear uno especifico para cada comp, o simplemente usar uno general


*/