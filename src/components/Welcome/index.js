import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({
      isSubscribed: (prevState.isSubscribed: true),
    }))
    // this.renderAuthButton()
  }

  onSubscribed = () => {
    this.setState(prevState => ({
      isSubscribed: (prevState.isSubscribed: false),
    }))
    // this.renderAuthButton()
  }

  render() {
    const {isSubscribed} = this.state
    let authButton
    if (isSubscribed) {
      authButton = (
        <button className="button" onClick={this.onSubscribed}>
          Subscribed
        </button>
      )
    } else {
      authButton = (
        <button className="button" onClick={this.onSubscribe}>
          Subscribe
        </button>
      )
    }

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        {authButton}
      </div>
    )
  }
}

export default Welcome
