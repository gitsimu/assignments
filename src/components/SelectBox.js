import React from 'react'
import '../css/styles.css'

const SelectBox = ({...props}) => {
  const {options, size, isDisabled, onChange} = props  
  const [showOptions, setShowOptions] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState({label: '', value: ''})
  // const [selectBoxState, setSelectBoxState] = React.useState()

  const toggleOptionWindow = (s) => {
    console.log(typeof(s))
    if (typeof s === 'undefined') {
      setShowOptions(!showOptions)
    } else {
      setShowOptions(s)
    }
  }

  const selectValue = (value) => {
    setSelectedValue(value)
    toggleOptionWindow(false)
    onChange && onChange(value)
  }

  const handleChange = () => {}

  return (
    <div className={`selectBoxContainer ${size && size.toLowerCase()}`}>
      <div className={isDisabled ? "selectBox disabled" : "selectBox"}>
        <input type="text"
          onBlur={() => {
            setTimeout(() => {
              toggleOptionWindow(false)
            }, 200)
          }}
          onClick={() => {toggleOptionWindow()}}
          value={selectedValue?.label}
          onChange={handleChange}
        />
        <div className="highlighter"></div>
      </div>
      {showOptions && 
        <div className="optionWindow">
          {options && options.map((o, i) => {
            const state = `${o.disabled && 'disabled'} ${selectedValue?.value === o.value && 'selected'}`
            return (
              <div key={`option-${i}`}
                className={state.trim()}
                onClick={() => {selectValue(o)}}>
                <div>{o.label}</div>
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}

export default SelectBox