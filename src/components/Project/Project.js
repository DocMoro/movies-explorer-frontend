import './Project.scss';

export default function Project({project}) {
  const {name, link} = project;

  return (
    <li className='project'>
      <a className='project__link link' href={link}>
        <h4 className='project__name'>{name}</h4>
        <div className='project__image'></div>
      </a>
    </li>
  )
}