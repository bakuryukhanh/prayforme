import moment from "moment";
import "./match.less";
import cls from "classnames";
const Match = ({ direction }) => {
  return (
    <div
      className={cls({
        match: true,
      })}
    >
      <div className="date">{moment().format("llll")}</div>
      <div
        className={cls({
          vertical: direction === "vertical",
        })}
      >
        <div className="team">
          <div className="match__team">
            <div className="match__team__flag"></div>
            <div className="match__team__name"></div>
          </div>
          <div className="match__score"></div>
        </div>
        <div className="team">
          <div className="match__team">
            <div className="match__team__flag"></div>
            <div className="match__team__name"></div>
          </div>
          <div className="match__score"></div>
        </div>
      </div>
    </div>
  );
};

export default Match;
