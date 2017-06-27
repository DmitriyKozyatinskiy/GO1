import React, { Component } from 'react';
import Heading2 from './Heading2';
import Heading3 from './Heading3';

class Heading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      margin: '0 0 10px 0',
      textAlign: 'center',
    };
    const headingType = this.props.type;
    let heading;

    if (headingType === 2) {
      heading = <Heading2 style={ styles } { ...this.props } />;
    } else if (headingType === 3) {
      heading = <Heading3 style={ styles } { ...this.props }  />;
    }

    return (
      <div>
        { heading }
      </div>
    );
  }
}

export default Heading;
