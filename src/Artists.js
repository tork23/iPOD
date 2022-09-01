// Imports
import { faBatteryFull } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import artistImage from "./assets/images/profilepic.png";

class Artists extends React.Component {
  render() {
    return (
      <div style={styles.artistsContainer}>
        {/* title bar */}
        <div style={styles.titleBar}>
          iPod
          <FontAwesomeIcon icon={faBatteryFull} />
        </div>
        {/* styling of artist */}
        <div style={styles.info}>
          <div style={styles.imageContainer}></div>
          <div style={styles.subInfo}>
            <p style={{ marginBottom: "0" }}> Yo Yo !</p>
            <p>Honey Singh</p>
          </div>
        </div>
      </div>
    );
  }
}
// styles for artist
const styles = {
  artistsContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  imageContainer: {
    height: 70,
    width: 70,
    borderRadius: "50%",
    backgroundImage: `url(${artistImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    alignSelf: "center",
  },
  image: {
    width: "2rem",
    height: "2rem",
    marginLeft: "70px",
  },
  info: {
    height: "70%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  info2: {
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
  subInfo: {
    alignSelf: "center",
  },
  titleBar: {
    height: "10%",
    width: "50",
    borderRadius: "5px 0 0 0",
    backgroundImage: "-gradient(0deg, rgb(192, 192, 192), transparent)",
    borderBottom: "2px solid #6c757d",
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
export default Artists;
