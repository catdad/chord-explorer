import React, { PropTypes, PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UkuleleChord, ChordInput } from '../../components';
import * as actionCreators from '../../actions';
import './App.scss';

function unique(arr) {
  return Array.from(new Set(arr));
}

class App extends PureComponent {
  static propTypes = {
    chords: PropTypes.string.isRequired,
    actions: PropTypes.objectOf(PropTypes.func).isRequired
  };

  constructor(props) {
    super(props);

    this.handleChordChange = this.handleChordChange.bind(this);
  }

  handleChordChange(value) {
    global.console.log(value);

    this.props.actions.setChords(value);
  }

  render() {
    const str = 'A Am A# Am7 Bb B Bm Bm7 C D Em E7 G Gm G7 F Fmaj7 Q open';

    const chordElems = unique(str.split(' '))
      .map((name) => <UkuleleChord key={ name } name={ name } />);

    global.console.log(this.props.chords);

    return (
      <div>
        <ChordInput onChange={ this.handleChordChange } />
        <div>{ chordElems }</div>
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
