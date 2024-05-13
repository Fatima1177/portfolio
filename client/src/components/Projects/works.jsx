import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { projectsData } from './data'
import { projectsNav } from './data'
import WorkItems from './workItems'


const Works = () => {
    const [item, setItem] = useState({name: 'all'})
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)

    useEffect(() => {
        if(item.name === 'all'){
            setProjects(projectsData)
        } else{
            const newProjects = projectsData.filter((projects) => {
                return projects.category === item.name
            })
            setProjects(newProjects)
        }
    }, [item])

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent})

    }
    
  return (
    <div className='workBox'>
        <div className="workFilters">
        {projectsNav.map((item,index) =>{
            return(
                <span onClick={(e) =>{
                    handleClick(e, index)
                }} className={`${active === index ? 'activeWork' : ''} workItem`} key={index}>{item.name}</span>
            )
        })}
        </div>

    <div className="workContainer container">
        {projects.map((item)=>{
            return <WorkItems item ={item} key={item.id}/>
        })}
        
    </div>
    </div>
  )
}

export default Works
