'use strict';
/* AGP page content. Exported as a function so build.js can inject helpers.
 * Each page: { slug, desc, wide?, body } — body is an HTML string. */
module.exports = function ({ h, h3, SITE }) {
return [

/* ====================================================================== *
 * OVERVIEW
 * ==================================================================== */
{ slug: 'index', wide: true,
  desc: 'AGP is an open standard for the service-delivery flow between constituents, their agents, intermediaries, and government — a shared language for discovering services, checking eligibility, authorizing an agent, requesting delivery, and returning a receipt.',
  body: `      <section class="hero">
        <p class="eyebrow">Agentic Government Protocol · v0.1</p>
        <h1>A shared language for delivering government services through agents.</h1>
        <p class="lede">
          AGP is an open standard for the service-delivery flow between
          <strong>constituents</strong>, their <strong>agents</strong>,
          <strong>intermediaries</strong>, and <strong>government agencies</strong>.
          It replaces one-off, agency-by-agency integrations with a common way to
          discover services, check eligibility, authorize an agent to act, request
          delivery, and return a receipt &mdash; so any compliant agent can work with any
          compliant agency.
        </p>
        <div class="cta-row">
          <a class="btn btn--primary" href="flow.html">Read the canonical flow &rarr;</a>
          <a class="btn btn--ghost" href="example.html">See a worked example</a>
          <a class="btn btn--ghost" href="actors.html">Meet the four actors</a>
        </div>
      </section>

      <div class="callout callout--note">
        <p class="callout__label">Status</p>
        <p>AGP is an early <strong>v0.1 strawman</strong>: a narrative and conceptual
        specification, not yet a machine-readable schema or reference implementation.
        It is published to invite scrutiny and co-authorship from the agencies and
        organizations that would run it. Expect breaking changes.</p>
      </div>

      ${h('problem', 'The problem')}
      <p>
        Today, every AI agent or application that wants to help someone interact with
        government has to build a <strong>custom integration with each agency, program,
        and data system</strong>. The work does not transfer: an agent that can renew a
        benefit in one state cannot do it in the next, and each new program means
        starting over. That bespoke-integration cost falls hardest on exactly the people
        and small organizations least able to absorb it &mdash; and it leaves constituents
        navigating fragmented, repetitive processes one form at a time.
      </p>
      <p>
        AGP proposes the missing <strong>&ldquo;rails&rdquo;</strong> layer: a shared protocol so the
        integration is written once and reused everywhere, while the government agency
        keeps full authority over who is eligible and what gets provisioned.
      </p>

      ${h('at-a-glance', 'The flow at a glance')}
      <p>AGP decomposes service delivery into five steps. Each maps to a core
      vocabulary type and is illustrated end-to-end in the <a href="example.html">worked example</a>.</p>
      <div class="grid grid-3">
        <div class="card"><p class="card__role">Step 1</p><h3>Service discovery</h3><p>The agent discovers available services and their requirements from standardized, machine-readable metadata the agency <em>publishes once</em>.</p></div>
        <div class="card"><p class="card__role">Step 2</p><h3>Eligibility assessment</h3><p>With consent, the agent assembles the constituent&rsquo;s attributes and checks them against the agency&rsquo;s eligibility rules.</p></div>
        <div class="card"><p class="card__role">Step 3</p><h3>Authorization &amp; consent</h3><p>The constituent authorizes the agent to act and consents to scoped data use; the agency verifies that authorization.</p></div>
        <div class="card"><p class="card__role">Step 4</p><h3>Service request &amp; delivery</h3><p>The agent submits a standardized request to the <em>agency of record</em>, which determines and provisions the service.</p></div>
        <div class="card"><p class="card__role">Step 5</p><h3>Receipt, status &amp; recourse</h3><p>A standardized receipt and status record returns to the constituent, with an audit trail and a correction/appeal path.</p></div>
        <div class="card" style="background:var(--paper-soft);"><p class="card__role" style="color:var(--brand-ink)">Read next</p><h3>The canonical flow</h3><p><a href="flow.html">Full step-by-step specification &rarr;</a></p></div>
      </div>

      ${h('why', 'Why a standard, and why now')}
      <p>
        AGP is one of three initiatives from a June 2026 convening on human-centered
        government in the AI era. It is the <strong>rails layer</strong> the other two
        depend on &mdash; a shared &ldquo;Public AI Option&rdquo; agent, and instant-delivery state
        pilots. It deliberately stands on the shoulders of three working precedents
        rather than starting cold:
      </p>
      <div class="grid grid-3">
        <div class="card"><h3>ACP</h3><p><strong>Agentic Commerce Protocol.</strong> Gives AGP its flow decomposition and the <em>agency-of-record</em> control model &mdash; the agent never <em>becomes</em> the government.</p></div>
        <div class="card"><h3>VIP</h3><p><strong>Voting Information Project.</strong> Gives AGP the <em>publish-once, read-everywhere</em> government-data pattern and official co-authorship as the source of trust.</p></div>
        <div class="card"><h3>schema.org</h3><p>Gives AGP the <em>small core plus extensions</em> vocabulary and lightweight, additive, adoption-driven governance.</p></div>
      </div>

      ${h('non-goals', 'Non-goals')}
      <p>To keep v1 honest about what it is, AGP explicitly does <strong>not</strong> attempt to:</p>
      <ul>
        <li>Replace agencies&rsquo; authority over eligibility determination or provisioning. AGP carries requests and receipts; the <strong>agency of record</strong> decides.</li>
        <li>Mint a new data dictionary. AGP is an <strong>overlay and connector</strong> over existing government schemas, not a parallel universe of definitions.</li>
        <li>Solve cryptographic proof that a user authorized an agent. That gap is <a href="authorization.html">named explicitly</a> and deferred to a companion identity/authorization layer.</li>
        <li>Specify a consumer frontend, a language-access layer, or scaling/adoption tooling in v1. These are on the <a href="roadmap.html">roadmap</a>.</li>
        <li>Make decisions <em>for</em> a constituent without scoped consent, or route around the people &mdash; caseworkers, navigators, NGOs &mdash; who serve constituents without agents.</li>
      </ul>

      <div class="callout callout--gap">
        <p class="callout__label">The named gap</p>
        <p>Like ACP, AGP standardizes the <em>flow</em> but does not, in v1, solve
        cryptographic proof of agent authorization, scoped consent, and liability.
        We treat this as a <strong>companion concern</strong> with defined interaction
        points &mdash; not an afterthought and not an over-claim.
        <a href="authorization.html">Read how AGP frames it &rarr;</a></p>
      </div>`
},

/* ====================================================================== *
 * PRINCIPLES
 * ==================================================================== */
{ slug: 'principles',
  desc: 'The design principles that govern AGP: agency-of-record authority, human-centered and accessible by default, consent-first, publish-once read-everywhere, reuse over reinvention, and replicability across jurisdictions.',
  body: `      <p class="eyebrow">Specification</p>
      <h1>Principles</h1>
      <p class="lede">These principles are the tie-breakers. When a design decision is
      unclear, AGP asks which choice best honors the principles below &mdash; and, failing
      that, what ACP, VIP, or schema.org did and why.</p>

      ${h('p1', '1. Agency-of-record authority')}
      <p>The government agency remains the <strong>agency of record</strong>: it retains
      authority over eligibility determination and over provisioning the service or
      benefit. AGP moves <em>requests</em> and <em>receipts</em>; it never moves
      <em>authority</em>. An agent assembles, asks, and reports back &mdash; it does not
      <em>become</em> the government, and a compliant agency can always decline or
      override. (This is AGP&rsquo;s analog to ACP&rsquo;s &ldquo;merchant of record&rdquo; principle.)</p>

      ${h('p2', '2. Human-centered and accessible by default')}
      <p>This is a government-context artifact, so the medium must model the message.
      Flows must degrade gracefully to a human: every interaction an agent can perform
      must have a humane fallback for a constituent acting directly or through an
      <a href="actors.html">intermediary</a>. Accessibility (WCAG 2.1 AA), plain language,
      and language access are first-class requirements, not later add-ons.</p>

      ${h('p3', '3. Consent-first')}
      <p>Nothing happens on a constituent&rsquo;s behalf without their authorization, and data
      is used only for the <strong>specific, scoped purpose</strong> the constituent
      consented to. Consent is legible, revocable, and auditable. Where the law allows
      opt-out defaults, AGP makes the default explicit rather than implicit.</p>

      ${h('p4', '4. Publish once, read everywhere')}
      <p>Agencies publish service metadata and eligibility rules <strong>once</strong>, in
      a standardized form, and any compliant agent or surface can read them. This is the
      VIP pattern: authoritative data flows from the agency that owns it to many
      consumers, without each consumer re-integrating. It preserves a clear chain back to
      the authoritative source.</p>

      ${h('p5', '5. Reuse over reinvention')}
      <p>AGP leans on existing standards rather than minting a parallel universe: existing
      government data schemas and program data models for <em>meaning</em>, and
      established mechanisms (e.g. <a href="data-model.html">MCP</a> for tool/data access)
      for <em>transport</em>. AGP is the thin connective layer, not a new data dictionary.
      This mirrors schema.org expressing itself on top of JSON-LD, RDFa, and Microdata
      rather than inventing new infrastructure.</p>

      ${h('p6', '6. Small core, additive extensions')}
      <p>AGP defines a deliberately small <a href="concepts.html">core vocabulary</a> and
      handles the long tail through extensions. Program- and jurisdiction-specific terms
      live in extensions and can graduate into core by consensus. Bias is always toward
      the simplest thing an agency can actually implement &mdash; schema.org repeatedly
      <em>simplified</em> its extension mechanism because complexity hurt adoption.</p>

      ${h('p7', '7. Replicable across jurisdictions')}
      <p>A flow designed for one state or program should transfer to the next with
      configuration, not rewriting. AGP&rsquo;s value compounds only if a navigator, an NGO,
      or a state lab can adopt a templatized protocol instead of hand-rolling an
      integration. Replicability is a feature of the standard, not an afterthought of
      implementations.</p>

      ${h('p8', '8. Name the gaps')}
      <p>AGP states plainly what it does <em>not</em> yet solve &mdash; most importantly the
      <a href="authorization.html">authorization, consent, and identity</a> mechanism &mdash;
      and positions those as companion concerns with defined interaction points. A
      standard earns trust by being precise about its own edges.</p>

      <div class="callout callout--official">
        <p class="callout__label">Trust comes from co-authorship</p>
        <p>VIP&rsquo;s data is valuable because it is official &mdash; co-developed with the state
        and local officials who run the systems. AGP adopts the same stance: the standard
        is credible to the extent it is authored <em>with</em> agencies, not imposed on
        them. See <a href="governance.html">Governance &amp; contribution</a>.</p>
      </div>`
},

/* ====================================================================== *
 * ACTORS
 * ==================================================================== */
{ slug: 'actors',
  desc: 'AGP defines four actors — Constituent, Agent, Intermediary, and Government agency (agency of record) — and the trust relationships between them.',
  body: `      <p class="eyebrow">Specification</p>
      <h1>Actors &amp; roles</h1>
      <p class="lede">AGP defines four actors. Three have clean commercial analogs in
      ACP; the fourth &mdash; the intermediary &mdash; is distinctive to government and is part
      of why a commerce protocol cannot simply be reused as-is.</p>

      <figure>
        <div class="figure-box">
          <svg viewBox="0 0 720 380" role="img" aria-labelledby="actorsDiagTitle actorsDiagDesc" width="720" height="380">
            <title id="actorsDiagTitle">AGP actor-relationship diagram</title>
            <desc id="actorsDiagDesc">A diagram showing four actors. The Constituent authorizes and is served by the Agent. The Intermediary supports the Constituent and may operate an Agent on their behalf. The Agent submits standardized requests to the Government agency, the agency of record, and receives receipts back. The Government agency retains authority over eligibility and provisioning.</desc>
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0 0 L10 5 L0 10 z" fill="#3c4a63"/>
              </marker>
            </defs>
            <!-- nodes -->
            <g font-family="-apple-system, Segoe UI, Roboto, sans-serif">
              <!-- Constituent -->
              <rect x="40" y="150" width="170" height="80" rx="12" fill="#eaf0fe" stroke="#1d4ed8" stroke-width="2"/>
              <text x="125" y="183" text-anchor="middle" font-size="16" font-weight="700" fill="#14358f">Constituent</text>
              <text x="125" y="205" text-anchor="middle" font-size="12" fill="#3c4a63">person / household</text>
              <!-- Intermediary -->
              <rect x="40" y="20" width="170" height="76" rx="12" fill="#f6f8fb" stroke="#5d6b85" stroke-width="2"/>
              <text x="125" y="50" text-anchor="middle" font-size="16" font-weight="700" fill="#11203a">Intermediary</text>
              <text x="125" y="71" text-anchor="middle" font-size="12" fill="#3c4a63">navigator / NGO / data</text>
              <!-- Agent -->
              <rect x="300" y="150" width="170" height="80" rx="12" fill="#eaf0fe" stroke="#1d4ed8" stroke-width="2"/>
              <text x="385" y="183" text-anchor="middle" font-size="16" font-weight="700" fill="#14358f">Agent</text>
              <text x="385" y="205" text-anchor="middle" font-size="12" fill="#3c4a63">acts on behalf of</text>
              <!-- Government agency -->
              <rect x="540" y="140" width="170" height="100" rx="12" fill="#e2f3f0" stroke="#0f766e" stroke-width="2.5"/>
              <text x="625" y="178" text-anchor="middle" font-size="16" font-weight="700" fill="#0f766e">Government agency</text>
              <text x="625" y="199" text-anchor="middle" font-size="12" fill="#0f766e">agency of record</text>
              <text x="625" y="216" text-anchor="middle" font-size="11" fill="#3c4a63">holds authority</text>
            </g>
            <!-- edges -->
            <g stroke="#3c4a63" stroke-width="1.8" fill="none">
              <!-- constituent <-> agent -->
              <path d="M210 178 L300 178" marker-end="url(#arrow)"/>
              <path d="M300 202 L210 202" marker-end="url(#arrow)"/>
              <!-- intermediary supports constituent -->
              <path d="M125 96 L125 150" marker-end="url(#arrow)"/>
              <!-- intermediary may operate agent -->
              <path d="M210 70 C300 70 340 120 372 150" stroke-dasharray="5 4" marker-end="url(#arrow)"/>
              <!-- agent <-> agency -->
              <path d="M470 178 L540 172" marker-end="url(#arrow)"/>
              <path d="M540 206 L470 202" marker-end="url(#arrow)"/>
            </g>
            <g font-family="-apple-system, Segoe UI, Roboto, sans-serif" font-size="11" fill="#3c4a63">
              <text x="255" y="168" text-anchor="middle">authorizes</text>
              <text x="255" y="222" text-anchor="middle">serves</text>
              <text x="505" y="160" text-anchor="middle">request</text>
              <text x="505" y="223" text-anchor="middle">receipt</text>
              <text x="150" y="128" text-anchor="start">supports</text>
              <text x="300" y="100" text-anchor="middle" font-style="italic">may operate</text>
            </g>
          </svg>
        </div>
        <figcaption>The four AGP actors and their trust relationships. Solid arrows are
        standardized AGP interactions; the dashed arrow shows that an intermediary may
        itself operate an agent on a constituent&rsquo;s behalf.</figcaption>
      </figure>

      ${h('table', 'The four actors')}
      <div class="table-wrap">
      <table>
        <thead><tr><th>Actor</th><th>Role</th><th>Commercial analog (ACP)</th></tr></thead>
        <tbody>
          <tr><td><strong>Constituent</strong></td><td>The person or household seeking a service or benefit.</td><td>Buyer</td></tr>
          <tr><td><strong>Agent</strong></td><td>An AI agent acting on the constituent&rsquo;s behalf &mdash; e.g. the Public AI Option, a state agent, or a trusted third-party / NGO agent.</td><td>AI agent</td></tr>
          <tr><td><strong>Intermediary</strong></td><td>NGOs, navigators, caseworkers, trusted orgs that assist constituents &mdash; plus data intermediaries. <em>No clean ACP equivalent.</em></td><td>&mdash;</td></tr>
          <tr><td><strong>Government agency</strong></td><td>The service / benefit provider &mdash; the <strong>agency of record</strong> that retains authority over eligibility and provisioning.</td><td>Merchant (of record)</td></tr>
        </tbody>
      </table>
      </div>

      ${h('constituent', 'Constituent')}
      <p>The person or household at the center of every flow. AGP exists to serve the
      constituent&rsquo;s interest, and the standard is judged by whether it makes that
      person&rsquo;s experience of government simpler, faster, and more dignified. The
      constituent is the source of authority: an agent acts only because, and only to the
      extent that, the constituent has authorized it.</p>

      ${h('agent', 'Agent')}
      <p>Software acting on the constituent&rsquo;s behalf &mdash; discovering services, assembling
      attributes, checking eligibility, submitting requests, and relaying receipts. An
      agent may be the shared &ldquo;Public AI Option,&rdquo; a state-operated agent, or a trusted
      third-party or NGO agent. Crucially, the agent is a <em>fiduciary intermediary of
      action</em>, not a decision-maker of record: it never determines eligibility and
      never provisions a benefit. Those remain the agency&rsquo;s.</p>

      ${h('intermediary', 'Intermediary')}
      <p>The actor with no clean commercial analog, and the one that makes AGP a
      <em>government</em> protocol rather than a commerce protocol with relabeled boxes.
      Intermediaries are the caseworkers, navigators, legal-aid orgs, community-based
      organizations, libraries, and benefits-screening nonprofits who already help people
      reach government &mdash; plus <em>data intermediaries</em> that broker attributes between
      systems.</p>
      <p>Intermediaries matter for <strong>equity</strong>: many constituents do not have,
      or do not want, their own agent or device. The intermediary is how those people are
      still served &mdash; by operating an agent <em>for</em> the constituent, or by carrying
      the same standardized flow through a human-staffed channel. AGP must keep the
      intermediary a first-class participant, never a workaround.</p>

      ${h('agency', 'Government agency (agency of record)')}
      <p>The agency that owns the service and the determination. It publishes the service
      metadata and eligibility rules, verifies authorization, makes the eligibility
      determination, provisions the benefit, and issues the receipt. Authority stops here
      and does not transfer: an agent or intermediary can <em>ask</em>, but only the
      agency of record can <em>decide</em>. This is the load-bearing trust anchor of the
      whole protocol &mdash; the reason a constituent (and a court) can trust an AGP outcome
      is that it traces back to the authoritative agency.</p>

      <div class="callout callout--note">
        <p class="callout__label">Trust relationships in one line</p>
        <p>The <strong>constituent</strong> authorizes an <strong>agent</strong> (possibly
        operated by an <strong>intermediary</strong>) to carry a standardized request to
        the <strong>agency of record</strong>, which alone decides and provisions, then
        returns a receipt back along the same chain.</p>
      </div>`
},

/* ====================================================================== *
 * CONCEPTS
 * ==================================================================== */
{ slug: 'concepts',
  desc: 'AGP defines a small core vocabulary — Service, EligibilityRule, ServiceRequest, Authorization, Receipt/StatusRecord, and the actor types — plus a schema.org-style extension mechanism for the long tail.',
  body: `      <p class="eyebrow">Specification</p>
      <h1>Core concepts &amp; vocabulary</h1>
      <p class="lede">Following schema.org, AGP keeps a deliberately small core of common
      types and pushes the long tail to extensions. The core is the set of objects that
      move through the <a href="flow.html">canonical flow</a>; every flow step maps to one
      of these types.</p>

      ${h('core', 'The core types')}
      <div class="table-wrap">
      <table>
        <thead><tr><th>Type</th><th>One-line definition</th><th>Flow step</th></tr></thead>
        <tbody>
          <tr><td><code>Service</code></td><td>A government service or benefit, with the channels it&rsquo;s offered through and what it requires. Published once by the agency.</td><td>1 · Discovery</td></tr>
          <tr><td><code>EligibilityRule</code></td><td>A machine-readable condition (or set of conditions) the agency uses to determine who qualifies, expressed over named attributes.</td><td>2 · Eligibility</td></tr>
          <tr><td><code>Authorization</code></td><td>A scoped grant from a constituent letting a specific agent act on their behalf and use specific data for a specific purpose.</td><td>3 · Authorization</td></tr>
          <tr><td><code>ServiceRequest</code></td><td>A standardized application/request submitted by the agent to the agency of record, referencing a Service and an Authorization.</td><td>4 · Request</td></tr>
          <tr><td><code>Receipt</code> / <code>StatusRecord</code></td><td>The agency&rsquo;s standardized response: outcome, audit trail, current status, and the path to correction or appeal.</td><td>5 · Receipt</td></tr>
        </tbody>
      </table>
      </div>
      <p>Alongside these five process types, the core also names the four actor types &mdash;
      <code>Constituent</code>, <code>Agent</code>, <code>Intermediary</code>, and
      <code>Agency</code> &mdash; as the parties that produce and consume the objects above.
      That is the entire core. Everything else is an extension.</p>

      ${h('shape', 'What a core object looks like')}
      <p>AGP objects are plain structured data. v1 names the types and their essential
      fields narratively; full machine-readable schemas are <a href="roadmap.html">deferred</a>.
      A <code>Service</code> object, sketched, conveys the shape:</p>
<pre><code><span class="c-com">// Illustrative only — not a normative v1 schema</span>
{
  <span class="c-key">"type"</span>: <span class="c-str">"Service"</span>,
  <span class="c-key">"id"</span>: <span class="c-str">"us-xx-snap"</span>,
  <span class="c-key">"agencyOfRecord"</span>: <span class="c-str">"State of XX, Dept. of Human Services"</span>,
  <span class="c-key">"name"</span>: <span class="c-str">"Supplemental Nutrition Assistance Program"</span>,
  <span class="c-key">"channels"</span>: [<span class="c-str">"agp"</span>, <span class="c-str">"web"</span>, <span class="c-str">"in-person"</span>, <span class="c-str">"phone"</span>],
  <span class="c-key">"requires"</span>: [<span class="c-str">"identity"</span>, <span class="c-str">"householdSize"</span>, <span class="c-str">"income"</span>, <span class="c-str">"residency"</span>],
  <span class="c-key">"eligibility"</span>: <span class="c-str">"ref:us-xx-snap-rules"</span>,
  <span class="c-key">"deliveryPattern"</span>: <span class="c-str">"validate-after"</span>      <span class="c-com">// see Data model</span>
}</code></pre>

      ${h('extensions', 'The extension mechanism')}
      <p>The core cannot anticipate every program, state, or category of benefit &mdash; nor
      should it try. Borrowing directly from schema.org:</p>
      <ul>
        <li><strong>Extensions carry the long tail.</strong> A program or jurisdiction
        that needs terms the core lacks defines them in a namespaced extension (e.g.
        <code>snap:</code>, <code>ca:</code>) rather than waiting for the core to grow.</li>
        <li><strong>A <code>pending</code> melting pot.</strong> Proposed additions live in
        a <code>pending</code> area where they can be seen and used together &mdash; with the
        explicit warning that pending terms may change &mdash; before they graduate into core.</li>
        <li><strong>Graduation by consensus, additively.</strong> Terms that prove broadly
        useful fold into the core through the <a href="governance.html">public process</a>.
        The core grows slowly and never breaks existing extensions.</li>
        <li><strong>Bias to the simplest thing that works.</strong> If a mechanism is
        hurting adoption, AGP simplifies it. Adoption by real agencies is the success
        metric, not vocabulary completeness.</li>
      </ul>

      <div class="callout">
        <p class="callout__label">Why small-core matters here</p>
        <p>Government programs are heterogeneous by design &mdash; SNAP, Medicaid, unemployment
        insurance, and a local utility-assistance program share almost no fields. A large,
        ambitious core would be wrong for most of them. A small core plus extensions lets
        each program be precise without forcing a single rigid schema on all of them.</p>
      </div>`
},

/* ====================================================================== *
 * FLOW
 * ==================================================================== */
{ slug: 'flow', wide: true,
  desc: 'The canonical AGP flow: service discovery, eligibility assessment, authorization and consent, service request and delivery, and receipt, status and recourse — modeled on the ACP checkout decomposition.',
  body: `      <p class="eyebrow">Specification · the heart of AGP</p>
      <h1>The canonical flow</h1>
      <p class="lede">AGP decomposes service delivery into five steps, modeled on ACP&rsquo;s
      checkout decomposition (discovery &rarr; checkout &rarr; transaction context &rarr; receipt /
      access management) and adapted for the realities of public benefits. Each step
      produces or consumes a <a href="concepts.html">core type</a>.</p>

      <figure>
        <div class="figure-box">
          <svg viewBox="0 0 760 300" role="img" aria-labelledby="flowTitle flowDesc" width="760" height="300">
            <title id="flowTitle">AGP canonical flow diagram</title>
            <desc id="flowDesc">Five sequential steps shown left to right: Service discovery (produces a Service object), Eligibility assessment (uses EligibilityRule), Authorization and consent (produces an Authorization), Service request and delivery (produces a ServiceRequest to the agency of record), and Receipt, status and recourse (produces a Receipt or StatusRecord). Arrows connect each step to the next. The agency of record holds authority over steps four and five.</desc>
            <defs>
              <marker id="farrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0 L10 5 L0 10 z" fill="#1d4ed8"/>
              </marker>
            </defs>
            <g font-family="-apple-system, Segoe UI, Roboto, sans-serif">
              ${[
                ['1','Service discovery','Service','#1d4ed8'],
                ['2','Eligibility assessment','EligibilityRule','#1d4ed8'],
                ['3','Authorization &amp; consent','Authorization','#b45309'],
                ['4','Service request','ServiceRequest','#0f766e'],
                ['5','Receipt &amp; recourse','Receipt','#0f766e'],
              ].map((s,i)=>{const x=20+i*148;return `
              <g>
                <circle cx="${x+30}" cy="60" r="18" fill="${s[3]}"/>
                <text x="${x+30}" y="66" text-anchor="middle" font-size="16" font-weight="700" fill="#fff">${s[0]}</text>
                <rect x="${x}" y="100" width="124" height="92" rx="10" fill="#fff" stroke="${s[3]}" stroke-width="2"/>
                <text x="${x+62}" y="132" text-anchor="middle" font-size="12.5" font-weight="700" fill="#11203a">${s[1].split(' ').map((w,j)=>`<tspan x="${x+62}" dy="${j?14:0}">${w}</tspan>`).join('')}</text>
                <text x="${x+62}" y="178" text-anchor="middle" font-family="ui-monospace, Menlo, monospace" font-size="10.5" fill="${s[3]}">${s[2]}</text>
              </g>${i<4?`<path d="M${x+126} 146 L${x+146} 146" stroke="#1d4ed8" stroke-width="2" marker-end="url(#farrow)"/>`:''}`}).join('')}
              <rect x="464" y="226" width="276" height="48" rx="8" fill="#e2f3f0" stroke="#0f766e" stroke-width="1.5"/>
              <text x="602" y="248" text-anchor="middle" font-size="12" font-weight="700" fill="#0f766e">Agency of record holds authority</text>
              <text x="602" y="265" text-anchor="middle" font-size="11" fill="#3c4a63">determination &amp; provisioning stay here</text>
              <path d="M380 192 L520 226" stroke="#0f766e" stroke-width="1.4" stroke-dasharray="4 3" fill="none"/>
              <path d="M676 192 L640 226" stroke="#0f766e" stroke-width="1.4" stroke-dasharray="4 3" fill="none"/>
            </g>
          </svg>
        </div>
        <figcaption>The five AGP steps, each labeled with the core object it produces.
        Steps&nbsp;4&ndash;5 are anchored to the agency of record, which retains authority over
        the determination and provisioning.</figcaption>
      </figure>

      ${h('steps', 'Step by step')}
      <ol class="steps">
        <li>
          ${h3('s1','Service discovery')}
          <span class="step-type">produces / reads → Service</span>
          <p>The agent discovers which government services exist, who&rsquo;s eligible, what&rsquo;s
          needed, and through which channels &mdash; by reading standardized, machine-readable
          metadata that the agency <strong>publishes once</strong> (the VIP
          publish-once / read-everywhere pattern, expressed in the schema.org-style
          <a href="concepts.html">vocabulary</a>). Discovery is read-only and requires no
          constituent data: it answers <em>&ldquo;what is available and what would it take?&rdquo;</em></p>
        </li>
        <li>
          ${h3('s2','Eligibility assessment')}
          <span class="step-type">reads → EligibilityRule</span>
          <p>With the constituent&rsquo;s consent, the agent assembles the relevant attributes
          (identity, household, income, residency&hellip;) and checks them against the
          agency&rsquo;s eligibility rules &mdash; ideally machine-readable rules the agency
          published in step&nbsp;1. AGP supports a <strong>validate-after</strong> option
          where appropriate: provisionally proceed on attested attributes and verify
          later, so a constituent in need is not blocked waiting on a slow check. The
          determination itself still belongs to the agency.</p>
        </li>
        <li>
          ${h3('s3','Authorization &amp; consent')}
          <span class="step-type">produces → Authorization</span>
          <p>The constituent authorizes <em>this</em> agent to act on their behalf and
          consents to <em>specific, scoped</em> data use; the agency verifies that
          authorization before acting on a request. <strong>This is the named gap.</strong>
          v1 defines the interaction points &mdash; where authorization is granted, what it
          scopes, how the agency checks it, and how it is revoked &mdash; but defers the
          cryptographic / identity mechanism to a <a href="authorization.html">companion
          layer</a>, exactly as ACP deferred agent-authorization to a separate mandate
          standard.</p>
        </li>
        <li>
          ${h3('s4','Service request &amp; delivery')}
          <span class="step-type">produces → ServiceRequest</span>
          <p>The agent submits a standardized <code>ServiceRequest</code> &mdash; referencing
          the <code>Service</code> and the <code>Authorization</code> &mdash; to the
          <strong>agency of record</strong>. The agency processes it, automatically and
          instantly where it can, makes the eligibility determination, and provisions the
          service or benefit. Authority for the determination never leaves the agency; the
          agent&rsquo;s role ends at <em>submitting</em> a well-formed request.</p>
        </li>
        <li>
          ${h3('s5','Receipt, status &amp; recourse')}
          <span class="step-type">produces → Receipt / StatusRecord</span>
          <p>A standardized <code>Receipt</code> and ongoing <code>StatusRecord</code>
          return to the constituent (via the agent and/or directly). It includes the
          outcome, an <strong>audit trail</strong> of what was submitted and decided,
          live status tracking, and an explicit <strong>correction / appeal path</strong>.
          Recourse is part of the protocol, not an afterthought: a constituent must always
          be able to see, contest, and correct what was done in their name.</p>
        </li>
      </ol>

      <div class="callout callout--official">
        <p class="callout__label">The control invariant</p>
        <p>Across all five steps, one thing never moves: <strong>authority</strong>. The
        agent discovers, assembles, asks, and reports. The <strong>agency of record</strong>
        decides and provisions. Every AGP message can be traced back to an authoritative
        agency &mdash; which is what lets a constituent trust the result.</p>
      </div>
      <p>See all five steps applied to a real household in the
      <a href="example.html">worked example &rarr;</a></p>`
},

/* ====================================================================== *
 * AUTHORIZATION
 * ==================================================================== */
{ slug: 'authorization',
  desc: 'AGP v1 names the authorization, consent, and identity gap explicitly: it defines the requirement and the interaction points but defers the cryptographic and identity mechanism to a companion layer, following the ACP precedent.',
  body: `      <p class="eyebrow">Specification · companion concern</p>
      <h1>Authorization, consent &amp; identity</h1>
      <p class="lede">This is the hard part, and AGP names it as such. The protocol can
      standardize the flow of requests and receipts &mdash; but proving that a constituent
      truly authorized an agent, scoping what that agent may do, and assigning liability
      when it goes wrong is a distinct problem. v1 defines the <strong>requirement and the
      interaction points</strong>; it deliberately defers the mechanism.</p>

      <div class="callout callout--gap">
        <p class="callout__label">The precedent</p>
        <p>ACP standardized the commerce <em>transaction flow</em> but explicitly did
        <strong>not</strong> solve cryptographic proof that a user authorized an agent &mdash;
        that was pushed to a separate authorization layer (AP2-style mandates). AGP hits
        the <em>identical wall</em> around agent authorization, consent, and liability,
        and makes the same choice: name it, scope the interaction points, defer the crypto.</p>
      </div>

      ${h('requirement', 'The requirement')}
      <p>For any AGP flow that acts on a constituent&rsquo;s behalf, four things must be true,
      and an agency of record must be able to satisfy itself of each before it acts:</p>
      <ol>
        <li><strong>Authorization exists.</strong> A specific constituent granted a
        specific agent permission to act for them.</li>
        <li><strong>Consent is scoped.</strong> The grant names the purpose, the data it
        covers, and the program(s) it applies to &mdash; not a blanket license.</li>
        <li><strong>It is verifiable by the agency.</strong> The agency of record can
        check the authorization against the request it received.</li>
        <li><strong>It is revocable and auditable.</strong> The constituent can withdraw
        it, and there is a durable record of what was authorized and used.</li>
      </ol>

      ${h('interaction-points', 'The interaction points v1 defines')}
      <p>AGP v1 specifies <em>where</em> in the flow authorization and consent are
      exercised, leaving <em>how</em> they are cryptographically proven to the companion
      layer:</p>
      <div class="table-wrap">
      <table>
        <thead><tr><th>Interaction point</th><th>What AGP v1 specifies</th><th>Deferred to companion layer</th></tr></thead>
        <tbody>
          <tr><td><strong>Grant</strong></td><td>That the constituent issues a scoped <code>Authorization</code> to a named agent at step&nbsp;3.</td><td>The signature / credential format proving it.</td></tr>
          <tr><td><strong>Scope</strong></td><td>That the grant carries purpose, data categories, and program scope.</td><td>The machine-enforceable scoping / mandate encoding.</td></tr>
          <tr><td><strong>Verify</strong></td><td>That the agency checks an <code>Authorization</code> reference on each <code>ServiceRequest</code>.</td><td>The identity-proofing and verification protocol.</td></tr>
          <tr><td><strong>Revoke</strong></td><td>That an authorization can be revoked and that revocation is reflected in status.</td><td>Revocation propagation / freshness guarantees.</td></tr>
          <tr><td><strong>Audit</strong></td><td>That the <code>Receipt</code> records what authorization was relied upon.</td><td>Tamper-evidence / non-repudiation cryptography.</td></tr>
        </tbody>
      </table>
      </div>

      ${h('consent', 'Consent, scoping, and defaults')}
      <p>Consent in AGP is <strong>specific and legible</strong>: a constituent consents
      to a purpose (&ldquo;apply for SNAP&rdquo;), over named data (&ldquo;household size, income,
      residency&rdquo;), for named programs, for a bounded time. Whether a given program is
      <strong>opt-in or opt-out</strong> by default &mdash; and how consent is scoped and
      revoked &mdash; is a policy choice that AGP surfaces explicitly rather than burying.
      v1 takes no position on the right default for any specific program; it requires only
      that the default be stated, not implied. (See <a href="open-questions.html">Open
      questions</a>.)</p>

      ${h('identity', 'Identity and the constituent without an agent')}
      <p>Authorization presupposes a way to know <em>who</em> the constituent is. AGP does
      not specify an identity system; it expects to ride on existing government identity
      and the companion authorization layer. And because not every constituent has an
      agent or a verifiable digital identity, the <a href="actors.html#intermediary">intermediary</a>
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
        <p>Inventing a bespoke AGP crypto/identity scheme would be the kind of
        reinvention <a href="principles.html#p5">Principle&nbsp;5</a> warns against, and
        would couple AGP&rsquo;s adoption to an unsolved research problem. Naming the gap and
        defining clean interaction points lets the flow ship now and lets the
        authorization layer evolve &mdash; possibly as its own sibling standard.</p>
      </div>`
},

/* ====================================================================== *
 * DATA MODEL
 * ==================================================================== */
{ slug: 'data-model',
  desc: 'AGP is an overlay and connector over existing government data schemas, not a new data dictionary. It expects MCP as the likely access mechanism for tools and data, and allows a validate-after delivery pattern.',
  body: `      <p class="eyebrow">Specification</p>
      <h1>Data model approach</h1>
      <p class="lede">AGP is an <strong>overlay and connector</strong>, not a new data
      dictionary. The meaning of &ldquo;income,&rdquo; &ldquo;household,&rdquo; or &ldquo;residency&rdquo; already exists
      in mature government data models; AGP&rsquo;s job is to reference and connect them, not to
      redefine them.</p>

      ${h('reuse', 'Reuse over reinvention')}
      <p>This is <a href="principles.html#p5">Principle&nbsp;5</a> applied concretely, and
      it mirrors schema.org expressing itself on top of existing web standards (JSON-LD,
      RDFa, Microdata) rather than inventing new infrastructure. AGP&rsquo;s analog: lean on
      existing government data schemas and standards rather than minting a parallel
      universe.</p>
      <ul>
        <li><strong>National Information Exchange Model (NIEM)</strong> and established
        program data models supply the <em>meaning</em> of attributes. AGP references
        them; it does not re-specify them.</li>
        <li><strong>Existing program schemas</strong> (SNAP, Medicaid, UI, etc.) define
        the fields a given <code>Service</code> needs. AGP&rsquo;s <code>requires</code> list
        points at those, rather than enumerating a universal set.</li>
        <li>AGP&rsquo;s <a href="concepts.html">core types</a> are the thin connective tissue:
        envelopes that carry references to existing definitions through the flow.</li>
      </ul>

      ${h('mcp', 'MCP as the access mechanism')}
      <p>AGP describes <em>what</em> moves; it expects the <strong>Model Context Protocol
      (MCP)</strong> to be the likely mechanism for <em>how</em> an agent actually reaches
      tools and data &mdash; querying a service catalog, fetching an eligibility ruleset,
      submitting a request, reading status. Reusing MCP keeps AGP out of the transport
      business and lets agencies expose AGP-shaped capabilities through an interface
      agents already speak. Reference MCP servers that states could adopt are an explicit
      <a href="roadmap.html">future deliverable</a>, not part of v1.</p>

      <div class="callout">
        <p class="callout__label">Layering</p>
        <p><strong>NIEM / program schemas</strong> give the <em>vocabulary of attributes</em>.
        <strong>AGP</strong> gives the <em>process objects</em> (Service, EligibilityRule,
        Authorization, ServiceRequest, Receipt) that reference them.
        <strong>MCP</strong> gives the <em>access channel</em> agents use to move those
        objects. The <a href="authorization.html">companion layer</a> gives the
        <em>proof</em> that the constituent authorized it.</p>
      </div>

      ${h('validate-after', 'The validate-after pattern')}
      <p>Some benefits are time-critical: a household that lost income this week cannot
      wait weeks for every attribute to be cross-verified. Where law and program rules
      permit, AGP allows a <strong>validate-after</strong> delivery pattern: the agency
      provisions provisionally on attested attributes and completes verification
      afterward, with the receipt reflecting the provisional status and any later
      reconciliation. A <code>Service</code> declares whether it supports this. It is an
      <em>allowed</em> pattern, never a required one &mdash; the agency of record decides
      whether a given program can safely use it.</p>

      ${h('boundaries', 'What AGP deliberately leaves out')}
      <p>Consistent with the <a href="index.html#non-goals">non-goals</a>, the data-model
      work that is <strong>out of scope for v1</strong> includes full machine-readable
      JSON Schemas or OpenAPI specs for every object, and the canonical encoding of
      eligibility rules. v1 names the types and their roles; formalizing them is roadmap
      work to be done <em>with</em> agencies so the schemas reflect real systems.</p>`
},

/* ====================================================================== *
 * EXAMPLE
 * ==================================================================== */
{ slug: 'example', wide: true,
  desc: 'A worked example: a household applies for SNAP food assistance after a job loss, walked end-to-end through all five AGP flow steps, showing what each actor does and what objects move.',
  body: `      <p class="eyebrow">Specification · worked example</p>
      <h1>Worked example: SNAP after a job loss</h1>
      <p class="lede">Abstract specs are hard to trust. So here is one concrete,
      high-volume service walked end-to-end through all five steps &mdash; ACP&rsquo;s
      &ldquo;t-shirt under USD&nbsp;40&rdquo; style, but for food assistance. Watch what each actor
      does and which <a href="concepts.html">object</a> moves at each step.</p>

      <div class="callout callout--note">
        <p class="callout__label">The scenario</p>
        <p><strong>Maria</strong> is a constituent in the (fictional) State of XX. She was
        laid off two weeks ago; her household of three (Maria and two children) has lost
        its main income. She wants to apply for <strong>SNAP</strong> (food assistance).
        She uses a <strong>Public AI Option agent</strong>. Her local food bank, a
        trusted <strong>intermediary</strong>, is available if she needs a human. The
        <strong>agency of record</strong> is the State of XX Department of Human Services
        (DHS).</p>
      </div>

      <ol class="steps">
        <li>
          ${h3('e1','Discovery — what help exists')}
          <span class="step-type">Service</span>
          <p>Maria tells her agent she lost her job and is worried about groceries. The
          agent queries the AGP service catalog and reads the <code>Service</code> object
          DHS <em>published once</em>: SNAP, offered through channels
          <code>agp · web · in-person · phone</code>, requiring
          <code>identity, householdSize, income, residency</code>, with
          <code>deliveryPattern: validate-after</code> supported for households with a
          recent income loss.</p>
          <p><strong>Maria does:</strong> describes her situation in plain language.
          <strong>Agent does:</strong> finds SNAP (and flags two other programs) without
          touching her personal data yet &mdash; discovery is read-only.</p>
        </li>
        <li>
          ${h3('e2','Eligibility — does she likely qualify')}
          <span class="step-type">EligibilityRule</span>
          <p>The agent asks Maria for permission to use her household and income details
          to check eligibility. It assembles her attributes &mdash; household size 3, near-zero
          current income, State&nbsp;XX residency &mdash; and evaluates them against the
          machine-readable <code>EligibilityRule</code> DHS published. The rule indicates
          she very likely qualifies, and because her income dropped this month, the
          <strong>validate-after</strong> path applies: she can be provisionally approved
          while documentation is verified.</p>
          <p><strong>Maria does:</strong> confirms household size and income. <strong>Agent
          does:</strong> runs the check locally against DHS&rsquo;s rules; shows Maria a plain
          estimate &mdash; <em>&ldquo;you likely qualify for about USD&nbsp;535/month; here&rsquo;s why.&rdquo;</em>
          No determination has been made &mdash; only the agency can do that.</p>
        </li>
        <li>
          ${h3('e3','Authorization — Maria says yes, narrowly')}
          <span class="step-type">Authorization</span>
          <p>Maria authorizes <em>this</em> agent to submit a SNAP application on her
          behalf and consents to DHS using her identity, household, income, and residency
          data <strong>for the purpose of this SNAP application only</strong>. The agent
          produces a scoped <code>Authorization</code>; DHS will verify it on receipt.</p>
          <div class="callout callout--gap" style="margin:.8rem 0 0;">
            <p class="callout__label">Where the gap shows up</p>
            <p>AGP v1 specifies that this scoped grant exists and that DHS checks it. The
            <em>cryptographic proof</em> that it was really Maria, encoded so DHS can
            verify it and so Maria can revoke it, is the <a href="authorization.html">companion
            layer</a>. If Maria had no verifiable digital identity, the food-bank
            <a href="actors.html#intermediary">intermediary</a> could carry this step with her in person.</p>
          </div>
        </li>
        <li>
          ${h3('e4','Request &amp; delivery — DHS decides')}
          <span class="step-type">ServiceRequest</span>
          <p>The agent submits a standardized <code>ServiceRequest</code> to DHS &mdash; the
          agency of record &mdash; referencing the SNAP <code>Service</code> and Maria&rsquo;s
          <code>Authorization</code>. DHS verifies the authorization, runs its own
          determination, and &mdash; using validate-after &mdash; <strong>provisionally approves</strong>
          Maria for SNAP, issuing benefits to an EBT account while documentation is
          confirmed over the following weeks.</p>
          <p><strong>Agent does:</strong> submits a well-formed request, then stops.
          <strong>DHS does:</strong> makes the actual eligibility determination and
          provisions the benefit. <strong>Authority never left DHS</strong> &mdash; the agent
          only carried the request.</p>
        </li>
        <li>
          ${h3('e5','Receipt — proof, status, and a way to fix it')}
          <span class="step-type">Receipt / StatusRecord</span>
          <p>DHS returns a standardized <code>Receipt</code> to Maria (through her agent
          and to her DHS account): provisionally approved, ~USD&nbsp;535/month, with an
          <strong>audit trail</strong> of exactly what was submitted and decided, a live
          <code>StatusRecord</code> showing &ldquo;documentation pending,&rdquo; and a clear
          <strong>correction / appeal path</strong> if anything is wrong. Two weeks later,
          when DHS confirms her income documents, the status updates to fully approved &mdash;
          no new application required.</p>
          <p><strong>Maria has:</strong> food assistance within days, a record she can
          trust because it traces back to DHS, and recourse if it&rsquo;s wrong.</p>
        </li>
      </ol>

      ${h('mapping', 'How it maps back')}
      <p>Every step above used exactly one core object and preserved the control
      invariant. That consistency &mdash; flow, vocabulary, and example all telling the same
      story &mdash; is the point.</p>
      <div class="table-wrap">
      <table>
        <thead><tr><th>Step</th><th>Object</th><th>Who acts</th><th>Authority</th></tr></thead>
        <tbody>
          <tr><td>1 · Discovery</td><td><code>Service</code></td><td>Agent reads</td><td>Published by DHS</td></tr>
          <tr><td>2 · Eligibility</td><td><code>EligibilityRule</code></td><td>Agent evaluates</td><td>Rules owned by DHS</td></tr>
          <tr><td>3 · Authorization</td><td><code>Authorization</code></td><td>Constituent grants</td><td>Verified by DHS</td></tr>
          <tr><td>4 · Request</td><td><code>ServiceRequest</code></td><td>Agent submits</td><td><strong>DHS decides &amp; provisions</strong></td></tr>
          <tr><td>5 · Receipt</td><td><code>Receipt</code> / <code>StatusRecord</code></td><td>Constituent receives</td><td>Issued by DHS</td></tr>
        </tbody>
      </table>
      </div>`
},

/* ====================================================================== *
 * GOVERNANCE
 * ==================================================================== */
{ slug: 'governance',
  desc: 'AGP proposes a neutral nonprofit home, an open license, a lightweight public RFC/proposal process, and an explicit co-author role for state and local agencies and labs — modeled on VIP and schema.org.',
  body: `      <p class="eyebrow">Governance</p>
      <h1>Governance &amp; contribution</h1>
      <p class="lede">A standard is only as credible as its governance. AGP proposes a
      shape that borrows ACP&rsquo;s named-stewards-plus-open-license structure, VIP&rsquo;s
      official co-authorship as the source of trust, and schema.org&rsquo;s lightweight,
      additive, GitHub-driven process.</p>

      ${h('home', 'A neutral nonprofit home')}
      <p>AGP should be stewarded by a <strong>named, neutral nonprofit</strong> &mdash; the way
      VIP lives at Democracy Works and schema.org runs as an independent project hosted in
      W3C Community Groups but <em>not</em> governed by W3C. A neutral home keeps the
      standard from being captured by any single vendor or agency, and gives agencies a
      trustworthy counterparty to co-author with. (The specific organization is an
      <a href="open-questions.html">open question</a>; the requirement that it be neutral
      and nonprofit is not.)</p>

      ${h('license', 'Open license')}
      <p>AGP is published under an <strong>open license (Apache&nbsp;2.0 proposed)</strong>,
      matching ACP&rsquo;s posture, so any agency, vendor, or NGO can implement it without
      permission and reference implementations can be shared freely.</p>

      ${h('process', 'A lightweight, public change process')}
      <p>Following schema.org, the day-to-day work runs on a <strong>public GitHub issue
      list</strong>, and changes are <strong>additive</strong> &mdash; the core grows slowly
      and never breaks existing extensions. Concretely:</p>
      <ul>
        <li><strong>Proposals as AGP-RFCs.</strong> Substantive changes enter as a written
        proposal (an &ldquo;AGP-RFC,&rdquo; analogous to ACP&rsquo;s SEP process) discussed in the open.</li>
        <li><strong>A <code>pending</code> melting pot.</strong> New terms can be used and
        seen together in <code>pending</code> &mdash; explicitly marked as subject to change &mdash;
        before graduating into core.</li>
        <li><strong>Consensus, not unilateral edits.</strong> Like schema.org, no release
        ships without the agreement of the stewarding group; proposals graduate by
        demonstrated use and consensus, not by fiat.</li>
        <li><strong>Reference implementations live separately.</strong> The spec and its
        reference MCP servers are versioned independently, as ACP separates spec from
        implementation.</li>
      </ul>

      <div class="callout callout--official">
        <p class="callout__label">Agencies are co-authors, not consumers</p>
        <p>VIP earns trust because it was built <em>with</em> the state and local election
        officials who run the systems &mdash; not handed to them. AGP&rsquo;s governance must
        center <strong>state and local agencies, caseworker organizations, and government
        innovation labs as co-authors</strong>. The standard has to come from, and work
        for, the people who operate public services, or it will not (and should not) be
        adopted.</p>
      </div>

      ${h('roles', 'Who participates')}
      <div class="grid grid-2">
        <div class="card"><h3>Stewarding nonprofit</h3><p>Hosts the spec, runs the process, keeps the standard neutral, and convenes releases by consensus.</p></div>
        <div class="card"><h3>State &amp; local agencies</h3><p>Co-author the vocabulary and flow against real systems; their adoption is the success metric.</p></div>
        <div class="card"><h3>Intermediaries &amp; labs</h3><p>NGOs, navigators, legal-aid orgs, and government innovation labs surface equity and real-world constraints.</p></div>
        <div class="card"><h3>Agent &amp; tool builders</h3><p>Implement compliant agents and MCP servers, and stress-test the spec through use.</p></div>
      </div>

      ${h('contribute', 'How to get involved')}
      <p>AGP v0.1 is a strawman published to be argued with. The most useful contributions
      right now are: agencies describing where the flow does or doesn&rsquo;t fit their
      systems; intermediaries pressure-testing the equity story; and reviewers poking at
      the <a href="authorization.html">authorization gap</a> and the
      <a href="open-questions.html">open questions</a>. Open an issue or proposal on
      <a href="${SITE.repo}">GitHub</a>.</p>`
},

/* ====================================================================== *
 * ROADMAP
 * ==================================================================== */
{ slug: 'roadmap',
  desc: 'What is in AGP v1, what is deferred to future versions (machine-readable schemas, reference MCP servers, the authorization mechanism, multilingual and frontend work, scaling and international content), and how to get involved.',
  body: `      <p class="eyebrow">Governance</p>
      <h1>Status &amp; roadmap</h1>
      <p class="lede">AGP is at <strong>v0.1</strong>: a narrative, conceptual
      specification. This page is explicit about what v1 includes and what is deliberately
      deferred, so no one mistakes the strawman for a finished standard.</p>

      ${h('in', 'In scope for v1')}
      <ul>
        <li><span class="pill pill--in">In v1</span> The narrative specification: overview, <a href="principles.html">principles</a>, and <a href="actors.html">actors</a>.</li>
        <li><span class="pill pill--in">In v1</span> The <a href="flow.html">canonical five-step flow</a>, diagrammed and documented.</li>
        <li><span class="pill pill--in">In v1</span> A named, defined <a href="concepts.html">core vocabulary</a> and the extension mechanism.</li>
        <li><span class="pill pill--in">In v1</span> The <a href="authorization.html">authorization &amp; consent requirements and interaction points</a> (mechanism deferred).</li>
        <li><span class="pill pill--in">In v1</span> The <a href="data-model.html">data-model approach</a> (overlay/connector, MCP, validate-after).</li>
        <li><span class="pill pill--in">In v1</span> One end-to-end <a href="example.html">worked example</a>.</li>
        <li><span class="pill pill--in">In v1</span> A <a href="governance.html">governance model</a>, <a href="glossary.html">glossary</a>, <a href="faq.html">FAQ</a>, and <a href="open-questions.html">open questions</a>.</li>
      </ul>

      ${h('future', 'Deferred to future versions')}
      <ul>
        <li><span class="pill pill--future">Future</span> Full machine-readable <strong>JSON Schemas / OpenAPI</strong> for every object, and a canonical encoding for eligibility rules.</li>
        <li><span class="pill pill--future">Future</span> <strong>Reference MCP server implementations</strong> that states can adopt instead of hand-rolling integrations.</li>
        <li><span class="pill pill--future">Future</span> The <strong>cryptographic authorization / identity mechanism</strong> itself &mdash; possibly as a sibling standard.</li>
        <li><span class="pill pill--future">Future</span> <strong>Multi-language content</strong> and the consumer-facing <strong>frontend</strong>.</li>
        <li><span class="pill pill--future">Future</span> <strong>Scaling / adoption tooling</strong> and <strong>international-comparison</strong> content.</li>
      </ul>

      ${h('shape', 'The likely path')}
      <ol class="steps">
        <li><h3 style="margin-top:-.2rem">v0.1 — this strawman</h3><p>Narrative spec published for scrutiny and co-authorship. Goal: agreement on actors, flow, and vocabulary.</p></li>
        <li><h3>v0.x — co-authored core</h3><p>Work <em>with</em> agencies to formalize the core types into machine-readable schemas against real program data. Pilot one service in one jurisdiction.</p></li>
        <li><h3>Companion — authorization layer</h3><p>Advance the authorization / consent / identity mechanism in parallel, likely as its own standard, against AGP&rsquo;s defined interaction points.</p></li>
        <li><h3>v1.0 — reference implementations</h3><p>Reference MCP servers and templatized protocols states can adopt; broaden to more services and jurisdictions.</p></li>
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
 * OPEN QUESTIONS
 * ==================================================================== */
{ slug: 'open-questions',
  desc: 'Genuinely open design questions AGP surfaces rather than resolves: where agent authority ends, consent defaults, liability for stale data, equity for constituents without agents, whether authorization should be a sibling standard, and the relationship to NIEM and MCP.',
  body: `      <p class="eyebrow">Governance</p>
      <h1>Open questions</h1>
      <p class="lede">A strawman earns trust by being honest about what it has <em>not</em>
      settled. These are surfaced deliberately and left <strong>unresolved</strong> &mdash;
      each is a candidate for an <a href="governance.html#process">AGP-RFC</a>. Where a
      question has a sharp answer, it belongs in the spec, not here.</p>

      ${h('q1', '1. Where does the agent&rsquo;s authority end and the agency&rsquo;s begin, in edge cases?')}
      <p>The control invariant is clear in the common case &mdash; the agency of record
      decides. But edge cases blur: provisional approvals under
      <a href="data-model.html#validate-after">validate-after</a>, agent-supplied
      attestations the agency hasn&rsquo;t yet verified, partial determinations, and corrections
      mid-flight. Exactly where the line sits in those cases is unresolved.</p>

      ${h('q2', '2. Opt-in vs. opt-out defaults, and how consent is scoped and revoked.')}
      <p>Should a given program default to opt-in or opt-out for agent action and data
      use? How granular is scoping (per program? per attribute? per request?), and what
      does revocation guarantee once data has already been used? AGP requires the default
      to be <em>explicit</em>; it does not yet say what the default <em>should</em> be.</p>

      ${h('q3', '3. Liability when an agent acts on stale or wrong data.')}
      <p>If an agent submits outdated income and a benefit is wrongly granted or denied,
      who is liable to the constituent, and what makes them whole? This is entangled with
      the <a href="authorization.html#liability">authorization mechanism</a> and is not
      resolved in v1.</p>

      ${h('q4', '4. Equity: how are constituents without agents or devices served?')}
      <p>AGP leans on the <a href="actors.html#intermediary">intermediary</a> as the
      answer &mdash; but how is parity actually guaranteed so that the agent-equipped don&rsquo;t
      get faster or better outcomes than those served through a human channel? Designing
      against a two-tier system is an open problem, not a solved one.</p>

      ${h('q5', '5. Should agent authorization / identity be its own sibling standard?')}
      <p>AGP treats authorization as a <a href="authorization.html">companion concern</a>.
      Should it remain an AGP appendix, or become a separate, independently governed
      standard that AGP merely depends on &mdash; the way ACP relies on a distinct
      authorization layer? There are real trade-offs either way.</p>

      ${h('q6', '6. Overlay or dependency on existing standards?')}
      <p>AGP intends to <a href="data-model.html">reuse</a> NIEM, existing program data
      models, and MCP. But is AGP a thin <em>overlay</em> that merely references them, or a
      hard <em>dependency</em> that requires them? The coupling &mdash; how much AGP mandates
      versus recommends &mdash; is still being worked out.</p>

      <div class="callout callout--note">
        <p class="callout__label">Help resolve these</p>
        <p>Each question above is a good first issue. If you operate a program, run an
        intermediary, or work on identity, your input is exactly what turns an open
        question into a spec decision. See <a href="governance.html#contribute">Contribute</a>.</p>
      </div>`
},

/* ====================================================================== *
 * GLOSSARY
 * ==================================================================== */
{ slug: 'glossary',
  desc: 'Definitions of the key AGP terms: actors, core vocabulary types, the agency-of-record and validate-after patterns, and the precedent standards (ACP, VIP, schema.org, NIEM, MCP).',
  body: `      <p class="eyebrow">Reference</p>
      <h1>Glossary</h1>
      <p class="lede">Key AGP terms in one place. Vocabulary types are defined more fully
      in <a href="concepts.html">Core concepts</a>; actors in <a href="actors.html">Actors
      &amp; roles</a>.</p>

      <dl class="deflist">
        <dt>Agency of record</dt>
        <dd>The government agency that owns a service and retains authority over eligibility determination and provisioning. AGP&rsquo;s analog to ACP&rsquo;s &ldquo;merchant of record.&rdquo; Authority never transfers away from it.</dd>

        <dt>Agent</dt>
        <dd>Software acting on a constituent&rsquo;s behalf within an AGP flow &mdash; discovering services, assembling attributes, submitting requests, relaying receipts. Never a decision-maker of record.</dd>

        <dt>AGP-RFC</dt>
        <dd>A written proposal for a substantive change to AGP, discussed in the open and graduated by consensus. Analogous to ACP&rsquo;s SEP and schema.org&rsquo;s GitHub-driven proposal process.</dd>

        <dt>Authorization</dt>
        <dd>A scoped grant from a constituent letting a specific agent act on their behalf and use specific data for a specific purpose. A core type; its cryptographic proof is deferred to the companion layer.</dd>

        <dt>Constituent</dt>
        <dd>The person or household seeking a government service or benefit; the source of authority for any agent action.</dd>

        <dt>Companion layer</dt>
        <dd>The deferred authorization / consent / identity mechanism that proves a constituent authorized an agent. AGP v1 defines its interaction points but not its cryptography.</dd>

        <dt>EligibilityRule</dt>
        <dd>A machine-readable condition the agency uses to determine who qualifies, expressed over named attributes. Owned and published by the agency.</dd>

        <dt>Extension</dt>
        <dd>A namespaced set of program- or jurisdiction-specific terms layered on the small core. May graduate into core by consensus. A schema.org-derived mechanism.</dd>

        <dt>Intermediary</dt>
        <dd>NGOs, navigators, caseworkers, trusted orgs, and data intermediaries that assist constituents &mdash; including by operating an agent on a constituent&rsquo;s behalf. The actor with no clean commercial analog; central to equity.</dd>

        <dt>MCP (Model Context Protocol)</dt>
        <dd>An existing protocol AGP expects agents to use as the access channel for reaching tools and data, rather than AGP inventing its own transport.</dd>

        <dt>NIEM</dt>
        <dd>The National Information Exchange Model &mdash; an existing government data standard AGP references for attribute meaning rather than re-specifying.</dd>

        <dt>Pending</dt>
        <dd>The melting-pot area where proposed AGP terms can be seen and used together &mdash; explicitly marked subject to change &mdash; before graduating into the core. Adopted from schema.org.</dd>

        <dt>Publish once, read everywhere</dt>
        <dd>The VIP pattern AGP adopts: agencies publish authoritative service metadata and eligibility rules once, and any compliant agent or surface reads them, preserving a chain back to the authoritative source.</dd>

        <dt>Receipt / StatusRecord</dt>
        <dd>The agency&rsquo;s standardized response to a request: outcome, audit trail, live status, and the correction/appeal path. A core type.</dd>

        <dt>Service</dt>
        <dd>A government service or benefit with its channels and requirements, published once by the agency. The core type read during discovery.</dd>

        <dt>ServiceRequest</dt>
        <dd>A standardized application/request submitted by an agent to the agency of record, referencing a Service and an Authorization. A core type.</dd>

        <dt>Validate-after</dt>
        <dd>An allowed delivery pattern in which an agency provisions provisionally on attested attributes and verifies afterward. Declared per Service; never required.</dd>

        <dt>ACP / VIP / schema.org</dt>
        <dd>AGP&rsquo;s three precedents: the Agentic Commerce Protocol (flow and control model), the Voting Information Project (publish-once government-data and co-authorship trust model), and schema.org (small-core-plus-extensions vocabulary and lightweight additive governance).</dd>
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
      <p><strong>No.</strong> The agent discovers services, assembles your attributes (with
      consent), checks them against published rules, and submits a request. The
      <a href="actors.html#agency">agency of record</a> &mdash; the government &mdash; makes the
      actual eligibility determination and provisions the benefit. AGP is built so
      authority <em>never</em> moves to the agent. (See the
      <a href="flow.html#steps">control invariant</a>.)</p>

      ${h('liable', 'Who is liable if something goes wrong?')}
      <p>Liability is an <a href="open-questions.html#q3">open question</a> AGP v1 does not
      resolve, because it is inseparable from the deferred
      <a href="authorization.html#liability">authorization mechanism</a>. What v1 does
      guarantee is <a href="flow.html#s5">recourse</a>: every outcome comes with an audit
      trail and an explicit correction/appeal path, so a constituent can always see,
      contest, and fix what was done in their name.</p>

      ${h('no-agent', 'What about people without an agent or device?')}
      <p>This is exactly why the <a href="actors.html#intermediary">intermediary</a> is a
      first-class actor. A caseworker, navigator, library, or NGO can operate an agent
      <em>for</em> a constituent, or carry the same standardized flow through a
      human-staffed channel. Ensuring parity between agent-equipped and
      intermediary-served constituents is an explicit
      <a href="open-questions.html#q4">open question</a> &mdash; AGP names it rather than
      pretending everyone has an agent.</p>

      ${h('vs-api', 'How is this different from just building an API?')}
      <p>An API is a point-to-point integration: each agency exposes its own, and every
      agent re-integrates with each one. AGP is a <strong>shared standard</strong> &mdash; a
      common vocabulary and flow &mdash; so the integration is written once and reused across
      agencies and jurisdictions (the <a href="principles.html#p4">publish-once,
      read-everywhere</a> model). AGP also expects to <em>use</em> APIs and
      <a href="data-model.html#mcp">MCP</a> as the transport; it standardizes the
      <em>meaning and the flow</em> on top, not the wire.</p>

      ${h('a11y', 'How do accessibility and language access work?')}
      <p>They are <a href="principles.html#p2">principles</a>, not features. Because every
      agent interaction must degrade gracefully to a human, and because accessibility
      (WCAG&nbsp;2.1&nbsp;AA) and plain language are first-class requirements, AGP is
      designed so the standardized flow can be delivered through accessible and
      multilingual surfaces. The consumer-facing frontend and multi-language content
      themselves are <a href="roadmap.html#future">roadmap</a> items; the requirement that
      they be possible is baked into the spec now &mdash; including this documentation site.</p>

      ${h('govt-takeover', 'Does an agent get to act <em>as</em> the government?')}
      <p>No. An agent can <em>ask</em> on a constituent&rsquo;s behalf; only the agency of
      record can <em>decide</em> and provision. Every AGP message traces back to an
      authoritative agency &mdash; that traceability is what makes an AGP outcome trustworthy
      to a constituent (and to a court).</p>

      ${h('why-defer', 'Why doesn&rsquo;t v1 just solve the authorization problem?')}
      <p>Because solving cryptographic agent-authorization, consent encoding, and identity
      proofing is a hard, partly-unsolved problem &mdash; the same wall ACP hit and deferred
      to a separate layer. Coupling AGP&rsquo;s adoption to it would stall both. AGP instead
      <a href="authorization.html">names the gap</a>, defines clean interaction points, and
      lets the flow ship while the authorization layer matures (possibly as its own
      standard).</p>

      ${h('ready', 'Is AGP ready to build against?')}
      <p>Not yet. v0.1 is a <strong>conceptual strawman</strong> to align on actors, flow,
      and vocabulary. Machine-readable schemas and reference implementations are
      <a href="roadmap.html">deferred</a>. The most useful thing to do now is
      <a href="governance.html#contribute">co-author and critique it</a>.</p>`
},

];
};
