/**Liste des hotels */
import "./list.css"
import NaviBar from "../../components/NaviBar/NaviBar";
import Head from "../../components/Head/Head";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/searchItem";
import { useNavigate } from "react-router-dom"

const List = ()=> {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);
    const [price, setPrice] = useState([
      {
        minPrice : 0,
        maxPrice :1000
      }
    ]);
    const navigate = useNavigate();
    const handleSearch = () => {
      navigate("/hotels", { state: { destination, date,price, options} });
    };
   
    return(
        <div>
      <NaviBar />
      <Head type="list" />  <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Recherche</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} 
              type="text"
              className="headSearchInput"
              name = "destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)} />

            </div>
            <div className="lsItem">
              <label>Date de disponibilité</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Prix minimum <small>par nuit</small>
                  </span>
                  <input
                  placeholder={price.minPrice}
                  type="number" 
                  className="lsOptionInput" 
                  name = "minPrice"
                  value={price.minPrice}
                  onChange={(e)=> setPrice(e.target.value)}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Prix Maximum <small>par nuit</small>

                  </span>
                  <input 
                  placeholder={price.maxPrice}
                  type="number" 
                  className="lsOptionInput"
                  name = "maxPrice"
                  value={price.maxPrice}
                  onChange={(e)=> setPrice(e.target.value)} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adulte</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
          
         
              </div>
            </div>
            <button onClick={handleSearch}>Recherche</button>
          </div>
          <div className="listResult">
            <SearchItem />
           
          </div>
        </div>
      </div>
    </div>
    )
}
export default List;