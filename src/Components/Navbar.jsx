import { useContext, useState } from "react";
import { Link } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "/assets/image3.png";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, signOuts } = useContext(AuthContext);

  const signOut = () => {
    signOuts().then(() => {
      console.log("signout successfully");
    });
  };

  return (
    <nav className="bg-[#0b1c0b]  text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-green-400">
              Categories
            </Link>

            <div className="relative group">
              <button className="hover:text-green-400">Freelancer ▾</button>
              {/* <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded-md shadow-lg py-2 w-40">
                <Link
                  to="/freelancer/web"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Web Developer
                </Link>
                <Link
                  to="/freelancer/design"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Designer
                </Link>
              </div> */}
            </div>

            <Link to="/" className="text-green-500">
              BECOME A SELLER
            </Link>

            {user ? (
              <>
                <Link to='dashboard' className="hover:text-green-400">Dashboard</Link>
                <Link onClick={signOut} className="bg-green-500 px-4 py-2 rounded-full hover:bg-green-600">LogOut</Link>
              </>
            ) : (
              <>
                <Link to="/auth" className="hover:text-green-400">
                  LOGIN
                </Link>

                <Link
                  to="/auth/register"
                  className="bg-green-500 px-4 py-2 rounded-full hover:bg-green-600"
                >
                  Registration
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setOpen(!open)}>
              {open ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black px-4 pb-4">
          <Link
            to="/categories"
            className="block py-2 hover:text-green-400"
            onClick={() => setOpen(false)}
          >
            Categories
          </Link>
          <div className="border-t border-gray-700 my-2" />
          <Link
            to="/"
            className="block py-2 hover:text-green-400"
            onClick={() => setOpen(false)}
          >
            Freelancer
          </Link>
          <Link
            to="/"
            className="block py-2 text-green-500"
            onClick={() => setOpen(false)}
          >
            BECOME A SELLER
          </Link>
          {user ? (
            <div className="flex flex-col gap-3">
              <Link to='/dashboard' className="hover:text-green-400">Dashboard</Link>
              <Link onClick={signOut} className="bg-green-500 px-4 py-2 rounded-full hover:bg-green-600 w-fit">LogOut</Link>
            </div>
          ) : (
            <>
              <Link to="/auth" className="hover:text-green-400">
                LOGIN
              </Link>

              <Link
                to="/auth/register"
                className="bg-green-500 px-4 py-2 rounded-full hover:bg-green-600"
              >
                Registration
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
