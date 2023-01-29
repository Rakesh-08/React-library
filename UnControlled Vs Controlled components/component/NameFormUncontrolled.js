import react, { useRef, Component } from "react";

// use of useRef hook in function component

export default function NameFormUncontrolled() {
  let inputRef = useRef("");

  function handleAutoSubmit() {
    alert(` the input is ${inputRef.current.value}`);
  }

  return (
    <form onSubmit={handleAutoSubmit}>
      <label>
        <input ref={inputRef} type="text" />
      </label>
      / <input type="submit" />
    </form>
  );
}

// export default class NameFormUncontrolled extends Component {
//   constructor() {
//     super()

//     this.inputRef = react.createRef()
//   }

//   handleAutoSubmit =(e)=>{
//     e.preventDefault()

//     alert(`the input is ${this.inputRef.current.value}`)
//     this.inputRef.current.value =''
//   }

//   render() {

//     return (
//       <form onSubmit={this.handleAutoSubmit}>
//         <label>
//           <input ref={this.inputRef} type="text" />
//         </label>
//         <input type="submit" />
//       </form>
//     );
//   }
// }
