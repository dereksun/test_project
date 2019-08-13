import React from 'react';
import {Button} from 'reactstrap';

export default class MyPortfolioList extends React.Component {

  toggleOpen(e){
    console.log("clicked")
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <main id="page-wrap">
        <h1>Some context</h1>
        <Button onClick={this.toggleOpen}>123</Button>
      </main>
    );
  }
}