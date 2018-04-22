import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Row, Input, Icon} from 'react-materialize'

/**
 * COMPONENT
 */
export const Bidding = props => {
  const { email } = props;

  return (
    <div>
      <Row>
        <Input s={6} label="Bid amount" validate type="number">
          <Icon>attach_money</Icon>
        </Input>
        <Input s={6} label="Image URL" validate type="url">
          <Icon>image</Icon>
        </Input>
      </Row>
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
