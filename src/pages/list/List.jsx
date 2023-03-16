import { useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
import "./List.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { SearchItem } from "../../components/searchItem/SearchItem";

export const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptins] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle"> Search</h1>
            <div className="listItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="listItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )} `}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="listItem">
              <label> Options</label>
              <div className="listOptions">
                <div className="listOptionItem">
                  <span className="listOptionText">
                    Min Price<small> per night</small>
                  </span>
                  <input type="number" className="listOptionInput" />
                </div>

                <div className="listItem">
                  <div className="listOptionItem">
                    <span className="listOptionText">
                      Max Price<small> per night</small>
                    </span>
                    <input type="number" className="listOptionInput" />
                  </div>
                </div>
                <div className="listItem">
                  <div className="listOptionItem">
                    <span className="listOptionText">Adult</span>
                    <input
                      type="number"
                      min={1}
                      className="listOptionInput"
                      placeholder={options.adult}
                    />
                  </div>
                </div>
                <div className="listItem">
                  <div className="listOptionItem">
                    <span className="listOptionText">Children</span>
                    <input
                      type="number"
                      min={0}
                      className="listOptionInput"
                      placeholder={options.children}
                    />
                  </div>
                </div>
                <div className="listItem">
                  <div className="listOptionItem">
                    <span className="listOptionText">Room</span>
                    <input
                      type="number"
                      min={1}
                      className="listOptionInput"
                      placeholder={options.room}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button> Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};
