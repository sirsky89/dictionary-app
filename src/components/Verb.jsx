import PropTypes from 'prop-types';

const Verb = ({ all, theme }) => {
  if (!all || !Array.isArray(all) || all.length === 0) {
    return null;
  }

  const verbData = all.find(
    (item) =>
      item.meanings &&
      item.meanings.some((meaning) => meaning.partOfSpeech === 'verb')
  );

  if (!verbData || !verbData.meanings || verbData.meanings.length === 0) {
    return null;
  }

  const definitions = verbData.meanings
    .filter((meaning) => meaning.partOfSpeech === 'verb')
    .flatMap((meaning) => meaning.definitions);

  if (definitions.length === 0) {
    return null;
  }

  return (
    <div
      className={`${
        theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
      }`}
    >
      <h1 className="line text-4xl mb-4 ">verb</h1>
      <p className="my-4 text-gray-400">Meaning</p>
      {definitions.map((definition, index) => (
        <div key={index}>
          <li className="bullet list-none">{definition.definition}</li>
          {definition.example && (
            <p className="ml-6 mt-4 mb-5 text-gray-500">{definition.example}</p>
          )}
        </div>
      ))}
      <p></p>
    </div>
  );
};

Verb.propTypes = {
  all: PropTypes.arrayOf(
    PropTypes.shape({
      meanings: PropTypes.arrayOf(
        PropTypes.shape({
          partOfSpeech: PropTypes.string,
          definitions: PropTypes.arrayOf(
            PropTypes.shape({
              definition: PropTypes.string.isRequired,
            })
          ),
        })
      ),
    })
  ),
  theme: PropTypes.oneOf(['light', 'dark']),
};

export default Verb;
