import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-20 md:pt-32 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Services & Work
            </h1>
            <p className="text-xl text-gray-500 mb-8 max-w-3xl">
              From campaign analysis to performance dashboards, I offer targeted solutions 
              that address your specific data challenges. Here's what I do and how I've helped others.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-medium transition-colors text-center"
                style={{ borderRadius: '3px' }}
              >
                Let's discuss your project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 1: Marketing Analytics */}
      <section className="bg-gray-50 pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-4xl font-light text-gray-900">Marketing Analytics & Attribution</h2>
            </div>
            <div className="w-16 h-1 bg-orange-600 mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              Track user journeys, measure campaign effectiveness, and optimize marketing performance 
              with comprehensive analytics systems that provide actionable insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Cross-domain tracking and user journey mapping</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Conversion funnel analysis and optimization</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Automated reporting dashboards</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Campaign performance measurement</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Team training for self-service analytics</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Google Analytics implementation and optimization</span>
              </div>
            </div>
            
            {/* Case Study Example */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm text-orange-600 font-medium">Real Example</span>
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">Nonprofit Marketing Attribution System</h4>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                Built comprehensive marketing analytics system for a major nonprofit, tracking user journeys 
                across two domains with automated reporting dashboards.
              </p>
              <Link 
                to="/work/united-way-marketing-analytics"
                className="text-orange-600 hover:text-orange-700 font-medium text-sm"
              >
                Read full case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Data Visualization & Dashboards */}
      <section className="bg-white pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h2 className="text-4xl font-light text-gray-900">Data Visualization & Dashboards</h2>
            </div>
            <div className="w-16 h-1 bg-blue-600 mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              Transform complex data into clear, actionable insights with interactive dashboards, 
              comprehensive reporting systems, and data integration across multiple platforms.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Interactive dashboard development</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Multi-platform data integration</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Data quality assessment and reconciliation</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Taxonomy mapping and categorization</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Executive reporting and visualization</span>
              </div>
            </div>

            {/* Case Study Example */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm text-blue-600 font-medium">Real Example</span>
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">Multi-Platform Dashboard & Analytics System</h4>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                Comprehensive dashboard development with taxonomy categorization, data reconciliation, 
                and web metrics implementation across multiple platforms.
              </p>
              <Link 
                to="/work/data-dashboard-analytics"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Read full case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Economic Research & Analysis */}
      <section className="bg-gray-50 pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-4xl font-light text-gray-900">Economic Research & Analysis</h2>
            </div>
            <div className="w-16 h-1 bg-emerald-600 mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              Comprehensive industry analysis using federal datasets to produce strategic reports, 
              interactive dashboards, and data visualizations that inform decision-making for 
              government agencies, businesses, and community organizations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Federal dataset analysis and management</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Industry trend analysis and forecasting</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Interactive dashboards and data visualization</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Strategic report writing and presentation</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Research methodology development</span>
              </div>
            </div>

            {/* Case Study Example */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm text-emerald-600 font-medium">Real Example</span>
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">Federal Dataset Analysis & Industry Reporting</h4>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                Award-winning economic research utilizing comprehensive federal datasets to produce strategic 
                industry analysis reports for government, business, and community leaders.
              </p>
              <Link 
                to="/work/economic-research-analysis"
                className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
              >
                Read full case study →
              </Link>
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
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-4 text-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-block"
            style={{ borderRadius: '3px' }}
          >
            Let's talk about your project
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;