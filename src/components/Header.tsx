import Logo from "./header/Logo";
import Navigation from "./header/Navigation";
import SearchBar from "./header/SearchBar";
import UserActions from "./header/UserActions";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm border-b border-white/10 z-50">
      <div className="max-w-4xl mx-auto px-2">
        <div className="flex items-center justify-between h-12">
          <Logo />
          
          <div className="flex-1 flex items-center justify-center space-x-8">
            <Navigation />
            <SearchBar />
          </div>

          <UserActions />
        </div>
      </div>
    </header>
  );
};

export default Header;