import { h } from 'snabbdom';

const createElement = (type, props = {}, ...children) => {
  return h(type, { props }, children);
};

const BasnorUi = {
  createElement,
};

export default BasnorUi;
