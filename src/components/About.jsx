import React from 'react'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor'

import { MyData } from '../data/dummy'
import { Header } from '../components'
import avatar from '../data/me.jpg'

const About = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header  title="About myself & The Project" />
      <div className='flex-auto'>
        <div className='image_container float-left mr-6'>
          <img src={avatar}/>
        </div>
        <MyData  className='float-right'/>
      </div>
    </div>
  )
}

export default About