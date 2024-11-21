import React from 'react'
import './App.css'
// import Student from './Components/Student';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './Components/Navbar';
import Card from './Components/Card';
import Searchbar from './Components/Search';
import Img1 from './Img/Image-7.png'
// import Image from './Components/Image-7.png'

// const data = [
//   { name: "Anom", sub1:98,sub2:80,sub3:95,sub4:98,sub5:95 },
//   { name: "Ami", sub1:50,sub2:86,sub3:80,sub4:90,sub5:85 },
//   { name: "Anjali", sub1:85,sub2:90,sub3:87,sub4:76,sub5:85 },
//   { name: "Anjali", sub1:85,sub2:90,sub3:87,sub4:76,sub5:85 },
//   { name: "Anjali", sub1:85,sub2:90,sub3:87,sub4:76,sub5:85 },
  
// ]

function App() {
  return (
    //   <div className="App">
    //       <table>
    //           <tr>
    //               <th>Name</th>
    //               <th>Sub1</th>
    //               <th>Sub2</th>
    //               <th>Sub3</th>
    //               <th>Sub4</th>
    //               <th>Sub5</th>
    //               <th>Total</th>
    //               <th>Percentage</th>
    //               <th>grade</th>
    //           </tr>
    //           {data.map((val) => {
    //               return (
    //                   <Student val={val}/>
    //               )
    //           })}
    //       </table>
    //   </div>

    <div className="App">
        <div className="navbar">
        <NavScrollExample/>
        </div>
        <div className="content">
          <div className="mini-content">
            <h1>The news that surrounds us is collected here</h1>
            <p>Read watch and absorb the content that we publish in our news blog. Also leave comments and communicate with other users.</p>
          </div>
        </div>
        <div className="w-100">
      <div className='w-1140'>

        <div className="flex"> 
        <Card img={Img1} heading="Business"  date="29th May" head="Forging your path"/>
        <Card img="https://www.cdmi.in/gallery_category/thumbnail/ganesh.jpg" heading="Business"/>
        <Card img="https://www.cdmi.in/gallery_category/thumbnail/janmashtami.jpg" heading="Navratri Celebration 2024"/>
        <Card img="https://www.cdmi.in/gallery_category/thumbnail/navratri.jpg" heading="Navratri Celebration 2024"/>
        <Card img="https://www.cdmi.in/gallery_category/thumbnail/navratri.jpg" heading="Navratri Celebration 2024"/>
        <Card img="https://www.cdmi.in/gallery_category/thumbnail/navratri.jpg" heading="Navratri Celebration 2024"/>
        </div>
      
      </div>
    </div>
      <div className="w-100">
          <div className="content1">
          <div className="mini-content1">
          <h1>Get great articles direct to your inbox</h1>
          <p>The latest Move news, articles, and resources, sent straight to your inbox every month.</p>
          <Searchbar/>
          </div>
          </div>
      </div>
    </div>


   
  
  );
}



export default App;

