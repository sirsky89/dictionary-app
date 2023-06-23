import { useEffect, useState, useContext } from 'react';
import { InputContext } from '../App';
import axios from 'axios';
import Word from './Word';
import Noun from './Noun';
import Synonym from './Synonym';
import Verb from './Verb';
import Source from './Source';
import AudioComponent from './Audio';
import { useFontFamily } from './Font';

axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

const Results = ({ theme }) => {
  const fontFamily = useFontFamily();
  const { inputValue } = useContext(InputContext);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const res = await axios(`/${param}`);
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData(inputValue);
    }
  }, [inputValue]);

  if (loading) {
    return <h1 className="text-center text-3xl mt-6">Loading...</h1>;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-96 mt-10 font-semibold text-gray-500">
        <div>
          <p className="text-3xl mb-6">🙁</p>
        </div>
        <div>
          <p
            className={`${
              theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
            } capitalize mb-6 text-xl`}
          >
            No definitions found{' '}
          </p>
        </div>

        <div className=" w-2/5">
          <p className="text-lg text-center">
            Sorry pal, we couldn't find definitions for the word you were
            looking for. You can try the search again at later time or head to
            the web instead.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${
        theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
      }`}
      style={{ fontFamily }}
    >
      <div className="sound container flex mx-auto py-10 w-1/2 justify-between items-center ">
        {response ? (
          <div className="def">
            <h1 className="text-5xl mb-2">{inputValue} </h1>
            <Word word={response} />
            <p className="text-xl"></p>
          </div>
        ) : (
          <h1 className="text-3xl mb-2 hidden">Find out anything you want.</h1>
        )}
        {response && (
          <AudioComponent audioURL={response[0].phonetics[0].audio} />
        )}
      </div>

      <div className="container flex w-1/2 mx-auto ">
        <div className="container">
          <h1 className="text-4xl mb-4"></h1>
          <Noun all={response} />
          <Synonym all={response} />
          <Verb all={response} theme={theme} />
          <Source all={response} theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default Results;
