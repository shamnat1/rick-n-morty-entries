import React from 'react';

import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import CharacterList from './Character/CharacterList'
import Character from './Character/Character'
import EpisodeList from './Episode/EpisodeList'
import Episode from './Episode/EpisodeDetail'
import LocationsList from './Location/LocationList'
import Location from './Location/LocationDetail'
import Navbar from 'react-bootstrap/Navbar'


const Navigation = (props) => {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <a href="/characters" className="navbar-brand">
                    Home
                </a>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/characters"} className="nav-link">
                            Characters
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/episodes"} className="nav-link">
                            Episodes
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/locations"} className="nav-link">
                            Location
                        </Link>
                    </li>
                </div>
            </Navbar>

            <div className="container mt-3">
                <Switch>
                    <Route exact path={["/", "/characters"]} component={CharacterList} />
                    <Route exact path="/character/:id" component={Character} />
                    <Route exact path={["/", "/episodes"]} component={EpisodeList} />
                    <Route exact path="/episode/:id" component={Episode} />
                    <Route exact path={["/", "/locations"]} component={LocationsList} />
                    <Route exact path="/location/:id" component={Location} />
                </Switch>
            </div>
        </Router>
    );
};

export default Navigation;