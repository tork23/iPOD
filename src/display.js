import React from "react";
import Artists from "./Artists";
import Games from "./Games";
import Home from "./Home";
import Music from "./Music";
import MyMusic from "./MyMusic";
import Settings from "./Settings";

class Screen extends React.Component {
  render() {
    return (
      // Screen elements
      <div style={styles.screen} id="screen-container">
        {this.props.activePage === "Home" ? (
          <Home activeItem={this.props.activeItem} />
        ) : null}
        {this.props.activePage === "Music" ? (
          <Music activeItem={this.props.activeItem} />
        ) : null}
        {this.props.activePage === "Games" ? <Games /> : null}
        {this.props.activePage === "Settings" ? <Settings /> : null}
        {this.props.activePage === "MyMusic" ? (
          <MyMusic audio={this.props.audio} />
        ) : null}
        {this.props.activePage === "Artists" ? <Artists /> : null}
      </div>
    );
  }
}

const styles = {
  screen: {
    height: "100%",
    width: "100%",
    borderRadius: "5px",
    backgroundColor: "grey",
    color: "orange",
  },
};
export default Screen;
