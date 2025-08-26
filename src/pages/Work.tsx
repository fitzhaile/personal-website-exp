  import { Link } from 'react-router-dom';

function Work() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
            Case studies & work
          </h1>
          <p className="text-xl text-gray-500 mb-8">
            Real projects, real results. Explore how I've helped organizations transform their data into actionable insights and strategic advantages.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study - Nonprofit */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="text-sm text-orange-600 font-medium mb-2">Marketing Analytics</div>
                <Link to="/work/united-way-marketing-analytics">
                  <h3 className="text-xl font-medium text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                    Nonprofit Marketing Attribution System
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Built comprehensive marketing analytics system for a major nonprofit, tracking user journeys across two domains with custom conversion funnels and automated reporting dashboards.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Google Analytics 4</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Looker Studio</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">UTM Tracking</span>
                </div>
                <Link 
                  to="/work/united-way-marketing-analytics"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View case study →
                </Link>
              </div>
            </div>

            {/* Case Study - Data Dashboard */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">Data Visualization</div>
                <Link to="/work/data-dashboard-analytics">
                  <h3 className="text-xl font-medium text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                    Multi-Platform Dashboard & Analytics System
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Comprehensive dashboard development with taxonomy categorization, data reconciliation, and web metrics implementation for improved organizational decision-making.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Dashboard Design</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Data Reconciliation</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Web Analytics</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Taxonomy</span>
                </div>
                <Link 
                  to="/work/data-dashboard-analytics"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View case study →
                </Link>
              </div>
            </div>

            {/* Case Study - Economic Research */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="text-sm text-emerald-600 font-medium mb-2">Economic Research</div>
                <Link to="/work/economic-research-analysis">
                  <h3 className="text-xl font-medium text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                    Federal Dataset Analysis & Industry Reporting
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Award-winning economic research utilizing federal datasets to produce strategic industry analysis reports for government and business leaders.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Federal Datasets</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Economic Analysis</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Research Methods</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Strategic Reporting</span>
                </div>
                <Link 
                  to="/work/economic-research-analysis"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View case study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            Ready to create your own success story?
          </h2>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            Let's discuss how data analysis can drive meaningful results for your organization.
          </p>
          <a
            href="mailto:fitz@fitzhaile.com?subject=Interested in connecting!"
            className="bg-blue-600 text-white px-8 py-4 text-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-block"
            style={{ borderRadius: '3px' }}
          >
            Start a conversation
          </a>
        </div>
      </section>
    </div>
  );
}

export default Work;