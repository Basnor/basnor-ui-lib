import { h } from 'snabbdom';

const createElement = (type, props = {}, ...children) => {
  if (type.prototype && type.prototype.isClassComponent) {
    const componentInstance = new type(props);

    componentInstance.__vNode = componentInstance.render();

    return componentInstance.__vNode;
  }

  if (typeof type === 'function') {
    return type(props);
  }

  return h(type, { props }, children);
};

class Component {
  constructor() {}

  componentDidMount() {}

  setState(partialState) {
    this.state = {
      ...this.state,
      ...partialState,
    };

    BasnorUi.__updater(this);
  }

  render() {}
}

Component.prototype.isClassComponent = true;

const BasnorUi = {
  createElement,
  Component,
};

export default BasnorUi;
