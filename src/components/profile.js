import { useAuth } from "../providers/auth";

function Profile() {
  const { user } = useAuth();

  return <h2>{user.name}</h2>;
}

export default Profile;
