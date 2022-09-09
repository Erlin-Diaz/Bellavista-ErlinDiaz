import './App.css';
import UserSettingsProvider from './components/Context/UserSettings';
import MainNavigator from './Navigation';

function App() {


  return (
    <UserSettingsProvider>
      <MainNavigator/>
    </UserSettingsProvider>

  );
}

export default App;