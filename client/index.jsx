var React = require('react/addons');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Immutable = require('immutable');
var Cursor = require('immutable/contrib/cursor');
var App = require('./components/app');
var NewHappyTrack = require('./components/new-happy-track');
var EditHappyTrack = require('./components/edit-happy-track');

var cursor;
var handler;
// TODO: get from server etc

var entries = Immutable.fromJS([
  {why: 'Someone told me I had a big nose', emotion: 0, date: new Date()},
  {why: 'I got to talk about React!', emotion: 3, date: new Date()},
  {why: 'Word up son', emotion: 2, date: new Date()}
]);

function cursorChanged(newState, oldState, path) {
  cursor = Cursor.from(newState, cursorChanged);
  console.log('handler', handler);
  render(handler, cursor);
}
cursor = Cursor.from(entries, cursorChanged);

var Empty = React.createClass({
  render: function() {
    return <p>Select an entry or create a new one.</p>;
  }
});

var routes = (
  <Route path="/" handler={App} >
    <DefaultRoute handler={Empty} />
    <Route name="new" path="entries/new" handler={NewHappyTrack} />
    <Route name="show" path="entries/:id" handler={EditHappyTrack} />
  </Route>
);

// variable to hold the current react router handler
Router.run(routes, function(h, state) {
  handler = h;
  render(handler, cursor);
});

function render(Handler, cursor) {
  React.render(<Handler cursor={cursor} />, document.body.querySelector('.app'));
  console.log('immutable', cursor);
}
