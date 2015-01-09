var React = require('react');
var RadioGroup = require('react-radio-group');
var EMOTIONS = require('../emotions');

var EmotionSelector = React.createClass({
  getInitialState: function() {
    return {selectedEmotion: this.props.initialEmotion};
  },

  renderEmotionSelections: function(emotions) {
    return emotions.map(this.renderEmotionSelection);
  },

  renderEmotionSelection: function(emotion, i) {
    return (
      <label key={i}>
        {emotion}
        <input type="radio" value={i} />
      </label>
    );
  },

  handleChange: function(event) {
    var selectedEmotion = event.target.value;
    this.setState({ selectedEmotion });
    this.props.onChange(selectedEmotion);
  },

  render: function() {
    return (
      <RadioGroup value={this.state.selectedEmotion} onChange={this.handleChange}>
        {this.renderEmotionSelections(EMOTIONS)}
      </RadioGroup>
    );
  }
});

module.exports = EmotionSelector;
