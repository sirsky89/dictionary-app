import { InputContext } from '../App';
import Dropdown from '../components/Dropdown';
import { useContext, useState } from 'react';

import PropTypes from 'prop-types';

const Header = ({ toggleTheme, theme }) => {
  const [value, setValue] = useState('');
  const { inputValue, setInputValue } = useContext(InputContext);

  const handleInputChange = (e) => setValue(e.target.value);

  // const handleSubmit = () => {
  //   setInputValue(value);
  //   setValue('');
  // };

  const handleSubmit = (e) => {
    setInputValue(value);
    setValue('');
  };

  const HandleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      setInputValue(value);
      setValue('');
    }
  };

  Header.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
  };
  return (
    <div
      className={` ${
        theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
      }`}
    >
      <div className="container flex mx-auto py-8 justify-around">
        <img src="/logo.svg" alt="logo" />
        <Dropdown toggleTheme={toggleTheme} />
      </div>
      <div className="flex items-center justify-center mt-5 ">
        <div className=" flex border-2 bg-zinc-100 rounded-lg ">
          {/* <form className=" w-98" onSubmit={handleSubmit}>
            <div> */}
          {/* <input
                className=" w-80 h-8"
                onChange={handleInputChange}
                value={value}
                onKeyDown={HandleInputKeyDown}
                placeholder="Search for any word..."
              />
            </div>
            <img
              src="/icon-search.svg"
              className="mx-2  cursor-pointer active:outline-violet-600"
              onClick={handleSubmit}
            />
            {error && word.length <= 0 ? (
              <label className="text-red-500" size="50" type="text">
                Whoops, can't be empty...
              </label>
            ) : (
              ''
            )}
          </form> */}
          <input
            className="p-2 bg-zinc-100 outline-none text-black font-bold active:outline-violet-600
            xl:w-full"
            size="50"
            type="text"
            placeholder="Search for any word..."
            onChange={handleInputChange}
            value={value}
            onKeyDown={HandleInputKeyDown}
          />
          <img
            src="/icon-search.svg"
            className="px-2 bg-zinc-100 cursor-pointer active:outline-violet-600"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
