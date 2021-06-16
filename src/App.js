import React from 'react';
import Lightbulb from './components/Lightbulb';
import Button from './components/Button';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      isLightOn: false,
      btnText: 'Turn On Light'
    }
  }

  handleClick = () => {
    if(this.state.isLightOn === true){
      this.setState({isLightOn: false, btnText: 'Turn On Light'})
    }else{
      this.setState({isLightOn: true, btnText: 'Turn Off Light'})
    }
  }

  render(){
    const url = this.state.isLightOn ? 'https://media.giphy.com/media/26BkNrGhy4DKnbD9u/giphy.gif' : 'https://media2.giphy.com/media/26BkNrGhy4DKnbD9u/giphy_s.gif?cid=ecf05e476l7j8ye6ksk1brmu0rncumn9fmukoj9p262btao8&rid=giphy_s.gif';
    // const btnText = this.state.isLightOn ? 'Turn Off Light' : 'Turn On Light';
    return(
      <div className="App">
        <Lightbulb url={url}/>
        <Button handleClick={this.handleClick} text={this.state.btnText}/>
      </div>
    )
  }
}

export default App;
