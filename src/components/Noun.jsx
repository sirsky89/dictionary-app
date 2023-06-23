import PropTypes from 'prop-types';

const Noun = ({ all }) => {
  if (!all || !Array.isArray(all) || all.length === 0) {
    return null;
  }

  const nounData = all.find(
    (item) => item.meanings && item.meanings[0].partOfSpeech === 'noun'
  );

  if (!nounData || !nounData.meanings || nounData.meanings.length === 0) {
    return null;
  }

  const definitions = nounData.meanings[0].definitions;

  return (
    <div>
      <h1 className="line text-4xl mb-4">noun</h1>
      <p className="my-4 text-gray-400">Meaning</p>
      {definitions.map((definition, index) => (
        <div key={index}>
          <li className="bullet list-none">{definition.definition}</li>
        </div>
      ))}
    </div>
  );
};

Noun.propTypes = {
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
};

export default Noun;
