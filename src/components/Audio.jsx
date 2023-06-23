import { useEffect, useState, useContext } from 'react';
import { InputContext } from '../App';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

const AudioComponent = () => {
  const { inputValue } = useContext(InputContext);
  const [audioURL, setAudioURL] = useState('');

  useEffect(() => {
    const fetchData = async (param) => {
      try {
        const res = await axios(`/${param}`);
        if (res.data.length > 0) {
          const phonetics = res.data[0].phonetics;
          const availableAudioURLs = phonetics
            .filter((phonetic) => phonetic.audio)
            .map((phonetic) => phonetic.audio);
          if (availableAudioURLs.length > 0) {
            setAudioURL(availableAudioURLs[0]);
          } else {
            setAudioURL('');
          }
        } else {
          setAudioURL('');
        }
      } catch (err) {
        console.error(err);
        setAudioURL('');
      }
    };

    if (inputValue.length) {
      fetchData(inputValue);
    }
  }, [inputValue]);

  const handleAudioClick = () => {
    if (audioURL) {
      const audioElement = new Audio(audioURL);
      audioElement.play();
    }
  };

  return (
    <div className="audio ">
      {audioURL ? (
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
            onClick={handleAudioClick}
            className="fill-current text-purple-500 hover:text-green-400"
          >
            <g>
              <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
              <path d="M29 27v21l21-10.5z" />
            </g>
          </svg>
          {/* <audio controls>
            <source src={audioURL} type="audio/ogg" />
          </audio> */}
        </div>
      ) : (
        <p>No audio available</p>
      )}
    </div>
  );
};

export default AudioComponent;
