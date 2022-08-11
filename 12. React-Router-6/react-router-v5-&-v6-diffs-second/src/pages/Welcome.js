import { Link, Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to="new-user">New User</Link>
      {/*Example for nested route in v-6 - tels React where the nested content should be displayed*/}
      <Outlet />
    </section>
  );
};

export default Welcome;
