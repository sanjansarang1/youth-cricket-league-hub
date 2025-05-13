import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">
              Youth Cricket Premier League
            </h3>
            <p className="text-sm text-gray-600">
              Expanding the Game, Strengthening Community, Inspiring Play
            </p>
          </div>
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/teams" className="text-sm text-gray-600 hover:text-primary">
                  Teams
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">Contact</h4>
            <p className="text-sm text-gray-600">Email: contact@ycpl.org</p>
            <p className="text-sm text-gray-600">Instagram: @youthcricketpremierleague</p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
             {new Date().getFullYear()} Youth Cricket Premier League.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
