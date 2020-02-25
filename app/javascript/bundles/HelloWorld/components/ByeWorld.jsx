import PropTypes from 'prop-types';
import React from 'react';

export default class ByeWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  render() {
    return (
      <div>
        <h3>
          Bye {this.props.name}
        </h3>
      </div>
    );
  }
}
