import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Mail, Linkedin, ArrowRight, Briefcase, Calendar, FileText, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Zenith Analysis Solutions Ltd. | Business Analysis & Consulting',
  description:
    'Zenith Analysis Solutions Ltd. delivers robust business analysis and consulting services. Over 20 years of experience working with software houses, government bodies, financial services, and UK and European banks.',
  alternates: {
    canonical: 'https://www.zenith-as.co.uk/analysis',
  },
};

const clients = [
  { name: 'Saffery LLP', id: 'saff', img: '/analysis/Saffery.png' },
  { name: 'HSBC', id: 'hsbc', img: '/analysis/HSBC.jpg' },
  { name: 'Amsterdam Trade Bank', id: 'atb', img: '/analysis/ATB.png' },
  { name: 'Old Mutual Wealth', id: 'omw', img: '/analysis/OMW.jpg' },
  { name: 'Prudential', id: 'pru', img: '/analysis/Pru.png' },
  { name: 'Legal & General', id: 'landg', img: '/analysis/L&G.png' },
  { name: 'HMRC Aspire (Cap Gemini)', id: 'cap', img: '/analysis/CAP.png' },
  { name: 'Friends Life', id: 'fl', img: '/analysis/FL.jpg' },
  { name: 'SEI', id: 'sei', img: '/analysis/SEI.png' },
  { name: 'Openwork', id: 'ow', img: '/analysis/OW.png' },
  { name: 'Redland Business Solutions', id: 'redland', img: '/analysis/Redland.png' },
];

