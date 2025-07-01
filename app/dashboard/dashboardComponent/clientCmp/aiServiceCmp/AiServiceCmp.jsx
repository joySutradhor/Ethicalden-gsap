'use client'

import React, { useState } from 'react'

const AiServiceCmp = () => {
  const [files, setFiles] = useState([])
  const [formData, setFormData] = useState({
    companyName: '',
    businessDescription: '',
    productsServices: '',
    businessGoal: '',
    aiProblems: '',
    aiGoals: '',
    aiOutcome: '',
    currentAITools: '',
    dataTypes: '',
    dataStorage: '',
    compliance: '',
    platforms: '',
    hasDevTeam: '',
    integrationMethod: ''
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
    console.log('🧠 Submitted Form Data:', formData)
    console.log(files)
  }

  const questions = [
    {
      label: 'What is the name of your company?',
      name: 'companyName',
      placeholder: 'e.g., Ethical Den'
    },
    {
      label: 'Please describe your business in a few sentences.',
      name: 'businessDescription',
      placeholder: 'Brief business summary'
    },
    {
      label: 'What are your main products or services?',
      name: 'productsServices',
      placeholder: 'List your main services'
    },
    {
      label: 'What is your primary business goal in the next 6–12 months?',
      name: 'businessGoal',
      placeholder: 'e.g., Grow 30% revenue'
    },
    {
      label: 'What specific problems are you trying to solve using AI?',
      name: 'aiProblems',
      placeholder: 'e.g., Reduce support workload'
    },
    {
      label: 'What are your goals with this AI project? ',
      name: 'aiGoals',
      placeholder: 'e.g., Automate tasks'
    },
    {
      label:
        "Is there a specific outcome or metric you'd like to improve with AI?",
      name: 'aiOutcome',
      placeholder: 'e.g., Improve accuracy'
    },
    {
      label: 'Do you currently use any AI or machine learning tools? ',
      name: 'currentAITools',
      placeholder: 'e.g., ChatGPT, none'
    },
    {
      label: 'What kind of data do you collect or have access to? ',
      name: 'dataTypes',
      placeholder: 'e.g., Images, text data'
    },
    {
      label:
        'Is your data stored in a database, spreadsheet, cloud storage, etc.?',
      name: 'dataStorage',
      placeholder: 'e.g., Cloud, sheets'
    },
    {
      label:
        'Are there any data privacy or compliance regulations we need to be aware of (e.g., GDPR, HIPAA)?',
      name: 'compliance',
      placeholder: 'e.g., GDPR, none'
    },
    {
      label: 'What platforms or technologies are you currently using?',
      name: 'platforms',
      placeholder: 'e.g., AWS, HubSpot'
    },
    {
      label: 'Do you have an internal development or IT team?',
      name: 'hasDevTeam',
      placeholder: 'No'
    },
    {
      label: 'What is your preferred integration method for AI solutions?',
      name: 'integrationMethod',
      placeholder: 'e.g., API, dashboard'
    }
  ]

  return (
    <div className=' text-white'>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='grid lg:grid-cols-2 gap-5'>
          {questions.map(({ label, name, placeholder }) => (
            <div>
              <label>{label}</label>
              <input
                key={name}
                name={name}
                value={formData[name]}
                placeholder={placeholder}
                onChange={handleChange}
                className='inputForm'
              />
            </div>
          ))}
        </div>

        <div>
          <label
            htmlFor='referanceFile'
            className='block  text-sm font-medium mb-1'
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

        <button
          type='submit'
          className='mt-4 px-6 py-2 bg-[#a8ff57] text-black rounded-md'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AiServiceCmp
