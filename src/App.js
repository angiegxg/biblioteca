
import './App.css';
import Home from './components/pages/home/Home'
import { Provider } from 'react-redux';
import { store } from './components/redux/store';

function App() {
  return (
    <div>
      <Provider store= {store} >
      <Home/>
      </Provider>
    </div>
  );
}

export default App;
