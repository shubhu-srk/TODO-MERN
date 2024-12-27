import React from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import notes from "../../data/notes";
const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  return (
    <MainScreen title={"Welcome Shubham Kshirsagar"}>
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => {
        return (
        
          <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
               
                      {note.title}
                    
                </span>
                <div>
                  <Button href={`/note/${note._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Card.Body>
                <h4>
                  <Badge variant="success">Category - {note.category}</Badge>
                </h4>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created On - Date
                    </footer>
                  </blockquote>
              </Card.Body>
                
            </Card>
         
            
        );
      })}
    </MainScreen>
  );
};

export default MyNotes;

// import React from "react";
// import MainScreen from "../../components/MainScreen";
// import { Link } from "react-router-dom"; // Correct import
// import { Accordion, Badge, Button, Card } from "react-bootstrap";
// import notes from "../../data/notes";

// const MyNotes = () => {
//   const deleteHandler = (id) => {
//     if (window.confirm("Are you sure?")) {
//       console.log(`Deleted note with id: ${id}`);
//     }
//   };

//   return (
//     <MainScreen title={"Welcome Shubham Kshirsagar"}>
//       <Link to="/createnote">
//         <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
//           Create New Note
//         </Button>
//       </Link>
//       <Accordion defaultActiveKey="0">
//         {notes.map((note, index) => (
//           <Card style={{ margin: 10 }} key={note._id}>
//             <Accordion.Item eventKey={index.toString()}>
//               <Accordion.Header>
//                 <span
//                   style={{
//                     color: "black",
//                     textDecoration: "none",
//                     flex: 1,
//                     cursor: "pointer",
//                     alignSelf: "center",
//                     fontSize: 18,
//                   }}
//                 >
//                   {note.title}
//                 </span>
//                 <div>
//                   <Button href={`/note/${note._id}`}>Edit</Button>
//                   <Button
//                     variant="danger"
//                     className="mx-2"
//                     onClick={() => deleteHandler(note._id)}
//                   >
//                     Delete
//                   </Button>
//                 </div>
//               </Accordion.Header>
//               <Accordion.Body>
//                 <h4>
//                   <Badge bg="success">Category - {note.category}</Badge>
//                 </h4>
//                 <blockquote className="blockquote mb-0">
//                   <p>{note.content}</p>
//                   <footer className="blockquote-footer">
//                     Created On - Date
//                   </footer>
//                 </blockquote>
//               </Accordion.Body>
//             </Accordion.Item>
//           </Card>
//         ))}
//       </Accordion>
//     </MainScreen>
//   );
// };

// export default MyNotes;
