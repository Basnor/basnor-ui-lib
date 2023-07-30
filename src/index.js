import BasnorUi from './basnorUi';
import BasnorUiDom from './basnorUiDom';

const App = (
  <div>
    <h1 className="primary">BasnorUi is awesome!</h1>
    <p>This lib is cool and awesome. Moreover, it looks like React🤫</p>
  </div>
);

BasnorUiDom.render(App, document.getElementById('root'));
