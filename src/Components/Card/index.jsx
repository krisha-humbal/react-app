import React from 'react'

// const Card = ({name,sub1,sub2,sub3,sub4,sub5}) => {
//     console.log();
    
//     return (
//         <div className="card">
//             <td>{name}</td>
//             <td>{sub1}</td>
//             <td>{sub2}</td>
//             <td>{sub3}</td>
//             <td>{sub4}</td>
//             <td>{sub5}</td>

//         </div>
//     )
// }

// export default Card

const Card = ({img,heading,date,head}) => {
    console.log();
    
    return (
        <div className="card">
            <img src={img} alt="" />
            <div className="card-data"><p>{heading}</p><span>{date}</span></div>
            <div className="card-heading"><h1>{head}</h1></div>
        </div>
    )
}

export default Card
