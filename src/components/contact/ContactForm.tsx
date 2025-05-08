import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify'; // <-- updated import
import axios from 'axios';
import { useServices } from '../../hooks/useServices';
import { Loader } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
} 

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { services, loading: servicesLoading } = useServices();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      serviceInterest: services && services.length > 0 ? services[0].title : ''
    }
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/inquiries`,
        data
      );

      if (response.data.success) {
        toast.success('Your inquiry has been submitted successfully!');
        reset();
      } else {
        toast.error('Failed to submit your inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      if (axios.isAxiosError(error) && error.response?.data?.error) {
        const errorMessage = Array.isArray(error.response.data.error)
          ? error.response.data.error.join('. ')
          : error.response.data.error;
        toast.error(errorMessage);
      } else {
        toast.error('An unexpected error occurred. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" /> {/* Changed from top-center to top-right */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="form-label">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            placeholder="Your full name"
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters long'
              }
            })}
          />
          {errors.name && (
            <p className="form-error">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="form-label">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Your email address"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Please enter a valid email address'
              }
            })}
          />
          {errors.email && (
            <p className="form-error">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="form-label">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            className="form-input"
            placeholder="Your phone number"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                message: 'Please enter a valid phone number'
              }
            })}
          />
          {errors.phone && (
            <p className="form-error">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="serviceInterest" className="form-label">
            Service Interest <span className="text-red-500">*</span>
          </label>
          <select
            id="serviceInterest"
            className="form-input"
            {...register('serviceInterest', {
              required: 'Please select a service'
            })}
          >
            {servicesLoading ? (
              <option value="">Loading services...</option>
            ) : (
              <>
                {services && services.length > 0 ? (
                  services.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))
                ) : (
                  <option value="">No services available</option>
                )}
              </>
            )}
          </select>
          {errors.serviceInterest && (
            <p className="form-error">{errors.serviceInterest.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="form-label">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            className="form-input min-h-32"
            placeholder="Tell us about your educational needs or questions"
            rows={6}
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters long'
              }
            })}
          ></textarea>
          {errors.message && (
            <p className="form-error">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full rounded-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader className="h-5 w-5 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Inquiry'
          )}
        </button>
      </form>
    </>
  );
};

export default ContactForm;