'use client'

import React, { useState } from 'react'

const fields = [
  {
    label: 'Company/Project Name',
    name: 'companyName',
    placeholder: 'Your company name'
  },
  {
    label: 'Contact Person Name and Role',
    name: 'contactPerson',
    placeholder: 'John Doe, PM'
  },
  {
    label: 'Brief description of your business or project',
    name: 'projectDescription',
    placeholder: 'Short summary'
  },
  {
    label: 'What product or service do you offer?',
    name: 'productService',
    placeholder: 'Describe briefly'
  },
  {
    label: 'What is the primary goal of this UI/UX design project?',
    name: 'primaryGoal',
    placeholder: 'Redesign dashboard'
  },
  {
    label: 'What problem are you trying to solve with this design?',
    name: 'problemToSolve',
    placeholder: 'Improve usability'
  },
  {
    label: 'Who are your primary target users?',
    name: 'targetUsers',
    placeholder: 'e.g., Small businesses'
  },
  {
    label: 'What actions should users be able to take on the product?',
    name: 'userActions',
    placeholder: 'Sign up, search'
  },
  {
    label:
      'Are there any specific business goals this design should help achieve?',
    name: 'businessGoals',
    placeholder: 'Increase conversions'
  },
  {
    label: 'Do you currently have a product/interface or is this from scratch?',
    name: 'existingProduct',
    placeholder: 'Redesign / New'
  },
  {
    label:
      'If redesigning, what issues are you facing with the current design?',
    name: 'currentIssues',
    placeholder: 'Outdated UI'
  },
  {
    label: 'Do you have existing brand guidelines (colors, fonts, logo)?',
    name: 'brandGuidelines',
    placeholder: 'Yes / No'
  },
  {
    label: 'What platform(s) will the design be for?',
    name: 'platforms',
    placeholder: 'e.g., Web, iOS'
  },
  {
    label: 'How many pages/screens do you anticipate?',
    name: 'pageCount',
    placeholder: 'e.g., 8–10 screens'
  },
  {
    label: 'Do you need responsive design?',
    name: 'responsiveDesign',
    placeholder: 'Yes / No'
  },
  {
    label: 'Are there any design styles you like?',
    name: 'designStyle',
    placeholder: 'Modern, Minimal'
  },
  {
    label: 'Apps/websites you like and why?',
    name: 'designExamples',
    placeholder: 'List links or names'
  },
  {
    label: 'Are there any styles or colors you want to avoid?',
    name: 'avoidStyles',
    placeholder: 'Optional'
  },
  {
    label: 'Do you have a preferred color scheme?',
    name: 'colorScheme',
    placeholder: 'Optional'
  },
  {
    label: 'Will you provide the content for the design?',
    name: 'hasContent',
    placeholder: 'Yes / No'
  },
  {
    label: 'Need help with copywriting or content?',
    name: 'needCopyHelp',
    placeholder: 'Yes / No'
  },
  {
    label: 'Do you have a logo and other branding assets?',
    name: 'hasLogo',
    placeholder: 'Yes / No'
  },
  {
    label: 'Must-have features?',
    name: 'mustHaveFeatures',
    placeholder: 'Search, Login, Contact'
  },
  {
    label: 'Any third-party integrations?',
    name: 'thirdParty',
    placeholder: 'Stripe, Google Maps'
  },
  {
    label: 'Special accessibility features?',
    name: 'accessibility',
    placeholder: 'Screen reader, etc.'
  },
  {
    label: 'Desired project completion date?',
    name: 'completionDate',
    placeholder: 'e.g., July 30, 2025'
  },
  {
    label: 'Specific budget or range?',
    name: 'budget',
    placeholder: 'e.g., $1,500–$3,000'
  }
]

export default function UiuxCmp () {
  const [files, setFiles] = useState([])
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    projectDescription: '',
    productService: '',
    primaryGoal: '',
    problemToSolve: '',
    targetUsers: '',
    userActions: '',
    businessGoals: '',
    existingProduct: '',
    currentIssues: '',
    brandGuidelines: '',
    platforms: '',
    pageCount: '',
    responsiveDesign: '',
    designStyle: '',
    designExamples: '',
    avoidStyles: '',
    colorScheme: '',
    hasContent: '',
    needCopyHelp: '',
    hasLogo: '',
    mustHaveFeatures: '',
    thirdParty: '',
    accessibility: '',
    completionDate: '',
    budget: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageChange = async e => {
    const files = Array.from(e.target.files)
    setFiles(files)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('🎨 UI/UX Project Form Data:', formData)
    console.log('🎨 UI/UX Project Form Data:', files)
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='space-y-5 grid lg:grid-cols-2 gap-5 text-white'
      >
        {fields.map((field, index) => (
          <div key={index} className='flex flex-col'>
            <label className='text-sm font-medium mb-1'>{field.label}</label>
            <input
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className='p-2 border border-white/10 rounded text-sm bg-white/10 text-white placeholder:text-white/40'
            />
          </div>
        ))}

        <div>
          <label
            htmlFor='referanceFile'
            className='block  mb-1 text-sm font-medium'
          >
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

        <div>
          <button
            type='submit'
            className='mt-4 px-6 py-2 bg-[#a8ff57] text-black rounded-md inline-block '
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
