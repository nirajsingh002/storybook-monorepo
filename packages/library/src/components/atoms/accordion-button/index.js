import React from 'react';
import PropTypes from 'prop-types';
import './accordion-button.css';

/**
 * Primary UI component for user interaction
 */
const AccordionButton = ({ ...props }) => {
  const { backgroundColor, accordionClassName, label, isActive, isDisabled} = props
  const accordionClass = accordionClassName ? accordionClassName : '';
  const toggleAccordion = isActive ? 'active' : '';
  const disabledAccordion = isDisabled ? 'disabled' : '';
  return (
    <button
      type="button"
      className={['storybook-button storybook-button--accordion arrow down', accordionClass, toggleAccordion, disabledAccordion].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

AccordionButton.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * accordionClassName
   */
  accordionClassName: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Toggle state opened/closed
   */
  isActive: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

AccordionButton.defaultProps = {
  backgroundColor: null,
  isActive: false,
};
export default AccordionButton;