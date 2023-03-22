import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainBody from './components/MainBody';
import NavigationPath from './Routes/NavigationPaths';

function App() {
  return (
    <BrowserRouter basename="/">
      <Header />
      <MainBody>
        <Routes>
          {NavigationPath.map((route) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          ))}
        </Routes>
      </MainBody>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
