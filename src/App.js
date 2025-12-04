
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {AllRoutes} from './routes/AllRoutes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
