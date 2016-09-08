var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Hello, world! I am a CommentBox.</h1>
      </div>
    );
  }
});
$(function() {
  ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
  );
})