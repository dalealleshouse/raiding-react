import React from 'react';
import {AppContext} from './AppProvider';

export default function Score(props) {
  return (
    <div className="row">
      <div className="col-10 offset-1">
        <h3 className="float-right">
          <span className="badge badge-success p-3">
            Correct
            <span className="badge badge-pill badge-light ml-2">
              <AppContext.Consumer>
                {context => context.correct}
              </AppContext.Consumer>
            </span>
          </span>
        </h3>
        <h3 className="float-right">
          <span className="badge badge-danger p-3">
            Incorrect
            <span className="badge badge-pill badge-light ml-2">
              <AppContext.Consumer>
                {context => context.incorrect}
              </AppContext.Consumer>
            </span>
          </span>
        </h3>
      </div>
    </div>
  );
}
