import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/searchBox/searchBox.component.jsx";
import "./App.css";

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// };

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchBox: "",
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "GET",
        }
      );
      const users = await response.json();
      this.setState({ monsters: users });
    } catch (e) {
      console.log("Error:", e);
    }
  }

  handleChange = (e) => {
    this.setState({ searchBox: e.target.value });
  };

  render() {
    const { monsters, searchBox } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchBox.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster-dex</h1>
        <SearchBox
          placeholder="Search monsters..."
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
