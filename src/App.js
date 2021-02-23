import { InsertarDatos } from './components/InsertarDatos';
import './App.css';
import { Fragment } from 'react/cjs/react.development';
import fireBaseConf from './firebase/fireBaseConf';
function App() {
  return (
      <Fragment>
        <h1>App con fire base</h1>
        <InsertarDatos />
      </Fragment>
  );
}

export default App;
