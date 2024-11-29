import logo from './logo.svg';
import './App.css';
import OtpLogin from './component/Otp';

function App() {

  function handleChange(otp){
    console.log(otp,'--- otp is');
  }

  return (
    <div className="App">
      Hii
      <OtpLogin length={6} onChange={handleChange} />
    </div>
  );
}

export default App;
