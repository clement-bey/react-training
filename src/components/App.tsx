import React, {Component, ComponentProps, ReactNode} from 'react';
import Title from "./Title";

type AppProps = {
  user : User
  // toogle : boolean
};

type AppState = {
  toogle : boolean,
  readonly tada : string,
  poro : string | undefined,
}

interface User {
  name : string,
  id : number
}

class App extends Component<AppProps, AppState> {
  // state : AppState = {
  //   toogle : false,
  //   tada : "Tada",
  //   poro : undefined
  // }


  constructor(props : ComponentProps<any>) {
    super(props);
    this.state = {
      toogle : false,
      tada : "Tada",
      poro : undefined
    };
  }

  myFunc = (): void => {
    let user : User = {
      name : "Salut",
      id : 0
    };
    console.log("myFunc triggered in app")
    this.setState((prevState, prevProps) => {return {toogle : !prevState.toogle}});
  };

  changePoro = (e: React.FormEvent<HTMLInputElement>) : void => {
    this.setState((prevState, prevProps) => {return {poro : e.currentTarget.value}});
  }

  tada = ():void => {
    this.setState({toogle : !this.state.toogle});
  }

  render() {
    let helloWorld : string = "salut";
    return <div>
      <div onClick={this.myFunc}> {helloWorld + this.state.tada} </div>
      <Title onMyClick={this.tada} />
      <input type="text" value={this.state.poro} name="poro" onChange={this.changePoro}/>
      {this.state.toogle && <p>Toogle on</p>}
      {this.state.poro}
      {/*{typeof this.state.poro === "MakeHappendMiracle"}*/}
    </div>
  }
}

export default App;