const assignments = [
  {
    id: 'saff',
    client: 'Saffery LLP',
    period: 'May 2022 to April 2025',
    projects: [
      {
        title: 'Practice and Finance Management Solution procurement',
        dates: 'May 2022 to April 2023',
        description:
          'Initially I was brought in to run the tender process for the selection of a new Practice and Finance Management Solution. This involved gathering firm-wide requirements, engaging at all levels of the firm, researching the market for suitable systems and then evaluating each option to arrive at the best solutions. I also ran a second smaller RFP to source an Expenses and AP solution.',
      },
      {
        title: 'Practice and Finance Management Solution implementation',
        dates: 'April 2023 to April 2025',
        description:
          'I managed the early stages of the project to deliver Elite 3E and Chrome River into the business. This involved gathering a broad team of stakeholders, organising and running workshops, managing vendor relations and reporting to steering and the management board. In the latter stages I focussed more on the user acceptance and change management aspects, defining To Be processes and building out User Guides across the business.',
      },
    ],
  },
  {
    id: 'atb',
    client: 'Amsterdam Trade Bank',
    period: 'January 2021 to April 2022',
    projects: [
      {
        title: 'Digital Finance Transformation',
        dates: 'Jan 2021 to April 2022',
        description:
          'Product Owner for the transformation of a legacy Finance domain to a Digital solution. Moving from on-premise aging systems and manual processing to SaaS/RaaS solutions, including MS Dynamics 365 F&O, Abacus 360 (BearingPoint) and Tableau.',
      },
    ],
  },
  {
    id: 'hsbc',
    client: 'HSBC',
    period: 'July 2017 to March 2020',
    projects: [
      {
        title: 'Discretionary Portfolio Management System',
        dates: 'Jan 2019 to March 2020',
        description:
          'Requirements management for a complex project, building a bespoke Portfolio Management System, working closely with the Asset Management business and also embedded with the external Consultancy Agile Scrum team. Specifically tasked with documenting the algorithms which were the core of the system, supporting functions such as Rebalance, Re-optimisation, Tax Harvesting plus further complex, gain-laden portfolio management techniques.',
      },
      {
        title: 'Private Bank - Retail Banking Transformation',
        dates: 'July 2018 to Jan 2019',
        description:
          'Feasibility phase for a Digital update project for HSBC Private Bank to implement top tier retail products and systems to service the transaction banking capability of their wealthy Clients. Heavily involved in understanding Retail Business impacts, developing a TOM, eliciting Business Requirements, As Is/To Be process flows, organising IT and business costs, determining risk appetites, engaging multiple areas of the business for buy-in and approval. This also involved translating complex Enterprise IT challenges at differing levels for various tiers of management.',
      },
      {
        title: 'Report Writing Enhancements',
        dates: 'July 2017 to July 2018',
        description:
          'Working to transform the report writing culture for Wealth Advisers. Initially this involved sourcing a report writing tool working with procurement using RFP and RFI processes, followed by root cause analysis to determine cultural and procedural issues around report creation. Working with multiple departments (Compliance, Risk, Distribution, Sales Quality) to develop initiatives and achieve governance approval.',
      },
    ],
  },
  {
    id: 'omw',
    client: 'Old Mutual Wealth',
    period: 'March 2017 to June 2017',
    projects: [
      {
        title: 'Managed Separation - Treasury',
        dates: 'March 2017 to June 2017',
        description:
          'Worked within the Managed Separation programme defining As Is and To Be business processes for the Treasury department. Dealing with the transition of group functions across to the wealth entity and liaising with both parties to ensure a smooth implementation. The following business functions were involved: FX Trades, FX Forwards, Inter-company Loans, Counterparty Reporting, Money Market Trades.',
      },
    ],
  },
  {
    id: 'pru',
    client: 'Prudential',
    period: 'October 2015 to February 2017',
    projects: [
      {
        title: 'Part VII Transfer',
        dates: 'October 2015 to September 2016',
        description:
          'Working closely with the business to define requirements for Outgoing Mailing (4.5m), Incoming Calls, Close Down. Also working closely with the 3rd Party Call Centre to define call handling processes and changes to their call handling system.',
      },
      {
        title: 'Matching Adjustment Hypothecation - Solvency II',
        dates: 'September 2016 to February 2017',
        description:
          'Leading the analysis work on a high-profile project aimed at reducing the Working Day timetable for MAH by 2 days. Working closely with Actuarial SMEs, Risk Team and VBA Developers to define requirements and solutions in order to deliver the required efficiencies.',
      },
    ],
  },
  {
    id: 'redland',
    client: 'Redland Business Solutions',
    period: 'January 2015 to October 2015',
    projects: [
      {
        title: 'T&C Implementation',
        dates: 'January 2015 to May 2015',
        description:
          'Organised and ran multiple configuration workshops for the implementation of Insight T&C for a major bank (Santander UK), working with the Santander Training & Competency team to understand their processes and configure the system accordingly.',
      },
      {
        title: 'SM&CR System design',
        dates: 'May 2015 to October 2015',
        description:
          'Acted as Product Owner and Regulatory expert for a new Insight module designed to meet the new Individual Accountability Regulatory Regime in the banking sector (Senior Managers Regime, Certification Regime, Conduct Rules).',
      },
    ],
  },
  {
    id: 'pru2',
    client: 'Prudential',
    period: 'January 2014 to January 2015',
    projects: [
      {
        title: 'SIEM Implementation',
        dates: 'January 2014 to January 2015',
        description:
          'Zenith were part of the project team for the implementation of a SIEM solution, the Dell Secureworks Security Operations Centre (SOC), working with the Information Risk & Security department within Pru UK. Specific responsibilities included; definition of business processes to support the SOC, working closely with technical architects to define an end-to-end solution, working with Dell analysts to support launch and liaising with testers to support UAT. Also defined traceability from initial audit points all the way through to Test Cases and Acceptance Criteria. Also asked to complete requirements, business process and traceability artefacts for other projects in the programme, as our approach was very robust and highly valued by the business.',
      },
    ],
  },
  {
    id: 'sei',
    client: 'SEI',
    period: 'November 2013 to January 2014',
    projects: [
      {
        title: 'Wealth Platform Implementation',
        dates: 'November 2013 to January 2014',
        description:
          'In this role Zenith were involved in the early stages of a major transformation project for the HSBC High Net Worth sales force, who were implementing the SEI global wealth platform with an additional large scale Front Office build. We were instrumental in planning and facilitating multiple requirements workshops to feed the development backlog, focussing on a complex Needs Analysis module utilising a stochaf modelling engine. Zenith were also key in building relationships with US personnel at SEI HQ and at the offshore development site in India.',
      },
    ],
  },
  {
    id: 'fl',
    client: 'Friends Life',
    period: 'May 2013 to November 2013',
    projects: [
      {
        title: 'Finance Platform Integration',
        dates: 'May 2013 to November 2013',
        description:
          'For this role Zenith Analysis led a small team of analysts liaising between Finance Operations and a Wrap Platform provider (FNZ) in order to implement a revised bank account structure, improved General Ledger functionality and enhanced MI. Following programme governance, we produced requirements documents at various levels following joint workshops and reviewing resulting User Stories. We were also involved with UAT planning (including defect triage using Quality Centre), Business Readiness and Process re-engineering (BPMN).',
      },
    ],
  },
  {
    id: 'cap',
    client: 'HMRC Aspire (Cap Gemini)',
    period: 'April 2012 to May 2013',
    projects: [
      {
        title: 'Charity Gift Aid SAP FICO implementation',
        dates: 'April 2012 to May 2013',
        description:
          'For this exciting, high-profile project, Zenith were working on End to End Requirements Management for a large enterprise-wide Government project; implementing a SAP FICO core system with integrations to e-Portal, paper Scanning system, Third Party submissions, complex anti-fraud Rules Engine, Data Warehouse and MIS capability.',
      },
    ],
  },
  {
    id: 'ow',
    client: 'Openwork',
    period: 'October 2011 to March 2012',
    projects: [
      {
        title: 'Wrap Platform implementation',
        dates: 'October 2011 to March 2012',
        description:
          'Zenith worked on the Wrap Strategy Programme within Openwork, leading a team of Business Analysts and SMEs, being first point of contact for the software development team (Figure Out) and tasked with developing the Agile (Scrum) approach for the analysis stage, leading the other analysts through the associated processes.',
      },
    ],
  },
  {
    id: 'landg',
    client: 'Legal & General',
    period: 'March 2011 to October 2011',
    projects: [
      {
        title: 'CRM and POS implementation',
        dates: 'March 2011 to October 2011',
        description:
          'Working on the RDR Programme for L&G with responsibility for the deployment and configuration of a new CRM and point of sale system (Intelligent Office provided by Intelliflo) into their Employed Sales Force and Mortgage Network. Regarded as the system expert within the team and regularly asked to provide demonstrations to all areas of the business, from Directors to Advisers.',
      },
    ],
  },
];

