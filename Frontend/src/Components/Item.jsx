import React from 'react'

const Item = ({Links, title}) => {
  return (
    <ul>
      <h1 className='mb-3 text-xl '>{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-gray-400 hover:text-white duration-300
          text-md cursor-pointer leading-loose "
            href={link.link}
          >
            {link.name} 
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Item
