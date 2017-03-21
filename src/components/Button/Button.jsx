import React, { PropTypes, PureComponent } from 'react';
import './Button.scss';

export default class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    clickProps: PropTypes.arrayOf(PropTypes.any),
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    tabIndex: PropTypes.string,
    title: PropTypes.string
  };
  static defaultProps = {
    children: null,
    className: '',
    clickProps: [],
    disabled: false,
    tabIndex: '',
    title: ''
  };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(...args) {
    const { onClick, clickProps } = this.props;

    onClick(...clickProps, ...args);
  }

  render() {
    const { children, className, disabled, tabIndex, title } = this.props;

    return (
      <button
        className={ `button ${className}` }
        onClick={ this.handleClick }
        disabled={ disabled }
        tabIndex={ tabIndex }
        title={ title }
      >
        { children }
      </button>
    );
  }
}
