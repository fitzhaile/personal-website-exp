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

      {/* Featured Case Study */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm text-orange-600 font-medium">Marketing Analytics</span>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-500">Featured Project</span>
              </div>
              
              <Link to="/work/united-way-marketing-analytics">
                <h2 className="text-3xl font-light text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                  Nonprofit Marketing Attribution System
                </h2>
              </Link>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Built comprehensive marketing analytics system for a major nonprofit, tracking user journeys across two domains with custom conversion funnels and automated reporting dashboards. The project involved implementing cross-domain tracking, creating automated reporting systems, and training the marketing team for self-service analytics.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Google Analytics 4</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Looker Studio</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">UTM Tracking</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Cross-domain Analytics</span>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-500">
                  4 integrated stages • 2 domains unified • 100% self-service capability
                </div>
                <Link 
                  to="/work/united-way-marketing-analytics"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read full case study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light text-gray-900 mb-8">More case studies coming soon</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm text-blue-600 font-medium">Data Analysis</span>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">In Progress</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Economic Research & Federal Data Analysis</h3>
              <p className="text-gray-600 text-sm">Comprehensive industry analysis using BLS, DOL, ACS, and Census data for strategic decision-making.</p>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-6 py-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm text-emerald-600 font-medium">Process Optimization</span>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">Planned</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Content Management System Development</h3>
              <p className="text-gray-600 text-sm">Multi-platform content organization and cross-functional team coordination system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
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