const skillGroups = [
  {
    title: 'Project Methodologies',
    items: ['Agile', 'Waterfall', 'BPMN', 'SDLC', 'SSADM', 'RUP'],
  },
  {
    title: 'Project Software',
    items: ['MS Office', 'Visio', 'JIRA', 'Confluence', 'Balsamiq', 'Rational Rose'],
  },
  {
    title: 'Business Skills',
    items: [
      'Stakeholder Management',
      'TOM & Process Engineering',
      'Problem Solving',
      'Root Cause Analysis',
      'Team Leading',
      'Requirements Management',
    ],
  },
];

const caseStudyBoxes = [
  {
    label: 'Business Problem Statement',
    text: '"We need to replace our existing discretionary portfolio system with a bespoke solution using complex trading algorithms."',
    highlight: true,
  },
  { label: 'Step 1', text: 'Define the breadth of the algorithm types (Rebalancing, Re-optimisation, Tax Harvesting, Gain Laden Modelling)' },
  { label: 'Step 2', text: 'Understand the depth of the algorithms (Sells, Cash Restore, Buys)' },
  {
    label: 'Stakeholder Statement',
    text: 'There is only one person I know of who can define the business requirements for this system and he\'s not available',
    highlight: true,
  },
  { label: 'Step 3', text: 'Define a set of documents and diagrams to meet the challenge (Algorithmic flow diagrams, Modelling illustrators, detailed rule logic)' },
  { label: 'Step 4', text: 'Determine the simplest, thinnest vertical scenario (Overweight Portfolio -> Rebalancing sells)' },
  {
    label: 'Initial Goal',
    text: 'Prove to the stakeholders within 4 weeks that robust analysis techniques will allow Zenith Analysis to elicit and define the requirements',
    highlight: true,
  },
  { label: 'Step 5', text: 'Present enough deliverables to prove the concept' },
  {
    label: 'Result',
    text: 'Stakeholder buy-in, which meant that the business were then fully engaged in the business analysis process',
    highlight: true,
  },
];

