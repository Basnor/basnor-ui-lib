import BasnorUi from './basnorUi';

export default class Counter extends BasnorUi.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('Mounted');
  }

  render() {
    return (
      <div>
        <p>Counter: {this.state.count}</p>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Increment
        </button>
      </div>
    );
  }
}
