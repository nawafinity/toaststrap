import Toaststrap, {ToastTypes, ToastPositions} from 'toaststrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'toaststrap/bundle/toaststrap.css'
import './App.css';

function App() {
  const handleClick = (position = '', type ='') => {
    Toaststrap({
      title: ':> Just a test',
      text: 'Test Test Test.',
      position: position ?? ToastPositions.TOP_END,
      dismissible: true,
      type: type ?? ToastTypes.DEFAULT,
      soundable: true,
      soundSource: 'https://assets.mixkit.co/sfx/download/mixkit-bell-notification-933.wav',

      // 1 second = 1000 milliseconds
      duration: 5000
    }).show()
  }

  return (
    <div className="App" style={{
      backgroundImage: `url(initbg.svg)`
    }}>

      <header className="App-header">
        <img src="./logo.svg" width="120" className="App-logo" alt="logo" />
        <div className="position-relative mb-3">
          <span className="mt-3">Toaststrap</span>
          <span className="position-absolute top-0 end-0" style={{fontSize: '13px'}}>v1.0.1</span>
        </div>
        <div className="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" className="btn btn-outline-primary" onClick={() => handleClick(ToastPositions.TOP_START)}>Top Start</button>
          <button type="button" className="btn btn-outline-primary" onClick={() => handleClick(ToastPositions.TOP_END)}>Top End</button>
          <button type="button" className="btn btn-outline-primary" onClick={() => handleClick(ToastPositions.TOP_CENTER)}>Top Center</button>
          <button type="button" className="btn btn-outline-primary" onClick={() => handleClick(ToastPositions.BOTTOM_START)}>Bottom Start</button>
          <button type="button" className="btn btn-outline-primary" onClick={() => handleClick(ToastPositions.BOTTOM_END)}>Bottom End</button>
          <button type="button" className="btn btn-outline-primary" onClick={() => handleClick(ToastPositions.BOTTOM_CENTER)}>Bottom Center</button>
        </div>
        <div className="mt-3 btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" className="btn bg-secondary text-light" onClick={() => handleClick('', ToastTypes.DEFAULT)}>DEFAULT</button>
          <button type="button" className="btn bg-primary text-light" onClick={() => handleClick('', ToastTypes.PRIMARY)}>PRIMARY</button>
          <button type="button" className="btn bg-info text-light" onClick={() => handleClick('', ToastTypes.INFO)}>INFO</button>
          <button type="button" className="btn bg-success text-light" onClick={() => handleClick('', ToastTypes.SUCCESS)}>SUCCESS</button>
          <button type="button" className="btn bg-warning" onClick={() => handleClick('', ToastTypes.WARNING)}>WARNING</button>
          <button type="button" className="btn bg-danger text-light" onClick={() => handleClick('', ToastTypes.DANGER)}>DANGER</button>
          <button type="button" className="btn bg-sweet text-light" onClick={() => handleClick('', ToastTypes.SWEET)}>SWEET</button>
        </div>
      </header>
    </div>
  );
}

export default App;
