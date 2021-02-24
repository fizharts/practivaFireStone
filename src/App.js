import { store } from './redux/store';
import { InsertarDatos } from './components/InsertarDatos';
import './App.css';
import { Provider } from 'react-redux'
import { Fragment } from 'react/cjs/react.development';
import { Agregar } from './components/Agregar/Agregar';
function App() {
  return (
    <Provider store={ store }>
      <Fragment>
        <div className="container">
        <h1>App con fire base <Agregar/></h1> 
          
        </div>
        <InsertarDatos />
      </Fragment>
    </Provider>
  );
}

export default App;
