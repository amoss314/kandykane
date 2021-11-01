import { Route, Switch } from 'react-router-dom';

import MainNavigation from './components/layout/MainNavigation';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProductsPage from './pages/Products';
import ContactPage from './pages/Contact';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/products'>
          <ProductsPage />
        </Route>
        <Route path='/contact'>
          <ContactPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
