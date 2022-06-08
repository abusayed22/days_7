import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { pre_add_data } from '../../redux/action/action'

function Add() {
  const dispatch = useDispatch()
  const [add,setAdd] = useState({
    name:'',
    roll:'',
    birth:'',
    phone:'',
    address:''
  })

  const updatehandler = () => {
    dispatch(pre_add_data(add))
    setAdd({
      name:'',
      roll:'',
      birth:'',
      phone:'',
      address:''
    })
  }
  return (
    <div style={{width:350,margin:'0 auto'}}>
        <form className='list-group'>
            <input className='list-group-item' style={{width:350,margin:'10px 0'}} value={add.name ||''} onChange={(e) => setAdd({...add,name:e.target.value})} type="text" placeholder='Enter full Name..' />
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <input className='list-group-item' style={{width:120,margin:'10px 0'}} value={add.roll ||''} onChange={(e) => setAdd({...add,roll:e.target.value})} type="number" placeholder='Roll:' />
            <input className='list-group-item' style={{width:200,margin:'10px 0'}} value={add.birth ||''} onChange={(e) => setAdd({...add,birth:e.target.value})} type="date" placeholder='Brith Day:' />
            </div>
            <input className='list-group-item' style={{width:350,margin:'10px 0'}} value={add.phone ||''} onChange={(e) => setAdd({...add,phone:e.target.value})} type="number" placeholder='Phone Number' />
           
            <textarea className='list-group-item' style={{width:350}} value={add.address ||''} onChange={(e) => setAdd({...add,address:e.target.value})} id="w3review" name="w3review" rows="4" cols="50" placeholder='Address'/>

            <button onClick={() => updatehandler()} style={{width:80,margin:'10px 0'}} type="button" className="btn btn-info">Add</button>
        </form>
    </div>
  )
}

export default Add