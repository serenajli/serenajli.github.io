import React from 'react';
import Home from './container/Home';
import Work from './container/Work';
import Travel from './container/Travel';
import Blog from './container/Blog';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';

export default () => {
  return (
    <Router component={App}>
      <div>
        <Header />
        <div className="content">
          <Route path="/" exact={true} component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/travel" component={Travel} />
          <Route path="/blog" component={Blog} />
        </div>
        <Footer />
      </div>
    </Router>
  );
};