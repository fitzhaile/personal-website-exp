import { Link } from "react-router-dom";

function About() {
  return (
    <div className="page page--about">
      {/* Hero Section */}
      <section className="hero">
        <div className="section">
          <div className="hero__content">
            <h1 className="hero__title">Hi, I'm Fitz</h1>
            <p className="hero__text">
              I'm passionate about helping organizations see their work more clearly through data, bringing 15+ years of experience to complex data challenges.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="button">
                Start a conversation
              </Link>
              <button className="button button--secondary">
                View my experience
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                My journey with data
              </h2>
              <div className="w-16 h-1 bg-blue-600 mb-8"></div>
              <div className="space-y-6 text-gray-600 leading-relaxed">
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
            <div>
              <img 
                src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2" 
                alt="Professional workspace with data analysis materials"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
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

          <div className="space-y-12">
            {/* Current Role */}
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/4">
                <div className="text-sm font-medium text-blue-600 mb-2">2021 - Present</div>
                <div className="text-lg font-medium text-gray-900">Independent Consultant</div>
              </div>
              <div className="lg:w-3/4">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Data Analysis & Strategic Consulting</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Providing analytical expertise to organizations across sectors, with a focus on campaign 
                  optimization, performance measurement, and strategic planning through data-driven insights.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Tableau</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Google Analytics</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Campaign Analysis</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Strategic Planning</span>
                </div>
              </div>
            </div>

            {/* SurveyMonkey */}
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/4">
                <div className="text-sm font-medium text-blue-600 mb-2">2018 - 2021</div>
                <div className="text-lg font-medium text-gray-900">SurveyMonkey</div>
              </div>
              <div className="lg:w-3/4">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Engineering Manager, Content Systems</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Led content engineering teams responsible for organizing and delivering information 
                  across 17 languages. Built systems to manage complex content workflows and ensure 
                  consistent user experiences at enterprise scale.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">Team Leadership</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">System Architecture</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">Content Management</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">Process Optimization</span>
                </div>
              </div>
            </div>

            {/* Economic Research */}
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/4">
                <div className="text-sm font-medium text-blue-600 mb-2">2015 - 2018</div>
                <div className="text-lg font-medium text-gray-900">Economic Research</div>
              </div>
              <div className="lg:w-3/4">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Economic Analyst</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Created comprehensive industry reports using federal datasets from BLS, DOL, ACS, 
                  and Census sources. Developed methodologies for analyzing economic trends and 
                  presenting complex findings to diverse stakeholders.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Economic Analysis</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Federal Datasets</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Research Methods</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Report Writing</span>
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