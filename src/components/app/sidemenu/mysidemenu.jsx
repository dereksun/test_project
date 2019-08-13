import React from 'react';
import { pushRotate as Menu } from 'react-burger-menu'
import {MyContext} from '../myProvider'

export default class MySideMenu extends React.Component {

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <MyContext.Consumer>
        {(context)=> (
        <Menu disableOverlayClick isOpen={context.state.isSideMenuOpen} 
            pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } 
            onStateChange= {(state) => context.stateChangeHandler(state)}
            customBurgerIcon={false}
            > 
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
        )
      }
      </MyContext.Consumer>
    );
  }
}