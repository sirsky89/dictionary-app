import Header from './components/Header';
import Results from './components/Results';
import FontProvider from './components/Font';
import Verb from './components/Verb';
import { createContext, useState } from 'react';

// Create context
export const InputContext = createContext();

export const ThemeContext = createContext(null);

export const FontContext = createContext();

function App() {
  const [selectedFontFamily] = useState('serif');
  const [inputValue, setInputValue] = useState('');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  const value = {
    inputValue,
    setInputValue,
  };

  return (
    <FontContext.Provider value={selectedFontFamily}>
      <InputContext.Provider value={value}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div
            className={`App  ${
              theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
            }`}
          >
            <div className="  h-screen max-h-max">
              <FontProvider theme={theme}>
                <Header theme={theme} toggleTheme={toggleTheme} />
                <Results theme={theme} />

                <Verb />
              </FontProvider>
            </div>
          </div>
        </ThemeContext.Provider>
      </InputContext.Provider>
    </FontContext.Provider>
  );
}

export default App;
