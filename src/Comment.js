function Comment(props) {

    function formatDate(date) {
        return date.toLocaleDateString();
      }

    return (
      <div className="Comment">
        <div className="UserInfo">
          <img
            className="Avatar"
            src={props.avatarUrl}
            alt={props.name}
          />
          <div className="UserInfo-name">
            {props.name}
          </div>
        </div>
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
}
export default Comment;