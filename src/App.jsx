import { Routes, Route } from "solid-app-router"
import styles from './styles/App.module.css';
import Articles from './Articles';
import Article from './Article';
import ComingSoon from './ComingSoon';
import ErrorPage from './ErrorPage';
import Header from './Header'


function App() {
  return (<div class={styles.app}>
    <Header />
    <div class={styles.body}>
    <Routes>
      <Route path="/" element={<Articles/>} />
      <Route path="/article" element={<Article />} />
      <Route path="/projects" element={<ComingSoon />} />
      <Route path="/projects" element={<ComingSoon />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </div>
  </div>

  );
}

export default App;
