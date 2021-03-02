import React from "react";
import PropTypes from "prop-types";
import AccordionButton from "../../atoms/accordion-button";
import "./accordion.css";
import { TableRow } from "../tableRow/TableRow";

/**
 * Accordion UI component for user interaction
 */
const Accordion = ({ ...props }) => {
  const {
    activeState,
    isDisabled,
    toggleAccordion,
    accordionData
  } = props;

  const renderAccordion = () => {
    return (
      accordionData.map((data, index) => {
        const {head, panel} = data;
        return (
        <>
        <AccordionButton
        isActive={activeState}
        isDisabled={isDisabled}
        accordionClassName="accordion"
        label={head}
        onClick={toggleAccordion}
      />
      <div className="panel">
        {Array.isArray(panel) ? renderTable(panel) : <p>{panel}</p>}
      </div>
      </>
      )
      })
    )
  }
  const renderTable = (panel) => {
    return <TableRow panelData={panel} />;
  };


  return (
    <div>
      {renderAccordion()}
    </div>
  );
};

Accordion.propTypes = {
  activeState: PropTypes.bool,
  isDisabled: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Accordion.defaultProps = {
  activeState: true,
  isDisabled: false,
  onClick: undefined,
};

export default Accordion;