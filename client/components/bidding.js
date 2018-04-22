import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisplayImage } from './displayimage';
import {Row, Input, Icon, Button} from 'react-materialize'

/**
 * COMPONENT
 */
export const Bidding = props => {
  const { email } = props;

  let imageUrl = 'http://icatchmedia.com/wp-content/uploads/bfi_thumb/bill_board-mf73xcotmc6px71v9ls4nkzvouhvq45skofq6g22r4.jpg'

  return (
    <div>
        <Row>
        <Input s={6} label="Bid amount" validate type="number" placeholder="0.001" step="0.001" min="0.001" max="10000000000000">
          <Icon>attach_money</Icon>
        </Input>
        <Input s={6} label="Image URL" validate type="url">
          <Icon>image</Icon>
        </Input>
      </Row>
        <Button id="bidsubmit" waves='light'>Submit Bid</Button>
      <DisplayImage img={imageUrl} />
    </div>
  );
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
