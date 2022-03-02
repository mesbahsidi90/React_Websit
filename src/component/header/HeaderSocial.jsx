import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsDribbble} from 'react-icons/bs';

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/mesbah-sidi-b8a8a817a/' target='_blank' rel='noopener noreferrer'><BsLinkedin/> </a>
        <a href='' target='_blank' rel='noopener noreferrer'><BsGithub/></a>
        <a href='' target='_blank' rel='noopener noreferrer'><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocial