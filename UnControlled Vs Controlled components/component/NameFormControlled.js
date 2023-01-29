import { useState } from "react";

export default function NameFormControlled() {
  const [user, setUser] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    alert(`the name is ${user.name} and email is ${user.email}`);
  }
  function handleChange(e) {
    if (e.target.name === "name") {
      setUser((user) => ({ ...user, name: e.target.value }));
    } else if (e.target.name === "email") {
      setUser((user) => ({ ...user, email: e.target.value }));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          onChange={handleChange}
          name="name"
          type="name"
          placeholder="name..."
        />
      </label>
      <label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="email..."
        />
      </label>
      <input type="submit" />
    </form>
  );
}

// import react from "react";

// export default class NameFormControlled extends react.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       email: ""
//     };
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     alert(
//       ` the name and email of user is : ${this.state.name} and ${this.state.email}`
//     );
//   };

//   handleChange = (event) => {

//     if (event.target.name=== 'name') {
//       this.setState({
//         name: event.target.value
//       })
//     } else if (event.target.name==='email') {
//       this.setState({
//         email: event.target.value
//       })
//     }
//   };

//   // handleNameChange = (event) => {
//   //   this.setState({
//   //     name: event.target.value
//   //   });
//   // };
//   // handleEmailChange = (event) => {
//   //   this.setState({
//   //     email: event.target.value
//   //   });
//   // };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           <input
//             name="name"
//             onChange={this.handleChange}
//             type="text"
//             placeholder="Name"
//           />
//         </label>
//         <label>
//           <input
//             name="email"
//             onChange={this.handleChange}
//             type="email"
//             placeholder="email..."
//           />
//         </label>
//         / <input type="submit" />
//       </form>
//     );
//   }
// }

// // export default function NameFormControlled(){
// //   return (
// //     <div >
// //       NameFormControlled
// //     </div>
// //   )
// // }
