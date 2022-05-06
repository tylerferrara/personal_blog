import { Routes, Route } from "solid-app-router"
import logo from './logo.svg';
import styles from './App.module.css';
import Home from './Home';
import Page from './Page';

function App() {
  return (
    <div class={styles.App}>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/page" element={<Page />} />
    </Routes>
    </div>
  );
}

export default App;
