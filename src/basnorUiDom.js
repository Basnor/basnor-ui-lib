import { init, propsModule } from 'snabbdom';

const reconcile = init([propsModule]);

const render = (el, rootDomElement) => {
  reconcile(rootDomElement, el);
};

const BasnorUiDom = {
  render,
};

export default BasnorUiDom;
