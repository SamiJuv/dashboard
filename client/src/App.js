import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

function App() {
  return (
    <div className="bg-gray-50">
      <Header />
      <div className="flex flex-row h-screen">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
