import { UserBtn } from "../../components";

export const Profile = () => {
  return (
    <div>
      <h1>profile</h1>
      <div>Login to your account</div>
      <UserBtn link="/registration">registration</UserBtn>
    </div>
  );
};
