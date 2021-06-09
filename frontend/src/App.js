import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage/index";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import TrackList from "./components/TracksList";
import TrackDetail from './components/TracksList/TrackDetail'
import Footer from './components/Footer/index'
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <TrackList></TrackList>
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/tracks/:id'>
            <TrackDetail />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;