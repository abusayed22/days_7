import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { pre_single_state, pre_update_data } from '../../redux/action/action'

function Single() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {id} = useParams()
  const singleInfo = useSelector(state => state.crud.user)
  useEffect(() => {
    dispatch(pre_single_state(id))
  },[])
  const [single,setSingle] = useState({
    name:'',
    roll:'',
    birth:'',
    phone:'',
    address:''
  })
  useEffect(() => {
    if(singleInfo){
      setSingle({...single && singleInfo})
    }
  },[singleInfo])
  
  const updatehandler = () => {
    dispatch(pre_update_data(id,single))
    navigate("/read")
  }
  return (
    <div>
      this single
        <div style={{width:350,margin:'0 auto'}}>
        <form className='list-group'>
            <input className='list-group-item' style={{width:350,margin:'10px 0'}} value={single.name ||''} onChange={(e) => setSingle({...single,name:e.target.value})} type="text" placeholder='Enter full Name..' />
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <input className='list-group-item' style={{width:120,margin:'10px 0'}} value={single.roll ||''} onChange={(e) => setSingle({...single,roll:e.target.value})} type="number" placeholder='Roll:' />
            <input className='list-group-item' style={{width:200,margin:'10px 0'}} value={single.birth ||''} onChange={(e) => setSingle({...single,birth:e.target.value})} type="date" placeholder='Brith Day:' />
            </div>
            <input className='list-group-item' style={{width:350,margin:'10px 0'}} value={single.phone ||''} onChange={(e) => setSingle({...single,phone:e.target.value})} type="number" placeholder='Phone Number' />
           
            <textarea className='list-group-item' style={{width:350}} value={single.address ||''} onChange={(e) => setSingle({...single,address:e.target.value})} id="w3review" name="w3review" rows="4" cols="50" placeholder='Address'/>

            <button onClick={() => updatehandler()} style={{width:80,margin:'10px 0'}} type="button" className="btn btn-info">Add</button>
        </form>
    </div>
    </div>
  )
}

export default Single