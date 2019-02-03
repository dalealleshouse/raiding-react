import React from 'react';
import PropTypes from 'prop-types';

export default function Answer(props) {
  return (
    <div
      className="card mb-3 answer"
      onClick={() => {
        if (!props.disabled) props.onSelected(props.pirate);
      }}>
      <div className="card-body">
        <h4 className={props.disabled ? 'text-muted' : ''}>
          {props.pirate.name}
        </h4>
      </div>
    </div>
  );
}

Answer.propTypes = {
  onSelected: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  pirate: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
