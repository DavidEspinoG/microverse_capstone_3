import { Outlet } from 'react-router-dom';

const Root = () => (
  <div className="main-container">
    <h1>List of pokemon types</h1>
    <Outlet />
  </div>
);

export default Root;
