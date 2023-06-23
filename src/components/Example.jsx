import PropTypes from 'prop-types';

const Example = ({ all, theme }) => {
  return (
    <div>
      {all.map(
        all.meanings.map((means) =>
          means.definitions.map((def) => (
            <div key={def.example}>
              <li>{def.example}</li>
            </div>
          ))
        )
      )}
    </div>
  );
};

Example.propTypes = {
  all: PropTypes.arrayOf(
    PropTypes.shape({
      meanings: PropTypes.arrayOf(
        PropTypes.shape({
          partOfSpeech: PropTypes.string,
          definitions: PropTypes.arrayOf(
            PropTypes.shape({
              definition: PropTypes.string.isRequired,
              example: PropTypes.string,
            })
          ),
        })
      ),
    })
  ),
};

export default Example;
