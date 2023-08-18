
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // const val = "Sathish"
  // const arr = [3,53,63,64,2,23]
  // const ran = Math.random()*10
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
               <Home />
            </Route>
            <Route path="/create">
               <Create />
            </Route>
            <Route path="/blogs/:id">
               <BlogDetails />
            </Route>
            <Route path="*">
               <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
