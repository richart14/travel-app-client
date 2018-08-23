import React from 'react';

export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
  }

  render() {
    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div className="form-error">{this.props.meta.error}</div>;
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = (
        <div className="form-warning">{this.props.meta.warning}</div>
      );
    }

    return (
      <div>
        <label htmlFor={this.props.input.name}>
          {this.props.label}
          <div aria-live="polite">{error}</div>
          <div aria-live="polite">{warning}</div>
        </label>
        <input
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          className='form-input'
          ref={input => (this.input = input)}
        />
      </div>
    );
  }
}