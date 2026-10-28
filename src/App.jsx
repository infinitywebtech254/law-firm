import React, { useState } from 'react';

function Icon({ name, size = 20, strokeWidth = 1.8 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true
  };

  const paths = {
    Menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    X: <><path d="m18 6-12 12M6 6l12 12" /></>,
    ChevronDown: <><path d="m6 9 6 6 6-6" /></>,
    ArrowUpRight: <><path d="M7 17 17 7M7 7h10v10" /></>,
    ArrowRight: <><path d="M5 12h14M12 5l7 7-7 7" /></>,
    Scale: <><path d="m12 3 8 4H4l8-4Z" /><path d="M12 7v14M5 7l-3 7h6L5 7Zm14 0-3 7h6l-3-7ZM7 21h10" /></>,
    BriefcaseBusiness: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" /></>,
    House: <><path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-7h6v7" /></>,
    Users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20 21v-2a4 4 0 0 1 0 7.75" /></>,
    ShieldCheck: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
    Gavel: <><path d="m14 7 3 3M5 21h14M6 18l6-6M14 4l6 6M4 10l6 6M3 11l4-4 6-6-4 4-6-6Z" /></>,
    Handshake: <><path d="m8 12 3 3a2 2 0 0 0 3 0l5-5M3 11l5-5 5 1 3-1 5 5-7 7a2 2 0 0 1-3 0l-3-3" /><path d="m3 11-1 1 4 5 2-2M21 11l1 1-4 5-2-2" /></>,
    Phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.7L7.1 10a16 16 0 0 0 6 6l1.6-1.9a2 2 0 0 1 1.7-.6l3 .5a2 2 0 0 1 1.6 1.9Z" /></>,
    Mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    MapPin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    Clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    Instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    Linkedin: <><path d="M4 9h4v11H4zM6 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM12 20V9h4v2a4 4 0 0 1 4-2c2 0 3 1.5 3 4v7h-4v-6c0-1.5-.5-2-1.5-2S16 13 16 14v6Z" /></>,
    Facebook: <><path d="M15 21v-8h3l.5-4H15V7c0-1.2.4-2 2-2h2V1.5A24 24 0 0 0 16 1c-3 0-5 1.8-5 5v3H8v4h3v8Z" /></>,
    CheckCircle2: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
    MessageCircle: <><path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5Z" /></>
  };

  return <svg {...common}>{paths[name] || paths.Scale}</svg>;
}

