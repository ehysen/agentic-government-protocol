'use strict';
/* AGP page content. Exported as a function so build.js can inject helpers.
 * Each page: { slug, desc, wide?, body } — body is an HTML string. */
module.exports = function ({ h, h3, SITE }) {

/* Reusable inline partner glyphs (monochrome, self-contained) ----------- */
const G = {
  civic: `<svg width="34" height="30" viewBox="0 0 34 30" aria-hidden="true" fill="none" stroke="#1d4ed8" stroke-width="2"><path d="M3 11 17 3l14 8"/><path d="M6 11v12M12 11v12M22 11v12M28 11v12" stroke-linecap="round"/><path d="M3 27h28" stroke-linecap="round"/></svg>`,
  openai: `<svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true" fill="none" stroke="#11203a" stroke-width="2"><path d="M15 4l9 5v12l-9 5-9-5V9z"/><circle cx="15" cy="15" r="3.5"/></svg>`,
  anthropic: `<svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true" stroke="#11203a" stroke-width="2" stroke-linecap="round"><path d="M15 3v24M15 15 5 7M15 15l10-8M15 15 5 23M15 15l10 8M3 15h24"/></svg>`,
  google: `<svg width="34" height="30" viewBox="0 0 34 30" aria-hidden="true"><circle cx="6" cy="15" r="4.5" fill="#4285F4"/><circle cx="14" cy="15" r="4.5" fill="#EA4335"/><circle cx="22" cy="15" r="4.5" fill="#FBBC05"/><circle cx="30" cy="15" r="4.5" fill="#34A853"/></svg>`,
  agentic: `<svg width="34" height="30" viewBox="0 0 34 30" aria-hidden="true" fill="none" stroke="#0f766e" stroke-width="2"><circle cx="7" cy="9" r="4"/><circle cx="27" cy="9" r="4"/><circle cx="17" cy="23" r="4"/><path d="M10 11l5 9M24 11l-5 9M11 9h12" stroke-linecap="round"/></svg>`,
  state: `<svg width="28" height="30" viewBox="0 0 28 30" aria-hidden="true" fill="none" stroke="#5d6b85" stroke-width="1.8"><path d="M14 3l3 4h5v5l3 3-3 3v5h-5l-3 4-3-4H6v-5l-3-3 3-3V7h5z"/><path d="M14 9.5l1.6 3.3 3.6.5-2.6 2.5.6 3.6L14 17.7l-3.2 1.7.6-3.6-2.6-2.5 3.6-.5z" fill="#5d6b85" stroke="none"/></svg>`,
};
const stateTile = (name) =>
  `<div class="logo"><div>${G.state}</div><div class="logo__name">${name}</div><div class="logo__sub">Pilot state</div></div>`;

return [

/* ====================================================================== *
 * OVERVIEW — citizen-centered home
 * ==================================================================== */
{ slug: 'index', wide: true,
  desc: 'AGP gives every constituent instant, personalized access to the public services they need — through an agent that carries the complexity, so people don’t have to. An open agent-to-agent standard for government service delivery.',
  body: `      <section class="vision">
        <p class="eyebrow">Agentic Government Protocol &middot; v0.1</p>
        <h1>Public services that come to you &mdash; instantly, and on your terms.</h1>
        <p class="lede">
          Imagine getting the benefit you qualify for the day you need it, without
          forms, offices, or phone trees. AGP is the open standard that makes that
          possible: it lets <strong>your agent talk directly to a government
          agency&rsquo;s agent</strong> to find what you&rsquo;re eligible for, apply with your
          consent, and deliver it &mdash; while the agency stays fully in charge of the
          decision.
        </p>
        <div class="cta-row">
          <a class="btn btn--primary" href="#story">See how it feels &darr;</a>
          <a class="btn btn--ghost" href="flow.html" style="color:#cfe0ff;border-color:#33508f;background:transparent;">Read the spec</a>
          <a class="btn btn--ghost" href="get-started.html" style="color:#cfe0ff;border-color:#33508f;background:transparent;">For agencies</a>
        </div>
      </section>

      <p class="pullquote">The system carries the burden of complexity &mdash;
      <span>not the people it serves.</span></p>

      <p>Today, getting help from government means <em>you</em> do the work: figure out
      which programs exist, decode eligibility, gather documents, fill identical forms
      again and again, wait, and follow up. AGP inverts that. The constituent says what
      they need in plain language; the machinery &mdash; discovery, eligibility, paperwork,
      verification &mdash; happens behind the scenes, between agents, with the person&rsquo;s
      consent and the agency&rsquo;s authority intact.</p>

      ${h('enables', 'What this enables')}
      <div class="features">
        <div class="feature">
          <svg class="feature__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M13 2 3 14h7l-1 8 11-12h-7z" stroke-linejoin="round"/></svg>
          <h3>Instant</h3>
          <p>Eligible help can be delivered in minutes, not weeks &mdash; provisionally where the law allows, verified after.</p>
        </div>
        <div class="feature">
          <svg class="feature__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6" stroke-linecap="round"/></svg>
          <h3>Personalized</h3>
          <p>Services find the person. One change &mdash; a new job, a new address, a new child &mdash; can update everything you&rsquo;re entitled to.</p>
        </div>
        <div class="feature">
          <svg class="feature__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <h3>On your terms</h3>
          <p>Nothing happens without your consent, every action is auditable, and a navigator or caseworker can always step in for you.</p>
        </div>
      </div>

      ${h('story', 'What it feels like')}
      <p>Maria was laid off two weeks ago. She has two kids and just lost her main
      income. Here&rsquo;s the same moment, mediated by an agent that speaks AGP:</p>

      <div class="vignette" role="img" aria-label="An example conversation. Maria tells her agent she is worried about groceries. The agent says she likely qualifies for SNAP at about 535 dollars a month and offers to apply with her consent, using only her household size, income, and address for this application. Maria agrees. The agent reports the state approved her provisionally, benefits arrive on her EBT card in two days, and shares a receipt and appeal path. The whole exchange took under five minutes with no forms or office visit.">
        <div class="vignette__head"><span class="dot"></span> Conversation with a constituent&rsquo;s agent</div>
        <div class="bubble bubble--system"><small>Context</small> Maria, household of 3, recently lost her job.</div>
        <div class="bubble bubble--person"><small>Maria</small> I&rsquo;m really worried about groceries this month.</div>
        <div class="bubble bubble--agent"><small>Agent</small> You likely qualify for <strong>SNAP &mdash; about $535/month</strong>. I can apply for you right now with your okay. It would use your household size, income, and address, only for this application.</div>
        <div class="bubble bubble--person"><small>Maria</small> Yes, please go ahead.</div>
        <div class="bubble bubble--agent"><small>Agent</small> Done. The state approved you provisionally. Benefits reach your EBT card in <strong>about 2 days</strong>. Here&rsquo;s your receipt, and how to appeal if anything looks wrong.</div>
        <div class="bubble bubble--system"><small>Elapsed</small> Under 5 minutes &middot; no forms &middot; no office visit</div>
      </div>
      <p>Behind that short exchange, Maria&rsquo;s agent and the state agency&rsquo;s agent ran a
      precise, auditable protocol. The <a href="example.html">worked example</a> opens it
      up step by step.</p>

      ${h('how', 'How it works underneath')}
      <p>AGP is fundamentally <strong>agent-to-agent</strong>. A
      <strong>constituent-side agent</strong> (the person&rsquo;s own, a shared public agent,
      or one run by a trusted <a href="actors.html">intermediary</a>) speaks to a
      <strong>government agency agent</strong> that represents the
      <strong>agency of record</strong>. The protocol is the common language those two
      agents share, decomposed into five steps:</p>
      <div class="grid grid-3">
        <div class="card"><p class="card__role">Step 1</p><h3>Discovery</h3><p>The agency agent publishes a machine-readable catalog of services, requirements, and channels.</p></div>
        <div class="card"><p class="card__role">Step 2</p><h3>Eligibility</h3><p>With consent, the constituent agent checks attributes against the agency&rsquo;s rules.</p></div>
        <div class="card"><p class="card__role">Step 3</p><h3>Authorization</h3><p>The constituent grants a scoped authorization; the agency agent verifies it.</p></div>
        <div class="card"><p class="card__role">Step 4</p><h3>Request &amp; delivery</h3><p>The request goes to the agency of record, which decides and provisions.</p></div>
        <div class="card"><p class="card__role">Step 5</p><h3>Receipt &amp; recourse</h3><p>A receipt, live status, and an appeal path return to the constituent.</p></div>
        <div class="card" style="background:var(--paper-soft);"><p class="card__role" style="color:var(--brand-ink)">Read next</p><h3>The canonical flow &rarr;</h3><p><a href="flow.html">Full step-by-step spec</a> &middot; <a href="schema.html">the schema</a></p></div>
      </div>

      <div class="partners">
        <h2>Convened by, and built with</h2>
        <p>AGP emerged from a June 2026 convening on human-centered government in the AI
        era. It is being shaped openly with conveners, agent builders, and pilot states.</p>
        <div class="logo-wall">
          <div class="logo"><div>${G.civic}</div><div class="logo__name">Center for Civic Futures</div><div class="logo__sub">Convener</div></div>
          <div class="logo"><div>${G.openai}</div><div class="logo__name">OpenAI</div><div class="logo__sub">Founding partner</div></div>
          <div class="logo"><div>${G.anthropic}</div><div class="logo__name">Anthropic</div><div class="logo__sub">Founding partner</div></div>
          <div class="logo"><div>${G.google}</div><div class="logo__name">Google</div><div class="logo__sub">Founding partner</div></div>
          <div class="logo"><div>${G.agentic}</div><div class="logo__name">Agentic State</div><div class="logo__sub">Founding partner</div></div>
        </div>
        <div class="logo-wall">
          ${stateTile('California')}
          ${stateTile('Colorado')}
          ${stateTile('Michigan')}
          ${stateTile('Pennsylvania')}
          ${stateTile('Utah')}
        </div>
        <p class="note">Illustrative founding partners and pilot states for the v0.1
        strawman. Participation reflects engagement in the conversation, not endorsement of
        a finished standard.</p>
      </div>

      <div class="callout callout--note">
        <p class="callout__label">Status</p>
        <p>AGP is an early <strong>v0.1 strawman</strong>: a narrative and conceptual
        specification with a draft schema, not yet a production standard or reference
        implementation. It is published to invite scrutiny and co-authorship. See the
        <a href="roadmap.html">roadmap</a> for what&rsquo;s in v1 and what&rsquo;s deferred. The
        agency&rsquo;s authority over eligibility and provisioning is never delegated to an
        agent &mdash; see <a href="principles.html">Principles</a>.</p>
      </div>`
},

/* ====================================================================== *
 * PRINCIPLES
 * ==================================================================== */
{ slug: 'principles',
  desc: 'The design principles that govern AGP: agency-of-record authority, human-centered and accessible by default, consent-first, publish-once read-everywhere, reuse over reinvention, small core, replicability, and naming the gaps.',
  body: `      <p class="eyebrow">Specification</p>
      <h1>Principles</h1>
      <p class="lede">These principles are the tie-breakers. When a design decision is
      unclear, AGP chooses the option that best honors the principles below &mdash; with the
      constituent&rsquo;s experience as the north star.</p>

      ${h('p1', '1. The system carries the complexity, not the person')}
      <p>Every design choice is judged by whether it moves burden off the constituent and
      onto the machinery. If a flow makes the person decode rules, re-enter data, or chase
      paperwork, it has failed this principle &mdash; even if it is technically elegant.</p>

      ${h('p2', '2. Agency-of-record authority')}
      <p>The government agency remains the <strong>agency of record</strong>: it retains
      authority over eligibility determination and over provisioning the service or
      benefit. The agency operates (or delegates) an <strong>agency agent</strong> that
      acts strictly within that authority. AGP moves <em>requests</em> and
      <em>receipts</em>; it never moves <em>authority</em>. An agent assembles, asks, and
      reports back &mdash; it does not <em>become</em> the government, and the agency can
      always decline or override.</p>

      ${h('p3', '3. Human-centered and accessible by default')}
      <p>This is a government artifact, so the medium must model the message. Flows must
      degrade gracefully to a human: anything an agent can do must have a humane fallback
      for a constituent acting directly or through an
      <a href="actors.html#intermediary">intermediary</a>. Accessibility (WCAG&nbsp;2.1&nbsp;AA),
      plain language, and language access are first-class requirements, not later add-ons.</p>

      ${h('p4', '4. Consent-first')}
      <p>Nothing happens on a constituent&rsquo;s behalf without their authorization, and data
      is used only for the <strong>specific, scoped purpose</strong> they consented to.
      Consent is legible, revocable, and auditable. Where the law allows opt-out defaults,
      AGP makes the default explicit rather than implicit.</p>

      ${h('p5', '5. Publish once, read everywhere')}
      <p>Agencies publish service metadata and eligibility rules <strong>once</strong>, in
      a standardized form, and any compliant agent can read them. Authoritative data flows
      from the agency that owns it to many agents, without each one re-integrating &mdash; and
      always traceable back to the authoritative source.</p>

      ${h('p6', '6. Reuse over reinvention')}
      <p>AGP leans on existing standards rather than minting a parallel universe: existing
      government data schemas and program data models for the <em>meaning</em> of
      attributes, and established agent transports for moving messages. AGP is the thin
      connective layer, not a new data dictionary. (See <a href="related-work.html">Related
      work</a> for the specific standards AGP builds on.)</p>

      ${h('p7', '7. Small core, additive extensions')}
      <p>AGP defines a deliberately small <a href="concepts.html">core vocabulary</a> and
      handles the long tail through extensions. Program- and jurisdiction-specific terms
      live in extensions and can graduate into core by consensus. Bias is always toward
      the simplest thing an agency can actually implement.</p>

      ${h('p8', '8. Replicable across jurisdictions')}
      <p>A flow designed for one state or program should transfer to the next with
      configuration, not rewriting. AGP&rsquo;s value compounds only if a navigator, an NGO, or
      a state can adopt a templatized protocol instead of hand-rolling an integration.</p>

      ${h('p9', '9. Name the gaps')}
      <p>AGP states plainly what it does <em>not</em> yet solve &mdash; most importantly the
      <a href="authorization.html">authorization, consent, and identity</a> mechanism &mdash;
      and positions those as companion concerns with defined interaction points. A standard
      earns trust by being precise about its own edges.</p>

      <div class="callout callout--official">
        <p class="callout__label">Trust comes from co-authorship</p>
        <p>AGP is credible to the extent it is authored <em>with</em> the agencies that
        run public services, not imposed on them. Co-authorship by state and local
        agencies is built into the <a href="governance.html">governance model</a>.</p>
      </div>`
},

/* ====================================================================== *
 * ACTORS
 * ==================================================================== */
{ slug: 'actors',
  desc: 'AGP is agent-to-agent: a constituent-side agent (the person’s own or an intermediary’s) speaks to a government agency agent that represents the agency of record. The four actors are Constituent, Agent, Intermediary, and Government agency.',
  body: `      <p class="eyebrow">Specification</p>
      <h1>Actors &amp; roles</h1>
      <p class="lede">AGP is an <strong>agent-to-agent</strong> protocol. Its core
      interaction is between a <strong>constituent-side agent</strong> and a
      <strong>government agency agent</strong>. Behind those agents stand the people and
      institutions they represent: four actors, one of which &mdash; the intermediary &mdash; is
      distinctive to the government context.</p>

      <figure>
        <div class="figure-box">
          <svg viewBox="0 0 760 360" role="img" aria-labelledby="actorsDiagTitle actorsDiagDesc" width="760" height="360">
            <title id="actorsDiagTitle">AGP agent-to-agent actor diagram</title>
            <desc id="actorsDiagDesc">A constituent (and an intermediary who can act for them) is represented by a constituent-side agent on the left. A government agency, the agency of record, is represented by a government agency agent on the right. The two agents exchange AGP messages: the constituent agent sends requests, the agency agent returns receipts. Authority over eligibility and provisioning stays with the agency of record.</desc>
            <defs>
              <marker id="aarrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#3c4a63"/></marker>
            </defs>
            <g font-family="-apple-system, Segoe UI, Roboto, sans-serif">
              <!-- left people -->
              <rect x="24" y="150" width="150" height="70" rx="12" fill="#eaf0fe" stroke="#1d4ed8" stroke-width="2"/>
              <text x="99" y="180" text-anchor="middle" font-size="15" font-weight="700" fill="#14358f">Constituent</text>
              <text x="99" y="200" text-anchor="middle" font-size="11.5" fill="#3c4a63">person / household</text>
              <rect x="24" y="40" width="150" height="66" rx="12" fill="#f6f8fb" stroke="#5d6b85" stroke-width="2"/>
              <text x="99" y="68" text-anchor="middle" font-size="15" font-weight="700" fill="#11203a">Intermediary</text>
              <text x="99" y="88" text-anchor="middle" font-size="11.5" fill="#3c4a63">navigator / NGO</text>
              <!-- constituent agent -->
              <rect x="250" y="120" width="160" height="120" rx="14" fill="#fff" stroke="#1d4ed8" stroke-width="2.5"/>
              <text x="330" y="158" text-anchor="middle" font-size="15" font-weight="700" fill="#14358f">Constituent</text>
              <text x="330" y="176" text-anchor="middle" font-size="15" font-weight="700" fill="#14358f">agent</text>
              <text x="330" y="206" text-anchor="middle" font-size="11.5" fill="#3c4a63">acts on behalf of</text>
              <text x="330" y="221" text-anchor="middle" font-size="11.5" fill="#3c4a63">the constituent</text>
              <!-- agency agent -->
              <rect x="470" y="120" width="160" height="120" rx="14" fill="#fff" stroke="#0f766e" stroke-width="2.5"/>
              <text x="550" y="158" text-anchor="middle" font-size="15" font-weight="700" fill="#0f766e">Agency</text>
              <text x="550" y="176" text-anchor="middle" font-size="15" font-weight="700" fill="#0f766e">agent</text>
              <text x="550" y="206" text-anchor="middle" font-size="11.5" fill="#3c4a63">represents the</text>
              <text x="550" y="221" text-anchor="middle" font-size="11.5" fill="#3c4a63">agency of record</text>
              <!-- agency of record -->
              <rect x="666" y="130" width="78" height="100" rx="12" fill="#e2f3f0" stroke="#0f766e" stroke-width="2"/>
              <text x="705" y="170" text-anchor="middle" font-size="12.5" font-weight="700" fill="#0f766e">Agency</text>
              <text x="705" y="186" text-anchor="middle" font-size="12.5" font-weight="700" fill="#0f766e">of record</text>
              <text x="705" y="206" text-anchor="middle" font-size="10.5" fill="#3c4a63">holds</text>
              <text x="705" y="219" text-anchor="middle" font-size="10.5" fill="#3c4a63">authority</text>
            </g>
            <g stroke="#3c4a63" stroke-width="1.8" fill="none">
              <path d="M174 182 L250 182" marker-end="url(#aarrow)"/>
              <path d="M99 106 C99 150 180 150 250 160" stroke-dasharray="5 4" marker-end="url(#aarrow)"/>
              <path d="M410 160 L470 160" marker-end="url(#aarrow)"/>
              <path d="M470 200 L410 200" marker-end="url(#aarrow)"/>
              <path d="M630 180 L666 180" marker-end="url(#aarrow)"/>
            </g>
            <g font-family="-apple-system, Segoe UI, Roboto, sans-serif" font-size="11" fill="#3c4a63">
              <text x="212" y="174" text-anchor="middle">uses</text>
              <text x="440" y="150" text-anchor="middle">request</text>
              <text x="440" y="216" text-anchor="middle">receipt</text>
              <text x="180" y="132" text-anchor="start" font-style="italic">may operate</text>
              <text x="648" y="170" text-anchor="middle">within</text>
              <text x="440" y="262" text-anchor="middle" font-weight="700" fill="#0f766e">&larr;&mdash;&mdash; agent-to-agent (AGP) &mdash;&mdash;&rarr;</text>
            </g>
          </svg>
        </div>
        <figcaption>AGP&rsquo;s core interaction is agent-to-agent. People and institutions
        stand behind the agents; authority remains with the agency of record.</figcaption>
      </figure>

      ${h('table', 'The four actors')}
      <div class="table-wrap">
      <table>
        <thead><tr><th>Actor</th><th>Role</th><th>Operates</th></tr></thead>
        <tbody>
          <tr><td><strong>Constituent</strong></td><td>The person or household seeking a service or benefit. The source of authority.</td><td>&mdash; (is represented)</td></tr>
          <tr><td><strong>Agent</strong></td><td>Software acting on the constituent&rsquo;s behalf &mdash; the Public AI Option, a state agent, or a trusted third-party / NGO agent.</td><td>Constituent-side agent</td></tr>
          <tr><td><strong>Intermediary</strong></td><td>NGOs, navigators, caseworkers, trusted orgs (and data intermediaries) that assist constituents &mdash; including by running an agent for them.</td><td>Constituent-side agent (for others)</td></tr>
          <tr><td><strong>Government agency</strong></td><td>The service provider &mdash; the <strong>agency of record</strong> that retains authority over eligibility and provisioning.</td><td>Agency agent</td></tr>
        </tbody>
      </table>
      </div>

      ${h('constituent', 'Constituent')}
      <p>The person or household at the center of every flow, and the source of all
      authority an agent exercises. AGP is judged by whether it makes that person&rsquo;s
      experience of government simpler, faster, and more dignified.</p>

      ${h('agent', 'Constituent-side agent')}
      <p>Software acting on the constituent&rsquo;s behalf &mdash; discovering services, assembling
      attributes, checking eligibility, submitting requests, and relaying receipts by
      speaking to agency agents. It may be the shared &ldquo;Public AI Option,&rdquo; a
      state-operated agent, or a trusted third-party or NGO agent. It is a fiduciary of
      <em>action</em>, never a decision-maker of record.</p>

      ${h('agency-agent', 'Government agency agent')}
      <p>The agency&rsquo;s machine endpoint and counterpart in every exchange. The agency
      agent advertises the agency&rsquo;s services, answers eligibility queries, verifies
      authorization, accepts <code>ServiceRequest</code>s, and returns
      <code>Receipt</code>s &mdash; all strictly within the authority delegated to it by the
      agency of record. It is how an agency becomes reachable by any compliant agent
      without bespoke, agent-by-agent integration.</p>

      ${h('intermediary', 'Intermediary')}
      <p>The actor with no clean commercial analog, and the one that makes AGP a
      <em>government</em> protocol. Intermediaries are caseworkers, navigators, legal-aid
      orgs, community organizations, libraries, and benefits-screening nonprofits &mdash; plus
      <em>data intermediaries</em> that broker attributes between systems.</p>
      <p>Intermediaries matter for <strong>equity</strong>: many constituents do not have,
      or do not want, their own agent or device. The intermediary is how those people are
      still served &mdash; by operating a constituent-side agent <em>for</em> them, or by
      carrying the same flow through a human-staffed channel. AGP keeps the intermediary a
      first-class participant, never a workaround.</p>

      ${h('agency', 'Government agency (agency of record)')}
      <p>The institution that owns the service and the determination. It publishes service
      metadata and eligibility rules, verifies authorization, makes the eligibility
      determination, provisions the benefit, and issues the receipt &mdash; through its agency
      agent. Authority stops here and does not transfer: an agent can <em>ask</em>, but
      only the agency of record can <em>decide</em>. That is the load-bearing trust anchor
      of the whole protocol.</p>

      <div class="callout callout--note">
        <p class="callout__label">Trust relationships in one line</p>
        <p>The <strong>constituent</strong> authorizes a <strong>constituent-side agent</strong>
        (possibly run by an <strong>intermediary</strong>) to carry a standardized request,
        agent-to-agent, to the <strong>agency agent</strong> of the
        <strong>agency of record</strong>, which alone decides and provisions, then returns
        a receipt along the same chain.</p>
      </div>`
},

/* ====================================================================== *
 * CONCEPTS
 * ==================================================================== */
{ slug: 'concepts',
  desc: 'AGP defines a small core vocabulary — Service, EligibilityRule, Authorization, ServiceRequest, Receipt/StatusRecord, and the actor types — plus an extension mechanism for the long tail. The concrete schema is on the Schema page.',
  body: `      <p class="eyebrow">Specification</p>
      <h1>Core concepts &amp; vocabulary</h1>
      <p class="lede">AGP keeps a deliberately small core of common types and pushes the
      long tail to extensions. The core is the set of objects that move between agents in
      the <a href="flow.html">canonical flow</a>; every flow step maps to one of these
      types. The concrete field-level definitions live on <a href="schema.html">The
      schema</a>.</p>

      ${h('core', 'The core types')}
      <div class="table-wrap">
      <table>
        <thead><tr><th>Type</th><th>One-line definition</th><th>Flow step</th></tr></thead>
        <tbody>
          <tr><td><code>Service</code></td><td>A government service or benefit, with the channels it&rsquo;s offered through and what it requires. Published once by the agency agent.</td><td>1 &middot; Discovery</td></tr>
          <tr><td><code>EligibilityRule</code></td><td>A machine-readable condition (or set of conditions) the agency uses to determine who qualifies, expressed over named attributes.</td><td>2 &middot; Eligibility</td></tr>
          <tr><td><code>Authorization</code></td><td>A scoped grant from a constituent letting a specific agent act on their behalf and use specific data for a specific purpose.</td><td>3 &middot; Authorization</td></tr>
          <tr><td><code>ServiceRequest</code></td><td>A standardized request an agent submits to the agency agent, referencing a Service and an Authorization.</td><td>4 &middot; Request</td></tr>
          <tr><td><code>Receipt</code> / <code>StatusRecord</code></td><td>The agency&rsquo;s standardized response: outcome, audit trail, current status, and the path to correction or appeal.</td><td>5 &middot; Receipt</td></tr>
        </tbody>
      </table>
      </div>
      <p>Alongside these five process types, the core names the actor types &mdash;
      <code>Constituent</code>, <code>Agent</code>, <code>Intermediary</code>, and
      <code>Agency</code> &mdash; and the two agent roles (<code>constituent-agent</code>,
      <code>agency-agent</code>) that produce and consume the objects above. That is the
      entire core. Everything else is an extension.</p>

      ${h('extensions', 'The extension mechanism')}
      <p>The core cannot anticipate every program, state, or category of benefit &mdash; nor
      should it try:</p>
      <ul>
        <li><strong>Extensions carry the long tail.</strong> A program or jurisdiction
        that needs terms the core lacks defines them in a namespaced extension (e.g.
        <code>snap:</code>, <code>ca:</code>) rather than waiting for the core to grow.</li>
        <li><strong>A <code>pending</code> staging area.</strong> Proposed additions live
        in <code>pending</code>, where they can be seen and used together &mdash; explicitly
        marked subject to change &mdash; before they graduate into core.</li>
        <li><strong>Graduation by consensus, additively.</strong> Terms that prove broadly
        useful fold into the core through the <a href="governance.html">public process</a>.
        The core grows slowly and never breaks existing extensions.</li>
        <li><strong>Bias to the simplest thing that works.</strong> Adoption by real
        agencies is the success metric, not vocabulary completeness.</li>
      </ul>

      <div class="callout">
        <p class="callout__label">Why small-core matters here</p>
        <p>Government programs are heterogeneous by design &mdash; SNAP, Medicaid, unemployment
        insurance, and a local utility-assistance program share almost no fields. A large,
        rigid core would be wrong for most of them. A small core plus extensions lets each
        program be precise without forcing one schema on all of them.</p>
      </div>
      <p>Ready for specifics? See <a href="schema.html">The schema &rarr;</a></p>`
},

/* ====================================================================== *
 * FLOW
 * ==================================================================== */
{ slug: 'flow', wide: true,
  desc: 'The canonical AGP flow between a constituent-side agent and a government agency agent: service discovery, eligibility assessment, authorization and consent, service request and delivery, and receipt, status and recourse.',
  body: `      <p class="eyebrow">Specification &middot; the heart of AGP</p>
      <h1>The canonical flow</h1>
      <p class="lede">AGP decomposes service delivery into five steps exchanged
      <strong>agent-to-agent</strong> &mdash; between a constituent-side agent and a government
      agency agent. Each step produces or consumes a <a href="concepts.html">core type</a>
      (defined concretely in <a href="schema.html">The schema</a>).</p>

      <figure>
        <div class="figure-box">
          <svg viewBox="0 0 760 300" role="img" aria-labelledby="flowTitle flowDesc" width="760" height="300">
            <title id="flowTitle">AGP canonical flow diagram</title>
            <desc id="flowDesc">Five sequential steps shown left to right: Service discovery producing a Service object, Eligibility assessment using EligibilityRule, Authorization and consent producing an Authorization, Service request producing a ServiceRequest, and Receipt producing a Receipt or StatusRecord. Each step is an exchange between the constituent agent and the agency agent. The agency of record holds authority over steps four and five.</desc>
            <defs>
              <marker id="farrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d4ed8"/></marker>
            </defs>
            <g font-family="-apple-system, Segoe UI, Roboto, sans-serif">
              <text x="20" y="28" font-size="11.5" font-weight="700" fill="#14358f">constituent agent</text>
              <text x="740" y="28" text-anchor="end" font-size="11.5" font-weight="700" fill="#0f766e">agency agent</text>
              ${[
                ['1','Service discovery','Service','#1d4ed8'],
                ['2','Eligibility assessment','EligibilityRule','#1d4ed8'],
                ['3','Authorization &amp; consent','Authorization','#b45309'],
                ['4','Service request','ServiceRequest','#0f766e'],
                ['5','Receipt &amp; recourse','Receipt','#0f766e'],
              ].map((s,i)=>{const x=20+i*148;return `
              <g>
                <circle cx="${x+30}" cy="68" r="18" fill="${s[3]}"/>
                <text x="${x+30}" y="74" text-anchor="middle" font-size="16" font-weight="700" fill="#fff">${s[0]}</text>
                <rect x="${x}" y="108" width="124" height="92" rx="10" fill="#fff" stroke="${s[3]}" stroke-width="2"/>
                <text x="${x+62}" y="140" text-anchor="middle" font-size="12.5" font-weight="700" fill="#11203a">${s[1].split(' ').map((w,j)=>`<tspan x="${x+62}" dy="${j?14:0}">${w}</tspan>`).join('')}</text>
                <text x="${x+62}" y="186" text-anchor="middle" font-family="ui-monospace, Menlo, monospace" font-size="10.5" fill="${s[3]}">${s[2]}</text>
              </g>${i<4?`<path d="M${x+126} 154 L${x+146} 154" stroke="#1d4ed8" stroke-width="2" marker-end="url(#farrow)"/>`:''}`}).join('')}
              <rect x="464" y="232" width="276" height="46" rx="8" fill="#e2f3f0" stroke="#0f766e" stroke-width="1.5"/>
              <text x="602" y="253" text-anchor="middle" font-size="12" font-weight="700" fill="#0f766e">Agency of record holds authority</text>
              <text x="602" y="270" text-anchor="middle" font-size="11" fill="#3c4a63">determination &amp; provisioning stay here</text>
              <path d="M380 200 L520 232" stroke="#0f766e" stroke-width="1.4" stroke-dasharray="4 3" fill="none"/>
              <path d="M676 200 L640 232" stroke="#0f766e" stroke-width="1.4" stroke-dasharray="4 3" fill="none"/>
            </g>
          </svg>
        </div>
        <figcaption>The five AGP steps, each labeled with the core object it produces, and
        each an exchange between the two agents. Steps&nbsp;4&ndash;5 are anchored to the agency
        of record.</figcaption>
      </figure>

      ${h('steps', 'Step by step')}
      <ol class="steps">
        <li>
          ${h3('s1','Service discovery')}
          <span class="step-type">reads &rarr; Service</span>
          <p>The constituent agent queries the agency agent&rsquo;s published catalog to learn
          which services exist, who&rsquo;s eligible, what&rsquo;s needed, and through which
          channels. Discovery is read-only and requires no constituent data: it answers
          <em>&ldquo;what is available and what would it take?&rdquo;</em> Because the agency
          publishes this once, any compliant agent can read it.</p>
        </li>
        <li>
          ${h3('s2','Eligibility assessment')}
          <span class="step-type">reads &rarr; EligibilityRule</span>
          <p>With the constituent&rsquo;s consent, the constituent agent assembles the relevant
          attributes (identity, household, income, residency&hellip;) and checks them
          against the agency&rsquo;s eligibility rules &mdash; either evaluating the published rules
          locally or asking the agency agent for a determination preview. AGP supports a
          <strong>validate-after</strong> option where appropriate: provisionally proceed
          on attested attributes and verify later. The determination itself still belongs
          to the agency.</p>
        </li>
        <li>
          ${h3('s3','Authorization &amp; consent')}
          <span class="step-type">produces &rarr; Authorization</span>
          <p>The constituent authorizes <em>this</em> agent to act on their behalf and
          consents to <em>specific, scoped</em> data use; the agency agent verifies that
          authorization before acting. <strong>This is the named gap.</strong> v1 defines
          the interaction points &mdash; where authorization is granted, what it scopes, how
          it is verified, and how it is revoked &mdash; but defers the cryptographic / identity
          mechanism to a <a href="authorization.html">companion layer</a>.</p>
        </li>
        <li>
          ${h3('s4','Service request &amp; delivery')}
          <span class="step-type">produces &rarr; ServiceRequest</span>
          <p>The constituent agent submits a standardized <code>ServiceRequest</code> &mdash;
          referencing the <code>Service</code> and the <code>Authorization</code> &mdash; to the
          agency agent. The <strong>agency of record</strong> processes it, automatically
          and instantly where it can, makes the eligibility determination, and provisions
          the service or benefit. Authority for the determination never leaves the agency;
          the agent&rsquo;s role ends at submitting a well-formed request.</p>
        </li>
        <li>
          ${h3('s5','Receipt, status &amp; recourse')}
          <span class="step-type">produces &rarr; Receipt / StatusRecord</span>
          <p>The agency agent returns a standardized <code>Receipt</code> and ongoing
          <code>StatusRecord</code> to the constituent (via their agent and/or directly).
          It includes the outcome, an <strong>audit trail</strong> of what was submitted
          and decided, live status tracking, and an explicit <strong>correction / appeal
          path</strong>. Recourse is part of the protocol: a constituent must always be
          able to see, contest, and correct what was done in their name.</p>
        </li>
      </ol>

      <div class="callout callout--official">
        <p class="callout__label">The control invariant</p>
        <p>Across all five steps, one thing never moves: <strong>authority</strong>. The
        constituent agent discovers, assembles, asks, and reports. The
        <strong>agency of record</strong> decides and provisions. Every AGP message traces
        back to an authoritative agency &mdash; which is what lets a constituent trust the
        result.</p>
      </div>
      <p>See all five steps applied to a real household in the
      <a href="example.html">worked example &rarr;</a></p>`
},

/* ====================================================================== *
 * SCHEMA
 * ==================================================================== */
{ slug: 'schema', wide: true,
  desc: 'The concrete AGP schema: draft JSON shapes for the agency catalog, Service, EligibilityRule, Authorization, ServiceRequest, and Receipt — plus how AGP reuses existing government data definitions and rides existing agent transports.',
  body: `      <p class="eyebrow">Specification</p>
      <h1>The schema</h1>
      <p class="lede">This is the concrete shape of AGP. The objects below are the
      <a href="concepts.html">core types</a> rendered as draft JSON. They are
      <strong>v0.1 illustrative</strong> &mdash; deliberately small, meant to be co-authored
      with agencies against real systems, not a frozen specification.</p>

      <div class="callout callout--note">
        <p class="callout__label">Reuse over reinvention</p>
        <p>AGP does not redefine what &ldquo;income,&rdquo; &ldquo;household,&rdquo; or &ldquo;residency&rdquo; mean &mdash;
        those live in mature government data models. AGP objects are thin
        <strong>envelopes</strong> that <em>reference</em> existing definitions and carry
        them through the flow. See <a href="related-work.html">Related work</a> for the
        standards AGP builds on, and <a href="get-started.html">Get started</a> for the
        agency&rsquo;s side.</p>
      </div>

      ${h('catalog', 'The discovery document')}
      <p>An agency agent advertises itself and its services with a single, published
      <strong>catalog</strong>. This is the entry point of step&nbsp;1 &mdash; the
      &ldquo;publish once, read everywhere&rdquo; artifact.</p>
<pre><code><span class="c-com">// GET https://agency.example.gov/.well-known/agp/catalog.json</span>
{
  <span class="c-key">"agp"</span>: <span class="c-str">"0.1"</span>,
  <span class="c-key">"agencyOfRecord"</span>: {
    <span class="c-key">"id"</span>: <span class="c-str">"us-xx-dhs"</span>,
    <span class="c-key">"name"</span>: <span class="c-str">"State of XX, Department of Human Services"</span>,
    <span class="c-key">"jurisdiction"</span>: <span class="c-str">"us-xx"</span>
  },
  <span class="c-key">"agencyAgent"</span>: {
    <span class="c-key">"endpoint"</span>: <span class="c-str">"https://agency.example.gov/agp"</span>,
    <span class="c-key">"transports"</span>: [<span class="c-str">"mcp"</span>, <span class="c-str">"https+json"</span>],
    <span class="c-key">"authorization"</span>: <span class="c-str">"ref:companion-layer"</span>
  },
  <span class="c-key">"services"</span>: [<span class="c-str">"ref:us-xx-snap"</span>, <span class="c-str">"ref:us-xx-medicaid"</span>]
}</code></pre>

      ${h('service', 'Service')}
      <p>A service or benefit and what it takes to get it. Read during discovery.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Field</th><th>Type</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td><code>id</code></td><td>string</td><td>Required. Globally unique service id.</td></tr>
          <tr><td><code>agencyOfRecord</code></td><td>string</td><td>Required. The authority behind this service.</td></tr>
          <tr><td><code>name</code> / <code>summary</code></td><td>string</td><td>Human-readable, plain-language.</td></tr>
          <tr><td><code>channels</code></td><td>string[]</td><td>e.g. <code>agp</code>, <code>web</code>, <code>in-person</code>, <code>phone</code>.</td></tr>
          <tr><td><code>requires</code></td><td>attr[]</td><td>Attribute refs into existing data models.</td></tr>
          <tr><td><code>eligibility</code></td><td>ref</td><td>Reference to an EligibilityRule.</td></tr>
          <tr><td><code>deliveryPattern</code></td><td>enum</td><td><code>instant</code> | <code>validate-after</code> | <code>manual</code>.</td></tr>
        </tbody>
      </table></div>
<pre><code>{
  <span class="c-key">"type"</span>: <span class="c-str">"Service"</span>,
  <span class="c-key">"id"</span>: <span class="c-str">"us-xx-snap"</span>,
  <span class="c-key">"agencyOfRecord"</span>: <span class="c-str">"us-xx-dhs"</span>,
  <span class="c-key">"name"</span>: <span class="c-str">"Supplemental Nutrition Assistance Program (SNAP)"</span>,
  <span class="c-key">"summary"</span>: <span class="c-str">"Monthly help buying groceries for eligible households."</span>,
  <span class="c-key">"channels"</span>: [<span class="c-str">"agp"</span>, <span class="c-str">"web"</span>, <span class="c-str">"in-person"</span>, <span class="c-str">"phone"</span>],
  <span class="c-key">"requires"</span>: [
    { <span class="c-key">"attr"</span>: <span class="c-str">"identity"</span>,      <span class="c-key">"model"</span>: <span class="c-str">"niem:PersonName"</span> },
    { <span class="c-key">"attr"</span>: <span class="c-str">"householdSize"</span>, <span class="c-key">"model"</span>: <span class="c-str">"niem:HouseholdSize"</span> },
    { <span class="c-key">"attr"</span>: <span class="c-str">"income"</span>,        <span class="c-key">"model"</span>: <span class="c-str">"niem:IncomeAmount"</span> },
    { <span class="c-key">"attr"</span>: <span class="c-str">"residency"</span>,     <span class="c-key">"model"</span>: <span class="c-str">"niem:LocationState"</span> }
  ],
  <span class="c-key">"eligibility"</span>: <span class="c-str">"ref:us-xx-snap-rules"</span>,
  <span class="c-key">"deliveryPattern"</span>: <span class="c-str">"validate-after"</span>
}</code></pre>

      ${h('eligibility', 'EligibilityRule')}
      <p>Machine-readable conditions, expressed over the attributes a Service declares.
      Published by the agency so agents can preview eligibility before applying.</p>
<pre><code>{
  <span class="c-key">"type"</span>: <span class="c-str">"EligibilityRule"</span>,
  <span class="c-key">"id"</span>: <span class="c-str">"us-xx-snap-rules"</span>,
  <span class="c-key">"service"</span>: <span class="c-str">"us-xx-snap"</span>,
  <span class="c-key">"effective"</span>: <span class="c-str">"2026-01-01"</span>,
  <span class="c-key">"allOf"</span>: [
    { <span class="c-key">"attr"</span>: <span class="c-str">"residency"</span>, <span class="c-key">"equals"</span>: <span class="c-str">"us-xx"</span> },
    { <span class="c-key">"attr"</span>: <span class="c-str">"income.monthlyGross"</span>,
      <span class="c-key">"atMostPctFPL"</span>: <span class="c-num">130</span>, <span class="c-key">"byHousehold"</span>: <span class="c-str">"householdSize"</span> }
  ],
  <span class="c-key">"provisionalIf"</span>: { <span class="c-key">"attr"</span>: <span class="c-str">"income.recentLoss"</span>, <span class="c-key">"equals"</span>: <span class="c-num">true</span> }
}</code></pre>

      ${h('authorization-obj', 'Authorization')}
      <p>A scoped grant from the constituent. v0.1 specifies the <em>shape and scope</em>;
      the cryptographic proof in <code>proof</code> is supplied by the
      <a href="authorization.html">companion layer</a>.</p>
<pre><code>{
  <span class="c-key">"type"</span>: <span class="c-str">"Authorization"</span>,
  <span class="c-key">"id"</span>: <span class="c-str">"auth_9f2c..."</span>,
  <span class="c-key">"constituent"</span>: <span class="c-str">"did:example:maria"</span>,        <span class="c-com">// identity ref</span>
  <span class="c-key">"agent"</span>: <span class="c-str">"agent:public-ai-option"</span>,
  <span class="c-key">"purpose"</span>: <span class="c-str">"Apply for SNAP"</span>,
  <span class="c-key">"scope"</span>: {
    <span class="c-key">"services"</span>: [<span class="c-str">"us-xx-snap"</span>],
    <span class="c-key">"data"</span>: [<span class="c-str">"identity"</span>, <span class="c-str">"householdSize"</span>, <span class="c-str">"income"</span>, <span class="c-str">"residency"</span>],
    <span class="c-key">"expires"</span>: <span class="c-str">"2026-07-01T00:00:00Z"</span>
  },
  <span class="c-key">"revocable"</span>: <span class="c-num">true</span>,
  <span class="c-key">"proof"</span>: <span class="c-str">"ref:companion-layer"</span>           <span class="c-com">// deferred mechanism</span>
}</code></pre>

      ${h('request', 'ServiceRequest')}
      <p>What the constituent agent sends to the agency agent. It references a Service and
      an Authorization, and carries (or points to) the required attributes.</p>
<pre><code>{
  <span class="c-key">"type"</span>: <span class="c-str">"ServiceRequest"</span>,
  <span class="c-key">"id"</span>: <span class="c-str">"req_4a17..."</span>,
  <span class="c-key">"service"</span>: <span class="c-str">"us-xx-snap"</span>,
  <span class="c-key">"authorization"</span>: <span class="c-str">"auth_9f2c..."</span>,
  <span class="c-key">"attributes"</span>: {
    <span class="c-key">"householdSize"</span>: <span class="c-num">3</span>,
    <span class="c-key">"income"</span>: { <span class="c-key">"monthlyGross"</span>: <span class="c-num">0</span>, <span class="c-key">"recentLoss"</span>: <span class="c-num">true</span> },
    <span class="c-key">"residency"</span>: <span class="c-str">"us-xx"</span>
  },
  <span class="c-key">"attestation"</span>: <span class="c-str">"self-attested"</span>,        <span class="c-com">// or "verified"</span>
  <span class="c-key">"submittedAt"</span>: <span class="c-str">"2026-06-11T15:04:00Z"</span>
}</code></pre>

      ${h('receipt', 'Receipt / StatusRecord')}
      <p>The agency&rsquo;s authoritative response &mdash; outcome, audit trail, live status, and
      recourse. This is what makes an AGP outcome trustworthy and contestable.</p>
<pre><code>{
  <span class="c-key">"type"</span>: <span class="c-str">"Receipt"</span>,
  <span class="c-key">"id"</span>: <span class="c-str">"rcpt_77b0..."</span>,
  <span class="c-key">"request"</span>: <span class="c-str">"req_4a17..."</span>,
  <span class="c-key">"agencyOfRecord"</span>: <span class="c-str">"us-xx-dhs"</span>,
  <span class="c-key">"outcome"</span>: <span class="c-str">"approved-provisional"</span>,
  <span class="c-key">"benefit"</span>: { <span class="c-key">"amountMonthly"</span>: <span class="c-num">535</span>, <span class="c-key">"currency"</span>: <span class="c-str">"USD"</span>,
               <span class="c-key">"delivery"</span>: <span class="c-str">"EBT"</span>, <span class="c-key">"startsBy"</span>: <span class="c-str">"2026-06-13"</span> },
  <span class="c-key">"status"</span>: <span class="c-str">"documentation-pending"</span>,
  <span class="c-key">"audit"</span>: [
    { <span class="c-key">"at"</span>: <span class="c-str">"2026-06-11T15:04:01Z"</span>, <span class="c-key">"event"</span>: <span class="c-str">"request-received"</span> },
    { <span class="c-key">"at"</span>: <span class="c-str">"2026-06-11T15:04:02Z"</span>, <span class="c-key">"event"</span>: <span class="c-str">"authorization-verified"</span> },
    { <span class="c-key">"at"</span>: <span class="c-str">"2026-06-11T15:04:03Z"</span>, <span class="c-key">"event"</span>: <span class="c-str">"determination"</span>, <span class="c-key">"by"</span>: <span class="c-str">"us-xx-dhs"</span> }
  ],
  <span class="c-key">"recourse"</span>: { <span class="c-key">"appealUrl"</span>: <span class="c-str">"https://agency.example.gov/appeal/77b0"</span>,
               <span class="c-key">"correctUrl"</span>: <span class="c-str">"https://agency.example.gov/correct/77b0"</span> }
}</code></pre>

      ${h('validate-after', 'Delivery patterns &amp; validate-after')}
      <p>A <code>Service</code> declares its <code>deliveryPattern</code>. Where law and
      program rules permit, <strong>validate-after</strong> lets the agency provision
      provisionally on attested attributes and verify afterward &mdash; so a household in need
      isn&rsquo;t blocked waiting on a slow check. The receipt reflects the provisional status
      and any later reconciliation. It is an <em>allowed</em> pattern, never required; the
      agency of record decides whether a program can safely use it.</p>

      ${h('transport', 'Transport')}
      <p>AGP defines <em>what</em> moves, not a new wire protocol. Agency agents advertise
      their <code>transports</code> &mdash; typically an existing agent transport such as
      <abbr title="Model Context Protocol">MCP</abbr> or plain HTTPS+JSON &mdash; so AGP rides
      infrastructure agents already speak. See <a href="related-work.html">Related work</a>.</p>

      ${h('out', 'What is intentionally not here yet')}
      <p>Full normative JSON Schema / OpenAPI for every object, a formal eligibility-rule
      language, and signed-envelope formats are <a href="roadmap.html">deferred</a>. v0.1
      names the shapes; formalizing them is co-authorship work to be done with agencies.</p>`
},

/* ====================================================================== *
 * AUTHORIZATION
 * ==================================================================== */
{ slug: 'authorization',
  desc: 'AGP v1 names the authorization, consent, and identity gap explicitly: it defines the requirement and the interaction points between the two agents but defers the cryptographic and identity mechanism to a companion layer.',
  body: `      <p class="eyebrow">Specification &middot; companion concern</p>
      <h1>Authorization, consent &amp; identity</h1>
      <p class="lede">This is the hard part, and AGP names it as such. The protocol can
      standardize the flow of requests and receipts between agents &mdash; but proving that a
      constituent truly authorized an agent, scoping what that agent may do, and assigning
      liability when it goes wrong is a distinct problem. v1 defines the
      <strong>requirement and the interaction points</strong>; it deliberately defers the
      mechanism to a companion layer.</p>

      <div class="callout callout--gap">
        <p class="callout__label">A deliberate boundary</p>
        <p>AGP standardizes the service-delivery <em>flow</em> but does <strong>not</strong>
        solve cryptographic proof that a user authorized an agent. That is left to a
        dedicated <strong>authorization / identity layer</strong> &mdash; potentially its own
        sibling standard &mdash; so the flow can ship without waiting on an unsolved problem.
        (Other agent ecosystems have drawn the same boundary; see
        <a href="related-work.html">Related work</a>.)</p>
      </div>

      ${h('requirement', 'The requirement')}
      <p>For any AGP flow that acts on a constituent&rsquo;s behalf, four things must be true,
      and an agency agent must be able to satisfy itself of each before the agency of
      record acts:</p>
      <ol>
        <li><strong>Authorization exists.</strong> A specific constituent granted a
        specific agent permission to act for them.</li>
        <li><strong>Consent is scoped.</strong> The grant names the purpose, the data it
        covers, and the program(s) it applies to &mdash; not a blanket license.</li>
        <li><strong>It is verifiable by the agency.</strong> The agency agent can check the
        authorization against the request it received.</li>
        <li><strong>It is revocable and auditable.</strong> The constituent can withdraw
        it, and there is a durable record of what was authorized and used.</li>
      </ol>

      ${h('interaction-points', 'The interaction points v1 defines')}
      <p>AGP v1 specifies <em>where</em> in the flow authorization and consent are
      exercised, leaving <em>how</em> they are cryptographically proven to the companion
      layer (the <code>proof</code> field on an <a href="schema.html#authorization-obj">Authorization</a>):</p>
      <div class="table-wrap">
      <table>
        <thead><tr><th>Interaction point</th><th>What AGP v1 specifies</th><th>Deferred to companion layer</th></tr></thead>
        <tbody>
          <tr><td><strong>Grant</strong></td><td>The constituent issues a scoped <code>Authorization</code> to a named agent at step&nbsp;3.</td><td>The signature / credential format proving it.</td></tr>
          <tr><td><strong>Scope</strong></td><td>The grant carries purpose, data categories, and program scope.</td><td>The machine-enforceable mandate encoding.</td></tr>
          <tr><td><strong>Verify</strong></td><td>The agency agent checks an <code>Authorization</code> reference on each <code>ServiceRequest</code>.</td><td>The identity-proofing and verification protocol.</td></tr>
          <tr><td><strong>Revoke</strong></td><td>An authorization can be revoked and the revocation is reflected in status.</td><td>Revocation propagation / freshness guarantees.</td></tr>
          <tr><td><strong>Audit</strong></td><td>The <code>Receipt</code> records what authorization was relied upon.</td><td>Tamper-evidence / non-repudiation cryptography.</td></tr>
        </tbody>
      </table>
      </div>

      ${h('consent', 'Consent, scoping, and defaults')}
      <p>Consent in AGP is <strong>specific and legible</strong>: a constituent consents to
      a purpose (&ldquo;apply for SNAP&rdquo;), over named data (&ldquo;household size, income,
      residency&rdquo;), for named programs, for a bounded time. Whether a given program is
      <strong>opt-in or opt-out</strong> by default &mdash; and how consent is scoped and
      revoked &mdash; is a policy choice AGP surfaces explicitly rather than burying. v1 takes
      no position on the right default for any specific program; it requires only that the
      default be stated, not implied. (See <a href="open-questions.html">Open questions</a>.)</p>

      ${h('identity', 'Identity and the constituent without an agent')}
      <p>Authorization presupposes a way to know <em>who</em> the constituent is. AGP does
      not specify an identity system; it expects to ride on existing government identity
      and the companion layer. And because not every constituent has an agent or a
      verifiable digital identity, the <a href="actors.html#intermediary">intermediary</a>
      is the load-bearing fallback: a navigator or caseworker can carry the same
      authorization and consent steps on a constituent&rsquo;s behalf through a human channel.</p>

      ${h('liability', 'Liability')}
      <p>If an agent acts on stale or wrong data, who is responsible to the constituent,
      and what is the path to make them whole? AGP v1 does not resolve liability &mdash; it
      flags it as inseparable from the authorization mechanism and routes it to the same
      companion work, while insisting that the <a href="flow.html#s5">recourse step</a>
      give the constituent a real correction and appeal path regardless of where fault
      ultimately lands.</p>

      <div class="callout callout--note">
        <p class="callout__label">Why defer rather than invent</p>
        <p>Inventing a bespoke AGP crypto/identity scheme would violate
        <a href="principles.html#p6">reuse over reinvention</a> and couple AGP&rsquo;s adoption
        to an unsolved research problem. Naming the gap and defining clean interaction
        points lets the flow ship now and lets the authorization layer evolve &mdash; possibly
        as its own sibling standard.</p>
      </div>`
},

/* ====================================================================== *
 * EXAMPLE
 * ==================================================================== */
{ slug: 'example', wide: true,
  desc: 'A worked example: a household applies for SNAP after a job loss, walked end-to-end through all five AGP steps as an agent-to-agent exchange, showing what each actor does and which objects move.',
  body: `      <p class="eyebrow">Specification &middot; worked example</p>
      <h1>Worked example: SNAP after a job loss</h1>
      <p class="lede">Here is the home-page vignette opened all the way up: one concrete,
      high-volume service walked end-to-end through all five steps, as an exchange between
      Maria&rsquo;s agent and the state agency&rsquo;s agent. Watch which
      <a href="schema.html">object</a> moves at each step.</p>

      <div class="callout callout--note">
        <p class="callout__label">The scenario</p>
        <p><strong>Maria</strong>, in the (fictional) State of XX, was laid off two weeks
        ago; her household of three has lost its main income. She uses a
        <strong>Public AI Option agent</strong> (her constituent-side agent). Her local
        food bank, a trusted <strong>intermediary</strong>, is available if she needs a
        human. The <strong>agency of record</strong> is the State of XX Department of Human
        Services (DHS), reachable through its <strong>agency agent</strong>.</p>
      </div>

      <ol class="steps">
        <li>
          ${h3('e1','Discovery — what help exists')}
          <span class="step-type">Service</span>
          <p>Maria&rsquo;s agent queries the DHS agency agent&rsquo;s
          <a href="schema.html#catalog">catalog</a> and reads the
          <a href="schema.html#service"><code>Service</code></a> object DHS published once:
          SNAP, channels <code>agp &middot; web &middot; in-person &middot; phone</code>, requiring
          <code>identity, householdSize, income, residency</code>, with
          <code>deliveryPattern: validate-after</code>.</p>
          <p><strong>Maria does:</strong> describes her situation in plain language.
          <strong>Her agent does:</strong> finds SNAP (and flags two other programs)
          without touching her personal data &mdash; discovery is read-only.</p>
        </li>
        <li>
          ${h3('e2','Eligibility — does she likely qualify')}
          <span class="step-type">EligibilityRule</span>
          <p>Maria&rsquo;s agent asks permission to use her household and income details, then
          evaluates them against the
          <a href="schema.html#eligibility"><code>EligibilityRule</code></a> DHS published:
          household 3, near-zero current income, State&nbsp;XX residency. She very likely
          qualifies, and because her income dropped this month, the
          <strong>validate-after</strong> path applies.</p>
          <p><strong>Her agent does:</strong> runs the check against DHS&rsquo;s published rules
          and shows a plain estimate &mdash; <em>&ldquo;about $535/month; here&rsquo;s why.&rdquo;</em> No
          determination has been made &mdash; only DHS can do that.</p>
        </li>
        <li>
          ${h3('e3','Authorization — Maria says yes, narrowly')}
          <span class="step-type">Authorization</span>
          <p>Maria authorizes <em>this</em> agent to submit a SNAP application and consents
          to DHS using her identity, household, income, and residency data
          <strong>for this SNAP application only</strong>. Her agent produces a scoped
          <a href="schema.html#authorization-obj"><code>Authorization</code></a>; the DHS
          agency agent will verify it on receipt.</p>
          <div class="callout callout--gap" style="margin:.8rem 0 0;">
            <p class="callout__label">Where the gap shows up</p>
            <p>AGP v1 specifies that this scoped grant exists and that the agency agent
            checks it. The <em>cryptographic proof</em> that it was really Maria &mdash; the
            <code>proof</code> field &mdash; is the <a href="authorization.html">companion
            layer</a>. With no verifiable digital identity, the food-bank
            <a href="actors.html#intermediary">intermediary</a> could carry this step with
            her in person.</p>
          </div>
        </li>
        <li>
          ${h3('e4','Request &amp; delivery — DHS decides')}
          <span class="step-type">ServiceRequest</span>
          <p>Maria&rsquo;s agent submits a
          <a href="schema.html#request"><code>ServiceRequest</code></a> to the DHS agency
          agent, referencing the SNAP <code>Service</code> and Maria&rsquo;s
          <code>Authorization</code>. DHS verifies the authorization, runs its own
          determination, and &mdash; using validate-after &mdash; <strong>provisionally
          approves</strong> Maria, issuing benefits to an EBT account while documentation is
          confirmed.</p>
          <p><strong>Her agent does:</strong> submits a well-formed request, then stops.
          <strong>DHS does:</strong> makes the determination and provisions the benefit.
          <strong>Authority never left DHS.</strong></p>
        </li>
        <li>
          ${h3('e5','Receipt — proof, status, and a way to fix it')}
          <span class="step-type">Receipt / StatusRecord</span>
          <p>The DHS agency agent returns a
          <a href="schema.html#receipt"><code>Receipt</code></a>: provisionally approved,
          ~$535/month to EBT, with an <strong>audit trail</strong> of what was submitted
          and decided, a live <code>StatusRecord</code> showing &ldquo;documentation
          pending,&rdquo; and a clear <strong>correction / appeal path</strong>. Two weeks
          later, when DHS confirms her documents, the status updates to fully approved &mdash;
          no new application required.</p>
          <p><strong>Maria has:</strong> food assistance within days, a record she can
          trust because it traces back to DHS, and recourse if it&rsquo;s wrong.</p>
        </li>
      </ol>

      ${h('mapping', 'How it maps back')}
      <div class="table-wrap">
      <table>
        <thead><tr><th>Step</th><th>Object</th><th>Who acts</th><th>Authority</th></tr></thead>
        <tbody>
          <tr><td>1 &middot; Discovery</td><td><code>Service</code></td><td>Constituent agent reads</td><td>Published by DHS</td></tr>
          <tr><td>2 &middot; Eligibility</td><td><code>EligibilityRule</code></td><td>Constituent agent evaluates</td><td>Rules owned by DHS</td></tr>
          <tr><td>3 &middot; Authorization</td><td><code>Authorization</code></td><td>Constituent grants</td><td>Verified by agency agent</td></tr>
          <tr><td>4 &middot; Request</td><td><code>ServiceRequest</code></td><td>Constituent agent submits</td><td><strong>DHS decides &amp; provisions</strong></td></tr>
          <tr><td>5 &middot; Receipt</td><td><code>Receipt</code> / <code>StatusRecord</code></td><td>Constituent receives</td><td>Issued by DHS</td></tr>
        </tbody>
      </table>
      </div>`
},

/* ====================================================================== *
 * GET STARTED (for agencies)
 * ==================================================================== */
{ slug: 'get-started', wide: true,
  desc: 'A practical guide for government agencies: how to make your services accessible to agents in five steps — describe your services, express eligibility rules, stand up an agency agent, choose delivery patterns, and return receipts.',
  body: `      <p class="eyebrow">For agencies</p>
      <h1>Get started: make your services accessible to agents</h1>
      <p class="lede">If you run a public service, here is what adopting AGP actually
      involves. The goal is that <strong>any compliant agent can work with your agency</strong>
      without a custom integration &mdash; while your agency keeps full authority over every
      determination. You can pilot this for a single service.</p>

      <div class="callout callout--official">
        <p class="callout__label">The one rule that never changes</p>
        <p>Adopting AGP does <strong>not</strong> hand decisions to an agent. Your agency
        remains the <strong>agency of record</strong>. AGP gives agents a standard way to
        <em>ask</em>; your agency agent enforces your rules and your authority on every
        request.</p>
      </div>

      ${h('overview', 'The five things you publish or stand up')}
      <ol class="steps">
        <li>
          ${h3('g1','Describe your services')}
          <p>Write each service as a <a href="schema.html#service"><code>Service</code></a>
          object &mdash; name, plain-language summary, channels, and the attributes it
          requires &mdash; and list them in a single published
          <a href="schema.html#catalog">catalog</a> at a well-known URL. This is the
          &ldquo;publish once, read everywhere&rdquo; artifact: write it once, and every agent can
          discover your service. Point <code>requires</code> at your existing data
          definitions rather than inventing new ones.</p>
        </li>
        <li>
          ${h3('g2','Express your eligibility rules')}
          <p>Capture who qualifies as an
          <a href="schema.html#eligibility"><code>EligibilityRule</code></a> over those
          same attributes, so agents can give constituents an honest preview before they
          apply. The rule is yours and authoritative; agents only <em>read</em> it. Start
          with the common case and refine &mdash; you don&rsquo;t have to encode every edge case to
          begin.</p>
        </li>
        <li>
          ${h3('g3','Stand up an agency agent')}
          <p>Expose an <strong>agency agent</strong> &mdash; an endpoint that speaks AGP over a
          transport you already support (e.g. an <abbr title="Model Context Protocol">MCP</abbr>
          server or HTTPS+JSON). It needs to handle four things:</p>
          <ul>
            <li><strong>Discovery:</strong> serve your catalog and Service objects.</li>
            <li><strong>Eligibility:</strong> optionally answer determination previews.</li>
            <li><strong>Requests:</strong> accept a <a href="schema.html#request"><code>ServiceRequest</code></a>, <strong>verify its <code>Authorization</code></strong>, run your determination, and provision.</li>
            <li><strong>Receipts:</strong> return a <a href="schema.html#receipt"><code>Receipt</code></a> with audit trail and recourse.</li>
          </ul>
          <p>Reference agency-agent implementations agencies can adopt instead of building
          from scratch are an explicit <a href="roadmap.html">roadmap</a> deliverable.</p>
        </li>
        <li>
          ${h3('g4','Choose a delivery pattern per service')}
          <p>Set each service&rsquo;s <code>deliveryPattern</code>: <code>instant</code> when
          you can decide automatically, <a href="schema.html#validate-after"><code>validate-after</code></a>
          where law lets you provision provisionally and verify later, or <code>manual</code>
          where a human must review. This is entirely your policy choice &mdash; AGP just
          carries it.</p>
        </li>
        <li>
          ${h3('g5','Return receipts &amp; honor recourse')}
          <p>For every request, return a receipt that records the outcome, an audit trail,
          live status, and a real correction / appeal path. This is what makes outcomes
          trustworthy and contestable, and it is non-optional.</p>
        </li>
      </ol>

      ${h('verify', 'Verifying authorization (the part you must enforce)')}
      <p>Your agency agent must check, on <em>every</em> request, that a valid, in-scope
      <a href="schema.html#authorization-obj"><code>Authorization</code></a> covers it
      before the agency of record acts. v0.1 defines the
      <a href="authorization.html#interaction-points">interaction points</a>; the
      cryptographic verification mechanism is supplied by the companion authorization
      layer. Until that layer lands in your jurisdiction, agencies typically rely on
      existing identity and an <a href="actors.html#intermediary">intermediary</a>-assisted
      path for constituents without verifiable digital identity.</p>

      ${h('checklist', 'Adoption checklist')}
      <div class="callout">
        <ul style="margin:0;">
          <li>&#9633; Pick one high-volume, sympathetic service to pilot.</li>
          <li>&#9633; Publish a <code>catalog.json</code> with one <code>Service</code>.</li>
          <li>&#9633; Encode the common-case <code>EligibilityRule</code>.</li>
          <li>&#9633; Stand up an agency agent over a transport you already run.</li>
          <li>&#9633; Verify <code>Authorization</code> on every request.</li>
          <li>&#9633; Return <code>Receipt</code>s with audit trail and appeal path.</li>
          <li>&#9633; Choose <code>instant</code> vs <code>validate-after</code> deliberately.</li>
          <li>&#9633; Share what broke &mdash; <a href="governance.html#contribute">co-author the spec</a>.</li>
        </ul>
      </div>
      <p>New to the objects referenced here? Read <a href="schema.html">The schema &rarr;</a></p>`
},

/* ====================================================================== *
 * GOVERNANCE
 * ==================================================================== */
{ slug: 'governance',
  desc: 'AGP proposes a neutral nonprofit home, an open license, a lightweight public proposal process, and an explicit co-author role for state and local agencies, intermediaries, and labs.',
  body: `      <p class="eyebrow">Project</p>
      <h1>Governance &amp; contribution</h1>
      <p class="lede">A standard is only as credible as its governance. AGP proposes a
      lightweight, additive, openly-run process &mdash; with the agencies that operate public
      services as co-authors, not consumers.</p>

      ${h('home', 'A neutral nonprofit home')}
      <p>AGP should be stewarded by a <strong>named, neutral nonprofit</strong>. A neutral
      home keeps the standard from being captured by any single vendor or agency, and gives
      agencies a trustworthy counterparty to co-author with. (The specific organization is
      an <a href="open-questions.html">open question</a>; the requirement that it be neutral
      and nonprofit is not.)</p>

      ${h('license', 'Open license')}
      <p>AGP is published under an <strong>open license (Apache&nbsp;2.0 proposed)</strong>
      so any agency, vendor, or NGO can implement it without permission, and reference
      implementations can be shared freely.</p>

      ${h('process', 'A lightweight, public change process')}
      <p>The day-to-day work runs on a <strong>public issue tracker</strong>, and changes
      are <strong>additive</strong> &mdash; the core grows slowly and never breaks existing
      extensions:</p>
      <ul>
        <li><strong>Proposals as AGP-RFCs.</strong> Substantive changes enter as a written
        proposal discussed in the open.</li>
        <li><strong>A <code>pending</code> staging area.</strong> New terms can be used and
        seen together in <code>pending</code> &mdash; explicitly marked subject to change &mdash;
        before graduating into core.</li>
        <li><strong>Consensus, not unilateral edits.</strong> No release ships without the
        agreement of the stewarding group; proposals graduate by demonstrated use and
        consensus.</li>
        <li><strong>Reference implementations live separately.</strong> The spec and its
        reference agency agents are versioned independently.</li>
      </ul>

      <div class="callout callout--official">
        <p class="callout__label">Agencies are co-authors, not consumers</p>
        <p>AGP&rsquo;s governance centers <strong>state and local agencies, caseworker
        organizations, and government innovation labs as co-authors</strong>. The standard
        has to come from, and work for, the people who operate public services &mdash; their
        adoption is the success metric. (For the lineage of this stance, see
        <a href="related-work.html">Related work</a>.)</p>
      </div>

      ${h('roles', 'Who participates')}
      <div class="grid grid-2">
        <div class="card"><h3>Stewarding nonprofit</h3><p>Hosts the spec, runs the process, keeps it neutral, and convenes releases by consensus.</p></div>
        <div class="card"><h3>State &amp; local agencies</h3><p>Co-author the vocabulary and flow against real systems and run agency agents.</p></div>
        <div class="card"><h3>Intermediaries &amp; labs</h3><p>NGOs, navigators, legal-aid orgs, and innovation labs surface equity and real-world constraints.</p></div>
        <div class="card"><h3>Agent &amp; tool builders</h3><p>Implement compliant agents and reference agency agents, and stress-test the spec through use.</p></div>
      </div>

      ${h('contribute', 'How to get involved')}
      <p>AGP v0.1 is a strawman published to be argued with. The most useful contributions
      now: agencies describing where the flow or <a href="schema.html">schema</a> doesn&rsquo;t
      fit their systems; intermediaries pressure-testing the equity story; and reviewers
      poking at the <a href="authorization.html">authorization gap</a> and the
      <a href="open-questions.html">open questions</a>. Open an issue or proposal on
      <a href="${SITE.repo}">GitHub</a>.</p>`
},

/* ====================================================================== *
 * ROADMAP
 * ==================================================================== */
{ slug: 'roadmap',
  desc: 'What is in AGP v1, what is deferred to future versions (full machine-readable schemas, reference agency-agent implementations, the authorization mechanism, multilingual and frontend work, scaling), and how to get involved.',
  body: `      <p class="eyebrow">Project</p>
      <h1>Status &amp; roadmap</h1>
      <p class="lede">AGP is at <strong>v0.1</strong>: a narrative specification with a
      draft schema. This page is explicit about what v1 includes and what is deliberately
      deferred.</p>

      ${h('in', 'In scope for v1')}
      <ul>
        <li><span class="pill pill--in">In v1</span> The narrative specification: overview, <a href="principles.html">principles</a>, and <a href="actors.html">actors</a> (agent-to-agent model).</li>
        <li><span class="pill pill--in">In v1</span> The <a href="flow.html">canonical five-step flow</a>, diagrammed and documented.</li>
        <li><span class="pill pill--in">In v1</span> A named, defined <a href="concepts.html">core vocabulary</a> and the extension mechanism.</li>
        <li><span class="pill pill--in">In v1</span> A <a href="schema.html">draft schema</a> (illustrative JSON for each core type) and an agency <a href="get-started.html">getting-started guide</a>.</li>
        <li><span class="pill pill--in">In v1</span> The <a href="authorization.html">authorization &amp; consent requirements and interaction points</a> (mechanism deferred).</li>
        <li><span class="pill pill--in">In v1</span> One end-to-end <a href="example.html">worked example</a>.</li>
        <li><span class="pill pill--in">In v1</span> A <a href="governance.html">governance model</a>, <a href="glossary.html">glossary</a>, <a href="faq.html">FAQ</a>, and <a href="open-questions.html">open questions</a>.</li>
      </ul>

      ${h('future', 'Deferred to future versions')}
      <ul>
        <li><span class="pill pill--future">Future</span> Full normative <strong>JSON Schema / OpenAPI</strong> for every object, and a formal eligibility-rule language.</li>
        <li><span class="pill pill--future">Future</span> <strong>Reference agency-agent implementations</strong> that agencies can adopt instead of hand-rolling integrations.</li>
        <li><span class="pill pill--future">Future</span> The <strong>cryptographic authorization / identity mechanism</strong> itself &mdash; possibly as a sibling standard.</li>
        <li><span class="pill pill--future">Future</span> <strong>Multi-language content</strong> and the consumer-facing <strong>frontend</strong>.</li>
        <li><span class="pill pill--future">Future</span> <strong>Scaling / adoption tooling</strong> and <strong>international-comparison</strong> content.</li>
      </ul>

      ${h('shape', 'The likely path')}
      <ol class="steps">
        <li><h3 style="margin-top:-.2rem">v0.1 — this strawman</h3><p>Narrative spec + draft schema, published for scrutiny and co-authorship. Goal: agreement on actors, flow, and the core objects.</p></li>
        <li><h3>v0.x — co-authored schema</h3><p>Work <em>with</em> agencies to formalize the core types against real program data. Pilot one service in one jurisdiction with a real agency agent.</p></li>
        <li><h3>Companion — authorization layer</h3><p>Advance the authorization / consent / identity mechanism in parallel, likely as its own standard, against AGP&rsquo;s defined interaction points.</p></li>
        <li><h3>v1.0 — reference implementations</h3><p>Reference agency agents and templatized protocols states can adopt; broaden to more services and jurisdictions.</p></li>
      </ol>

      <div class="callout">
        <p class="callout__label">Get involved</p>
        <p>The fastest way to improve AGP is to tell us where it breaks against a real
        program. Agencies, intermediaries, and builders &mdash; open an issue or proposal on
        <a href="${SITE.repo}">GitHub</a>, and see <a href="governance.html#contribute">how
        to get involved</a>.</p>
      </div>`
},

/* ====================================================================== *
 * RELATED WORK
 * ==================================================================== */
{ slug: 'related-work', wide: true,
  desc: 'The standards and projects AGP learns from and builds on: agentic commerce protocols, agent-to-agent protocols, the Voting Information Project, schema.org, NIEM, and the Model Context Protocol — and exactly what AGP took from each.',
  body: `      <p class="eyebrow">Project</p>
      <h1>Related work</h1>
      <p class="lede">AGP is not invented from scratch. It deliberately inherits hard-won
      design patterns from several precedents. This page gathers them in one place &mdash; what
      each is, and exactly what AGP took from it &mdash; so the rest of the spec can stay in
      AGP&rsquo;s own terms.</p>

      ${h('acp', 'Agentic commerce protocols')}
      <p>Emerging standards for letting AI agents transact with merchants decompose the
      problem into discovery, a standardized checkout, transaction context, and
      receipts / access management &mdash; and hold to a <strong>&ldquo;merchant of record&rdquo;</strong>
      principle, where the merchant keeps control of pricing, fulfillment, and the customer
      relationship.</p>
      <p><strong>What AGP took:</strong> the five-step <a href="flow.html">flow
      decomposition</a>, and the control model behind <a href="actors.html#agency">agency
      of record</a> &mdash; the agent never <em>becomes</em> the counterparty. AGP also follows
      their lead in <a href="authorization.html">deferring</a> cryptographic agent
      authorization to a separate layer rather than solving it inline.</p>

      ${h('a2a', 'Agent-to-agent protocols')}
      <p>A wave of work on letting independent agents discover and call one another &mdash;
      advertising capabilities, negotiating, and exchanging structured tasks across
      organizational boundaries.</p>
      <p><strong>What AGP took:</strong> the core posture that this is fundamentally
      <strong>agent-to-agent</strong> &mdash; a <a href="actors.html#agent">constituent-side
      agent</a> talking to a <a href="actors.html#agency-agent">government agency agent</a> &mdash;
      rather than an app calling an API.</p>

      ${h('vip', 'Voting Information Project (VIP)')}
      <p>Since 2008, election officials publish their data once, in a single standardized
      feed (the VIP Specification, now ~v6.0), and many consumer surfaces read it. It was
      co-developed by Google, Democracy Works, and <em>state and local election officials</em>,
      and its value comes from being official and authoritative.</p>
      <p><strong>What AGP took:</strong> the <a href="principles.html#p5">publish-once,
      read-everywhere</a> model for service metadata and eligibility rules, and the
      conviction that a government data standard earns trust by being
      <a href="governance.html">co-authored with the officials who run the systems</a> and
      tracing back to the authoritative source.</p>

      ${h('schemaorg', 'schema.org')}
      <p>A shared vocabulary of types and properties, kept deliberately small at the core
      with a long tail handled by extensions and a <code>pending</code> staging area for
      proposals. It is run informally &mdash; consensus via a public issue list, additive
      changes, expressed on top of existing web standards rather than new infrastructure &mdash;
      and has repeatedly <em>simplified</em> its mechanisms because complexity hurt
      adoption.</p>
      <p><strong>What AGP took:</strong> the <a href="concepts.html#extensions">small core
      plus extensions</a> vocabulary model (including <code>pending</code>), the
      lightweight additive <a href="governance.html#process">governance texture</a>, and the
      bias toward the simplest thing agencies can actually implement.</p>

      ${h('niem', 'NIEM &amp; existing program data models')}
      <p>The National Information Exchange Model and established program data models already
      define the meaning of government attributes like income, household, and residency.</p>
      <p><strong>What AGP took:</strong> a hard commitment to
      <a href="principles.html#p6">reuse over reinvention</a> &mdash; AGP&rsquo;s
      <a href="schema.html">objects</a> <em>reference</em> these definitions rather than
      re-specifying them. AGP is an overlay, not a new data dictionary.</p>

      ${h('mcp', 'Model Context Protocol (MCP)')}
      <p>An existing protocol for connecting agents to tools and data sources through a
      common interface.</p>
      <p><strong>What AGP took:</strong> a likely <a href="schema.html#transport">transport</a>.
      Rather than inventing a wire protocol, AGP agency agents can expose AGP-shaped
      capabilities over MCP (or plain HTTPS+JSON), so AGP rides infrastructure agents
      already speak.</p>

      <div class="callout callout--note">
        <p class="callout__label">Synthesis</p>
        <p>Commerce and agent-to-agent protocols give AGP its <em>flow and control model</em>;
        VIP gives the <em>publish-once government-data pattern and co-authorship trust model</em>;
        schema.org gives the <em>small-core-plus-extensions vocabulary and lightweight
        governance</em>; NIEM and MCP keep AGP <em>reusing existing meaning and transport</em>
        instead of reinventing them.</p>
      </div>`
},

/* ====================================================================== *
 * OPEN QUESTIONS
 * ==================================================================== */
{ slug: 'open-questions',
  desc: 'Genuinely open design questions AGP surfaces rather than resolves: where agent authority ends, consent defaults, liability for stale data, equity for constituents without agents, whether authorization should be a sibling standard, and the relationship to existing standards.',
  body: `      <p class="eyebrow">Project</p>
      <h1>Open questions</h1>
      <p class="lede">A strawman earns trust by being honest about what it has <em>not</em>
      settled. These are surfaced deliberately and left <strong>unresolved</strong> &mdash; each
      a candidate for an <a href="governance.html#process">AGP-RFC</a>.</p>

      ${h('q1', '1. Where does the agent&rsquo;s authority end and the agency&rsquo;s begin, in edge cases?')}
      <p>The control invariant is clear in the common case &mdash; the agency of record decides.
      But edge cases blur: provisional approvals under
      <a href="schema.html#validate-after">validate-after</a>, agent-supplied attestations
      the agency hasn&rsquo;t yet verified, partial determinations, and corrections mid-flight.
      Exactly where the line sits in those cases is unresolved.</p>

      ${h('q2', '2. Opt-in vs. opt-out defaults, and how consent is scoped and revoked.')}
      <p>Should a given program default to opt-in or opt-out for agent action and data use?
      How granular is scoping (per program? per attribute? per request?), and what does
      revocation guarantee once data has already been used? AGP requires the default to be
      <em>explicit</em>; it does not yet say what the default <em>should</em> be.</p>

      ${h('q3', '3. Liability when an agent acts on stale or wrong data.')}
      <p>If an agent submits outdated income and a benefit is wrongly granted or denied, who
      is liable to the constituent, and what makes them whole? This is entangled with the
      <a href="authorization.html#liability">authorization mechanism</a> and is not resolved
      in v1.</p>

      ${h('q4', '4. Equity: how are constituents without agents or devices served?')}
      <p>AGP leans on the <a href="actors.html#intermediary">intermediary</a> as the
      answer &mdash; but how is parity actually guaranteed so the agent-equipped don&rsquo;t get
      faster or better outcomes than those served through a human channel? Designing against
      a two-tier system is an open problem.</p>

      ${h('q5', '5. Should agent authorization / identity be its own sibling standard?')}
      <p>AGP treats authorization as a <a href="authorization.html">companion concern</a>.
      Should it remain an AGP appendix, or become a separate, independently governed standard
      that AGP merely depends on? There are real trade-offs either way.</p>

      ${h('q6', '6. Overlay or dependency on existing standards?')}
      <p>AGP intends to <a href="related-work.html">reuse</a> existing data models and agent
      transports. But is AGP a thin <em>overlay</em> that merely references them, or a hard
      <em>dependency</em> that requires them? How much AGP mandates versus recommends is
      still being worked out.</p>

      <div class="callout callout--note">
        <p class="callout__label">Help resolve these</p>
        <p>Each question above is a good first issue. If you operate a program, run an
        intermediary, or work on identity, your input is exactly what turns an open question
        into a spec decision. See <a href="governance.html#contribute">Contribute</a>.</p>
      </div>`
},

/* ====================================================================== *
 * GLOSSARY
 * ==================================================================== */
{ slug: 'glossary',
  desc: 'Definitions of the key AGP terms: the four actors, the constituent and agency agents, the agent-to-agent model, the core vocabulary types, agency-of-record, and validate-after.',
  body: `      <p class="eyebrow">Reference</p>
      <h1>Glossary</h1>
      <p class="lede">Key AGP terms in one place. Vocabulary types are defined more fully in
      <a href="concepts.html">Core concepts</a> and <a href="schema.html">The schema</a>;
      actors in <a href="actors.html">Actors &amp; roles</a>. For the standards AGP builds on,
      see <a href="related-work.html">Related work</a>.</p>

      <dl class="deflist">
        <dt>Agency agent</dt>
        <dd>The government agency&rsquo;s machine endpoint in an AGP exchange. It advertises services, answers eligibility queries, verifies authorization, accepts requests, and returns receipts &mdash; strictly within the authority of the agency of record.</dd>

        <dt>Agency of record</dt>
        <dd>The government agency that owns a service and retains authority over eligibility determination and provisioning. Authority never transfers away from it to an agent.</dd>

        <dt>Agent-to-agent (A2A)</dt>
        <dd>AGP&rsquo;s core posture: a constituent-side agent and a government agency agent exchange standardized messages directly, rather than an app calling a bespoke API.</dd>

        <dt>Authorization</dt>
        <dd>A scoped grant from a constituent letting a specific agent act on their behalf and use specific data for a specific purpose. A core type; its cryptographic proof is deferred to the companion layer.</dd>

        <dt>Catalog</dt>
        <dd>The single published document an agency agent serves to advertise itself and its services &mdash; the entry point for discovery and the &ldquo;publish once&rdquo; artifact.</dd>

        <dt>Companion layer</dt>
        <dd>The deferred authorization / consent / identity mechanism that proves a constituent authorized an agent. AGP v1 defines its interaction points but not its cryptography.</dd>

        <dt>Constituent</dt>
        <dd>The person or household seeking a government service or benefit; the source of authority for any agent action.</dd>

        <dt>Constituent-side agent</dt>
        <dd>Software acting on a constituent&rsquo;s behalf &mdash; the Public AI Option, a state agent, or a trusted third-party / NGO agent. Never a decision-maker of record.</dd>

        <dt>EligibilityRule</dt>
        <dd>A machine-readable condition the agency uses to determine who qualifies, expressed over named attributes. Owned and published by the agency.</dd>

        <dt>Extension</dt>
        <dd>A namespaced set of program- or jurisdiction-specific terms layered on the small core. May graduate into core by consensus.</dd>

        <dt>Intermediary</dt>
        <dd>NGOs, navigators, caseworkers, trusted orgs, and data intermediaries that assist constituents &mdash; including by operating a constituent-side agent for them. Central to equity.</dd>

        <dt>Pending</dt>
        <dd>The staging area where proposed AGP terms can be seen and used together &mdash; explicitly marked subject to change &mdash; before graduating into the core.</dd>

        <dt>Publish once, read everywhere</dt>
        <dd>The pattern AGP adopts: agencies publish authoritative service metadata and eligibility rules once, and any compliant agent reads them, preserving a chain back to the authoritative source.</dd>

        <dt>Receipt / StatusRecord</dt>
        <dd>The agency&rsquo;s standardized response to a request: outcome, audit trail, live status, and the correction/appeal path. A core type.</dd>

        <dt>Service</dt>
        <dd>A government service or benefit with its channels and requirements, published once by the agency agent. The core type read during discovery.</dd>

        <dt>ServiceRequest</dt>
        <dd>A standardized request an agent submits to the agency agent, referencing a Service and an Authorization. A core type.</dd>

        <dt>Validate-after</dt>
        <dd>An allowed delivery pattern in which an agency provisions provisionally on attested attributes and verifies afterward. Declared per Service; never required.</dd>
      </dl>`
},

/* ====================================================================== *
 * FAQ
 * ==================================================================== */
{ slug: 'faq',
  desc: 'Frequently asked questions about AGP: whether the agent makes decisions, who is liable, how people without agents are served, how it differs from a plain API, and how accessibility and language access work.',
  body: `      <p class="eyebrow">Reference</p>
      <h1>FAQ</h1>
      <p class="lede">The questions AGP gets asked first.</p>

      ${h('decides', 'Is the agent making decisions about my benefits?')}
      <p><strong>No.</strong> Your agent discovers services, assembles your attributes (with
      consent), checks them against published rules, and submits a request. The
      <a href="actors.html#agency">agency of record</a> &mdash; the government &mdash; makes the
      actual eligibility determination and provisions the benefit, through its
      <a href="actors.html#agency-agent">agency agent</a>. Authority <em>never</em> moves to
      your agent.</p>

      ${h('liable', 'Who is liable if something goes wrong?')}
      <p>Liability is an <a href="open-questions.html#q3">open question</a> AGP v1 does not
      resolve, because it is inseparable from the deferred
      <a href="authorization.html#liability">authorization mechanism</a>. What v1 does
      guarantee is <a href="flow.html#s5">recourse</a>: every outcome comes with an audit
      trail and an explicit correction/appeal path, so you can always see, contest, and fix
      what was done in your name.</p>

      ${h('no-agent', 'What about people without an agent or device?')}
      <p>This is exactly why the <a href="actors.html#intermediary">intermediary</a> is a
      first-class actor. A caseworker, navigator, library, or NGO can operate an agent
      <em>for</em> a constituent, or carry the same standardized flow through a human-staffed
      channel. Ensuring parity is an explicit
      <a href="open-questions.html#q4">open question</a> &mdash; AGP names it rather than
      pretending everyone has an agent.</p>

      ${h('vs-api', 'How is this different from just building an API?')}
      <p>An API is a point-to-point integration: each agency exposes its own, and every
      agent re-integrates with each one. AGP is a <strong>shared, agent-to-agent
      standard</strong> &mdash; a common vocabulary and flow &mdash; so the integration is written
      once and reused across agencies and jurisdictions. AGP also <em>uses</em> existing
      transports (e.g. <a href="schema.html#transport">MCP or HTTPS+JSON</a>); it
      standardizes the <em>meaning and the flow</em> on top, not the wire.</p>

      ${h('a11y', 'How do accessibility and language access work?')}
      <p>They are <a href="principles.html#p3">principles</a>, not features. Because every
      agent interaction must degrade gracefully to a human, and because accessibility
      (WCAG&nbsp;2.1&nbsp;AA) and plain language are first-class requirements, AGP is
      designed so the standardized flow can be delivered through accessible and multilingual
      surfaces. The consumer-facing frontend and multi-language content themselves are
      <a href="roadmap.html#future">roadmap</a> items; the requirement that they be possible
      is baked in now &mdash; including this documentation site.</p>

      ${h('govt-takeover', 'Does an agent get to act <em>as</em> the government?')}
      <p>No. An agent can <em>ask</em> on a constituent&rsquo;s behalf; only the agency of record
      can <em>decide</em> and provision. Every AGP message traces back to an authoritative
      agency &mdash; that traceability is what makes an AGP outcome trustworthy.</p>

      ${h('agency-how', 'I run an agency. What do I actually have to do?')}
      <p>Five things: publish a <a href="schema.html#catalog">catalog</a> of
      <a href="schema.html#service">services</a>, express your
      <a href="schema.html#eligibility">eligibility rules</a>, stand up an
      <a href="actors.html#agency-agent">agency agent</a>, choose a delivery pattern per
      service, and return <a href="schema.html#receipt">receipts</a>. The
      <a href="get-started.html">Get started</a> guide walks through each.</p>

      ${h('why-defer', 'Why doesn&rsquo;t v1 just solve the authorization problem?')}
      <p>Because cryptographic agent-authorization, consent encoding, and identity proofing
      is a hard, partly-unsolved problem. Coupling AGP&rsquo;s adoption to it would stall both.
      AGP instead <a href="authorization.html">names the gap</a>, defines clean interaction
      points, and lets the flow ship while the authorization layer matures.</p>

      ${h('ready', 'Is AGP ready to build against?')}
      <p>Not in production. v0.1 is a <strong>strawman with a draft schema</strong> to align
      on actors, flow, and the core objects. Normative schemas and reference implementations
      are <a href="roadmap.html">deferred</a>. The most useful thing now is to
      <a href="governance.html#contribute">co-author and critique it</a>.</p>`
},

];
};
