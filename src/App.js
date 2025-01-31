import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import PlaylistsAndArtistsSection from './PlaylistsAndArtistsSection/PlaylistsAndArtistsSection';

function App() {
  return (
    <>
    <header>
      <Sidebar/>
    </header>
    <main>
      <Header/>
      <PlaylistsAndArtistsSection/>
    </main>
    <footer>
        <Footer/>
    </footer>
    </>
  );
}

export default App;
