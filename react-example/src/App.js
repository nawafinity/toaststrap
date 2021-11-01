import logo from './logo.svg';
import './App.css';
import Toast, {ToastType, ToastPosition} from 'bootstrap5-toast';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap5-toast/dist/bootstrap5-toast.css'
function App() {

  const handleClick = (position) => {
    Toast({
      title: ':> Just a test',
      text: 'Test Test Test.',
      position: position,
      dismissible: true,
      type: ToastType.INFO,
      soundable: true,
      soundSource: 'https://assets.mixkit.co/sfx/download/mixkit-bell-notification-933.wav',

      // 1 second = 1000 milliseconds
      duration: 5
    }).show()
  }

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          bootstrap5-toast
        </p>
        <div className="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" className="btn btn-outline-primary" onClick={() => handleClick(ToastPosition.TOP_START)}>Top Start</button>
          <button type="button" className="btn btn-outline-primary" onClick={() => handleClick(ToastPosition.TOP_END)}>Top End</button>
          <button type="button" className="btn btn-outline-primary" onClick={() => handleClick(ToastPosition.BOTTOM_START)}>Bottom Start</button>
          <button type="button" className="btn btn-outline-primary" onClick={() => handleClick(ToastPosition.BOTTOM_END)}>Bottom End</button>
        </div>
      </header>
    </div>
  );
}

export default App;
