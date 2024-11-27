import Pagination from 'react-bootstrap/Pagination';

function AdvancedExample() {
  return (
    <Pagination style={{paddingTop:"50px",position:"relative",top:"20px",left:"40%",width:"200px"}}>
      {/* <Pagination.First /> */}
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      {/* <Pagination.Ellipsis /> */}

      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
    
      <Pagination.Next />
      {/* <Pagination.Last /> */}
    </Pagination>
  );
}

export default AdvancedExample;