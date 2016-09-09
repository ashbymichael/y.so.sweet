var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1 className="comment">Hello, world! I am a CommentBox.</h1>
        <img src="/assets/ysosweet1.jpg"/>
      </div>
    );
  }
});
$(function() {
  ReactDOM.render(
    <CommentBox/>,
    document.getElementById('content')
  );
})