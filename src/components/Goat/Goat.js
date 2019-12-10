import React from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    freeGoat: PropTypes.func,
  }

  freeGoatEvent = (e) => {
    const { freeGoat, goat } = this.props;
    e.preventDefault();
    freeGoat(goat.id);
  }

  render() {
    const { goat } = this.props;

    return (
      <div className="card">
  <img className="card-img-top" alt="" src={goat.imgUrl}/>
  <div className="card-body">
  <h5 className="card-title">{goat.name}</h5>
  <p className="card-text">{goat.age}</p>
  <p className="card-text">{goat.description}</p>
  <div className="btn btn-danger" onClick={this.freeGoatEvent}>Free Me</div>
  </div>
</div>
    );
  }
}

export default Goat;
