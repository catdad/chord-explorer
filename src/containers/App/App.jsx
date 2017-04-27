import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UkuleleChord, ChordInput } from '../../components';
import * as actionCreators from '../../actions';
import './App.scss';

class App extends PureComponent {
  static propTypes = {
    chords: PropTypes.shape({
      value: PropTypes.string.isRequired,
      array: PropTypes.arrayOf(PropTypes.string).isRequired,
      sanitized: PropTypes.string.isRequired
    }).isRequired,
    actions: PropTypes.objectOf(PropTypes.func).isRequired
  };

  constructor(props) {
    super(props);

    this.handleChordChange = this.handleChordChange.bind(this);
  }

  componentDidMount() {
    const { chordstring } = this.props.params;

    if (chordstring) {
      this.handleChordChange(
        chordstring
          .replace(/s/gi, '#')
          .replace(/,/g, ' ')
      );
    }
  }

  handleChordChange(value) {
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
