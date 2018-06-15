import React from 'react';
import { renderRoutes } from 'react-router-config';
import Menu from './components/Menu';

const App = ({ route }) => {
  return (
    <div className="row">
      <nav>
        <div className="nav-wrapper">
          <a href="javascript:void(0)" className="brand-logo">Phonebook - Send4</a>
        </div>
      </nav>
      
      <div className="col s12 m4 l3">
        <Menu></Menu>
      </div>

      <div className="col s12 m8 l9"> 
        {renderRoutes(route.routes)}
      </div>

    </div>
    
  );
};

export default {
  component: App
};