const Menu = props => <Icon name="Menu" {...props} />;
const X = props => <Icon name="X" {...props} />;
const ChevronDown = props => <Icon name="ChevronDown" {...props} />;
const ArrowUpRight = props => <Icon name="ArrowUpRight" {...props} />;
const ArrowRight = props => <Icon name="ArrowRight" {...props} />;
const Scale = props => <Icon name="Scale" {...props} />;
const BriefcaseBusiness = props => <Icon name="BriefcaseBusiness" {...props} />;
const House = props => <Icon name="House" {...props} />;
const Users = props => <Icon name="Users" {...props} />;
const ShieldCheck = props => <Icon name="ShieldCheck" {...props} />;
const Gavel = props => <Icon name="Gavel" {...props} />;
const Handshake = props => <Icon name="Handshake" {...props} />;
const Phone = props => <Icon name="Phone" {...props} />;
const Mail = props => <Icon name="Mail" {...props} />;
const MapPin = props => <Icon name="MapPin" {...props} />;
const Clock = props => <Icon name="Clock" {...props} />;
const Instagram = props => <Icon name="Instagram" {...props} />;
const Linkedin = props => <Icon name="Linkedin" {...props} />;
const Facebook = props => <Icon name="Facebook" {...props} />;
const CheckCircle2 = props => <Icon name="CheckCircle2" {...props} />;
const MessageCircle = props => <Icon name="MessageCircle" {...props} />;
const firm = { name:'Meridian Legal Partners', phone:'+254 700 123 456', email:'consult@meridianlegal.co.ke', address:'Westlands, Nairobi, Kenya', hours:'Mon–Fri, 8:30 AM–5:30 PM' };
const services = [
 {title:'Corporate & Commercial',icon:BriefcaseBusiness,desc:'Practical legal guidance for businesses, from formation and contracts to governance and commercial transactions.',items:['Business formation & structuring','Commercial contracts','Corporate governance','Mergers and acquisitions']},
 {title:'Property & Conveyancing',icon:House,desc:'Clear advice through property transactions, due diligence, leases, and land-related matters.',items:['Property due diligence','Sale and purchase transactions','Commercial and residential leases','Land and title matters']},
 {title:'Family & Succession',icon:Users,desc:'Considered, discreet support for family arrangements, succession planning, and estate administration.',items:['Wills and succession planning','Estate administration','Family agreements','Mediation and dispute resolution']},
 {title:'Dispute Resolution',icon:Gavel,desc:'Strategic representation and early resolution planning for commercial and civil disputes.',items:['Commercial disputes','Civil litigation','Negotiation and mediation','Debt recovery']},
 {title:'Employment & Labour',icon:Handshake,desc:'Advice for employers and employees on workplace relationships, policies, and disputes.',items:['Employment contracts','Workplace policies','Disciplinary processes','Employment disputes']},
 {title:'Legal Advisory',icon:ShieldCheck,desc:'Responsive legal support to help individuals and organisations understand obligations and manage risk.',items:['Legal opinions and research','Regulatory compliance','Risk reviews','Document drafting and review']}
];
const team = [
 {name:'Grace W. Kamau',role:'Managing Partner',initials:'GK',bio:'Leads the firm’s commercial practice, with a focus on practical advice and long-term client relationships.'},
 {name:'Daniel M. Otieno',role:'Partner, Dispute Resolution',initials:'DO',bio:'Supports clients through negotiation, mediation, and litigation strategy across civil and commercial matters.'},
 {name:'Amina N. Hassan',role:'Partner, Property & Private Client',initials:'AH',bio:'Advises on property transactions, succession planning, and sensitive private-client matters.'}
];

