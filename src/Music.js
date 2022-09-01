// Imports
import { faBatteryFull, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ListGroup } from "react-bootstrap";
class Music extends React.Component {
  render() {
    return (
      // Music screen
      <div style={styles.musicScreen} id="music-screen">
        <div style={styles.menuList} id="menu-list">
          {/* title bar */}
          <div style={styles.titleBar}>
            iPod
            <FontAwesomeIcon icon={faBatteryFull} />
          </div>
          {/* list of options under music */}
          <ListGroup style={{ borderRadius: "0" }}>
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "MyMusic" ? "active" : ""}
            >
              My Music{" "}
              {this.props.activeItem === "MyMusic" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faMusic} />
                </span>
              ) : (
                ""
              )}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "Artists" ? "active" : ""}
            >
              Artists{" "}
              {this.props.activeItem === "Artists" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faMusic} />
                </span>
              ) : (
                ""
              )}
            </ListGroup.Item>
          </ListGroup>
        </div>
        {/* right side image */}
        <div style={styles.imageContainer} id="image-container"></div>
      </div>
    );
  }
}
// styling for music
const styles = {
  musicScreen: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirecton: "row",
  },
  menuList: {
    height: "100%",
    width: "50%",
    boxShadow: "10px 0px 15px -5px rgba(0,0,0,0.75)",
    zIndex: "1",
  },
  imageContainer: {
    height: "100%",
    width: "50%",
    backgroundImage:
      'url("https://images.unsplash.com/photo-1611068813580-b07ef920964b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyJTIwZm9yJTIwbW9iaWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "0 5px 5px 0",
  },
  titleBar: {
    height: "10%",
    width: "50",
    borderRadius: "5px 0 0 0",
    backgroundImage: "linear-gradient(0deg, rgb(192, 192, 192), transparent)",
    borderBottom: "1px solid #6c757d",
    padding: "1px 5px 10px 8px",
    display: "flex",
    flexDirecton: "row",
    justifyContent: "space-between",
  },
};

export default Music;
