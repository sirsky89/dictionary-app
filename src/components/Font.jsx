import { createContext, useContext, useState } from 'react';

// Step 1: Create a context to hold the global font family
export const FontContext = createContext('sans-serif');

// Step 2: Create a custom hook to access the global font family
export const useFontFamily = () => useContext(FontContext);

// Step 3: Create a component to provide the font family value to the children
const FontProvider = ({ children, theme }) => {
  const [selectedFont, setSelectedFont] = useState('sans-serif');

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };
  return (
    <FontContext.Provider value={selectedFont}>
      <div className="relative">
        <select
          className={`${
            theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
          } cursor-pointer`}
          value={selectedFont}
          onChange={handleFontChange}
        >
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans-serif</option>
          <option value="monospace">Monospace</option>
        </select>
        {children}
      </div>
    </FontContext.Provider>
  );
};

export default FontProvider;
