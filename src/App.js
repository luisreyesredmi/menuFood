import './App.css';
import Header from './components/Header';
import Grid from './components/Grid';
import Menu from './components/Menu';
import Index from './components/Index';
import Content from './components/Content';
import Create from './components/Create';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function Home() {

  return (
    <div>
      <Header />
      <Grid />
    </div>
  )
}

function Detalle() {
  return (
    <div>
      <Header />
      <Menu />
      <Index />
      <Content />
    </div>
  )
}

function Search() {
  return (
    <div>
      <Header />
      <Create />
    </div>
  )
}

function App() {
  return (
    <Router>
        <Routes>
          <Route element={<Detalle />} path="/food/:id"/>
          <Route element={<Search />} path="/create/"/>
          <Route element={<Home />} path="/"/>
        </Routes>
    </Router>
  );
}


export default App;
