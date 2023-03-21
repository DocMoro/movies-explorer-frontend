import './Portfolio.scss';

import Project from '../Project/Project';

import { PROJECTS } from '../../utils/constans';

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__list'>
        {PROJECTS.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </ul>
    </div>
  )
}