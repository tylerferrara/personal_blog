import { Routes, Route } from "solid-app-router"
import styles from './styles/App.module.css';
import Home from './Home';
import Page from './Page';
import Header from './Header'


function App() {
  return (<>
    <Header />
    <div class={styles.header}>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/page" element={<Page />} />
    </Routes>
    </div>
  </>

  );
}

export default App;
