import React from "react";
import { AuthContext } from "../providers/auth";

function Profile() {
  const { user } = React.useContext(AuthContext);

  return <h2>{user.name}</h2>;
}

export default Profile;
