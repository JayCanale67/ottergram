function Post({ image, name }) {
  const handleClick = (otterName) => {
    return console.log("You clicked on the otter: " + otterName);
  };

  return (
    <li className="post-component">
      <button onClick={() => handleClick(name)}>
        <img src={image} alt={name} />
        <p>{name}</p>
      </button>
    </li>
  );
}

export default Post;