export default function AnalysisPage() {
  return (
    <main>
      {/* Hero / Header */}
      <section className="relative bg-[#0f2244] pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#0ea5c8]/8 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#0ea5c8]/6 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-[#0ea5c8]/15 text-[#0ea5c8] text-xs font-semibold px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5c8] animate-pulse" />
                Business Analysis &amp; Consulting
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Zenith Analysis Solutions Ltd.
              <br />
              <span className="text-[#0ea5c8]">Delivering robust business solutions</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Providing a pragmatic approach to analysis and problem solving, Zenith Analysis have worked with a large
              number of diverse organisations; ranging across software houses, government bodies, financial service
              companies and, more recently, UK and European banks.
            </p>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section id="profile" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-8">Profile</h2>
          <div className="max-w-4xl space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              With over 20 years experience of Business Analysis, Zenith are now in a position where they are able to
              walk into any business scenario and quickly evaluate the approach required to deliver the desired analysis
              outcomes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Zenith Analysis have developed a core tool set of diagrams and documentation standards which are flexible
              enough to be applied to any project and methodology; from Waterfall to fully Agile, from blue sky system
              design to process re-engineering. These techniques are also adaptable enough to fit within the differing
              governance standards of companies, as demonstrated over the last 14 years of business.
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="font-bold text-[#0f2244] mb-4 text-lg">
                The complex scenarios which we have been involved in during this time, include:
              </h3>
              <ul className="space-y-3">
                {[
                  'Charity Gift Aid Anti-fraud rule base',
                  'Security Information & Event Management process engineering',
                  'SM&CR regulatory system design',
                  'Matching Adjustment Hypothecation (Solvency II) process and data flows',
                  'Discretionary Portfolio Asset Management system design and delivery',
                  'Digital Finance Transformation (General Ledger and Regulatory Reporting)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              For our bookkeeping services, please visit our sister site{' '}
              <Link href="/" className="text-[#0ea5c8] font-semibold hover:underline">
                here
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-8">Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client) => (
              <a
                key={client.id}
                href={`/analysis#${client.id}`}
                className="group bg-white rounded-2xl border border-gray-100 p-8 flex items-center justify-center shadow-sm hover:shadow-xl hover:shadow-[#0f2244]/8 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative w-full h-24 flex items-center justify-center">
                  <Image
                    src={client.img}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Assignments */}
      <section id="assignments" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12">Assignments</h2>

          <div className="space-y-16">
            {assignments.map((assignment) => (
              <div key={assignment.id} id={assignment.id} className="scroll-mt-20">
                {/* Client header bar */}
                <div className="bg-[#0f2244] rounded-t-2xl px-6 md:px-8 py-5 grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0" />
                    <div>
                      <span className="text-[#0ea5c8] text-xs font-semibold uppercase tracking-wider">Client</span>
                      <div className="text-white font-bold text-lg">{assignment.client}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 md:justify-end">
                    <Calendar className="w-5 h-5 text-[#0ea5c8] flex-shrink-0" />
                    <div>
                      <span className="text-[#0ea5c8] text-xs font-semibold uppercase tracking-wider">
                        Period of Assignment
                      </span>
                      <div className="text-white text-sm md:text-right">{assignment.period}</div>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="border border-t-0 border-gray-200 rounded-b-2xl divide-y divide-gray-100">
                  <div className="px-6 md:px-8 pt-6">
                    <h3 className="text-lg font-bold text-[#0ea5c8] uppercase tracking-wider">Projects</h3>
                  </div>
                  {assignment.projects.map((project, idx) => (
                    <div key={idx} className="px-6 md:px-8 py-6">
                      <div className="grid md:grid-cols-4 gap-6">
                        <div className="md:col-span-1">
                          <div className="flex items-center gap-2 mb-1">
                            <FileText className="w-4 h-4 text-[#0ea5c8] flex-shrink-0" />
                            <span className="text-xs font-semibold text-[#0ea5c8] uppercase tracking-wider">
                              Project Title
                            </span>
                          </div>
                          <div className="font-bold text-[#0f2244]">{project.title}</div>
                        </div>
                        <div className="md:col-span-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-4 h-4 text-[#0ea5c8] flex-shrink-0" />
                            <span className="text-xs font-semibold text-[#0ea5c8] uppercase tracking-wider">Dates</span>
                          </div>
                          <div className="text-gray-700 mb-4">{project.dates}</div>
                          <div className="flex items-center gap-2 mb-2">
                            <Briefcase className="w-4 h-4 text-[#0ea5c8] flex-shrink-0" />
                            <span className="text-xs font-semibold text-[#0ea5c8] uppercase tracking-wider">
                              Description
                            </span>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{project.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12">Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-[#0f2244]/8 transition-all duration-300 overflow-hidden"
              >
                <div className="bg-[#0f2244] px-6 py-5">
                  <h3 className="text-white font-bold text-lg">{group.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">Case Study</h2>
          <h3 className="text-xl md:text-2xl font-bold text-[#0ea5c8] mb-10">
            Asset Management Project - Discovery Phase
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {caseStudyBoxes.map((box) => (
              <div
                key={box.label}
                className={`rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                  box.highlight
                    ? 'bg-[#0f2244] border-[#0f2244] text-white'
                    : 'bg-gray-50 border-gray-100 text-gray-700 hover:shadow-lg'
                }`}
              >
                <div
                  className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                    box.highlight ? 'text-[#0ea5c8]' : 'text-[#0ea5c8]'
                  }`}
                >
                  {box.label}
                </div>
                <p className={`text-sm leading-relaxed ${box.highlight ? 'text-white/90' : 'text-gray-700'}`}>
                  {box.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 bg-[#0f2244] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Contact</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a
              href="mailto:david.pinner@zenith-as.co.uk"
              className="inline-flex items-center gap-3 bg-[#0ea5c8] hover:bg-[#0891b2] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-[#0ea5c8]/30 hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5" />
              Email Zenith Analysis
            </a>
            <a
              href="https://www.linkedin.com/company/zenith-analysis-solutions-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* CTA back to accountancy site */}
      <section className="bg-[#0a1628] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 text-lg mb-4">
            Looking for bookkeeping and accountancy services?
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#0ea5c8] font-semibold text-lg hover:gap-3 transition-all"
          >
            Visit Zenith Accountancy Solutions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
