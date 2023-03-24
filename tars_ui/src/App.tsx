import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Blog from './components/pages/Blog';
// import ArticleSearch from './components/pages/ArticleSearch';
// import EmailRegistration from './components/pages/EmailRegistration';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Blog} />
            <Route path="/blog" component={Blog} />
            <Route path="/article-search" component={ArticleSearch} />
            <Route path="/email-registration" component={EmailRegistration} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;