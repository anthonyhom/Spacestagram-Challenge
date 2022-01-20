import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
      image: "",
      desc:"",
      liked: false,
      
    };
  }

  componentDidMount() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=P9hQJDWMArWr0nR5xJDwOVZskOgtXbEYtZ3ZG1Ma")
      .then(response =>  response.json())
      .then(data => {
        this.setState(() => {
          return {
            title:data.title,
            date:data.date,
            image:data.url,
            desc:data.explanation
          };
        });
      });
  }

  toggleLike = (state) => {
      this.setState({
          liked:!this.state.liked
      })
  }

  render() {

    const changeColor = this.state.liked ? "Unlike":"Like"

    return (
        <div>
            <h1 style={{textAlign:"left"}}>Spacestagram</h1>
            <p style={{textAlign:"left", color: "GrayText"}}>Brought to you by NASA's Astronomy Photo of the Day (APOD) API</p>

            <div style={{textAlign:"center",alignContent:"center"}}>

                <img 
                src={this.state.image}
                style={{width:"400px",height:"400px"}}
                />

                <h2>{this.state.title} - {this.state.date}</h2>

                <p style={{textAlign:"center"}}>{this.state.desc}</p>

                <button style={{height:"38px",padding:"0 30px",borderRadius:"6px"}} onClick={this.toggleLike}>
                    {this.state.liked ? "Unlike" : "Like"}
                </button>

            </div>
            
        </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);