import React from 'react'

const ProjectsAll = ({ params } ) => {
  return (
    <div>
      <h1>Project {params.all}</h1><br />
      All Routes
      {params.all.map((p) => (
        <li key={p}>{ p}</li>
      )) }
    </div>
  )
}

export default ProjectsAll