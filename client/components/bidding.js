import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BidCard from './bidCard';
import { Input } from 'react-materialize';

/**
 * COMPONENT
 */
let items = [
  {
    id: '1',
    title: 'Tokyo',
    time: '1:00',
    imageUrl: 'http://fillmurray.com/250/100',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '2',
    title: 'Tokyo',
    time: '2:00',
    imageUrl: 'http://fillmurray.com/250/100',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '3',
    title: 'Rio',
    time: '1:00',
    imageUrl: 'http://fillmurray.com/g/250/100',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '4',
    title: 'Rio',
    time: '2:00',
    imageUrl: 'http://fillmurray.com/g/250/100',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '5',
    title: 'Berlin',
    time: '1:00',
    imageUrl: 'http://placecage.com/c/250/100',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '6',
    title: 'Berlin',
    time: '2:00',
    imageUrl: 'http://placecage.com/c/250/100',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '7',
    title: 'Chicago',
    time: '1:00',
    imageUrl: 'http://placecage.com/250/100',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '8',
    title: 'Chicago',
    time: '2:00',
    imageUrl: 'http://placecage.com/250/100',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
] // Hard code dummy data/addresses here

class Bidding extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      placeFilter: [],
    }
  }

  handlePlaceFilter = (event, value) => {
    if(value) this.setState({ placeFilter: [...this.state.placeFilter, event.target.name] });
    else this.setState({ placeFilter: this.state.placeFilter.filter(location => location !== event.target.name) })
  }

  render() {
    let renderedItems = items
    if (this.state.placeFilter.length) {
      renderedItems = renderedItems.filter(item => this.state.placeFilter.includes(item.title))
    }
    console.log(this.state, renderedItems)
    return (
      <div style={{ display: 'flex', marginLeft: '3%', marginRight: '3%'}}>
        <div style={{ flex: '1' }}>
          <h5>Locations</h5>
          <Input type="checkbox" name="Rio" label="Rio" onChange={this.handlePlaceFilter} />
          <Input type="checkbox" name="Tokyo" label="Tokyo" onChange={this.handlePlaceFilter} />
          <Input type="checkbox" name="Berlin" label="Berlin" onChange={this.handlePlaceFilter} />
          <Input type="checkbox" name="Chicago" label="Chicago" onChange={this.handlePlaceFilter} />
        </div>
        <div style={{ flex: '3', display: 'flex', flexWrap: 'wrap' }}>
          {renderedItems.map(item => {
            return (
              <BidCard key={item.id} itemInfo={item} />
            )
          })}
        </div>
      </div>
    );
  }
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
  };
};

export default connect(mapState)(Bidding);

/**
 * PROP TYPES
 */
Bidding.propTypes = {
  email: PropTypes.string,
};

