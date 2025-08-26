import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function EconomicResearchCaseStudy() {
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
          
          <div className="text-sm text-emerald-600 font-medium mb-4">Economic Research</div>
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Federal Dataset Analysis & Industry Reporting
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Award-winning economic research utilizing comprehensive federal datasets to produce strategic 
            industry analysis reports for government, business, and community leaders.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Role</h3>
              <p className="text-gray-600">Economic Analyst</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">3+ years</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Recognition</h3>
              <p className="text-gray-600">IEDC Award Winner</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-light text-gray-900 mb-6">Project Scope</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Led comprehensive economic research initiatives utilizing multiple federal datasets to produce 
              annual industry analysis reports that informed strategic decision-making for government agencies, 
              business organizations, and community development efforts.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The work required sophisticated data management techniques, rigorous analytical methodologies, 
              and the ability to translate complex economic trends into actionable insights for diverse 
              stakeholder audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Core Responsibilities */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">
            Core Responsibilities
          </h2>

          <div className="space-y-12">
            {/* Research & Analysis */}
            <div className="border-l-4 border-emerald-500 pl-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Annual Economic Analysis Reports</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Authored comprehensive annual reports analyzing economic trends, industry performance, 
                and strategic opportunities to support organizational planning and policy development.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Research Focus Areas</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Regional economic development trends</li>
                    <li>• Industry sector performance analysis</li>
                    <li>• Labor market dynamics and forecasting</li>
                    <li>• Competitive landscape assessment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Strategic Applications</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Policy development support</li>
                    <li>• Investment decision guidance</li>
                    <li>• Resource allocation planning</li>
                    <li>• Economic development strategy</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Stakeholder Engagement */}
            <div className="border-l-4 border-blue-600 pl-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Research Presentation & Dissemination</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Presented published research findings to diverse audiences including government officials, 
                business executives, and community leaders, translating complex data into actionable insights.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Stakeholder Audiences</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                  <div>
                    <div className="font-medium mb-2">Government Leaders</div>
                    <ul className="space-y-1 text-xs">
                      <li>• Policy makers</li>
                      <li>• Economic development agencies</li>
                      <li>• Planning departments</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Business Leaders</div>
                    <ul className="space-y-1 text-xs">
                      <li>• C-suite executives</li>
                      <li>• Strategic planning teams</li>
                      <li>• Investment committees</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Community Leaders</div>
                    <ul className="space-y-1 text-xs">
                      <li>• Nonprofit organizations</li>
                      <li>• Chamber of Commerce</li>
                      <li>• Community development groups</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Management */}
            <div className="border-l-4 border-purple-600 pl-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Federal Dataset Management</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Managed complex private and public datasets from multiple federal agencies, ensuring data 
                integrity, accuracy, and compliance with statistical standards and methodological requirements.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Primary Data Sources</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• <strong>BLS:</strong> Bureau of Labor Statistics</li>
                    <li>• <strong>DOL:</strong> Department of Labor</li>
                    <li>• <strong>ACS:</strong> American Community Survey</li>
                    <li>• <strong>Census:</strong> U.S. Census Bureau</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Data Management Tasks</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Data acquisition and validation</li>
                    <li>• Quality assurance protocols</li>
                    <li>• Statistical methodology compliance</li>
                    <li>• Cross-dataset integration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Recognition */}
            <div className="border-l-4 border-yellow-500 pl-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Professional Recognition</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Received recognition from the International Economic Development Council (IEDC) for 
                innovative research methodologies and contributions to the field of economic analysis.
              </p>
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h4 className="font-medium text-gray-900 mb-3">IEDC Recognition Highlights</h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Innovative methodological approaches to federal dataset analysis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Excellence in translating complex economic data into strategic insights</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Significant contribution to economic development research standards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodological Approach */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">
            Research Methodology
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Data Collection & Validation</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Multi-source federal dataset integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Statistical significance testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Data quality assurance protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Temporal consistency validation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Analysis & Reporting</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Trend analysis and forecasting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Comparative regional analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Industry sector benchmarking</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Strategic recommendation development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">
            Impact & Results
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-light text-emerald-600 mb-2">3+</div>
              <div className="text-gray-600">Years of annual reporting</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-emerald-600 mb-2">Multiple</div>
              <div className="text-gray-600">Federal datasets managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-emerald-600 mb-2">IEDC</div>
              <div className="text-gray-600">Award recognition</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Key Achievements</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Established rigorous methodological standards for federal dataset analysis that became organizational best practices</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Delivered actionable economic insights that informed strategic planning across government and business sectors</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Built sustainable research processes enabling consistent, high-quality annual reporting cycles</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Gained national recognition for innovative approaches to economic development research</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">
            Skills & Data Sources
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full">Economic Analysis</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Federal Datasets</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full">BLS Data</span>
            <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full">DOL Statistics</span>
            <span className="px-4 py-2 bg-slate-100 text-slate-800 rounded-full">ACS Analysis</span>
            <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full">Census Data</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Research Methods</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full">Statistical Analysis</span>
            <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full">Report Writing</span>
            <span className="px-4 py-2 bg-slate-100 text-slate-800 rounded-full">Stakeholder Presentation</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Need comprehensive economic research and analysis?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how federal dataset analysis and strategic economic research can inform your organization's decision-making and planning processes.
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

export default EconomicResearchCaseStudy;