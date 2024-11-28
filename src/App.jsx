import React from 'react'
import './App.css'
// import Student from './Components/Student';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './Components/Navbar';
import Card from './Components/Card';
import Searchbar from './Components/Search';
import Img1 from './Img/Image-7.png'
import Img2 from './Img/Image-11.png'
import Img3 from './Img/Image-15.png'
import Img4 from './Img/Image-20.png'
import Img5 from './Img/Image-24.png'
import Img6 from './Img/Image-27.png'
import Pagination from './Components/Pagination';
import Footer from './Components/Footer';
// import { IconName } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import SimpleSlider from './Components/Slider';



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
        <div className="w-100" style={{paddingTop:"70px"}}>
      <div className='w-1140'>

        <div className="flex"> 
        <Card img={Img1} heading="Business"  date="29th May" head="Forging your path" pera="Create great products that will make life easier for you and your colleagues. Thus paving your way." link="Read More" icon={ <FaArrowRight />}/>
        <Card img={Img2} heading="Design" date="25th May" head="Forging your path" pera="Create great products that will make life easier for you and your colleagues. Thus paving your way." link="Read More" icon={ <FaArrowRight />}/>
        <Card   head="An App that was created to help you find lost items!" pera="www.plumweb.com" link="Read More" icon={<FaAlignJustify />} />
        <Card img= {Img3} heading="Finance" date="15th May" head="Planning For Change" pera="Create great products that will make life easier for you and your colleagues. Thus paving your way." link="Read More" icon={ <FaArrowRight />}/>
        <Card img="" heading="Navratri Celebration 2024" date="29th May" head="Forging your path" pera="Create great products that will make life easier for you and your colleagues. Thus paving your way." link="Read More" icon={ <FaArrowRight />}/>
        <Card img={Img4} heading="Design" date="20th May" head="Color palette" pera="Create great products that will make life easier for you and your colleagues. Thus paving your way." link="Read More" icon={ <FaArrowRight />}/>
        <Card img="" heading="Navratri Celebration 2024" date="29th May" head="Forging your path" pera="Create great products that will make life easier for you and your colleagues. Thus paving your way." link="Read More" icon={ <FaArrowRight />}/>
        <Card img={Img5} heading="Business" date="18th May" head="How To Start Earning" pera="Create great products that will make life easier for you and your colleagues. Thus paving your way." link="Read More" icon={ <FaArrowRight />}/>
        <Card img={Img6} heading="Finanace" date="19th May" head="Design Startup" pera="Create great products that will make life easier for you and your colleagues. Thus paving your way." link="Read More" icon={ <FaArrowRight />}/>
       
        </div>
      <Pagination/>
      </div>
    </div>
      <div className="w-100" style={{paddingTop:"50px"}}>
          <div className="content1">
          <div className="mini-content1">
          <h1>Get great articles direct to your inbox</h1>
          <p>The latest Move news, articles, and resources, sent straight to your inbox every month.</p>
          <Searchbar/>
          </div>
          </div>
      </div>
      
      <Footer/>
      <SimpleSlider />
    </div>


   
  
  );
}



export default App;

