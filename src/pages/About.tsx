              import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-20 md:pt-32 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Hi, I'm Fitz
            </h1>
            <p className="text-xl text-gray-500 mb-8 max-w-3xl">
              I'm passionate about helping organizations see their work more clearly through data, bringing 15+ years of experience to complex data challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-medium transition-colors text-center"
                style={{ borderRadius: '3px' }}
              >
                Start a conversation
              </Link>
              <button 
                className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 font-medium transition-colors"
                style={{ borderRadius: '3px' }}
              >
                View my experience
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              My journey with data
            </h2>
            <div className="w-16 h-1 bg-blue-600 mb-8"></div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <img 
                src="/fitz-headshot.jpg" 
                alt="Professional headshot of Fitz"
                className="w-32 h-32 object-cover rounded-lg shadow-lg float-left mr-6 mb-4"
              />
              
              <p>
                My career has taken me from economic research with federal datasets to engineering 
                management at SurveyMonkey, and now to independent consulting. Each role has deepened 
                my appreciation for how the right analysis can illuminate paths forward.
              </p>
              <p>
                What drives me is the moment when complex data becomes a clear story—when numbers 
                transform into actionable insights that help organizations make confident decisions 
                and achieve their missions more effectively.
              </p>
              <p>
                I've worked with nonprofits optimizing fundraising campaigns, research organizations 
                managing massive datasets, and technology companies building content systems at scale. 
                The common thread is always the same: turning information into understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Professional background
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              A diverse career path that brings together analytical rigor, technical expertise, 
              and strategic thinking.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Data Analysis & Consulting */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Data Analysis & Strategic Consulting</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                Providing analytical expertise to organizations across sectors, focusing on campaign 
                optimization, performance measurement, and strategic planning through data-driven insights.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Tableau</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Google Analytics</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Campaign Analysis</span>
              </div>
            </div>

            {/* Economic Research */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Economic Research & Analysis</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                Creating comprehensive industry reports using federal datasets from BLS, DOL, ACS, 
                and Census sources. Developing methodologies for analyzing economic trends.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Federal Datasets</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Research Methods</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">IEDC Award</span>
              </div>
            </div>

            {/* Technology Leadership */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Technology & Engineering Leadership</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                Leading content engineering teams and building systems to manage complex workflows 
                at enterprise scale in fast-paced technology environments.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full">Team Leadership</span>
                <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full">System Architecture</span>
                <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full">Process Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-white mb-8">
            Let's work together
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            I'd love to learn about your data challenges and explore how we can work together 
            to unlock new insights for your organization.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-4 text-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-block"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;