import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Icon, Button, Card, CardTitle } from 'react-materialize';
import { listenForClicks } from '../metamask'

/**
 * COMPONENT
 */
class BidCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      amount: 0.0,
    }
  }

  onFieldChange = (event, value) => {
    const newState = {};
    if (event.target.name === 'amount') value = +value
    newState[event.target.name] = value;
    this.setState(newState, () => { console.log(this.state) });
  }

  onFieldSubmit = () => {
    console.log('CURR FORM', this.state);
    if (this.state.url !== '' &&
      this.state.amount > 0) {
      listenForClicks(this.props.itemInfo.contract, this.state.amount);
    }
  }

  render() {
    const item = this.props.itemInfo
    const fontStyle = { 
      fontSize: '175%',
      color: 'black',
      WebkitTextStroke: '.75px white',
      fontWeight: 'bold'
    }
    return (
      <div style={{ flex: '0 0 33%', padding: '10px' }} key={item.key}>
        <Card
          className="large"
          header={
            <CardTitle image={item.imageUrl}><span style={fontStyle}>{item.title}</span></CardTitle>
          }
          actions={
            [<Button key={item.key} className="bidsubmit" waves="light" onClick={this.onFieldSubmit} >Submit Bid</Button>]
          }>
          <Input s={6} name="amount" label="Bid amount" validate type="number" placeholder="0.001" step="0.001" min="0.001" max="10000000000000" onChange={this.onFieldChange}>
            <Icon>attach_money</Icon>
          </Input>
          <Input s={6} name="url" className="bidvalue" label="Image URL" validate type="url" onChange={this.onFieldChange}>
            <Icon>image</Icon>
          </Input>
        </Card>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
// const mapState = state => {
// };

export default connect(null)(BidCard);

/**
 * PROP TYPES
 */
BidCard.propTypes = {
  itemInfo: PropTypes.object
};
