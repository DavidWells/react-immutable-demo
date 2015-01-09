var React = require('react');
var HappyTrack = require('./happy-track');
var Immutable = require('immutable');

var EditHappyTrack = React.createClass({
  componentWillReceiveProps: function() {
    console.log('did get', arguments);
  },
  submit: function(updatedEmotion) {
    console.log('you added a new emo');
    this.props.cursor.update(function(oldEmotion) {
      //return {why: this.state.why, emotion: this.state.emotion, date: oldEmotion.date};
      return oldEmotion.merge(Immutable.fromJS(updatedEmotion));
    });
  },

  render: function() {
    console.log('emotions is', this.props.cursor.get('emotion'), 'why is', this.props.cursor.get('why'));
    return (
      <HappyTrack
        onSubmit={this.submit}
        emotion={this.props.cursor.get('emotion')}
        why={this.props.cursor.get('why')} />
    );
  }
});

module.exports = EditHappyTrack;
