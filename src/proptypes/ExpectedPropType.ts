import PropTypes from "prop-types";

export let ExpectedPropType = PropTypes.shape({
  damage: PropTypes.string.isRequired,
  def: PropTypes.string.isRequired,
  frag: PropTypes.string.isRequired,
  spot: PropTypes.string.isRequired,
  win: PropTypes.string.isRequired
})
