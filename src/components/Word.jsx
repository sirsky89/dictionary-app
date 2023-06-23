import PropTypes from 'prop-types';

const Word = ({ word }) => {
  return <div className="text-purple-500 text-2xl">{word[0].phonetic}</div>;
};

Word.propTypes = {
  word: PropTypes.arrayOf(
    PropTypes.shape({
      phonetic: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Word;
