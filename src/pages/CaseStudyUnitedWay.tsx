                              import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function CaseStudyUnitedWay() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-6">
            <Link 
              to="/services" 
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              ← Back to Services
            </Link>
          </div>
          
          <div className="text-sm text-orange-600 font-medium mb-4">Marketing Analytics</div>
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Nonprofit Marketing Attribution System
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Built a comprehensive marketing analytics system for a major nonprofit organization, enabling cross-domain tracking, 
            conversion funnel analysis, and self-service reporting for the marketing team.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 p-8 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Client</h3>
              <p className="text-gray-600">Major Nonprofit Organization</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Tools Used</h3>
              <p className="text-gray-600">Google Analytics 4, Looker Studio, UTM Tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-8 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-8">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              A major nonprofit organization needed to understand the effectiveness of their marketing efforts across two separate domains: 
              their main website and their donation platform. The marketing team lacked 
              visibility into user journeys, conversion rates, and campaign performance.
            </p>
            <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-medium text-gray-900 mb-4">Key Pain Points:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• No unified view of marketing performance across domains</li>
                <li>• Limited understanding of user conversion funnels</li>
                <li>• Manual, time-intensive reporting processes</li>
                <li>• Inability to track cross-domain user journeys</li>
                <li>• No self-service analytics capabilities for marketing team</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-8">The Solution</h2>
          
          {/* Stage 1 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-medium">1</div>
              <h3 className="text-xl font-medium text-gray-900">E-commerce Analytics Foundation</h3>
            </div>
            <div className="ml-12 space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Established comprehensive tracking for give.uwce.org and Goodworld platform, focusing on 
                acquisition data, e-commerce metrics, and conversion tracking.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">Key Deliverables</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Custom event tracking implementation</li>
                    <li>• KPI dashboard (users, conversion rates, ARPPU)</li>
                    <li>• Purchase funnel analysis with abandonment rates</li>
                    <li>• Looker Studio reporting templates</li>
                    <li>• Marketing team GA training</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">Key Metrics Tracked</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• User conversion rates</li>
                    <li>• Engagement rates and time</li>
                    <li>• Average revenue per paying user</li>
                    <li>• Total revenue by source/medium</li>
                    <li>• Mobile vs desktop performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 2 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-medium">2</div>
              <h3 className="text-xl font-medium text-gray-900">Main Website Analytics</h3>
            </div>
            <div className="ml-12 space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Extended analytics capabilities to uwce.org with focus on non-e-commerce conversions 
                and user journey analysis.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Implementation Details</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Page visit journey goal tracking</li>
                  <li>• CTA click conversion measurement</li>
                  <li>• User funnel exploration with abandonment analysis</li>
                  <li>• Audience segmentation planning</li>
                  <li>• Automated dashboard creation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stage 3 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-medium">3</div>
              <h3 className="text-xl font-medium text-gray-900">Cross-Domain Tracking</h3>
            </div>
            <div className="ml-12 space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Developed system to track user journeys from uwce.org to give.uwce.org, enabling 
                full attribution of marketing efforts.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Technical Implementation</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• UTM parameter passing between domains</li>
                  <li>• Traffic flow differentiation logic</li>
                  <li>• Cross-domain conversion attribution</li>
                  <li>• Unified reporting across both properties</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stage 4 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-medium">4</div>
              <h3 className="text-xl font-medium text-gray-900">Executive Reporting</h3>
            </div>
            <div className="ml-12 space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Created high-level dashboard and one-page reports suitable for board presentations 
                and executive decision-making.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Reporting Solutions</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Executive KPI dashboard with key metrics</li>
                  <li>• One-page summary reports for board meetings</li>
                  <li>• Automated chart generation and updates</li>
                  <li>• Multiple format options (Looker Studio, MS Office)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-8">Results & Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-medium text-gray-900 mb-4">Operational Improvements</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Reduced reporting time from hours to minutes with automated dashboards</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Enabled self-service analytics for marketing team</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Unified view of marketing performance across all channels</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-medium text-gray-900 mb-4">Strategic Insights</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Complete visibility into cross-domain user journeys</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Identified key conversion funnel bottlenecks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Data-driven campaign optimization capabilities</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="font-medium text-gray-900 mb-4">Client Testimonial</h3>
            <blockquote className="text-gray-600 italic leading-relaxed">
              "The analytics system Fitz built transformed how we understand our marketing impact. 
              For the first time, we can see the complete user journey from our website to donations, 
              and our team can now generate reports independently. The cross-domain tracking was 
              exactly what we needed to prove ROI on our marketing investments."
            </blockquote>
            <div className="mt-4 text-sm text-gray-500">
              — Marketing Director, Major Nonprofit Organization
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-8">Technical Implementation</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Tools & Technologies</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Analytics Platform</h4>
                  <p className="text-sm text-gray-600">Google Analytics 4 with custom event tracking and enhanced e-commerce</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Visualization</h4>
                  <p className="text-sm text-gray-600">Google Looker Studio for automated dashboards and reports</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Attribution</h4>
                  <p className="text-sm text-gray-600">UTM parameter tracking and cross-domain measurement</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Key Features Delivered</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-gray-600">
                  <li>• Custom conversion event tracking</li>
                  <li>• Multi-step funnel analysis</li>
                  <li>• Audience segmentation by demographics and behavior</li>
                  <li>• Real-time dashboard monitoring</li>
                </ul>
                <ul className="space-y-2 text-gray-600">
                  <li>• Automated report generation</li>
                  <li>• Cross-domain user journey mapping</li>
                  <li>• Campaign performance attribution</li>
                  <li>• Executive summary reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Need similar marketing analytics insights?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how comprehensive analytics can transform your marketing effectiveness.
          </p>
          <a
            href="mailto:fitz@fitzhaile.com?subject=Interested in marketing analytics!"
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

export default CaseStudyUnitedWay;