// Imports
import { faBatteryFull, faGears } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
class Settings extends React.Component {
  render() {
    return (
      // Settings
      <div style={styles.settings}>
        {/* title bar */}
        <div style={styles.titleBar}>
          iPod
          <FontAwesomeIcon icon={faBatteryFull} />
        </div>
        {/* setting icon */}
        <div
          style={{
            width: "100%",
            height: "90%",
            display: "flex",
            justifyContent: "center",
            fontSize: 150,
          }}
        >
          <FontAwesomeIcon icon={faGears} />
        </div>
      </div>
    );
  }
}
// Styling for settings
const styles = {
  settings: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  image: {
    width: "65%",
    height: "65%",
    alignSelf: "center",
  },
  titleBar: {
    height: "10%",
    width: "100%",
    borderRadius: "12px 0 0 0",
    backgroundImage: "linear-gradient(0deg, rgb(123, 132, 140), transparent)",
    borderBottom: "1px solid #6c757d",
    padding: "1px 5px 10px 8px",
    display: "flex",
    flexDirecton: "row",
    justifyContent: "space-between",
  },
  battery: {
    width: "20px",
    height: "20px",
  },
};
export default Settings;
