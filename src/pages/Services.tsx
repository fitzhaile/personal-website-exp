                import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-20 md:pt-32 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              What I can do for you
            </h1>
            <p className="text-xl text-gray-500 mb-8 max-w-3xl">
              From campaign analysis to performance dashboards, I offer targeted solutions 
              that address your specific data challenges and business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-medium transition-colors text-center"
                style={{ borderRadius: '3px' }}
              >
                Let's discuss your project
              </Link>
              <button 
                className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 font-medium transition-colors"
                style={{ borderRadius: '3px' }}
              >
                View service details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Data Analysis & Insights */}
            <div className="bg-white p-10 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Data Analysis & Insights</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Deep-dive analysis of your existing data to uncover patterns, trends, and actionable insights 
                that inform strategic planning and operational improvements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Campaign performance measurement</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Donor segmentation and behavior analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Industry benchmarking and competitive analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Statistical modeling and forecasting</span>
                </li>
              </ul>
            </div>

            {/* Visualization & Reporting */}
            <div className="bg-white p-10 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Visualization & Reporting</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transform complex data into clear, compelling visual stories that communicate 
                key insights to stakeholders and support data-driven decision making.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Interactive Tableau dashboards</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Executive summary reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Automated reporting systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Data storytelling and presentation</span>
                </li>
              </ul>
            </div>

            {/* Analytics Implementation */}
            <div className="bg-white p-10 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Analytics Implementation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Set up and optimize analytics tools and tracking systems to ensure you're 
                capturing the right data to measure what matters most to your organization.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Google Analytics setup and configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Custom tracking and event implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Data collection strategy and audit</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Performance measurement frameworks</span>
                </li>
              </ul>
            </div>

            {/* Strategic Consulting */}
            <div className="bg-white p-10 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Strategic Consulting</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Work with your team to develop data-driven strategies, establish measurement 
                frameworks, and build organizational capacity for ongoing analytical excellence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Data strategy development</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">KPI identification and measurement</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Team training and capacity building</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Process optimization and workflow design</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              How we'll work together
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Every project is different, but here's the general approach I take to ensure 
              we deliver meaningful results that align with your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-light text-white">1</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Discovery & Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                We'll start with a conversation about your challenges, goals, and current data landscape 
                to define the scope and approach for your project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-light text-white">2</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Analysis & Development</h3>
              <p className="text-gray-600 leading-relaxed">
                I'll dive into your data, conduct the analysis, and build the dashboards, reports, 
                or systems needed to address your specific requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-light text-white">3</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Delivery & Support</h3>
              <p className="text-gray-600 leading-relaxed">
                You'll receive your completed deliverables along with documentation and training 
                to ensure your team can effectively use and maintain the solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-white mb-8">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Let's discuss your specific needs and how I can help you achieve your data goals.
          </p>
          <a
            href="mailto:fitz@fitzhaile.com?subject=Let's get in touch."
            className="bg-blue-600 text-white px-8 py-4 text-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-block"
          >
            Let's talk about your project
          </a>
        </div>
      </section>
    </div>
  );
}

export default Services;