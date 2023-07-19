import React from "react";

const Details = ({ data }) => {
  return (
    <div className="ProfileList">
      {data.map((item) => (
        <div key={item} className="container">
          <div className="img-box">
            <img src={item.picture} alt="profile-pic" />
          </div>
          <div className="name-box">
            <p>{item.id}</p>
            <p>
              {item.title} {item.firstName} {item.lastName}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Details;
