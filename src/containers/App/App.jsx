import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
    this.initChords = '';
  }

  componentDidMount() {
    this.initChords = this.props.params.chordstring || '';

    global.console.log('component did mount', this.initChords);

    if (this.initChords) {
      this.handleChordChange(this.initChords);
    }
  }

  handleChordChange(value) {
    global.console.log('handle change');
    this.initChords = '';
    this.props.actions.setChords(value);
  }

  render() {
    const chordElems = this.props.chords.array
      .map((name) => <UkuleleChord key={ name } name={ name } />);

    return (
      <div>
        <div className="header-input">
          <ChordInput
            onChange={ this.handleChordChange }
            value={ this.props.chords.value }
          />
        </div>
        <div className="chords-body">{
          chordElems.length ?
            chordElems :
            'Nothing to see here.'
        }</div>
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
