import React from 'react'

function Read() {
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

          {/* {allusers && allusers.map((obj) => ( */}

              <tr >
              <th scope="row">{}</th>

              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>
                <div style={{display:'flex',justifyContent:'center'}}>
                <button  className='btn btn-danger btn-sm ' style={{marginLeft:'5px',width:60,color:'#fff'}}>Delete</button>
                <button  style={{marginLeft:'5px',width:50,color:'#fff'}} className='btn btn-info btn-sm'>Edit</button>
                </div>
              </td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
        
    </div>
    </div>
  )
}

export default Read