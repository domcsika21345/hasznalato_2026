import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function Index() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
