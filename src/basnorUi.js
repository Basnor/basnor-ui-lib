import { h } from 'snabbdom';

const createElement = (type, props = {}, ...children) => {
  children = children.flat();

  if (type.prototype && type.prototype.isClassComponent) {
    const componentInstance = new type(props);

    componentInstance.__vNode = componentInstance.render();
    componentInstance.__vNode.data.hook = {
      create: () => {
        componentInstance.componentDidMount();
      },
    };

    return componentInstance.__vNode;
  }

  if (typeof type === 'function') {
    return type(props);
  }

  let dataProps = {};
  let eventProps = {};

  for (let propKey in props) {
    if (propKey.startsWith('on')) {
      const event = propKey.substring(2).toLowerCase();

      eventProps[event] = props[propKey];
    } else {
      dataProps[propKey] = props[propKey];
    }
  }

  return h(type, { props: dataProps, on: eventProps }, children);
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
