import PropTypes from 'prop-types';

const Synonym = ({ all }) => {
  if (!all || !Array.isArray(all) || all.length === 0) {
    return null;
  }

  const nounData = all.find(
    (item) => item.meanings && item.meanings[0].partOfSpeech === 'noun'
  );

  if (!nounData || !nounData.meanings || nounData.meanings.length === 0) {
    return null;
  }

  const synonyms = nounData.meanings[0].synonyms;

  if (!synonyms || synonyms.length === 0) {
    return null;
  }

  return (
    <div className="my-10">
      <ul>
        <span className="syn text-xl mr-10">synonyms</span>
        {synonyms.map((synonym, index) => (
          <li
            className=" inline mx-1 text-purple-500 text-lg text-bold cursor-pointer underline"
            key={index}
          >
            {synonym}
          </li>
        ))}
      </ul>
    </div>
  );
};

Synonym.propTypes = {
  all: PropTypes.arrayOf(
    PropTypes.shape({
      meanings: PropTypes.arrayOf(
        PropTypes.shape({
          partOfSpeech: PropTypes.string,
          synonyms: PropTypes.arrayOf(PropTypes.string),
        })
      ),
    })
  ),
};

export default Synonym;
