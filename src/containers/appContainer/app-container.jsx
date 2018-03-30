/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import TableContainer from '../tableContainer/table-container';
import HeaderContainer from '../headerContainer/header-container';
import InfoContainer from '../infoContainer/info-container';
import WindowContainer from '../windowContainer/window-container';
import AdeleInfo from '../../components/adeleInfo/adele-info';
import SectionHeader from '../../components/sectionHeader/section-header';
import UXPinPromo from '../../components/uxpinPromo/uxpin-promo';
import Footer from '../../components/footer/footer';

import StyledTwoColumns from './app-container.styles';

import prototyping from '../../assets/powerful-prototyping.png';
import deck from '../../assets/icon-board.png';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      scroll: false,
      scrollTop: 0,
      isScrolledTop: false,
    };
    this.updateScroll = this.updateScroll.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  /**
   * TODO: refactor TableContainer to use scrollTop and isScrolledTop props or
   * register window.scroll event listener directly there
   */
  updateScroll(e) {
    /* This function updates the state representing
    ** position of the scroll which triggers changes in layout
    ** Function is passed to the table container which holds
    ** all the methods and event listeners.
    */
    this.setState({ scroll: e });
  }

  handleScroll(scrollTop) {
    this.setState({
      scrollTop,
      isScrolledTop: scrollTop === 0,
    });
  }

  render() {
    const { isScrolledTop, scroll } = this.state;

    return (
      <WindowContainer onScroll={this.handleScroll}>
        <HeaderContainer scroll={!isScrolledTop} />
        <Switch>
          <Route exact path="/stats" render={() => <div>Stats placeholder</div>} />
          <Route
            render={() => {
              return <TableContainer scroll={scroll} scrollUpdate={this.updateScroll} />;
            }}
          />
        </Switch>
        <InfoContainer>
          <SectionHeader content="why adele?" id="adele-info" />
          <AdeleInfo />
          <SectionHeader content="do you need help with your system?" id="uxpin-info" />
          <StyledTwoColumns>
            <UXPinPromo
              header="Evangelize Design System with a Free Template!"
              text="40+ Slides ready for action. Perfect for team and stakeholder presentation.
                Available as a powerpoint and keynote deck."
              buttonLabel="Learn more & download"
              alt="Slide Icon"
              image={deck}
              link="https://www.uxpin.com/evangelizing-design-system-roi-template?utm_source=adele.uxpin.com&utm_medium=upartner&utm_campaign=Adele"
            />
            <UXPinPromo
              header="UXPin: Prototype and Manage Your Design System"
              text="Join thousands of companies (including PayPal, Sapient and HBO)
              and optimize your design process with UXPin."
              buttonLabel="Start a free trial now!"
              alt="Prototyping Icon"
              image={prototyping}
              link="https://www.uxpin.com?utm_source=adele.uxpin.com&utm_medium=upartner&utm_campaign=Adele"
            />
          </StyledTwoColumns>
        </InfoContainer>
        <Footer />
      </WindowContainer>
    );
  }
}
