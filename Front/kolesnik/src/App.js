import 'normalize.css/normalize.css';
import {Provider} from "react-router-dom";
import AppRouter from './routers/AppRouter';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';

function App() {
  return (
      <AppRouter/>
  );
}

export default App;
