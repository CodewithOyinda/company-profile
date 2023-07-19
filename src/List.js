const List = ({ profilePic, id, title, firstName, lastName }) => {
  return (
    <div className="container">
      <div className="img-box">
        <img src={profilePic} alt="profile-pic" />
      </div>
      <div className="name-box">
        <p>{id}</p>
        <p>
          {title} {firstName} {lastName}
        </p>
      </div>
    </div>
  );
};
export default List;
