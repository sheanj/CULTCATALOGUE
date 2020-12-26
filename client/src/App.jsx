import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useFetch } from '../src/hooks/useFetch.js';
import { getArtist } from './services/apiCalls';
import './App.css';
import NavBar from './components/navigation/NavBar.jsx';
import Feature from './components/feature/Feature.jsx';
import About from './components/about/About.jsx';
import RequestForm from './components/request/RequestForm.jsx';
import Contact from './components/contact/Contact.jsx';
import Search from './components/search/Search';
import Crum from './components/crum/Crum';
import AddArtist from './components/crum/AddArtist.jsx';

function App() {
  const { loading, data, error } = useFetch(`https://cultcatalogue.herokuapp.com/random`);

  const retrieveArtist = async (e) => {
        e.preventDefault();
        let { id } = this.props.match.params;
        const response = await getArtist(id);
        console.log(response)
  }
  
    return (
      <div className="App">
        <NavBar />
        <div className="main">
        <Switch>
            <Route exact path="/" render={() =>
              <Fragment>
                <Feature loading={loading} data={data} error={error} />
              </Fragment>
            } />
            <Route exact path={`/:id/${process.env.REACT_APP_ACCESS_KEY}/crum/`} render={() =>
              <Fragment>
                <Crum />
              </Fragment>
            } />
            <Route exact path="/:key/add" component={AddArtist} />
            <Route exact path="/about" component={About} />
            <Route exact path="/add-form" component={RequestForm} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/search" component={Search} />
        </Switch>
        </div>
      </div>
    );
}

export default App;
