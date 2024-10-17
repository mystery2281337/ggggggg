import logo from '../src/img/Logo.svg';
import './App.css';
import search from '../src/img/Search.svg';
import cart from '../src/img/Cart.svg';

function App() {
  return (
    <div className="header">
        <img src={logo} alt="logo"></img>
        <p>Organic</p>
        <ul className='tab'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Shope</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">News</a></li>
        </ul>
        <div className='block_input'>
          <input type='text'/>
          <img src={search} alt=''/>
        </div>
        <div className='cart'>
          <img src={cart} alt=''/>
          <p>cart(0)</p>
        </div>
    </div>
  );
}

export default App;
