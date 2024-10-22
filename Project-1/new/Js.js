// // ReactDOM.render(<h1>Hello It's my first React Code</h1>,document.getElementById("root"));

// // ReactDOM.render(
// // <ol><li>Apple</li>
// // <li>Banana</li></ol>
// //     ,document.getElementById("root"));

// // function mainContent(){
// //  return(
// //     <h1>Hello i am learning React</h1>
// //  )
// // };


// // ReactDom.render(
// //     <div>
// //     <mainContent />
// //     </div>
// //     ,document.getElementById("root"));

// function CallF()
// {
//     return(
//         <div className="container" >
//         <ul className="nav">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Active</a>
//         </li>
//         <li className="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled">Disabled</a>
//         </li>
//       </ul>
//       </div>
//     )
// } 

// function MainContent()
// {
//     return(
// <h1>Hello I am learning JavaScript!! </h1>
//     );
// }




// ReactDOM.render(
//   <div>
//   <CallF />
//   <MainContent />
// </div>,
// document.getElementById("root")
// );


let h1=document.createElement("h1");
h1.innerText="Hello I am Learning React! ";
h1.className="heading";
let parent=document.getElementById("root");

parent.appendChild(h1);

