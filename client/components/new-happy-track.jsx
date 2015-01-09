var React = require('react');
var HappyTrack = require('./happy-track');
var Immutable = require('immutable');

var NewHappyTrack = React.createClass({
  submit: function(emotion) {
    this.props.cursor.update(function(emotionsList) {
      emotion.date = new Date();
      return emotionsList.push(Immutable.fromJS(emotion));
    });
  },

  render: function() {
    return (
      <HappyTrack onSubmit={this.submit} />
    );
  }
});


module.exports = NewHappyTrack;
