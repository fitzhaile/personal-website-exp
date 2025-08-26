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
              <Link
                to="/work"
                className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 font-medium transition-colors text-center"
                style={{ borderRadius: '3px' }}
              >
                View my work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Turn data into decisions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Organizations generate more data than ever, but struggle to extract actionable insights. 
              I help bridge that gap with strategic analysis and clear reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Insight */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Strategic Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Uncover patterns and trends in your data that reveal opportunities for growth, 
                optimization, and competitive advantage.
              </p>
            </div>

            {/* Clarity */}
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Clear Communication</h3>
              <p className="text-gray-600 leading-relaxed">
                Transform complex analysis into compelling visual stories that stakeholders 
                understand and can act upon immediately.
              </p>
            </div>

            {/* Action */}
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Actionable Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Deliver practical recommendations and automated systems that enable 
                your team to make data-driven decisions confidently.
              </p>
            </div>
          </div>

          {/* Featured Outcome */}
          <div className="mt-16 bg-white p-8 rounded-lg border border-gray-200">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-medium text-gray-900 mb-4">
                  Real impact for real organizations
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Recently helped a major nonprofit implement comprehensive marketing analytics 
                  across two domains, enabling cross-platform user journey tracking and 
                  automated reporting that reduced manual work from hours to minutes.
                </p>
                <Link 
                  to="/work"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  See the full case study →
                </Link>
              </div>
              <div className="lg:w-1/3 text-center">
                <div className="text-3xl font-light text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Self-service reporting capability</div>
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