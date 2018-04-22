import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const linkStyle = {
  color: '#3b2064',
  fontSize: '18px',
}
const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <nav style={{ backgroundColor: 'white', marginBottom: '20px' }}>
        <div style={{ marginLeft: "30px", display: 'flex', justifyContent: 'flex-end', marginRight: '5%'}}>
          {/* The navbar will show these links after you log in */}
          <h3 style={{ color: '#6441A4', display: 'inline', alignSelf: 'flex-start', marginRight: '65%'}}>BITBOARDS</h3>
          <Link to="/bids" style={ linkStyle }>Bids</Link>
          <Link to="/" style={ linkStyle }>Home</Link>
        </div>
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
