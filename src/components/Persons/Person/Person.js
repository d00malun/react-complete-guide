import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Fragment>
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} year old!
        </p>
        <p>{this.props.children}</p>
        <input
          // ref={(inputEl)=>{this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);