// Imports
import { faBatteryFull } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

class MyMusic extends React.Component {
  constructor() {
    super();
    this.state = {
      isMounted: true,
    };
  }
  componentDidMount() {
    let self = this;
    self.props.audio.play();
    self.props.audio.addEventListener("timeupdate", function () {
      if (self.state.isMounted) {
        var pos = self.props.audio.currentTime / self.props.audio.duration;
        self.updateTime();
        let fill = document.getElementById("fill");
        console.log(fill);
        if (fill !== null) {
          fill.style.width = pos * 100 + "%";
        }
      }
    });
  }
  // Updating time of music as it is played
  updateTime = () => {
    this.setState({
      audio: this.props.audio,
    });
  };
  componentWillUnmount() {
    this.state.isMounted = false;
  }
  render() {
    let audio = this.props.audio;
    return (
      <div style={styles.myMusicContainer}>
        {/* title bar */}
        <div style={styles.titleBar}>
          iPod
          <FontAwesomeIcon icon={faBatteryFull} />
        </div>
        {/* current song info */}
        <div style={styles.info}>
          <img
            style={styles.image}
            src="https://i.ytimg.com/vi/AxrCKwLcAzM/maxresdefault.jpg"
          ></img>
          <div style={styles.subInfo}>
            <h4 style={{ marginBottom: "0.5rem" }}>Kesariya</h4>
            <p style={{ marginBottom: "0" }}>Movie: Brahmaastra</p>
            <p style={{ marginBottom: "0" }}>Singer:Arjit Singh</p>
          </div>
        </div>
        {/* status bar  */}
        <div style={styles.statusBar}>
          <p style={styles.currTime}>
            {audio !== null ? Math.floor(audio.currentTime) : "00 :00"}
          </p>
          <div style={styles.seekBar}>
            <div style={styles.fill} id="fill"></div>
          </div>
          <p style={styles.dur}>
            {audio != null ? Math.floor(audio.duration) : "00 : 00"}
          </p>
        </div>
      </div>
    );
  }
}
// Styling for current music being played
const styles = {
  myMusicContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: "30%",
    alignSelf: "center",
  },
  info: {
    height: "70%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  statusBar: {
    width: "100%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  subInfo: {
    alignSelf: "center",
  },
  seekBar: {
    width: "70%",
    height: "20%",
    border: "1px solid grey",
    cursor: "pointer",
    alignSelf: "center",
    display: "flex",
  },
  fill: {
    height: "100%",
    backgroundColor: "royalblue",
  },
  currTime: {
    margin: "0",
    alignSelf: "center",
  },
  dur: {
    margin: "0",
    alignSelf: "center",
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
  battery: {
    width: "20px",
    height: "20px",
  },
};
export default MyMusic;
