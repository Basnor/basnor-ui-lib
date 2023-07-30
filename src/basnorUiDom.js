import { init, propsModule, eventListenersModule } from 'snabbdom';
import BasnorUi from './basnorUi';

const reconcile = init([propsModule, eventListenersModule]);

const render = (el, rootDomElement) => {
  reconcile(rootDomElement, el);
};

BasnorUi.__updater = (componentInstance) => {
  const oldVNode = componentInstance.__vNode;
  const newVNode = componentInstance.render();

  componentInstance.__vNode = reconcile(oldVNode, newVNode);
};

const BasnorUiDom = {
  render,
};

export default BasnorUiDom;
