import Navbar from './Navbar';
import { Outlet } from 'react-router';

export default () => {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
};