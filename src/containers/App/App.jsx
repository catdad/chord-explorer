import React, { PropTypes, PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UkuleleChord, ChordInput } from '../../components';
import * as actionCreators from '../../actions';
import './App.scss';

class App extends PureComponent {
  static propTypes = {
    chords: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    actions: PropTypes.objectOf(PropTypes.func).isRequired
  };

  constructor(props) {
    super(props);

    this.handleChordChange = this.handleChordChange.bind(this);
  }

  handleChordChange(value) {
    this.props.actions.setChords(value);
  }

  render() {
    const chordElems = this.props.chords.value
      .map((name) => <UkuleleChord key={ name } name={ name } />);

    return (
      <div>
        <ChordInput onChange={ this.handleChordChange } />
        <div>{ chordElems.length ? chordElems : 'Nothing to see here.' }</div>
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
