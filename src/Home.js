import React from "react";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBatteryFull,
  faMusic,
  faGamepad,
  faGears,
} from "@fortawesome/free-solid-svg-icons";

class Home extends React.Component {
  render() {
    return (
      <div style={styles.homeDisplay} id="home-screen">
        <div style={styles.menuList} id="menu-list">
          <div style={styles.titleBar}>
            iPod
            <FontAwesomeIcon icon={faBatteryFull} />
          </div>

          <ListGroup style={{ borderRadius: "0" }}>
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "NowPlaying" ? "active" : ""}
            >
              Now Playing{" "}
              {this.props.activeItem === "NowPlaying" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faMusic} />
                </span>
              ) : (
                ""
              )}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "Music" ? "active" : ""}
            >
              Music{" "}
              {this.props.activeItem === "Music" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faMusic} />
                </span>
              ) : (
                ""
              )}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "Games" ? "active" : ""}
            >
              Games{" "}
              {this.props.activeItem === "Games" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faGamepad} />
                </span>
              ) : (
                ""
              )}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "Settings" ? "active" : ""}
            >
              Settings{" "}
              {this.props.activeItem === "Settings" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faGears} />
                </span>
              ) : (
                ""
              )}
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div style={styles.imageContainer} id="image-container"></div>
      </div>
    );
  }
}

const styles = {
  homeDisplay: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  menuList: {
    height: "100%",
    width: "50%",
    boxShadow: "10px 0px 15px -5px rgba(0,0,0,0.75)",
    zIndex: "1",
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

export default Home;
