// Generated by CoffeeScript 2.0.0-beta4
var TestStore;

import Reflux from 'reflux';

import TestAction from 'actions/TestAction';

TestStore = class TestStore extends Reflux.Store {
  constructor(props) {
    super(props);
    this.listenToMany(TestAction);
    this.state = {
      counter: 0
    };
  }

  increment() {
    var count;
    count = this.state.counter + 1;
    return this.setState({
      counter: count
    });
  }

  decrement(step) {
    var count;
    count = this.state.counter - step;
    return this.setState({
      counter: count
    });
  }

};

export default TestStore;