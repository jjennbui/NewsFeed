function NewsFeed(props) {
  return (
    <div>
      <h2 className="title">News Feed</h2>
      <ul>{props.children}</ul>
    </div>
  );
}

export default NewsFeed;
