import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Switch } from '@mui/material';

const Dropdown = ({ toggleTheme }) => {
  const [theme, setTheme] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      console.log('Dark mode detected');
    } else {
      console.log('Light mode detected');
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleToggleChange = (event) => {
    setChecked(event.target.checked);
    toggleTheme(event.target.checked);
  };

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  return (
    <div>
      <div className="flex">
        <div className="flex mx-3 space-x-4 items-center "></div>

        <div className="flex mx-3 space-x-4 items-center">
          {/* <img src="/icon-arrow-down.svg" alt="dropdown" /> */}
        </div>

        <div className="flex mx-2 space-x-4 items-center ">
          <Box>
            <Switch
              checked={checked}
              onChange={handleToggleChange}
              color="secondary"
            />
          </Box>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <path
              fill="none"
              stroke="#838383"
              d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default Dropdown;
