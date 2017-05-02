import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UkuleleChord, ChordInput, EmptyChordlist } from '../../components';
import * as actionCreators from '../../actions';
import './App.scss';

class App extends PureComponent {
  static propTypes = {
    chords: PropTypes.shape({
      value: PropTypes.string.isRequired,
      array: PropTypes.arrayOf(PropTypes.string).isRequired,
      sanitized: PropTypes.string.isRequired
    }).isRequired,
    actions: PropTypes.objectOf(PropTypes.func).isRequired,
    params: PropTypes.shape({
      chordstring: PropTypes.string
    }).isRequired
  };

  constructor(props) {
    super(props);

    this.handleChordChange = this.handleChordChange.bind(this);
  }

  componentDidMount() {
    const { chordstring } = this.props.params;

    if (chordstring) {
      this.props.actions.setChordstring(chordstring);
    }
  }

  handleChordChange(value) {
    this.props.actions.setChords(value);
  }

  render() {
    const chordElems = this.props.chords.array
      .map((name) => <UkuleleChord key={ name } name={ name } />);

    return (
      <div className="app-body">
        <div className="app-header-wrap">
          <div className="header-input">
            <ChordInput
              onChange={ this.handleChordChange }
              value={ this.props.chords.value }
            />
          </div>
        </div>
        <div className="app-body-wrap">{
          chordElems.length ?
            <div className="chord-body">{
              chordElems
            }</div> :
            <EmptyChordlist />
        }</div>
        <div className="app-footer-wrap">
          <span>{ 'Made with 💕 and 🍸 by ' }</span>
          <a href="https://github.com/catdad">{ '@catdad' }</a>
          <span>{ '.' }</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ chords }) => ({
  chords
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
