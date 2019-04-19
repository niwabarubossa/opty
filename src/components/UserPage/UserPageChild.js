import React from 'react';

const UserPageChild = ({props}) => {
  return (
    <div>
      {props.display_user ?
      <div>
        <h1>{props.display_user}</h1>
      </div>
      :
      <h1>noneneeeee</h1>
    }
    </div>
  )
}

export default UserPageChild