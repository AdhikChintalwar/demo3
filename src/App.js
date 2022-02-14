import logo from './logo.svg';
import Modal from 'react-modal/lib/components/Modal';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const customStyles = {
  content: {
    width: '50%',
    height: '50%',

    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('*');
function App(props) {
  const [show, setshow] = useState(false);
  const [name, setName] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginpwd, setLoginpwd] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reTypepwd, setReTypePwd] = useState('');
  const [data, setdata] = useState('');

  // function id(){
  //   Id=Id+1;
  //   setId(Id);
  // }
  function checkUser(loginEmail, loginpwd) {
  //  if(Users[loginEmail]==loginpwd){
  //   console.log("entered");
  //  }
  //  else{
  //    alert("no");
  //  }
  }
  function createAcc(name, email, pwd) {
    Users[email]=pwd;
    console.log(Users);
  }
  function showModal() {
    setshow(true);
  }
  function closeModal() {
    setshow(false);

  }
  var Users = {};
  return (
    <div className="App">

      <header className="App-header">
        <div className='login-box'>
          <p style={{ display: 'inline-flex', fontSize: 'auto' }}><b>DEMO</b><span>          <img src={logo} className='App-logo'></img>
          </span> <b>PROJECT</b></p>
          <label>Enter Email:</label>
          <input onChange={e => setLoginEmail(e.target.value)} style={{ width: '50%', height: '5%' }} type="email"></input>
          <label>Enter Password:</label>
          <input onChange={e => setLoginpwd(e.target.value)} style={{ width: '50%', height: '5%' }} type="password"></input>
          <div className='buttons'>
            <button onClick={() => checkUser(loginEmail, loginpwd)} style={{ fontSize: '65%', marginRight: '20px', borderRadius: '8px', padding: '5px' }}><b>SignIn</b></button>
            <button onClick={() => showModal()} style={{ fontSize: '65%', marginLeft: '20px', borderRadius: '8px', padding: '5px' }} ><b>SignUp</b></button>
          </div>
        </div>
      </header>

      <Modal
        isOpen={show}
        onRequestClose={closeModal}
        style={customStyles}
      // style={{
      //   width
      // }}
      >
        <div className='modal'>
          <p style={{ fontSize: '110%', backgroundColor: 'red', width: '100%', textAlign: 'center', height: 'auto' }}><b>SIGNIN TO OUR DEMO PROJECT</b></p>
          <label>Enter Your Name:</label>
          <input style={{ width: '50%', height: '5%', borderRadius: '13px' }} onChange={e => setName(e.target.value)} type="name"></input>
          <label>Enter Email:</label>
          <input style={{ width: '50%', height: '5%', borderRadius: '13px' }} onChange={e => setEmail(e.target.value)} type="email"></input>
          <label>Enter Password:</label>
          <input style={{ width: '50%', height: '5%', borderRadius: '13px' }} onChange={e => setPassword(e.target.value)} type="password"></input>
          <label>ReType Password:</label>
          <input style={{ width: '50%', height: '5%', borderRadius: '13px' }} onChange={e => setReTypePwd(e.target.value)} type="password"></input>
          <div className='buttons'>
            <button onClick={() => closeModal()} style={{ fontSize: '65%', marginRight: '20px', borderRadius: '8px', padding: '5px' }}><b>Cancel</b></button>
            <button onClick={() => createAcc(name, email, password)} style={{ fontSize: '65%', marginLeft: '20px', borderRadius: '8px', padding: '5px' }} ><b>SignUp</b></button>
          </div>

        </div>
      </Modal>
    </div>
  );
}

export default App;
