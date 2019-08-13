import React from 'react';
import logo from '../../asserts/images/logo.svg';
import './App.css';
import MyNavBar from './header/mynavbar';
import MySideMenu from './sidemenu/mysidemenu'
import MyPortfolioList from './portfolio/myportfoliolist';
import {MyProvider} from './myProvider'

export default class App extends React.Component {

  render(){
    return (
      <MyProvider>
        <div className="">
          <header>
            <MyNavBar></MyNavBar>
          </header>
          <div className="" id="outer-container">
              <MySideMenu></MySideMenu>
              <MyPortfolioList></MyPortfolioList>
          </div>
        </div>
      </MyProvider>
    );
  }
}

