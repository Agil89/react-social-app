import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom'
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader';
import { withSuspense } from './Hoc/withSuspense';



// const App = () =>{
// return (
// <div className='App'>
  // <span>Hello
    // </span>
  // </div>
// );
// }


const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'))
class App extends React.Component {


  componentDidMount(){
    this.props.initializeApp()
  }

  render(){
    if (!this.props.initialized){
      return <Preloader />
    }
    return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Route path='/dialogs'  render={ () =>{
              return <React.Suspense fallback={<span>Loading profile...</span>}>
                      <DialogsContainer   />
                      </React.Suspense>
            } }/>
            <Route path='/profile/:userId?'  render={withSuspense(ProfileContainer)} />
            <Route path='/music'  render={withSuspense(Music)} />
            <Route path='/news'  render={ () => <News />} />
            <Route path = '/settings'  render={ () => <Settings />} />
            <Route path = '/users' render={ () => <UsersContainer />} />
            <Route path ='/login' render={()=> <LoginContainer /> } />
          </div>
          
        </div>
    );
  }
}

let mapStateToProps = (state) =>({
  initialized:state.app.initialized
})
export default compose(
connect(mapStateToProps,{initializeApp}),
  withRouter)(App)
