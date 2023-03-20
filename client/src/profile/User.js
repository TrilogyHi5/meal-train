import React from 'react';

const User = (props) => {
  return (
    <div className="text-center" data-id={props.id}>
      {/* <img
        alt={props.title}
        className="img-fluid"
        src={props.src}
        style={{ margin: '0 auto' }}
      /> */}
      {/* <h3>{props.firstName} {props.lastName}</h3> */}
      <div>Height: {props.height}</div>
      <div>Weight: {props.weight}</div>
      <div>DOB: {props.dateOfBirth}</div>
      <div>Sex: {props.sex}</div>
      <div>Activity Level: {props.activityLevel}</div>
    </div>
  );
};

export default User;