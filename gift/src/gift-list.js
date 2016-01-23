import ComponentPlus from './component-plus.js';
import React from 'react'; //eslint-disable-line

class GiftList extends ComponentPlus {
  render() {
    console.log('gift-list.js render: entered');
    const {gifts, selectedGift, onSelect, onDelete} = this.props;

    const options = gifts.map(gift => <option key={gift}>{gift}</option>);

    // &#x2796; is Unicode "heavy minus sign".
    return <div>
      <select className="gift-list"
        size="5"
        value={selectedGift}
        onChange={onSelect}>
        {options}
      </select>
      <button className="gift-delete-btn"
        disabled={!selectedGift}
        onClick={onDelete}>&#x2796;</button>
    </div>;
  }
}

const PropTypes = React.PropTypes;
GiftList.propTypes = {
  gifts: PropTypes.array.isRequired,
  selectedGift: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default GiftList;
