import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { pre_delete_data, pre_get_data } from '../../redux/action/action';

function Read() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const getUsers = useSelector(state => state.crud.users);
  useEffect(() => {
    dispatch(pre_get_data())
  },[getUsers])

  const deletehandler = (id) => {
    dispatch(pre_delete_data(id))
  }

  return (
    <div>
         <center><h1 style={{margin:'30px auto'}}>All Students</h1></center>
        <div style={{width:800,margin:'0 auto'}}>
        
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Roll</th>
              <th scope="col">Name</th>
              <th scope="col">Brith</th>
              <th scope="col">Contact</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
        <tbody>

          {getUsers && getUsers.map((obj) => (

              <tr key={obj.id}>
              <th scope="row">{obj.roll}</th>

              <td>{obj.name}</td>
              <td>{obj.birth}</td>
              <td>{obj.phone}</td>
              <td>{obj.address}</td>
              <td>
                <div style={{display:'flex',justifyContent:'center'}}>
                <button onClick={() => deletehandler(obj.id)} className='btn btn-danger btn-sm ' style={{marginLeft:'5px',width:60,color:'#fff'}}>Delete</button>
                <button onClick={() =>(navigate(`/single/${obj.id}`))} style={{marginLeft:'5px',width:50,color:'#fff'}} className='btn btn-info btn-sm'>Edit</button>
                </div>
              </td>
            </tr>
             ))} 
          </tbody>
        </table>
        
    </div>
    </div>
  )
}

export default Read