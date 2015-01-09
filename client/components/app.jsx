var React = require('react');
var Router = require('react-router');
var EMOTIONS = require('../emotions');

var App = React.createClass({
  mixins: [Router.State, Router.Navigation],

  showEntryForm: function() {
    this.transitionTo('new');
  },

  renderEntry: function(entry, i) {
    return (
      <li key={i}>
        <Router.Link to="show" params={{id: i}}>
          {EMOTIONS[entry.get('emotion')]} - {entry.get('date').toDateString()}
        </Router.Link>
      </li>
    );
  },

  renderEntries: function(entries, i) {
    var renderedEntries = this.props.cursor.map(this.renderEntry);
    return (
      <div key={i}>
        <h3>Previous Entries</h3>
        <ul>
          {renderedEntries.toJS()}
        </ul>
      </div>
    );
  },

  renderChildRoute: function() {
    var isRenderingChildEmotion = this.getParams().id != null;
    if (isRenderingChildEmotion) {
      console.log('params', this.getParams());
      console.log('isRenderingChildEmotion', this.getParams().id);
      return <Router.RouteHandler cursor={this.props.cursor.get(this.getParams().id)} />
    } else {
      // we don't have a cursor for this value specifically so just pass
      // the whole cursor down
      return <Router.RouteHandler cursor={this.props.cursor}/>
    }
  },

  render: function() {
    return (
      <div className="row">
        <div className="small-3 columns">
          <div className="row">
            {this.renderEntries()}
          </div>
          <div className="row">
            <button onClick={this.showEntryForm}>Add Entry</button>
          </div>
        </div>
        <div className="small-9 columns">
          {this.renderChildRoute()}
        </div>
      </div>
    );
  }
});

module.exports = App;
