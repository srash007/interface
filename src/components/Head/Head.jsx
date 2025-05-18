/* eslint-disable react/jsx-no-undef */
import "./Head.css"
import {
    faBed,
    faMountain,
    faUmbrellaBeach,
    faTree,
    faCity,
    faPerson
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import {DateRange} from 'react-date-range'
import { useState } from "react"



import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { useNavigate } from "react-router-dom"



 const Head = ({type}) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        room: 1,
     });
     const [price, setPrice] = useState([
      {
        minPrice : 0,
        maxPrice :1000
      }
    ]);
    
     const navigate = useNavigate();
     

     const handleOption = (name, operation) => {
       setOptions((prev) => {
         return {
           ...prev,
           [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
         };
       });
     };


   
     const handleSearch = () => {
       navigate("/hotels", { state: { destination, date,price, options} });
     };
    
  return (
    <div className="Head">
        <div className={
          type === "list" ? "headContainer list" : "headContainer"
        }>
            <div className="headList">
                <div className="headListItem ">
                <FontAwesomeIcon icon={faCity}/>
                <span>En ville</span>
                </div>
                <div className="headListItem">
                <FontAwesomeIcon icon={faMountain}/>
                <span>Montagne</span>
                </div>
                <div className="headListItem">
                <FontAwesomeIcon icon={faUmbrellaBeach}/>
                <span>Plage</span>
                </div>
                <div className="headListItem">
                <FontAwesomeIcon icon={faTree}/>
                <span>Forêt</span>
                </div>
                </div>
                {type !== "list" && (
                <>
                <h1>Choisissez où vous reposer</h1>
                <div className="headSearch">
                    <div className="headSearchInput">
                        <FontAwesomeIcon icon={faBed} className="headIcon"/>
                        <input
                        type = "text"
                        placeholder="Où voulez vous allez ?"
                        className="headSearchInput"
                        name = "destination"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>
                    <div className="headSearchInput">
                      <input
                      type="number"
                      placeholder="Minimum"
                      className="headSearchInput"
                      name="minPrice"
                      value={price.minPrice}
                      disabled = {price.minPrice <= 0}
                      onChange={(e)=> setPrice(e.target.value)}                      
                      />
                      <input
                      type="number"
                      placeholder="Maximum"
                      className="headSearchInput"
                      name="maxPrice"
                      value={price.maxPrice}
                      disabled={price.maxPrice <= price.minPrice}
                      onChange={(e)=> setPrice(e.target.value)}  
                      />

                    </div>
                                    
                    <div className="headSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headIcon"/>
                        <span onClick={() => setOpenDate(!openDate)} className="headSearchText"> {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className = "date"
                            />}
                    </div>
                    
                    <div className="headSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headIcon"/>
                        <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult ·  ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div>
                   
                    </div>
                    
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                    </div>
                    <div></div>
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch} >
                            <span>Rechercher</span> 
                        </button>
                    </div>  
                </div>
                </>
        )}
        </div>
    </div>
  )
}

export default Head
