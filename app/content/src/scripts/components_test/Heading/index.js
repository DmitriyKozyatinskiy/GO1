import React, { Component } from 'react';
import './styles.scss';

class Heading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const headingType = this.props.type;
    let heading;

    if (headingType === 2) {
      heading = <h2 className="GO1__Heading2" { ...this.props } />;
    } else if (headingType === 3) {
      heading = <h3 className="GO1__Heading3" { ...this.props }  />;
    }

    return (
      <div>
        { heading }
      </div>
    );
  }
}

export default Heading;
