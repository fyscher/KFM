import {  useState  } from 'react'
import PropTypes from 'prop-types'

const Togglable = (props) =>
{

  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible? 'none' : '' }
  const showWhenVisible = { display: visible? '' : 'none' }

  const toggleVisibility = () => setVisible(!visible)

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.enableLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button className='connectionButton' onClick={toggleVisibility}>{props.disableLabel}</button>
      </div>
    </div>
  )
}

Togglable.propTypes =
{
  enableLabel: PropTypes.string.isRequired,
  disableLabel: PropTypes.string.isRequired
}

Togglable.displayName = 'Togglable'

export default Togglable