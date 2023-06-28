//import { useState } from 'react';
//--> No useState in class based components, instead:
import { Component } from "react";

import User from "./User";
import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Dave" },
  { id: "u2", name: "Kat" },
  { id: "u3", name: "Rebecca" },
];

class Users extends Component {
  constructor() {
    // always executed when running class-based components
    super(); // when you extend another class, you need to call this,
    // which calls the constructor of the class
    // that we're inheriting from
    this.state = {
      // state in classes need to be objects
      showUsers: true,
      more: "Test",
    };
  }

  toggleUsersHandler() {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// --> The old functional component
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
