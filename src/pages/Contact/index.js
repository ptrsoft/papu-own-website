// import React, { Component } from "react";
// import { Button, Container } from "react-bootstrap";
// import AwsomeProject from "../../components/AwsomeProject";


// class Contact extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   componentDidMount() {
//     window.scrollTo(0, 0);
//   }

//   render() {
//     return (
//         <div className="awsome-project-container d-block w-100 px-md-5 p-3 py-5">
//         <div className="d-block w-100 text-center heading">
//         Let’s Build Something Together<br /> <span>Get in Touch for SAAS Solutions</span>
//         </div>

//         <div className="d-flex rlex-wrap-wrap flex-direction-column">
//           <div className="d-inline-flex  align-items-center justify-content-start form">
//             <span>
//               <i className="fa-solid fa-envelope"></i>
//             </span>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="First Name"
//             />
//           </div>

//           <div className="d-inline-flex align-items-center justify-content-start form">
//             <span>
//               <i className="fa-solid fa-envelope"></i>
//             </span>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Last Name"
//             />
//           </div>
//           <div className="d-inline-flex align-items-center justify-content-start form">
//             <span>
//               <i className="fa-solid fa-envelope"></i>
//             </span>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Number"
//             />
//           </div>

//           <div className="d-inline-flex align-items-center justify-content-start form">
//             <span>
//               <i className="fa-solid fa-envelope"></i>
//             </span>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Email Address"
//             />
//             <Button>Send</Button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Contact;


import React from 'react'
import { Button, Container } from 'react-bootstrap'

const index = () => {
  return (
    <>
   
        <Container>
        <div className="awsome-project-container d-block w-100 px-md-5 p-3 py-5">
        <div className="d-block w-100 text-center heading">
          Have an Awsome Project <br /> Idea? <span>Let’s Discuss</span>
        </div>
        </div>
            
            <div style={{ width:'70%',padding:'20px', borderRadius:'20px', margin:'auto' }}>

            <form style={{display:'flex' , flexDirection:"column" , gap:12}}>

            <div className="d-inline-flex align-items-center justify-content-start form">
            <input
              type="text"
              className="form-control"
              placeholder="Name*"
            />
          </div>

          <div className="d-inline-flex align-items-center justify-content-start form">
            <input
              type="text"
              className="form-control"
              placeholder="Phone No*"
              />
          </div>

          <div className="d-inline-flex align-items-center justify-content-start form">
            <input
              type="text"
              className="form-control"
              placeholder="Phone No*"
            />
          </div>
          <div className="d-inline-flex align-items-center justify-content-start form">
            <input
              type="text"
              className="form-control"
              placeholder="Phone No*"
            />
          </div>

<Button>Send</Button>
                </form>       
              </div>
        </Container>
   
    </>
  )
}

export default index