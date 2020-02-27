import React from "react";

class Accordion extends React.Component {
    static defaultProps = {
//The sections prop should be an array of objects
        sections: []
      };
//component renders no sections as active by default.
      state = {
        activeSectionIndex: null,
      }
//manage which section is currently active by keeping track of the index of the last clicked button in state.      
      handleSetActiveSection = (sectionIndex) => {
        this.setState({ activeSectionIndex: sectionIndex })
      }
      renderItem(section, idx, activeSectionIndex) {
        return (
          <li className='Accordion-item' key={idx}>
            <button
              type='button'
//The component opens a clicked section.
              onClick={() => this.handleSetActiveSection(idx)}
            >
              {section.title}
            </button>
            {(activeSectionIndex === idx) && <p>{section.content}</p>}
          </li>
        )
      }

    render(){
        const { activeSectionIndex } = this.state
        const { sections } = this.props
        return(
// renders a <ul>
// use array map to generate the li elements from the section array prop
        <ul className='Accordion'>
        {sections.map((section, idx) =>
          this.renderItem(section, idx, activeSectionIndex)
        )}
      </ul>
      )
    }  
}

export default Accordion;