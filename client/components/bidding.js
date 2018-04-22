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
    title: 'Overwatch',
    time: '1:00-2:00',
    bidAmount: '.200 Qtum',
    imageUrl: 'http://twinfinite.net/wp-content/uploads/2018/01/Overwatch-League.jpg',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '2',
    title: 'Hearthstone',
    time: '1:00-2:00',
    bidAmount: '.200 Qtum',
    imageUrl: 'http://blogs-images.forbes.com/insertcoin/files/2014/12/hearthstone1.jpg',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '3',
    title: 'Counterstrike',
    time: '1:00-2:00',
    bidAmount: '.300 Qtum',
    imageUrl: 'https://pc-tablet.com/wp-content/uploads/2016/05/CS-1.6.jpg',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '4',
    title: 'Chicago',
    time: '1:00-2:00',
    bidAmount: '.200 Qtum',
    imageUrl: 'https://www.harvard.edu/sites/default/files/content/harvard-map-google.jpg',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '5',
    title: 'London',
    time: '1:00-2:00',
    bidAmount: '.400 Qtum',
    imageUrl: 'https://d32ogoqmya1dw8.cloudfront.net/images/sp/library/google_earth/google_maps_hello_world.jpg',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '6',
    title: 'Tokyo',
    time: '1:00-2:00',
    bidAmount: '.500 Qtum',
    imageUrl: 'https://www.harvard.edu/sites/default/files/content/harvard-map-google.jpg',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '7',
    title: 'Overwatch',
    time: '2:00-3:00',
    bidAmount: '.300 Qtum',
    imageUrl: 'http://twinfinite.net/wp-content/uploads/2018/01/Overwatch-League.jpg',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '8',
    title: 'Hearthstone',
    time: '2:00-3:00',
    bidAmount: '.400 Qtum',
    imageUrl: 'http://blogs-images.forbes.com/insertcoin/files/2014/12/hearthstone1.jpg',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '9',
    title: 'Counterstrike',
    time: '2:00-3:00',
    bidAmount: '.200 Qtum',
    imageUrl: 'https://pc-tablet.com/wp-content/uploads/2016/05/CS-1.6.jpg',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '10',
    title: 'Chicago',
    time: '2:00-3:00',
    bidAmount: '.500 Qtum',
    imageUrl: 'https://www.harvard.edu/sites/default/files/content/harvard-map-google.jpg',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '11',
    title: 'London',
    time: '2:00-3:00',
    bidAmount: '.500 Qtum',
    imageUrl: 'https://d32ogoqmya1dw8.cloudfront.net/images/sp/library/google_earth/google_maps_hello_world.jpg',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '12',
    title: 'Tokyo',
    time: '2:00-3:00',
    bidAmount: '.300 Qtum',
    imageUrl: 'https://www.harvard.edu/sites/default/files/content/harvard-map-google.jpg',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '13',
    title: 'Overwatch',
    time: '3:00-4:00',
    bidAmount: '.400 Qtum',
    imageUrl: 'http://twinfinite.net/wp-content/uploads/2018/01/Overwatch-League.jpg',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '14',
    title: 'Hearthstone',
    time: '3:00-4:00',
    bidAmount: '.800 Qtum',
    imageUrl: 'http://blogs-images.forbes.com/insertcoin/files/2014/12/hearthstone1.jpg',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '15',
    title: 'Counterstrike',
    time: '3:00-4:00',
    bidAmount: '.900 Qtum',
    imageUrl: 'https://pc-tablet.com/wp-content/uploads/2016/05/CS-1.6.jpg',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '16',
    title: 'Chicago',
    time: '3:00-4:00',
    bidAmount: '.600 Qtum',
    imageUrl: 'https://www.harvard.edu/sites/default/files/content/harvard-map-google.jpg',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '17',
    title: 'London',
    time: '3:00-4:00',
    bidAmount: '.400 Qtum',
    imageUrl: 'https://d32ogoqmya1dw8.cloudfront.net/images/sp/library/google_earth/google_maps_hello_world.jpg',
    contract: '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71',
  },
  {
    id: '18',
    title: 'Tokyo',
    time: '3:00-4:00',
    bidAmount: '.700 Qtum',
    imageUrl: 'https://www.harvard.edu/sites/default/files/content/harvard-map-google.jpg',
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
      <div style={{ display: 'flex', marginLeft: '3%', marginRight: '3%' }}>
        <div style={{ flex: '1',  backgroundColor: 'white', paddingLeft: '20px', height: '100%' }}>
          <h5>Locations</h5>
          <Input type="checkbox" name="Overwatch" label="Overwatch" onChange={this.handlePlaceFilter} />
          <Input type="checkbox" name="Counterstrike" label="Counterstrike" onChange={this.handlePlaceFilter} />
          <Input type="checkbox" name="Hearthstone" label="Hearthstone" onChange={this.handlePlaceFilter} />
          <Input type="checkbox" name="Chicago" label="Chicago" onChange={this.handlePlaceFilter} />
          <Input type="checkbox" name="Tokyo" label="Tokyo" onChange={this.handlePlaceFilter} />
          <Input type="checkbox" name="London" label="London" onChange={this.handlePlaceFilter} />
        </div>
        <div style={{ flex: '3', display: 'flex', flexWrap: 'wrap', marginTop: '-10px' }}>
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

