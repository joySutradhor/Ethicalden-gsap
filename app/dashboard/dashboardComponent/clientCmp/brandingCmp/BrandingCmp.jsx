// import React from 'react'
// import Topbar from '../../topbar'

// export default function BrandingCmp () {
//   return (
//     <div className='section_space'>
//       <Topbar
//         title='Branding Service'
//         des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
//       />

//       {/* branding services */}
//       <div className='text-white'>
//          <h2>Branding Services</h2>
//       </div>
//     </div>
//   )
// }

'use client'
import React, { useState } from 'react'
import Topbar from '../../topbar'

export default function LogoForm () {
  const [files, setFiles] = useState([])
  const [formData, setFormData] = useState({
    businessName: '',
    tagline: '',
    industry: '',
    services: '',
    targetAudience: '',
    brandWords: '',
    brandValues: '',
    logoMessage: '',
    style: [],
    logoUsage: [],
    logoUsageFeild: '',
    logoVersions: [],
    referanceFile: files,
    brandColors: '',
    avoidColors: '',
    typography: '',
    budget: '',
    deadline: '',
    fileTypes: [],
    needGuideline: '',
    otherNotes: ''
  })

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
          ? [...(prev[name] || []), value]
          : prev[name].filter(v => v !== value)
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleImageChange = async e => {
    const files = Array.from(e.target.files)
    setFiles(files)
    setFormData(prev => ({
      ...prev,
      referanceFile: files
    }))
    console.log('Uploaded files:', files)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(' Submitted Logo Brief:', formData)
  }

  return (
    <div className='section_space'>
      <div>
        <Topbar
          title='Branding Service'
          des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
        />
      </div>
      <form onSubmit={handleSubmit} className='space-y-5 text-white'>
        <h2 className='text-2xl font-semibold mb-4'>Logo Design Brief</h2>

        <div className='grid lg:grid-cols-2 gap-x-5'>
          <div>
            <label htmlFor='businessName' className='block font-medium mb-1'>
              Business or Brand Name
            </label>
            <input
              id='businessName'
              name='businessName'
              onChange={handleChange}
              className='inputForm'
            />
          </div>

          <div>
            <label htmlFor='tagline' className='block font-medium mb-1'>
              Tagline or Slogan
            </label>
            <input
              id='tagline'
              name='tagline'
              onChange={handleChange}
              className='inputForm'
            />
          </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-x-5'>
          <div>
            <label htmlFor='industry' className='block font-medium mb-1'>
              Industry
            </label>
            <input
              id='industry'
              name='industry'
              onChange={handleChange}
              className='inputForm'
            />
          </div>
          <div>
            <label htmlFor='targetAudience' className='block font-medium mb-1'>
              Target Audience
            </label>

            <input
              id='targetAudience'
              name='targetAudience'
              onChange={handleChange}
              className='inputForm'
            />
          </div>
        </div>

        <div>
          <label htmlFor='services' className='block font-medium mb-1'>
            What products or services do you offer?
          </label>
          <textarea
            id='services'
            name='services'
            onChange={handleChange}
            className='textareaForm'
          />
        </div>

        <div>
          <label htmlFor='brandValues' className='block font-medium mb-1'>
            Brand Values or Mission
          </label>
          <textarea
            id='brandValues'
            name='brandValues'
            onChange={handleChange}
            className='textareaForm'
          />
        </div>

        <div>
          <label htmlFor='brandWords' className='block font-medium mb-1'>
            Describe your brand in 3–5 words
          </label>
          <input
            id='brandWords'
            name='brandWords'
            onChange={handleChange}
            className='inputForm'
          />
        </div>

        <div>
          <label htmlFor='logoMessage' className='block font-medium mb-1'>
            What feeling or message should your logo convey?
          </label>
          <textarea
            id='logoMessage'
            name='logoMessage'
            onChange={handleChange}
            className='textareaForm'
          />
        </div>

        <div className='grid  '>
          <div>
            <label className='block font-medium mb-1'>
              What style fits your brand?
            </label>
            {[
              'Minimal',
              'Vintage',
              'Modern',
              'Bold',
              'Elegant',
              'Playful',
              'Geometric',
              'Hand-drawn'
            ].map(style => (
              <label key={style} className='block'>
                <input
                  type='checkbox'
                  name='style'
                  value={style}
                  onChange={handleChange}
                />{' '}
                {style}
              </label>
            ))}
            <input
              name='style'
              placeholder='Other style'
              onChange={handleChange}
              className='inputForm'
            />
          </div>

          <div>
            <label className='block font-medium mb-1'>
              Where will the logo be used?
            </label>
            {[
              'Website',
              'Social Media',
              'Print Materials',
              'Packaging',
              'Merchandise',
              'Signage'
            ].map(item => (
              <label key={item} className='block'>
                <input
                  type='checkbox'
                  name='logoUsage'
                  value={item}
                  onChange={handleChange}
                />{' '}
                {item}
              </label>
            ))}
            <input
              name='logoUsageFeild'
              placeholder='Other usage'
              onChange={handleChange}
              className='inputForm'
            />
          </div>

          <div>
            <label className='block font-medium mb-1'>
              Do you need different versions?
            </label>
            {[
              'Icon-only',
              'Horizontal layout',
              'Vertical layout',
              'Black & white version'
            ].map(version => (
              <label key={version} className='block'>
                <input
                  type='checkbox'
                  name='logoVersions'
                  value={version}
                  onChange={handleChange}
                />{' '}
                {version}
              </label>
            ))}
            <input
              name='logoVersions'
              placeholder='Other version'
              onChange={handleChange}
              className='inputForm'
            />
          </div>

          <div>
            <label className='block font-medium mb-1'>
              Logo file types needed:
            </label>
            {['PNG', 'JPEG', 'SVG', 'AI', 'PDF', 'EPS'].map(type => (
              <label key={type} className='block'>
                <input
                  type='checkbox'
                  name='fileTypes'
                  value={type}
                  onChange={handleChange}
                />{' '}
                {type}
              </label>
            ))}
            <input
              name='fileTypes'
              placeholder='Other file types'
              onChange={handleChange}
              className='inputForm'
            />
          </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-x-5 '>
          <div>
            <label htmlFor='brandColors' className='block font-medium mb-1'>
              Preferred Brand Colors
            </label>
            <input
              id='brandColors'
              name='brandColors'
              onChange={handleChange}
              className='inputForm'
            />
          </div>

          <div>
            <label htmlFor='avoidColors' className='block font-medium mb-1'>
              Colors to Avoid
            </label>
            <input
              id='avoidColors'
              name='avoidColors'
              onChange={handleChange}
              className='inputForm'
            />
          </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-5'>
          <div>
            <label htmlFor='typography' className='block font-medium mb-1'>
              Preferred fonts or typography styles
            </label>

            <input
              id='typography'
              name='typography'
              onChange={handleChange}
              className='inputForm'
            />
          </div>

          {/* <div>
          <label htmlFor='existingLogo' className='block font-medium mb-1'>
            Do you already have a logo?
          </label>
          <select
            id='existingLogo'
            name='existingLogo'
            onChange={handleChange}
            className='inputForm'
          >
            <option className='bg-black' value=''>
              Select
            </option>
            <option className='bg-black' value='update'>
              Yes, I want to update it
            </option>
            <option className='bg-black' value='new'>
              No, I need a new design
            </option>
          </select>
        </div> */}

          <div>
            <label htmlFor='budget' className='block font-medium mb-1'>
              What is your budget?
            </label>
            <input
              id='budget'
              name='budget'
              onChange={handleChange}
              className='inputForm'
            />
          </div>

          <div>
            <label htmlFor='deadline' className='block font-medium mb-1'>
              What is your desired timeline or deadline?
            </label>
            <input
              id='deadline'
              type='date'
              name='deadline'
              onChange={handleChange}
              className='inputForm text-white'
            />
          </div>

          <div>
            <label htmlFor='needGuideline' className='block font-medium mb-1'>
              Do you need a brand guideline or usage manual?
            </label>
            <select
              id='needGuideline'
              name='needGuideline'
              onChange={handleChange}
              className='inputForm'
            >
              <option className='bg-[#111]' value=''>
                Select
              </option>
              <option className='bg-[#111]' value='Yes'>
                Yes
              </option>
              <option className='bg-[#111]' value='No'>
                No
              </option>
              <option className='bg-[#111]' value='Not sure yet'>
                Not sure yet
              </option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor='otherNotes' className='block font-medium mb-1'>
            Anything else you'd like us to know?
          </label>
          <textarea
            id='otherNotes'
            name='otherNotes'
            onChange={handleChange}
            className='textareaForm'
          />
        </div>

        <div>
          <label htmlFor='referanceFile' className='block font-medium mb-1'>
            Upload your Files here ?
          </label>
          <input
            id='referanceFile'
            type='file'
            multiple
            name='referanceFile'
            onChange={handleImageChange}
            className='inputForm text-white'
          />
        </div>

        <button
          type='submit'
          className='mt-4 px-6 py-2 bg-black text-white rounded-md'
        >
          Submit
        </button>
      </form>
    </div>
  )
}
