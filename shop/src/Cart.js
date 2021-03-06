import React from "react";
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';

function Cart(props){
    return (
      <div>
        <Table responsive>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
          { props.state.map((a,i)=>{
            return (
            <tr key={i}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.quan}</td>
              <td>
                <button onClick={()=>{ props.dispatch({ type : '수량증가'+i }) }}> + </button>
                <button onClick={()=>{ props.dispatch({ type : '수량감소'+i }) }}> - </button>
              </td>
            </tr>
            )
          })  }
        </Table>

        { props.alertstate === true
            ? (<div className="my-alert2">
                    <p>Test 200200</p>
                    <button onClick={() => { props.dispatch({ type: 'alert닫기'}) }}>닫기</button>
                </div>)
            : null
        }
        
      </div>
    )
  }

  function state를props화(state){
      console.log(state);
    return {
      state : state.reducer,
      alertstate : state.reducer2
    }
  }
  
  export default connect(state를props화)(Cart);