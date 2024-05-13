import React from 'react'


const WorkItems = ({item}) => {

  return (
    <div className='workCard' key={item.id}>
        <img src={item.img} className='workImg'/>
        <h3 className='workTitle'>{item.title}</h3>
        <a href="#" className='workButton'>Demo 
            <i className='bx bx-right-arrow-alt workButtonIcon'></i>
        </a>
      
    </div>
  )
}

export default WorkItems