// Color Theme CSS Tokens Replacement: Deep Teal (#0F383B) & Warm Bronze/Copper (#C28237)
const customStyles = `
  :root {
    --primary: #0F383B;
    --primary-light: #185257;
    --accent: #C28237;
    --accent-hover: #A66C29;
    --bg-dark: #0A2426;
    --bg-light: #F4F7F7;
    --text-dark: #121F20;
    --text-muted: #5C7072;
    --border: #D1DBDC;
  }
  
  .topbar { background: var(--primary); color: #fff; }
  .topbar-inner { display: flex; gap: 20px; font-size: 13px; padding: 8px 0; }
  .site-header { background: #fff; border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 100; }
  .header-inner { display: flex; align-items: center; justify-content: space-between; height: 80px; }
  .brand { display: flex; align-items: center; gap: 12px; background: none; border: 0; text-align: left; }
  .brand-mark { background: var(--primary); color: var(--accent); padding: 8px; border-radius: 4px; display: flex; }
  .brand-copy strong { color: var(--primary); font-size: 18px; letter-spacing: 1px; display: block; }
  .brand-copy small { color: var(--accent); font-size: 10px; letter-spacing: 2px; font-weight: 700; display: block; }
  .main-nav { display: flex; align-items: center; gap: 24px; }
  .nav-link { background: none; border: 0; font-weight: 600; color: var(--text-dark); cursor: pointer; padding: 8px 0; }
  .nav-link.active, .nav-link:hover { color: var(--accent); }
  .header-cta { background: var(--accent); color: #fff; border: 0; padding: 12px 20px; font-weight: 700; border-radius: 4px; display: flex; align-items: center; gap: 8px; cursor: pointer; }
  .header-cta:hover { background: var(--accent-hover); }
  .site-footer { background: var(--bg-dark); color: #E2EAEA; padding-top: 60px; }
  .footer-main { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 40px; padding-bottom: 40px; }
  .footer-brand .brand-copy strong { color: #fff; }
  .footer-col h4 { color: var(--accent); font-size: 14px; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 16px; }
  .footer-col button { display: block; background: none; border: 0; color: #B3C4C5; margin-bottom: 10px; text-align: left; cursor: pointer; }
  .footer-col button:hover { color: var(--accent); }
  .footer-bottom { border-top: 1px solid #1B3E41; padding: 20px 0; font-size: 13px; color: #8AA2A4; }
  .footer-bottom-inner { display: flex; justify-content: space-between; }
  .eyebrow { color: var(--accent); font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; display: block; margin-bottom: 12px; }
  .hero { position: relative; background: var(--bg-dark); color: #fff; padding: 100px 0; overflow: hidden; }
  .hero-content h1 em { color: var(--accent); font-style: normal; }
  .btn-gold { background: var(--accent); color: #fff; border: 0; padding: 14px 28px; font-weight: 700; border-radius: 4px; cursor: pointer; }
  .btn-gold:hover { background: var(--accent-hover); }
  .btn-outline { border: 1px solid var(--accent); color: var(--accent); background: none; padding: 14px 28px; font-weight: 700; border-radius: 4px; cursor: pointer; }
  .btn-outline:hover { background: var(--accent); color: #fff; }
  .btn-dark { background: var(--primary); color: #fff; border: 0; padding: 14px 28px; font-weight: 700; border-radius: 4px; cursor: pointer; }
  .btn-dark:hover { background: var(--primary-light); }
  .trust-strip { background: var(--primary); color: #fff; padding: 24px 0; }
  .trust-grid { display: flex; justify-content: space-between; }
  .trust-grid strong { color: var(--accent); margin-right: 8px; }
  .service-card { background: #fff; border: 1px solid var(--border); padding: 32px; border-radius: 4px; transition: transform 0.2s; }
  .service-card:hover { border-color: var(--accent); transform: translateY(-4px); }
  .service-icon { color: var(--accent); background: var(--bg-light); padding: 12px; border-radius: 4px; display: inline-flex; }
  .quote-section { background: var(--primary); color: #fff; text-align: center; padding: 8px 0; }
  .quote-mark { color: var(--accent); font-size: 60px; line-height: 0; }
  .cta-band { background: var(--bg-dark); color: #fff; padding: 60px 0; }
  .floating-whatsapp { position: fixed; bottom: 24px; right: 24px; background: #25D366; color: #fff; padding: 14px; border-radius: 50%; box-shadow: 0 4px 12px rgba(0,0,0,0.2); z-index: 1000; }
  .page-hero { background: var(--primary); color: #fff; padding: 80px 0; }
  .dark-feature { background: var(--bg-dark); color: #fff; padding: 80px 0; }
`;

