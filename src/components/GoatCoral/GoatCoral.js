import React from 'react';
import PropTypes from 'prop-types';

import Goat from '../Goat/Goat';
import goatShape from '../../helpers/propz/goatShape';
import './GoatCoral.scss';

class GoatCoral extends React.Component {
  static propTypes = {
    money: PropTypes.arrayOf(goatShape.goatShape),
    freeGoat: PropTypes.func,
    useGoat: PropTypes.func,
  }

  render() {
    const myGoats = this.props.money;
    const { freeGoat, useGoat } = this.props;

    const goatCards = myGoats.map((goat) => <Goat key={goat.id} goat={goat} freeGoat={freeGoat} useGoat={useGoat}/>);

    return (
      <div className="GoatCoral row">
      {goatCards}
      </div>
    );
  }
}

export default GoatCoral;
