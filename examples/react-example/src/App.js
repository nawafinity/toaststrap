import Toast, {ToastType, ToastPosition} from 'toaststrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'toaststrap/dist/toaststrap.css'
import './App.css';

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
    <div className="App" style={{
      backgroundImage: `url(initbg.svg)`
    }}>

      <header className="App-header">
        <img src="./logo.png" className="App-logo" alt="logo" />
        <p>
          React Example
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
