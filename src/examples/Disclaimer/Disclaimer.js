import React, { useState } from "react";
import "./Disclimer.css"; // Separate CSS file for styling
// import Disclaimer from 'Disclaimer/Disclaimer.js';

export default function Disclaimer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sliding-box-container">
      <button onClick={toggleBox} className="toggle-button">
        DISCLAIMER
      </button>
      <div className={`disclaimer-content ${isOpen ? "open" : "closed"}`}>
        <h3>अस्वीकरण</h3>
        <p>
          All precautions have been taken by Eastern Regional Load Despatch
          Center (ERLDC), GRID-INDIA while uploading the data/information and
          the uploaded data/information is believed to be accurate, reliable
          and complete. However, before relying on the information content,
          users are advised to ensure its accuracy, currency, completeness and
          relevance for their purposes, and in this regard, Eastern Regional
          Load Despatch Center (ERLDC), Grid- India will not be responsible for
          any errors or omissions.All information is provided as is without
          warranty of any kind. North Eastern Regional Load Despatch Center
          (ERLDC), GRID-INDIA disclaims all express, implied, and statutory
          warranties to the User and/or any third party, including warranties
          as to accuracy, timeliness, completeness, merchantability, or fitness
          for any particular purpose DISCLAIMS WARRANTIES. Eastern Regional
          Load Despatch Center (ERLDC), GRID-INDIA has no liability either in
          tort, contract, or to the User and/or to third parties.Further, the
          Eastern Regional Load Despatch Center (ERLDC), GRID-INDIA shall,
          under no circumstances, be liable to the User, and/or any third
          party, for any lost profits or lost opportunities, indirect, special,
          consequential incidental, or punitive damages whatsoever, even if the
          Eastern Regional Load Despatch Center (ERLDC), Grid-India has been
          advised of the possibility of such damages. By visiting this site,
          users confirm their awareness of and agreement to this disclaimer and
          related terms.
        </p>
      </div>
    </div>
  );
}