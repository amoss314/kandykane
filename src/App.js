import { Route, Switch } from 'react-router-dom';

import MainNavigation from './components/layout/MainNavigation';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import BookPage from './pages/BookNow';

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
        <Route path='/services'>
          <ServicesPage />
        </Route>
        <Route path='/book-now'>
          <BookPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
