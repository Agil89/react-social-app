import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom'
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Sidebar/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';




// const App = () =>{
// return (
// <div className='App'>
  // <span>Hello
    // </span>
  // </div>
// );
// }



function App(props) {

return (
  <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs'  render={ () => <DialogsContainer   />}/>
        <Route path='/profile'  render={ () => <Profile  />} />
        <Route path='/music'  render={ () => <Music />} />
        <Route path='/news'  render={ () => <News />} />
        <Route path = '/settings'  render={ () => <Settings />} />
       
      </div>
      
    </div>
</BrowserRouter>
);
}



export default App;