const Dog = (props) => {
  return (
    <div>
      <h2>Dog</h2>
      <img class="picture" src={props.message}></img>
    </div>
  );
};

export default Dog;
