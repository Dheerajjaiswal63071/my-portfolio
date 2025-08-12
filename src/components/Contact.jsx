import React, { useState, useRef } from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { useTheme } from '../context/ThemeContext'

const Contact = () => {
  const { isDarkMode } = useTheme();
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // EmailJS credentials
    const serviceId = 'service_7czz19s'
    const templateId = 'template_1jvc6l8'
    const publicKey = 'pbie4yLys_xuKjHV7'

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('SUCCESS!', result.text)
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      }, (error) => {
        console.log('FAILED...', error.text)
        setSubmitStatus('error')
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'} py-20 transition-colors duration-300`} id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>I'm open to discussing web development projects</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:dheerajjaiswal63071@gmail.com" className='hover:underline'>
                    dheerajjaiswal63071@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>+6307169806</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                <span>street, city, province, country</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form ref={form} onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full p-2 rounded border focus:outline-none focus:border-green-400 transition-colors duration-300 ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                      placeholder='Enter Your Name'
                      required
                    />
                </div>
                <div>
                    <label htmlFor="email" className='block mb-2'>Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-2 rounded border focus:outline-none focus:border-green-400 transition-colors duration-300 ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                      placeholder='Enter Your Email'
                      required
                    />
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full p-2 rounded border focus:outline-none focus:border-green-400 transition-colors duration-300 ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                      rows="5"
                      placeholder='Enter Your Message'
                      required
                    />
                </div>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="text-green-400 text-sm">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="text-red-400 text-sm">
                    Failed to send message. Please try again or contact me directly.
                  </div>
                )}
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                  transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full
                  disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact