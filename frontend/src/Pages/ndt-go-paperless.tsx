import React from 'react';

export default function NDTGoPaperless() {

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Status Badge */}
          <div className="mb-8 flex justify-center md:justify-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
              <span className="flex h-2 w-2 rounded-full bg-green-600 animate-pulse"></span>
              <span className="text-sm font-semibold text-green-700 tracking-wide">
                PILOT STUDY PHASE
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                NDT GO
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                  PAPERLESS
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Digitizing NDT workflows for better data integrity and efficiency.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4 justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                    <span className="text-green-600 font-semibold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Real-Time Data Capture</h3>
                    <p className="text-sm text-slate-600">Streamline inspection workflows</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                    <span className="text-green-600 font-semibold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Data Integrity & Compliance</h3>
                    <p className="text-sm text-slate-600">Secure, auditable records</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                    <span className="text-green-600 font-semibold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Enhanced Efficiency</h3>
                    <p className="text-sm text-slate-600">Reduce manual documentation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Why NDT Go Paperless?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Transform your non-destructive testing operations with digital-first workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '📊',
              title: 'Advanced Analytics',
              description:
                'Leverage real-time data insights to optimize inspection processes and identify trends.',
            },
            {
              icon: '🔒',
              title: 'Security & Compliance',
              description:
                'Meet industry standards with encrypted, auditable records and role-based access controls.',
            },
            {
              icon: '⚡',
              title: 'Increased Productivity',
              description:
                'Reduce administrative overhead and focus on what matters—quality inspections.',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-green-300 hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Project Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Project Lead</h3>
              <p className="text-slate-300">Rohith J S</p>
              <p className="text-sm text-slate-400 mt-2">Digital Transformation Officer</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Contact Email</h3>
              <p className="text-slate-300 break-all">jsrohith07@gmail.com</p>
              <p className="text-sm text-slate-400 mt-2">Response within 24 hours</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Phone Number</h3>
              <p className="text-slate-300">+91 8431438031</p>
              <p className="text-sm text-slate-400 mt-2">Available for inquiries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center md:text-left">
              © 2026 NDT Go Paperless Initiative. All rights reserved.
            </p>
            <p className="text-center md:text-right font-semibold text-slate-300">
              Digital Transformation 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
