import React from 'react'

function Single() {
  return (
    <div>
        <div style={{width:350,margin:'0 auto'}}>
        <form className='list-group'>
            <input className='list-group-item' style={{width:350,margin:'10px 0'}} value={single.name ||''} onChange={(e) => setSingle({...single,name:e.target.value})} type="text" placeholder='Enter full Name..' />
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <input className='list-group-item' style={{width:120,margin:'10px 0'}} value={single.roll ||''} onChange={(e) => setSingle({...single,roll:e.target.value})} type="number" placeholder='Roll:' />
            <input className='list-group-item' style={{width:200,margin:'10px 0'}} value={single.birth ||''} onChange={(e) => setSingle({...single,birth:e.target.value})} type="date" placeholder='Brith Day:' />
            </div>
            <input className='list-group-item' style={{width:350,margin:'10px 0'}} value={single.phone ||''} onChange={(e) => setSingle({...single,phone:e.target.value})} type="number" placeholder='Phone Number' />
           
            <textarea className='list-group-item' style={{width:350}} value={single.address ||''} onChange={(e) => setSingle({...single,address:e.target.value})} id="w3review" name="w3review" rows="4" cols="50" placeholder='Address'/>

            <button  style={{width:80,margin:'10px 0'}} type="button" className="btn btn-info">Add</button>
        </form>
    </div>
    </div>
  )
}

export default Single