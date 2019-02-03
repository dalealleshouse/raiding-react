import React from 'react';
import PropTypes from 'prop-types';

const IMAGE_DIR = '/images/';

export default function PirateImage(props) {
  return (
    <span>
      {props.pirate && (
        <img
          className="rounded"
          src={`${IMAGE_DIR}${props.pirate.image}`}
          alt="[PIRATE]"
        />
      )}
    </span>
  );
}

PirateImage.propTypes = {
  pirate: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }),
};
