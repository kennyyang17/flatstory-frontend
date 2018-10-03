// import React, { Component } from 'react';
// import Lore from './Lore';
// // import Game from './Game';
// import Devs from './Devs';

// export default class DropDown extends Component {
//     constructor() {
//       super();
      
//       this.state = {
//         showMenu: false,
//       };
      
//       this.showMenu = this.showMenu.bind(this);
//       this.closeMenu = this.closeMenu.bind(this);
//     }
    
//     showMenu(event) {
//       event.preventDefault();
      
//       this.setState({ showMenu: true }, () => {
//         document.addEventListener('click', this.closeMenu);
//       });
//     }
    
//     closeMenu() {
//       this.setState({ showMenu: false }, () => {
//         document.removeEventListener('click', this.closeMenu);
//       });
//     }
  
//     render() {
//       return (
//         <div>
//           <button onClick={this.showMenu}>
//             About Menu
//           </button>
//           {
//             this.state.showMenu
//               ? (
//                 <div>
//                   <ul><Lore /></ul>
//                   <ul>GAME</ul>
//                   <ul><Devs /></ul>
//                 </div>
//               )
//               : (
//                 null
//               )
//           }
//         </div>
//       );
//     }
//   }