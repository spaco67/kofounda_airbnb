import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  subject: Yup.string()
    .required('Required'),
  message: Yup.string()
    .min(10, 'Message too short')
    .required('Required'),
})

export default function Contact() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
              <p className="mt-2 text-gray-600">
                Have a question or need support? We're here to help.
              </p>
            </div>

            <Formik
              initialValues={{
                name: '',
                email: '',
                subject: '',
                message: '',
              }}
              validationSchema={ContactSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                // In a real app, you'd send this to your backend
                console.log(values)
                setTimeout(() => {
                  alert('Message sent successfully!')
                  setSubmitting(false)
                  resetForm()
                }, 500)
              }}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <Field
                      name="name"
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-airbnb focus:ring-airbnb sm:text-sm"
                      placeholder="Your name"
                    />
                    {errors.name && touched.name && (
                      <div className="mt-1 text-sm text-red-600">{errors.name}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-airbnb focus:ring-airbnb sm:text-sm"
                      placeholder="your@email.com"
                    />
                    {errors.email && touched.email && (
                      <div className="mt-1 text-sm text-red-600">{errors.email}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <Field
                      name="subject"
                      as="select"
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-airbnb focus:ring-airbnb sm:text-sm"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="booking">Booking Issue</option>
                      <option value="hosting">Hosting Question</option>
                    </Field>
                    {errors.subject && touched.subject && (
                      <div className="mt-1 text-sm text-red-600">{errors.subject}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Field
                      name="message"
                      as="textarea"
                      rows={4}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-airbnb focus:ring-airbnb sm:text-sm"
                      placeholder="Your message here..."
                    />
                    {errors.message && touched.message && (
                      <div className="mt-1 text-sm text-red-600">{errors.message}</div>
                    )}
                  </div>

                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex justify-center rounded-lg border border-transparent bg-airbnb py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-airbnb focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-6 text-center shadow">
              <div className="text-xl font-semibold text-gray-900">Email Us</div>
              <p className="mt-2 text-gray-600">support@airbnb.com</p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow">
              <div className="text-xl font-semibold text-gray-900">Call Us</div>
              <p className="mt-2 text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow">
              <div className="text-xl font-semibold text-gray-900">Office</div>
              <p className="mt-2 text-gray-600">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
