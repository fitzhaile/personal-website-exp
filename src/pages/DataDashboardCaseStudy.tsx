  import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function DataDashboardCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-6">
            <Link 
              to="/services" 
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              ← Back to Services
            </Link>
          </div>
          
          <div className="text-sm text-blue-600 font-medium mb-4">Data Visualization</div>
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Multi-Platform Dashboard & Analytics System
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive dashboard development with taxonomy categorization, data reconciliation, 
            and web metrics implementation for improved organizational decision-making.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Client</h3>
              <p className="text-gray-600">Nonprofit Organization</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Timeline</h3>
              <p className="text-gray-600">8 weeks</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Deliverables</h3>
              <p className="text-gray-600">5 major components</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-light text-gray-900 mb-6">Project Challenge</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The organization needed a comprehensive data visualization and analytics system that could 
              handle multiple data sources, provide meaningful insights through comparative analysis, and 
              support both internal decision-making and external stakeholder reporting.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Key challenges included data quality issues, complex taxonomy categorization requirements, 
              integration across multiple platforms, and the need for both high-level dashboards and 
              detailed analytical capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Components */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">
            Solution Components
          </h2>

          <div className="space-y-12">
            {/* Data Dashboard */}
            <div className="border-l-4 border-blue-600 pl-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Data Dashboard Development</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Created comprehensive dashboards with comparative analysis capabilities and topic-based organization.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Core Features</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Complete chart implementation per existing scope</li>
                    <li>• Population and comparative data analysis</li>
                    <li>• Topic-based dashboard organization</li>
                    <li>• Intuitive navigation system</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Dashboard Categories</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Demographics dashboard</li>
                    <li>• Taxonomy-based views</li>
                    <li>• Landing page recommendations</li>
                    <li>• Future analysis roadmap</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Taxonomy */}
            <div className="border-l-4 border-emerald-500 pl-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Taxonomy Categorization</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Developed systematic approach to translate AIRS taxonomy into actionable organizational categories.
              </p>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Key Achievement</h4>
                <p className="text-gray-700 text-sm">
                  Successfully created AIRS taxonomy translation into safety net and bold goal categories, 
                  enabling better program alignment and impact measurement.
                </p>
              </div>
            </div>

            {/* Data Quality */}
            <div className="border-l-4 border-purple-600 pl-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Data Reconciliation & Quality</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Systematic approach to identify, analyze, and resolve data quality issues across multiple sources.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Process</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Problem identification and documentation</li>
                    <li>• Reconciliation analysis</li>
                    <li>• Stakeholder consultation</li>
                    <li>• Resolution implementation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Outcomes</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Clear documentation of data limitations</li>
                    <li>• Improved data accuracy</li>
                    <li>• Standardized quality processes</li>
                    <li>• Ongoing monitoring framework</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Volunteer Integration */}
            <div className="border-l-4 border-orange-500 pl-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Volunteer Site Integration</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Developed custom pop-up functionality to enhance volunteer engagement through Galaxy Digital integration.
              </p>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Implementation Details</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Created post-registration pop-up system directing volunteers to purchase supporting materials, 
                  including custom imagery, compelling copy, and clear call-to-action.
                </p>
                <div className="text-xs text-orange-600 font-medium">High Priority Delivery</div>
              </div>
            </div>

            {/* Web Metrics */}
            <div className="border-l-4 border-slate-600 pl-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Web Metrics & Analytics</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive web analytics implementation to understand user behavior and optimize engagement.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Acquisition Metrics</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Traffic source analysis</li>
                    <li>• Conversion tracking</li>
                    <li>• URL parameter investigation</li>
                    <li>• User journey mapping</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Engagement Analysis</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Portal usage patterns</li>
                    <li>• Search behavior analysis</li>
                    <li>• Code snippet integration research</li>
                    <li>• Volume threshold assessment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">
            Project Results
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-light text-blue-600 mb-2">5</div>
              <div className="text-gray-600">Major system components delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Data quality issues addressed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-blue-600 mb-2">Multiple</div>
              <div className="text-gray-600">Platform integrations achieved</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Key Outcomes</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Comprehensive dashboard system enabling data-driven decision making across all organizational levels</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Systematic taxonomy categorization improving program alignment and impact measurement</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Enhanced volunteer engagement through strategic integration and targeted messaging</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Robust web analytics providing actionable insights into user behavior and organizational reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">
            Technologies & Methods
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Dashboard Design</span>
            <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full">Data Reconciliation</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full">Taxonomy Mapping</span>
            <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full">Galaxy Digital Integration</span>
            <span className="px-4 py-2 bg-slate-100 text-slate-800 rounded-full">Web Analytics</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">AIRS Standards</span>
            <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full">Comparative Analysis</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full">Quality Assurance</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Ready for your own comprehensive analytics solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how multi-platform dashboard development and data integration can transform your organization's decision-making capabilities.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-4 text-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-block"
            style={{ borderRadius: '3px' }}
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
}

export default DataDashboardCaseStudy;