import React from "react";
import Display from "./display";
import ZingTouch from "zingtouch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBackward,
  faForward,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
// <-- import styles to be used
import sound from "./assets/music/Kesariya.mp3";

class Ipod extends React.Component {
  //constructor
  constructor() {
    super();
    this.state = {
      activeItem: "NowPlaying",
      activePage: "Home",
      enter: 0,
      play: true,
    };
  }

  rotateWheel = () => {
    var containerElement = document.getElementById("wheel");
    var activeRegion = new ZingTouch.Region(containerElement);
    var change = 0;
    var self = this;
    self.state.enter = self.state.enter + 1;
    if (self.state.enter < 2) {
      activeRegion.bind(containerElement, "rotate", function (event) {
        //Perform Operations
        var newAngle = event.detail.distanceFromLast;
        console.log(newAngle);
        if (newAngle < 0) {
          console.log(change);
          change++;
          if (change === 15) {
            console.log("change state");
            change = 0;
            if (self.state.activePage === "Home") {
              if (self.state.activeItem === "NowPlaying") {
                self.setState({
                  activeItem: "Music",
                });
              } else if (self.state.activeItem === "Music") {
                self.setState({
                  activeItem: "Games",
                });
              } else if (self.state.activeItem === "Games") {
                self.setState({
                  activeItem: "Settings",
                });
              } else if (self.state.activeItem === "Settings") {
                self.setState({
                  activeItem: "NowPlaying",
                });
              }
            } else if (self.state.activePage === "Music") {
              if (self.state.activeItem === "MyMusic") {
                self.setState({
                  activeItem: "Artists",
                });
              } else if (self.state.activeItem === "Artists") {
                self.setState({
                  activeItem: "MyMusic",
                });
              }
            }
          }
        } else {
          console.log(change);
          change++;
          if (change === 15) {
            console.log("change state");
            change = 0;
            if (self.state.activePage === "Home") {
              if (self.state.activeItem === "NowPlaying") {
                self.setState({
                  activeItem: "Settings",
                });
              } else if (self.state.activeItem === "Music") {
                self.setState({
                  activeItem: "NowPlaying",
                });
              } else if (self.state.activeItem === "Games") {
                self.setState({
                  activeItem: "Music",
                });
              } else if (self.state.activeItem === "Settings") {
                self.setState({
                  activeItem: "Games",
                });
              }
            } else if (self.state.activePage === "Music") {
              if (self.state.activeItem === "MyMusic") {
                self.setState({
                  activeItem: "Artists",
                });
              } else if (self.state.activeItem === "Artists") {
                self.setState({
                  activeItem: "MyMusic",
                });
              }
            }
          }
        }
      });
    } else {
      console.log("Not allowed to enter");
    }
  };

  changePage = () => {
    //change the pages acc to the command
    if (this.state.activeItem === "Music") {
      this.setState({
        activeItem: "MyMusic",
        activePage: this.state.activeItem,
      });
    } else if (this.state.activeItem === "NowPlaying") {
      this.setState({
        activeItem: "NowPlaying",
        activePage: "MyMusic",
      });
    } else {
      this.setState({
        activeItem: this.state.activeItem,
        activePage: this.state.activeItem,
      });
    }
  };

  changePageToHomeScreen = () => {
    //changing pages acc to the command
    if (
      this.state.activeItem === "MyMusic" ||
      this.state.activeItem === "Artists"
    ) {
      this.setState({
        activeItem: "Music",
        activePage: "Home",
      });
    } else {
      this.setState({
        activeItem: this.state.activeItem,
        activePage: "Home",
      });
    }
  };
  //toggle
  toggle = () => {
    if (this.state.activePage === "MyMusic") {
      if (this.state.play === true) {
        this.state.audio.pause();
        this.setState({
          play: false,
        });
      } else {
        this.state.audio.play();
        this.setState({
          play: true,
        });
      }
      console.log("toggled");
    }
  };
  componentDidMount() {
    let audio = document.getElementsByClassName("audio-element")[0];
    console.log(audio);
    this.setState({
      audio: audio,
    });
    console.log(this.state);
  }

  render() {
    return (
      <div style={styles.ipodBody}>
        <audio className="audio-element">
          <source src={sound}></source>
        </audio>

        <div style={styles.screen}>
          <Display
            activeItem={this.state.activeItem}
            activePage={this.state.activePage}
            audio={this.state.audio}
          />
        </div>
        <div id="wheel" style={styles.wheel} onMouseOver={this.rotateWheel}>
          <div style={styles.buttonContainer}>
            <div
              onClick={this.changePageToHomeScreen}
              style={styles.menuButton}
            >
              <FontAwesomeIcon style={styles.icons} icon={faBars} />
            </div>
          </div>
          <div style={styles.buttonContainer}>
            <div style={styles.midButton}>
              <FontAwesomeIcon style={styles.icons} icon={faBackward} />
            </div>
            <div style={styles.midButton}>
              <div onClick={this.changePage} style={styles.centerButton}></div>
            </div>
            <div style={styles.midButton}>
              <FontAwesomeIcon style={styles.icons} icon={faForward} />
            </div>
          </div>
          <div style={styles.buttonContainer}>
            <div onClick={this.toggle} style={styles.menuButton}>
              <FontAwesomeIcon style={styles.icons} icon={faPlay} />
              &nbsp;
              <FontAwesomeIcon style={styles.icons} icon={faPause} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// styling for iPod
const styles = {
  ipodBody: {
    height: "525px",
    width: "300px",
    background: "silver",
    margin: "4rem auto",
    padding: 25,
    borderRadius: "15px",
    boxShadow: "0.5px -0.5px 10px 1px black inset",
  },
  screen: {
    height: 200,
    borderRadius: 5,
    width: "auto",
    background: "black",
    margin: "auto",
    // marginTop: 25
  },
  wheel: {
    height: 300,
    width: 300,
    borderRadius: "50%",
    background: "white",
    marginTop: 25,
  },
  buttonContainer: {
    height: 100,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  menuButton: {
    alighSelf: "center",
    marginTop: 35,
  },
  midButton: {
    height: 100,
    width: 100,
    display: "flex",
    flexDirection: "column",
    alighSelf: "center",
    textAlign: "center",
    margin: 35,
  },
  centerButton: {
    height: 100,
    width: 100,
    borderRadius: "50%",
    background: "grey",
    margin: -35,
  },
  icons: {
    alighSelf: "center",
    fontSize: 30,
  },
};
export default Ipod;
