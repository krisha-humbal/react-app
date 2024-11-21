import React from 'react'

const Student = ({val}) => {
    // let val = data
const total=val.sub1+val.sub2+val.sub3+val.sub4+val.sub5
const per=(total)*100/500
let grade=0
if(per>80 && per<=95){
    grade="A"
}
else if(per>75 && per<=80)
{
    grade="B"
}
else{
    grade="F"
}
    return (
        <tr >
            <td>{val.name}</td>
            <td>{val.sub1}</td>
            <td>{val.sub2}</td>
            <td>{val.sub3}</td>
            <td>{val.sub4}</td>
            <td>{val.sub5}</td>
            <td>{total}</td>
            <td>{per}</td>
            <td>{grade}</td>
        </tr>
    )
}

export default Student
