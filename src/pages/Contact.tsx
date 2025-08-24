  function Contact() {
  return (
    <div className="page page--contact">
      {/* Hero Section */}
      <section className="hero">
        <div className="section">
          <div className="hero__content">
            <h1 className="hero__title">Let's start a conversation</h1>
            <p className="hero__text">
              Ready to explore how data can drive your organization forward? I'd love to learn about your challenges and discuss how we can work together.
            </p>
            <div className="hero__actions">
              <a
                href="mailto:fitz@fitzhaile.com?subject=Interested in connecting!"
                className="button"
              >
                Send me an email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-lg border border-gray-200">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Send a message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>
              
              {/* Note about form functionality */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> To make this form functional, you can integrate with services like 
                  <a href="https://netlify.com/products/forms/" className="underline ml-1" target="_blank" rel="noopener noreferrer">Netlify Forms</a>, 
                  <a href="https://formspree.io/" className="underline ml-1" target="_blank" rel="noopener noreferrer">Formspree</a>, or 
                  <a href="https://typeform.com/" className="underline ml-1" target="_blank" rel="noopener noreferrer">Typeform</a>.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your organization name"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a project type</option>
                    <option value="data-analysis">Data Analysis & Insights</option>
                    <option value="visualization">Visualization & Reporting</option>
                    <option value="analytics-setup">Analytics Implementation</option>
                    <option value="consulting">Strategic Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                    placeholder="Tell me about your project, challenges, or questions..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-6">Get in touch</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  I'm always interested in hearing about new projects and challenges. 
                  Whether you're looking for a quick consultation or a comprehensive analysis, 
                  let's discuss how I can help.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 mb-2">The best way to reach me for project inquiries.</p>
                    <a 
                      href="mailto:fitz@fitzhaile.com?subject=Interested in connecting!"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      fitz@fitzhaile.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Response Time</h3>
                    <p className="text-gray-600">
                      I typically respond to inquiries within 24 hours during business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600">
                      Based in the United States, working with clients globally via remote collaboration.
                    </p>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-4">What to expect</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Initial consultation to understand your needs and challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Project scope and timeline discussion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Transparent pricing and clear deliverables</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Regular updates throughout the project</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Common questions about working together and my process.
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                What types of projects do you typically work on?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I work on a variety of data analysis projects including campaign performance measurement, 
                donor segmentation, Google Analytics implementation, Tableau dashboard development, 
                and strategic consulting for data-driven decision making.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                How long do projects typically take?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Project timelines vary based on scope and complexity. Simple analyses might take 1-2 weeks, 
                while comprehensive dashboard development or strategic consulting engagements can take 4-8 weeks. 
                I'll provide a clear timeline during our initial consultation.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Do you work with organizations of all sizes?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes, I work with organizations ranging from small nonprofits to large enterprises. 
                My approach is tailored to each organization's specific needs, resources, and goals.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                What information should I include in my initial inquiry?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Include details about your organization, the challenges you're facing, what you hope to achieve, 
                and any relevant context about your current data situation. The more information you provide, 
                the better I can understand how to help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;