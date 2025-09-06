import React, { use, useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import MoreHoriz from "@mui/icons-material/MoreHoriz";

function WatchList() {
  return (
    <div className="watchlist-container">
      <div className="Search-conatiner">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>
      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchListAction, setShowWatchListAction] = useState(false);

  const hadleMouseEnter = (e) => {
    setShowWatchListAction(true);
  };
  const handleMouseLeave = (e) => {
    setShowWatchListAction(false);
  };
  return (
    <li onMouseEnter={hadleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="watchlist-li">
        <div className="item">
          <p className={stock.isDown ? "loss" : "profit"}>{stock.name}</p>
          <div className="itemInfo">
            <p className="percent">
              <span className="">{stock.percent}</span>{" "}
              {stock.isDown ? (
                <KeyboardArrowDownIcon className="down" />
              ) : (
                <KeyboardControlKeyIcon className="up" />
              )}
              <span className={stock.isDown ? "loss " : "profit"}>
                {stock.price.toFixed(2)}
              </span>
            </p>
          </div>
        </div>
        
        {showWatchListAction && <WatchListAction uid={stock.name} />}{" "}
      </div>
    </li>
  );
};
const WatchListAction = ({ uid }) => {
  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)">
          <button className="btn-watchlist buy">Buy</button>
        </Tooltip>
      </span>
      <span>
        <Tooltip title="Sell (S)">
          <button className=" btn-watchlist sell">Sell</button>
        </Tooltip>
      </span>
      <span>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}>
          <button className="btn-watchlist action">
            <BarChartOutlined className=" icon " />
          </button>
        </Tooltip>
      </span>

      <span>
        <Tooltip title="more " placement="top" arrow TransitionComponent={Grow}>
          <button className="btn-watchlist action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
