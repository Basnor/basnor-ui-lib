import BasnorUi from './basnorUi';

export default class Counter extends BasnorUi.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    // Update once every second
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }

  componentDidMount() {
    console.log('Mounted');
  }

  render() {
    return <p>Counter: {this.state.count}</p>;
  }
}
