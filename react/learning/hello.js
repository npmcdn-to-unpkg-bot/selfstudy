import React from 'react';

// const Hello = ({ name }) =>
//   <div>
//     Hello {name}
//   </div>;
// Hello.propTypes = {
//   name: React.PropTypes.string.isRequired
// };
class Hello extends React.Component {
  render() {
    return (
      <div>
         Hello {this.props.name}
      </div>
    );
  }
}

Hello.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default Hello;
