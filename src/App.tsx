import './App.css'
import Twitter from './assets/twitter.svg';
import Twitch from './assets/twitch.svg';
import Instagram from './assets/instagram.svg';
import Linkedin from './assets/linkedin.svg';
import Github from './assets/github.svg';


function App() {
  return (
    <>
      <div className="container">

        <div className="profile">
          <img src="https://github.com/rauzola.png" alt="Profile image" />
        </div>

        <span className="username">@raul_sigoli</span>

        <div className="links">
          <a target="_blank" href="https://www.linkedin.com" className="link">linkedin</a>
          <a target="_blank" href="https://github.com" className="link">github</a>
          <a target="_blank" href="https://app.rocketseat.com.br" className="link">rocketseat</a>
          <a target="_blank" href="https://www.instagram.com" className="link">instagram</a>
        </div>

        <div className="icons">
          <a target="_blank" href="https://twitter.com/" className="icon">
            <img src={Twitter} alt="twiiter logo" />
          </a>
          <a target="_blank" href="https://www.twitch.tv/" className="icon">
            <img src={Twitch} alt="twitch logo" />
          </a>
          <a target="_blank" href="https://www.instagram.com/" className="icon">
            <img src={Instagram} alt="instagram logo" />
          </a>
          <a target="_blank" href="https://www.linkedin.com" className="icon">
            <img src={Linkedin} alt="linkedin logo" />
          </a>
          <a target="_blank" href="https://github.com/" className="icon">
            <img src={Github} alt="github logo" />
          </a>
        </div>

      </div>
    </>
  )
}

export default App
