var React = require('react/addons');
var EmotionSelector = require('./emotion-selector');

var HappyTrack = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getDefaultProps: function() {
    return {
      emotion: 3,
      why: ''
    };
  },

  getInitialState: function() {
    console.log('props is', this.props);
    return {emotion: this.props.emotion, why: this.props.why };
  },

  componentWillReceiveProps: function(props) {
    console.log('got props', arguments);
    this.setState({emotion:props.emotion, why:props.why});
  },

  emotionChanged: function(emotion) {
    this.setState({emotion});
  },

  submit: function() {
    this.props.onSubmit(this.state);
  },

  render: function() {
    return (
      <div>
        <h2>How Am I Feeling Today?</h2>
        <EmotionSelector initialEmotion={this.state.emotion} onChange={this.emotionChanged} />

        <label>Why?
          <textarea valueLink={this.linkState('why')}></textarea>
        </label>

        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
});

module.exports = HappyTrack;
