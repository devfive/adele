import React from 'react';
import PropTypes from 'prop-types';
import { Observable } from 'rxjs';

export default class WindowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.subscriptions = [];
    this.windowScroll$ = Observable.fromEvent(window, 'scroll')
      .map(event => event.target.documentElement.scrollTop || 0);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    this.subscriptions.push(this.windowScroll$.subscribe(this.handleScroll));
  }

  componentWillUnmount() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  handleScroll(scrollTop) {
    this.props.onScroll(scrollTop);
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

WindowContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  onScroll: PropTypes.func,
};

WindowContainer.defaultProps = {
  onScroll: () => null,
};
