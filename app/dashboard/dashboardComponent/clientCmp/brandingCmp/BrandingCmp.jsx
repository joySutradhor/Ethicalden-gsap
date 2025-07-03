'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import useAuthInfo from '../../hooks/useAuthInfo'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function BrandingCmp () {
  const { register, handleSubmit } = useForm()
  const [files, setFiles] = useState([])
  const { token } = useAuthInfo()

  const handleImageChange = async e => {
    const files = Array.from(e.target.files)
    setFiles(files)
  }

  const onSubmit = async data => {
    
    // Construct FormData
    const formData = new FormData()
    formData.append('service', 'Website Design')
    formData.append('question_set', JSON.stringify(data)) 

    files.forEach(file => {
      formData.append('project_assets', file)
    })

    // Show SweetAlert confirmation
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to submit this form?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, submit it!',
      cancelButtonText: 'Cancel'
    })

    if (result.isConfirmed) {
      try {
        const response = await axios.post(
          'https://api.clientservice.mrshakil.com/api/client_service_questionaries/',
          formData,
          {
            headers: {
              Authorization: `Token ${token}`
            }
          }
        )
        Swal.fire('Success!', 'Form submitted successfully.', 'success')
        console.log(response.data)
      } catch (error) {
        Swal.fire('Error!', 'Something went wrong during submission.', 'error')
        console.error(error)
      }
    } else {
      Swal.fire('Cancelled', 'Form submission was cancelled.', 'info')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='text-white grid lg:grid-cols-2 gap-5'
    >
      <label className='service-form-label'>
        What is your company name?
        <input {...register('companyName')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        What is your tagline or slogan (if any)?
        <input {...register('tagline')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Briefly describe your business:
        <textarea {...register('businessDescription')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        What are your primary products or services?
        <textarea {...register('productsServices')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Who is your target audience?
        <input {...register('targetAudience')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        What are your core brand values?
        <input {...register('brandValues')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        What makes your business unique?
        <textarea {...register('uniqueSellingPoint')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        What tone or personality should your brand convey? (e.g., fun,
        professional, bold)
        <input {...register('brandPersonality')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Are there any colors you want included or avoided in your branding?
        <input {...register('colorPreferences')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Are there any fonts you like or dislike?
        <input {...register('fontPreferences')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Do you have an existing logo or brand material? (Y/N and link if
        applicable)
        <input {...register('existingAssets')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Who are your competitors?
        <textarea {...register('competitors')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Are there brands you admire or want to emulate? (list and explain why)
        <textarea {...register('inspirationBrands')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        What branding materials do you need? (e.g., logo, business cards, social
        media)
        <input {...register('brandingNeeds')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Any additional notes or requests for your branding?
        <textarea {...register('additionalNotes')} className='inputForm' />
      </label>

      <div>
        <label
          htmlFor='referanceFile'
          className='block  mb-1 text-sm font-medium mt-5'
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
  )
}
