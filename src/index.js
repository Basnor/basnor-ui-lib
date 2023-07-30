import BasnorUi from './basnorUi';
import BasnorUiDom from './basnorUiDom';
import Counter from './counter';

// Функциональный компонент
const Greeting = ({ name }) => <p>Love to see you, {name}!</p>;

const App = (
  <div>
    <h1 className="primary">BasnorUi is awesome!</h1>
    <p>This lib is cool and awesome. Moreover, it looks like React🤫</p>
    <Greeting name={'Anastasiia'} />
    <Counter />
  </div>
);

BasnorUiDom.render(App, document.getElementById('root'));
