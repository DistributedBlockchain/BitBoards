import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Card, CardTitle } from 'react-materialize';

/**
 * COMPONENT
 */
export const DisplayImage = props => {
  const { email, img } = props;

  return (
    <div>
      <Col m={7} s={12}>
        <Card horizontal header={<CardTitle image={img} />} >
          <p>Image Preview</p>
        </Card>
      </Col>
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

export default connect(mapState)(DisplayImage);

/**
 * PROP TYPES
 */
DisplayImage.propTypes = {
  email: PropTypes.string,
};
