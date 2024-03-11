import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ThemeVideoContext from './context/ThemeVideoContext'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import VideoDetailsView from './components/VideoDetailsView'
import GamingRoute from './components/GamingRoute'
import TrendingVideosRoute from './components/TrendingVideosRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    activeTab: 'Home',
    savedVideos: [],
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachItem => eachItem.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const updatedSavedVideos = savedVideos.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({savedVideos: updatedSavedVideos})
  }

  render() {
    const {savedVideos, isDarkTheme, activeTab} = this.state

    return (
      <ThemeVideoContext.Provider
        value={{
          savedVideos,
          isDarkTheme,
          activeTab,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailsView}
          />
          <ProtectedRoute
            exact
            path="/trending"
            component={TrendingVideosRoute}
          />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeVideoContext.Provider>
    )
  }
}

export default App
