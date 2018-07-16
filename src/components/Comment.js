import React from 'react';
import Remarkable from 'remarkable'

var Comment = React.createClass({
  rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return {__html: rawMarkup};
  },
  render: function() {
    return (
      <div className="comment">
        <span className="commentAuthor">
          {this.props.author}
        </span>
        <div className="content" dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

export default Comment;