function Header({page,setPage}) {
 const [open,setOpen]=useState(false),[serviceOpen,setServiceOpen]=useState(false);
 const go=p=>{setPage(p);setOpen(false);setServiceOpen(false);window.scrollTo({top:0,behavior:'smooth'});};
 return <><style>{customStyles}</style><div className="topbar"><div className="container topbar-inner"><span><Phone size={14}/>{firm.phone}</span><span><Mail size={14}/>{firm.email}</span><span className="top-hours"><Clock size={14}/>{firm.hours}</span></div></div>
 <header className="site-header"><div className="container header-inner">
 <button className="brand" onClick={()=>go('Home')} aria-label="Meridian Legal Partners home"><span className="brand-mark"><Scale size={25}/></span><span className="brand-copy"><strong>MERIDIAN</strong><small>LEGAL PARTNERS</small></span></button>
 <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'}>{open?<X/>:<Menu/>}</button>
 <nav className={open?'main-nav open':'main-nav'} aria-label="Main navigation">
 {['Home','About','Our Team','Insights','Contact'].map(p=><button key={p} className={page===p?'nav-link active':'nav-link'} onClick={()=>go(p)}>{p}</button>)}
 <div className="nav-dropdown"><button className={page==='Services'?'nav-link active':'nav-link'} onClick={()=>setServiceOpen(!serviceOpen)}>Services <ChevronDown size={15}/></button>
 {serviceOpen&&<div className="dropdown-menu">{services.map(s=><button key={s.title} onClick={()=>{go('Services');setTimeout(()=>document.getElementById('service-list')?.scrollIntoView({behavior:'smooth'}),50);}}>{s.title}</button>)}</div>}</div>
 <button className="header-cta" onClick={()=>go('Contact')}>Book a Consultation <ArrowUpRight size={16}/></button></nav></div></header></>;
}
function Footer({setPage}) {
 const go=p=>{setPage(p);window.scrollTo({top:0,behavior:'smooth'});};
 return <footer className="site-footer"><div className="container footer-main">
 <div className="footer-brand-col"><button className="brand footer-brand" onClick={()=>go('Home')}><span className="brand-mark"><Scale size={25}/></span><span className="brand-copy"><strong>MERIDIAN</strong><small>LEGAL PARTNERS</small></span></button><p>Clear counsel. Confident decisions. Thoughtful legal guidance for individuals, families, and businesses.</p><div className="socials"><a className="social-link" href="#contact" aria-label="LinkedIn"><Linkedin size={17}/></a><a className="social-link" href="#contact" aria-label="Facebook"><Facebook size={17}/></a><a className="social-link" href="#contact" aria-label="Instagram"><Instagram size={17}/></a></div></div>
 <div className="footer-col"><h4>Explore</h4>{['Home','About','Services','Our Team','Insights','Contact'].map(p=><button key={p} onClick={()=>go(p)}>{p}</button>)}</div>
 <div className="footer-col"><h4>Our Services</h4>{services.slice(0,5).map(s=><button key={s.title} onClick={()=>go('Services')}>{s.title}</button>)}</div>
 <div className="footer-col contact-col"><h4>Contact Details</h4><p><MapPin size={16}/><span>{firm.address}</span></p><p><Phone size={16}/><span>{firm.phone}</span></p><p><Mail size={16}/><span>{firm.email}</span></p><p><Clock size={16}/><span>{firm.hours}</span></p></div>
 </div><div className="footer-bottom"><div className="container footer-bottom-inner"><span>© {new Date().getFullYear()} {firm.name}. All rights reserved.</span><span>Privacy · Terms · Legal notice</span></div></div></footer>;
}
function Heading({eyebrow,title,text}) {return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text&&<p>{text}</p>}</div>;}
function PageHero({eyebrow,title,text}) {return <section className="page-hero"><div className="page-hero-bg"></div><div className="container page-hero-content"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{text&&<p>{text}</p>}<div className="breadcrumb">Home <span>/</span> {eyebrow.replace('MERIDIAN','').replace('OUR','').trim()}</div></div></section>;}
function Home({setPage}) {
 return <>
 <section className="hero"><div className="hero-image"></div><div className="hero-overlay"></div><div className="container hero-content"><span className="eyebrow">INDEPENDENT COUNSEL · NAIROBI, KENYA</span><h1>Clarity in law.<br/><em>Confidence in every decision.</em></h1><p>Thoughtful legal advice for the matters that move your business, protect your interests, and shape your future.</p><div className="hero-actions"><button className="btn btn-gold" onClick={()=>setPage('Contact')}>Speak to our team <ArrowUpRight size={17}/></button><button className="text-link light-link" onClick={()=>setPage('Services')}>Explore our services <ArrowRight size={17}/></button></div><div className="hero-note"><span className="hero-line"></span><span>Trusted perspective. Practical outcomes.</span></div></div><div className="hero-stamp"><Scale size={23}/><span>PRINCIPLED<br/>REPRESENTATION</span></div></section>
 <section className="trust-strip"><div className="container trust-grid"><div><strong>01</strong><span>Client-first counsel</span></div><div><strong>02</strong><span>Clear communication</span></div><div><strong>03</strong><span>Solutions built around you</span></div><div><strong>04</strong><span>Professional integrity</span></div></div></section>
 <section className="section"><div className="container"><Heading eyebrow="HOW WE HELP" title="Legal support for what matters." text="From everyday legal questions to complex decisions, we bring careful thinking and a practical approach to every brief."/><div className="service-cards">{services.slice(0,3).map((s,i)=><article className="service-card" key={s.title}><div className="card-top"><span className="service-icon"><s.icon size={23}/></span><span className="card-number">0{i+1}</span></div><h3>{s.title}</h3><p>{s.desc}</p><button className="text-link" onClick={()=>setPage('Services')}>Discover more <ArrowRight size={16}/></button></article>)}</div><div className="center-action"><button className="btn btn-outline" onClick={()=>setPage('Services')}>View all services <ArrowUpRight size={16}/></button></div></div></section>
 <section className="split-section"><div className="split-photo"></div><div className="split-copy"><span className="eyebrow">A DIFFERENT KIND OF LEGAL PARTNER</span><h2>Sound advice starts with listening.</h2><p>Good legal work begins with understanding the people, priorities, and pressures behind every matter. We take the time to listen, explain your options, and help you move forward with purpose.</p><ul className="check-list"><li><CheckCircle2/> Clear advice without unnecessary complexity</li><li><CheckCircle2/> Strategies shaped around your objectives</li><li><CheckCircle2/> A responsive, relationship-led approach</li></ul><button className="btn btn-dark" onClick={()=>setPage('About')}>Get to know us <ArrowRight size={16}/></button></div></section>
 <section className="quote-section"><div className="container quote-inner"><span className="quote-mark">“</span><blockquote>Legal guidance should make the next step clearer, not more complicated.</blockquote><p>THE MERIDIAN APPROACH</p></div></section>
 <section className="cta-band"><div className="container cta-inner"><div><span className="eyebrow">LET'S TALK</span><h2>Have a matter to discuss?</h2><p>Start with a conversation. We'll help you understand the next steps.</p></div><button className="btn btn-gold" onClick={()=>setPage('Contact')}>Arrange a consultation <ArrowUpRight size={17}/></button></div></section>
 </>;
}
function About() {return <><PageHero eyebrow="ABOUT MERIDIAN" title="Legal insight with a human perspective." text="We believe strong legal counsel is built on trust, careful preparation, and a clear understanding of what matters to each client."/><section className="section"><div className="container about-grid"><div><span className="eyebrow">OUR PURPOSE</span><h2>Principled advice.<br/><em>Practical direction.</em></h2></div><div className="about-body"><p>Meridian Legal Partners is a fictional, modern, client-focused law firm concept serving individuals, families, entrepreneurs, and established organisations. Our approach combines legal analysis with an appreciation of the commercial and personal realities behind each matter.</p><p>We aim to explain the options, risks, and likely next steps in plain language so clients can make informed decisions. We value discretion, preparation, and communication throughout the working relationship.</p><div className="values-grid"><div><strong>Integrity</strong><span>Upholding professional standards and honest advice.</span></div><div><strong>Clarity</strong><span>Making complex matters easier to understand.</span></div><div><strong>Partnership</strong><span>Working collaboratively toward defined objectives.</span></div><div><strong>Care</strong><span>Giving each matter considered attention.</span></div></div></div></div></section><section className="dark-feature"><div className="container dark-feature-grid"><div><span className="eyebrow">OUR COMMITMENT</span><h2>Every matter deserves attention to detail.</h2></div><p>We approach each instruction with diligence, respect for confidentiality, and a focus on helping clients understand their options. We believe the best working relationships are built through consistency, accessibility, and realistic advice.</p></div></section><section className="section"><div className="container"><Heading eyebrow="WHAT YOU CAN EXPECT" title="A considered process from day one."/><div className="process-grid">{[['01','Listen','We begin by understanding your objectives, context, and concerns.'],['02','Assess','We identify key issues, options, risks, and relevant next steps.'],['03','Advise','We explain the recommended approach in clear, practical terms.'],['04','Act','With your instructions, we work toward the agreed objectives.']].map(x=><div className="process-card" key={x[0]}><strong>{x[0]}</strong><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></div></section></>;}
function Services() {return <><PageHero eyebrow="OUR SERVICES" title="Experienced guidance. Practical solutions." text="Legal services tailored to your circumstances, with clear advice on the issues, options, and next steps."/><section className="section" id="service-list"><div className="container"><div className="service-list-grid">{services.map((s,i)=><article className="service-detail-card" key={s.title}><div className="card-top"><span className="service-icon"><s.icon size={24}/></span><span className="card-number">0{i+1}</span></div><h3>{s.title}</h3><p>{s.desc}</p><ul>{s.items.map(item=><li key={item}>{item}</li>)}</ul><a className="text-link" href="#contact">Discuss this service <ArrowRight size={16}/></a></article>)}</div></div></section><section className="cta-band"><div className="container cta-inner"><div><span className="eyebrow">NOT SURE WHERE TO START?</span><h2>Let's identify the right next step.</h2><p>Tell us a little about your matter and we'll help you understand how to proceed.</p></div><a className="btn btn-gold" href="#contact">Contact the firm <ArrowUpRight size={17}/></a></div></section></>;}
function Team({setPage}) {return <><PageHero eyebrow="OUR TEAM" title="People committed to your best interests." text="A collaborative team with a considered approach to advice, preparation, and client service."/><section className="section"><div className="container"><Heading eyebrow="THE PEOPLE BEHIND THE ADVICE" title="Experience with perspective." text="Profiles below are illustrative for this website concept and should be replaced with verified firm details before publication."/><div className="team-grid">{team.map((m,i)=><article className="team-card" key={m.name}><div className={`team-portrait portrait-${i+1}`}><span>{m.initials}</span></div><div className="team-info"><span className="eyebrow">{m.role}</span><h3>{m.name}</h3><p>{m.bio}</p><button className="text-link" onClick={()=>setPage('Contact')}>Contact the firm <ArrowRight size={16}/></button></div></article>)}</div></div></section><section className="dark-feature"><div className="container dark-feature-grid"><div><span className="eyebrow">ONE TEAM. SHARED PURPOSE.</span><h2>Working together for clearer outcomes.</h2></div><p>We bring different perspectives to each instruction and keep communication central to the process. Your matter receives a considered approach, with the right people involved at the right time.</p></div></section></>;}
function Insights({setPage}) {
 const articles=[
 {category:'BUSINESS LAW',title:'Before you sign: a practical contract checklist',desc:'A few points to review before committing your business to a commercial agreement.',body:'Read the scope and deliverables carefully. Confirm fees, payment dates, deadlines, and what happens if either party needs to change or end the arrangement. Check confidentiality, ownership of work, dispute resolution, and any liability provisions. For significant agreements, seek advice specific to your circumstances.'},
 {category:'PROPERTY',title:'Property due diligence: why the details matter',desc:'Understand the importance of checking documentation and obligations before a property transaction.',body:'Property transactions require careful review of ownership documents, encumbrances, approvals, transaction terms, and relevant obligations. The appropriate checks depend on the property and transaction. Obtain independent legal advice before making commitments or transferring funds.'},
 {category:'FAMILY & SUCCESSION',title:'Planning ahead: getting your affairs in order',desc:'How early planning can help families understand wishes and prepare important documents.',body:'Succession planning can help make wishes clearer and reduce uncertainty for loved ones. The appropriate documents and process depend on your circumstances and applicable law. Keep records organised, review plans when circumstances change, and seek professional advice to ensure documents are valid.'}
 ];
 const [active,setActive]=useState(null);
 return <><PageHero eyebrow="INSIGHTS & RESOURCES" title="A clearer view of legal issues." text="Plain-language perspectives to help you prepare better questions and make informed decisions."/><section className="section"><div className="container"><Heading eyebrow="FROM OUR DESK" title="Useful perspectives for everyday decisions." text="General information only. It is not legal advice and may not reflect recent legal developments or your particular circumstances."/><div className="insights-grid">{articles.map((a,i)=><article className="insight-card" key={a.title}><div className="insight-image"><span>0{i+1}</span></div><div className="insight-content"><div className="insight-meta"><span>{a.category}</span><span>LEGAL GUIDE</span></div><h3>{a.title}</h3><p>{a.desc}</p><button className="text-link" onClick={()=>setActive(active===i?null:i)}>{active===i?'Close article':'Read insight'} <ArrowRight size={16}/></button>{active===i&&<div className="article-expanded"><p>{a.body}</p><button className="text-link" onClick={()=>setPage('Contact')}>Discuss your matter <ArrowRight size={16}/></button></div>}</div></article>)}</div></div></section></>;
}
function Contact() {
 const [submitted,setSubmitted]=useState(false),[form,setForm]=useState({name:'',email:'',phone:'',service:'',message:''});
 const update=e=>setForm({...form,[e.target.name]:e.target.value});
 return <><PageHero eyebrow="CONTACT MERIDIAN" title="Let's start with a conversation." text="Share a brief outline of what you need help with. Our team can discuss the appropriate next steps with you."/><section className="section contact-section"><div className="container contact-grid"><div className="contact-details"><span className="eyebrow">GET IN TOUCH</span><h2>We're here to listen.</h2><p>For an initial enquiry or to arrange a consultation, reach us using the details below.</p>{[[Phone,'CALL OUR OFFICE',firm.phone],[Mail,'EMAIL',firm.email],[MapPin,'OFFICE',firm.address],[Clock,'OFFICE HOURS',firm.hours]].map(([I,label,val])=><div className="contact-detail" key={label}><span><I/></span><div><small>{label}</small><strong>{val}</strong></div></div>)}<div className="contact-note"><ShieldCheck size={20}/><p>Please avoid sending confidential or time-sensitive information until the firm has confirmed that it can act for you.</p></div></div><div className="contact-form-wrap"><h3>Send an enquiry</h3><p>Fields marked with * are required.</p>{submitted?<div className="success-message"><CheckCircle2 size={30}/><h4>Thank you for your enquiry.</h4><p>This demo form does not send messages yet. Connect it to a form service or backend before launch.</p><button className="btn btn-dark" onClick={()=>{setSubmitted(false);setForm({name:'',email:'',phone:'',service:'',message:''});}}>Send another enquiry</button></div>:<form onSubmit={e=>{e.preventDefault();setSubmitted(true);}}><div className="form-row"><label>Full name *<input name="name" required value={form.name} onChange={update} placeholder="Your full name"/></label><label>Email address *<input name="email" type="email" required value={form.email} onChange={update} placeholder="you@example.com"/></label></div><div className="form-row"><label>Phone number<input name="phone" value={form.phone} onChange={update} placeholder="+254..."/></label><label>Area of law<select name="service" value={form.service} onChange={update}><option value="">Select a service</option>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label></div><label>How can we help? *<textarea name="message" required rows="5" value={form.message} onChange={update} placeholder="Briefly describe your enquiry..."/></label><button className="btn btn-dark" type="submit">Submit enquiry <ArrowUpRight size={17}/></button><small className="form-disclaimer">Submitting this form does not establish a lawyer-client relationship.</small></form>}</div></div></section><section className="map-placeholder"><MapPin size={28}/><div><strong>Visit us in Westlands, Nairobi</strong><span>Office address and map embed to be confirmed before publication.</span></div></section></>;
}
export default function App() {
 const [page,setPage]=useState('Home');
 const pages={Home:<Home setPage={setPage}/>,About:<About/>,Services:<Services/>,'Our Team':<Team setPage={setPage}/>,Insights:<Insights setPage={setPage}/>,Contact:<Contact/>};
 return <><Header page={page} setPage={setPage}/><main key={page}>{pages[page]||pages.Home}</main><Footer setPage={setPage}/><a className="floating-whatsapp" href="https://wa.me/254700123456" target="_blank" rel="noreferrer" aria-label="Contact Meridian on WhatsApp"><MessageCircle size={22}/></a></>;
}