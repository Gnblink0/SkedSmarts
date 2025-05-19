import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16">
        <h1 className="text-primary font-bold text-2xl m-4">
          <a href="/">TravelSmarts SKED</a>
        </h1>
        <div className="flex items-center justify-between">
          <Link to="/" className="text-black">
            Schedule
          </Link>
          <Link to="/employees" className="text-black">
            Employees
          </Link>
          <Link to="/settings" className="text-black">
            Settings
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
