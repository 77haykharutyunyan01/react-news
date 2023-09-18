import './App.css';
import RegisterPage from '../RegisterPage';
import UserPage from "../UserPage"
import { Component } from 'react';
class App extends Component {
  state = {
    isRegistred: false,
    userData: null
  }
  handleRegistration = (userData) => {
    this.setState({
      userData,
      isRegistred: true
    })
  }
  render() {
    const { userData, isRegistred } = this.state
    return (
      <div className="App">
        {
          isRegistred ? <UserPage userData={userData} /> :
            <RegisterPage handleRegistration={this.handleRegistration} />
        }
      </div>
    );
  }
}
export default App;
