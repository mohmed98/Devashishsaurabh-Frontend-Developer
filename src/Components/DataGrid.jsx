import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchForm from "./SearchForm";
import Popup from "reactjs-popup";
import Pagination from "./Pagination";
const DataGrid = () => {
  const [current, setCurrent] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const { data, isLoading, totalpages } = useSelector((state) => state);
  function onChange(page) {
    setStartIndex(page * 10 - 10);
    setEndIndex(page * 10);
    setCurrent(page);
  }
  return (
    <div>
      <h1 className="text-[35px] font-bold">Filter Data</h1>
      <SearchForm />
      <div>
        {isLoading ? (
          <h1 className="text-[45px] font-bold">Data Loading....</h1>
        ) : (
          <div className="w-4/5 grid grid-cols-4 font-bold gap-4 m-auto md:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-1 mb-20">
            {data &&
              data.slice(startIndex, endIndex).map((el) => (
                <div key={el.capsule_serial} className="bg-white rounded mt-5 hover:shadow">
                  <img
                    src="https://www.universetoday.com/wp-content/uploads/2017/02/dragoncrew.8k.jpg"
                    alt="img"
                  />
                  <p className="mt-3">Capsule Serial: {el.capsule_serial}</p>
                  <p>Capsule_Id: {el.capsule_id}</p>
                  <p>Status: {el.status}</p>
                  <p>Original Launch:{el.original_launch?.split("T")[0]}</p>
                  <p>{el.type}</p>
                  <Popup
                    trigger={
                      <button className="bg-blue-500 p-2 rounded text-white mb-5">
                        More Details
                      </button>
                    }
                    position="top center"
                  >
                    {(close) => (
                      <div
                        style={{
                          backgroundColor: "#939598",
                          width: "380px",
                          padding: "10px",
                          color:"white"
                        }}
                        className="text-lg font-bold flex flex-col"
                      >
                        <div style={{ textAlign: "end" }}>
                          <a href="##" className="close" onClick={close}>
                            &times;
                          </a>
                        </div>
                        <p>Details: {el.details}</p>
                        <p>Landings:{el.landings}</p>
                        <div>
                          {el.missions.map((item, i) => (
                            <div key={i}>
                              <p>Name:{item.name}</p>
                              <p>Flight:{item.flight}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>
              ))}
          </div>
        )}
      </div>
      <Pagination total={totalpages} onChange={onChange} current={current} />
    </div>
  );
};

export default DataGrid;
