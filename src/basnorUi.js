import { h } from 'snabbdom';

const createElement = (type, props = {}, ...children) => {
  if (type.prototype && type.prototype.isClassComponent) {
    const componentInstance = new type(props);

    return componentInstance.render();
  }

  if (typeof type === 'function') {
    return type(props);
  }

  return h(type, { props }, children);
};

class Component {
  constructor() {}

  componentDidMount() {}

  setState(partialState) {}

  render() {}
}

Component.prototype.isClassComponent = true;

const BasnorUi = {
  createElement,
  Component,
};

export default BasnorUi;
