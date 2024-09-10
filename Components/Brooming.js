import React from 'react'
import "../app/DomesticHelp/domestic.css"

const Brooming = () => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-5">
      <div /* className={`tpn_card ${selectedItems.includes('Brooming') ? 'selected' : ''}`} onClick={() => toggleSelection('Brooming')} */>
          <img src="/img/brooming.png" className="w-100 mb-4" />
          <h5>Brooming</h5>
          <p>From domestic help</p>
        </div>
    </div>
  )
}

export default Brooming
