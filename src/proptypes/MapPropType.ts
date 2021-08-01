import PropTypes from "prop-types";

export let MapPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired
})
