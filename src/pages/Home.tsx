                                  import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-20 md:pt-32 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Leverage your data for <span className="text-blue-600 font-medium">smarter decision making</span>
            </h1>
            <p className="text-xl text-gray-500 mb-8 max-w-3xl">
              I help organizations transform data into strategic insights, optimize performance, and inform critical business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-medium transition-colors text-center"
                style={{ borderRadius: '3px' }}
              >
                Start the conversation
              </Link>
              <button 
                className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 font-medium transition-colors"
                style={{ borderRadius: '3px' }}
              >
                View my work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Diverse expertise and experience
            </h2>
            <div className="w-16 h-1 bg-blue-600"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className="space-y-12">
              <div className="border-l-4 border-blue-600 pl-8">
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Data Analysis & Consulting</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  3+ years providing strategic insights through industry analysis, campaign measurement, 
                  and performance optimization for organizations seeking data-driven growth.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Donor segmentation and sector analysis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Google Analytics implementation and optimization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Interactive Tableau dashboard development</span>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-emerald-500 pl-8">
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Economic Research</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Creating comprehensive industry reports and managing complex datasets 
                  from federal sources including BLS, DOL, ACS, and Census data.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Economic and industry trend analysis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Federal dataset management and processing</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Research methodology and validation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              <div className="border-l-4 border-gray-300 pl-8">
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Content Systems & Management</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Managing content engineering teams and building systems to organize, 
                  structure, and deliver information across multiple platforms and languages.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Content management system development</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Multi-platform content organization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Cross-functional team coordination</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Let's work together</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ready to unlock insights from your data? I'd love to learn about your challenges 
                  and explore how we can work together.
                </p>
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 text-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-block text-center"
                >
                  Start the conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              A strategic approach to data
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Every organization has unique challenges. I work closely with teams to understand 
              context, identify opportunities, and build sustainable solutions.
            </p>
          </div>

          {/* Image placeholder between intro and steps */}
          <div className="mb-16">
            <img 
              src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2" 
              alt="Top view of a laptop, charts, and resume on a wooden desk, showcasing business analysis and job application"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900">Discover</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Understanding your business context, current data landscape, and strategic objectives 
                  to identify the highest-impact opportunities.
                </p>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-blue-600">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Business Assessment</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Current state analysis</li>
                        <li>• Stakeholder interviews</li>
                        <li>• Goal alignment</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Data Audit</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Source identification</li>
                        <li>• Quality assessment</li>
                        <li>• Gap analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-start gap-12">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900">Analyze</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Applying rigorous analytical methods to extract meaningful insights and patterns 
                  that inform strategic decision-making.
                </p>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-8 rounded-lg border-l-4 border-emerald-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Statistical Analysis</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Trend identification</li>
                        <li>• Correlation analysis</li>
                        <li>• Predictive modeling</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Visualization</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Interactive dashboards</li>
                        <li>• Executive reporting</li>
                        <li>• Data storytelling</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900">Optimize</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Building sustainable systems and processes that enable continuous improvement 
                  and long-term strategic advantage.
                </p>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-8 rounded-lg border-l-4 border-slate-600">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Implementation</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Process automation</li>
                        <li>• System integration</li>
                        <li>• Performance monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Continuous Improvement</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Regular reviews</li>
                        <li>• Strategy refinement</li>
                        <li>• Team training</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-white mb-8">
            Ready to unlock your data's potential?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Let's discuss how strategic data analysis can drive your organization forward.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-4 text-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-block"
          >
            Start the conversation
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;