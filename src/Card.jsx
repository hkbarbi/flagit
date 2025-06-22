import React, { useState } from "react";


// Liste mit Flaggen und Ländern
const flags = [
    { flag: "🇩🇪", country: "Germany" },
    { flag: "🇫🇷", country: "France" },
    { flag: "🇮🇹", country: "Italy" },
    { flag: "🇪🇸", country: "Spain" },
    { flag: "🇬🇧", country: "United Kingdom" },
    { flag: "🇺🇸", country: "United States" },
    { flag: "🇯🇵", country: "Japan" },
    { flag: "🇨🇦", country: "Canada" },
    { flag: "🇮🇳", country: "India" },
    { flag: "🇧🇷", country: "Brazil" },
    { flag: "🇦🇺", country: "Australia" },
    { flag: "🇲🇽", country: "Mexico" },
    { flag: "🇷🇺", country: "Russia" },
    { flag: "🇨🇳", country: "China" },
    { flag: "🇰🇷", country: "South Korea" },
    { flag: "🇿🇦", country: "South Africa" },
    { flag: "🇪🇬", country: "Egypt" },
    { flag: "🇮🇱", country: "Israel" },
    { flag: "🇸🇦", country: "Saudi Arabia" },
    { flag: "🇰🇪", country: "Kenya" },
    { flag: "🇳🇬", country: "Nigeria" },
    { flag: "🇧🇩", country: "Bangladesh" },
    { flag: "🇸🇪", country: "Sweden" },
    { flag: "🇳🇴", country: "Norway" },
    { flag: "🇳🇱", country: "Netherlands" },
    { flag: "🇮🇪", country: "Ireland" },
    { flag: "🇦🇷", country: "Argentina" },
    { flag: "🇵🇪", country: "Peru" },
    { flag: "🇻🇪", country: "Venezuela" },
    { flag: "🇲🇾", country: "Malaysia" },
    { flag: "🇰🇼", country: "Kuwait" },
    { flag: "🇾🇪", country: "Yemen" },
    { flag: "🇰🇬", country: "Kyrgyzstan" },
    { flag: "🇰🇳", country: "Saint Kitts and Nevis" },
    { flag: "🇱🇧", country: "Lebanon" },
    { flag: "🇧🇪", country: "Belgium" },
    { flag: "🇬🇷", country: "Greece" },
    { flag: "🇩🇰", country: "Denmark" },
    { flag: "🇨🇭", country: "Switzerland" },
    { flag: "🇵🇱", country: "Poland" },
    { flag: "🇷🇴", country: "Romania" },
    { flag: "🇳🇵", country: "Nepal" },
    { flag: "🇧🇭", country: "Bahrain" },
    { flag: "🇳🇮", country: "Nicaragua" },
    { flag: "🇨🇴", country: "Colombia" },
    { flag: "🇸🇾", country: "Syria" },
    { flag: "🇳🇿", country: "New Zealand" },
    { flag: "🇻🇳", country: "Vietnam" },
    { flag: "🇧🇬", country: "Bulgaria" },
    { flag: "🇲🇻", country: "Maldives" },
    { flag: "🇵🇰", country: "Pakistan" },
    { flag: "🇦🇹", country: "Austria" },
    { flag: "🇪🇪", country: "Estonia" },
    { flag: "🇱🇹", country: "Lithuania" },
    { flag: "🇱🇻", country: "Latvia" },
    { flag: "🇧🇾", country: "Belarus" },
    { flag: "🇮🇸", country: "Iceland" },
    { flag: "🇲🇾", country: "Malaysia" },
    { flag: "🇪🇨", country: "Ecuador" },
    { flag: "🇺🇦", country: "Ukraine" },
    { flag: "🇺🇿", country: "Uzbekistan" },
    { flag: "🇧🇶", country: "Bonaire, Sint Eustatius, and Saba" },
    { flag: "🇮🇷", country: "Iran" },
    { flag: "🇱🇾", country: "Libya" },
    { flag: "🇨🇭", country: "Switzerland" },
    { flag: "🇷🇸", country: "Serbia" },
    { flag: "🇲🇹", country: "Malta" },
    { flag: "🇦🇿", country: "Azerbaijan" },
    { flag: "🇪🇺", country: "European Union" },
    { flag: "🇦🇿", country: "Azerbaijan" },
    { flag: "🇰🇬", country: "Kyrgyzstan" },
    { flag: "🇩🇲", country: "Dominica" },
    { flag: "🇧🇸", country: "Bahamas" },
    { flag: "🇮🇹", country: "Italy" },
    { flag: "🇧🇴", country: "Bolivia" },
    { flag: "🇩🇴", country: "Dominican Republic" },
    { flag: "🇪🇹", country: "Ethiopia" },
    { flag: "🇸🇴", country: "Somalia" },
    { flag: "🇨🇱", country: "Chile" },
    { flag: "🇯🇴", country: "Jordan" },
    { flag: "🇮🇱", country: "Israel" },
    { flag: "🇾🇪", country: "Yemen" },
    { flag: "🇰🇲", country: "Comoros" },
    { flag: "🇧🇩", country: "Bangladesh" },
    { flag: "🇷🇴", country: "Romania" },
    { flag: "🇻🇪", country: "Venezuela" },
    { flag: "🇿🇦", country: "South Africa" },
    { flag: "🇦🇲", country: "Armenia" },
    { flag: "🇳🇴", country: "Norway" },
    { flag: "🇧🇧", country: "Barbados" },
    { flag: "🇾🇪", country: "Yemen" },
    { flag: "🇷🇴", country: "Romania" },
    { flag: "🇱🇸", country: "Lesotho" },
    { flag: "🇸🇩", country: "Sudan" },
    { flag: "🇧🇹", country: "Bhutan" },
    { flag: "🇦🇱", country: "Albania" },
    { flag: "🇵🇹", country: "Portugal" },
    { flag: "🇲🇲", country: "Myanmar" },
    { flag: "🇦🇺", country: "Australia" },
    { flag: "🇦🇿", country: "Azerbaijan" },
    { flag: "🇲🇱", country: "Mali" },
    { flag: "🇹🇯", country: "Tajikistan" },
    { flag: "🇲🇾", country: "Malaysia" },
    { flag: "🇿🇲", country: "Zambia" },
    { flag: "🇻🇳", country: "Vietnam" },
    { flag: "🇱🇺", country: "Luxembourg" },
    { flag: "🇸🇮", country: "Slovenia" },
    { flag: "🇺🇬", country: "Uganda" },
    { flag: "🇬🇪", country: "Georgia" },
    { flag: "🇮🇱", country: "Israel" },
    { flag: "🇱🇸", country: "Lesotho" },
    { flag: "🇮🇳", country: "India" },
    { flag: "🇧🇪", country: "Belgium" },
    { flag: "🇮🇩", country: "Indonesia" },
    { flag: "🇧🇾", country: "Belarus" },
    { flag: "🇰🇷", country: "South Korea" },
    { flag: "🇱🇸", country: "Lesotho" },
    { flag: "🇾🇪", country: "Yemen" }
];

