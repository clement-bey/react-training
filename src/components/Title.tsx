import React, {Component, ComponentProps} from 'react';

type TitleProps = {
  onMyClick : () => void
}

//
// type TitleState = {
//
// }

class Title extends Component<TitleProps> {
  // state : {}
  //
  //
  // // constructor(props : ComponentProps<any>) {
  // //   super(props);
  // //   this.state = {};
  // // }

  render(){
    return <h1 onClick={this.props.onMyClick}>Hello</h1>
  }
}

export default Title;