// Funktion für 4 zufällige Antwortmöglichkeiten
function getRandomOptions(correct){
    let options = [correct];
    while (options.length < 4) {
        let random = flags[Math.floor(Math.random() * flags.length)].country;
        if (!options.includes(random)) options.push(random);
    }
    return options.sort(() => Math.random() - 0.5);
};





function Card({ color }){

  // Wählt eine zufällige Flagge aus
  const [current, setCurrent] = useState(flags[Math.floor(Math.random() * flags.length)]);
  // Generiert Antwortmöglichkeiten
  const [options, setOptions] = useState(getRandomOptions(current.country));
  // Speichert die Auswahl des Nutzers
  const [selected, setSelected] = useState(null);
  // Zählt richtige Antworten
  const [correctCount, setCorrectCount] = useState(0);


  // Funktion für Antwort-Check
  function handleAnswer(country){
    if (!selected) { // Antwort kann nur einmal ausgewählt werden
      setSelected(country);
      if (country === current.country) {
        setCorrectCount(correctCount + 1); // Richtige Antwort zählt hoch
      }
    }
  };

  function reloadPage(){
    window.location.reload()
  }

  // Neue Flagge wählen
  const nextFlag = () => {
    let newFlag = flags[Math.floor(Math.random() * flags.length)];
    setCurrent(newFlag);
    setOptions(getRandomOptions(newFlag.country));
    setSelected(null); // Auswahl zurücksetzen
  };

  
  return (
    <div className="card">
      {/* Zeigt richtige Antworten an */}

      <h1 style={{ fontSize: "100px" }}>{current.flag}</h1> {/* Flagge anzeigen */}
      <div className="card__country">{/* Antwortmöglichkeiten */}
      {options.map((country) => (
        <button
        key={country}
        onClick={() => handleAnswer(country)}
        style={{
          background: selected
          ? country === current.country
          ? "#268026" // Richtig = Grün
          : country === selected
          ? "#a62424" // Falsch = Rot
          : "#292929"
          : color,
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
        >
          {country}
        </button>
      ))}
      </div>

      <h2 className="card__h1">Flag Score: {correctCount} ✅</h2> 

      {/* Buttons */}
      <div className="header__newquiz">
            <button type="button" className="card__button" onClick={reloadPage}>New Quiz</button>
            <button type="button" onClick={nextFlag} className="card__button">next ➤ </button>
      </div>
    </div>
  );
};

export default Card;
