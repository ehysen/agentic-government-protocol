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
      consent and the agency&rsquo;s authority intact. Often a <strong>life event</strong> &mdash;
      a job loss, a new baby, a move &mdash; is all it takes to initiate help: people are
      <strong>served immediately, and with empathy</strong>, because the system carries the
      burden, not them.</p>

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
          <p>Life events initiate engagement. One change &mdash; a new job, a new address, a new child &mdash; can surface and update everything you&rsquo;re entitled to.</p>
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
      authorization, advances <a href="schema.html#session"><code>ServiceSession</code></a>s,
      and returns authoritative <a href="schema.html#determination"><code>Determination</code></a>s
      &mdash; all strictly within the authority delegated to it by the agency of record. It is how
      an agency becomes reachable by any compliant agent without bespoke, agent-by-agent
      integration.</p>

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
        (possibly run by an <strong>intermediary</strong>) to advance a standardized
        <strong>session</strong>, agent-to-agent, with the <strong>agency agent</strong> of the
        <strong>agency of record</strong>, which alone decides and provisions, then returns an
        authoritative determination along the same chain.</p>
      </div>`
},

/* ====================================================================== *
 * CONCEPTS
 * ==================================================================== */
{ slug: 'concepts',
  desc: 'AGP defines a small core vocabulary — Service, EligibilityRule, Authorization, ServiceRequest, Receipt/StatusRecord, and the actor types — plus an extension mechanism for the long tail. The concrete schema is on the Schema page.',
  body: `      <p class="eyebrow">Specification</p>
      <h1>Core concepts &amp; vocabulary</h1>
      <p class="lede">AGP keeps a deliberately small core &mdash; and it is smaller than it
      looks. Rather than a long pipeline of separate objects, the protocol turns on
      <strong>one living record, the <code>ServiceSession</code></strong>, that a constituent
      agent and an agency agent advance together: a published <strong>catalog</strong> on one
      end, an authoritative <strong>determination</strong> on the other. Concrete shapes live
      on <a href="schema.html">The schema</a>.</p>

      ${h('core', 'The core types')}
      <div class="table-wrap">
      <table>
        <thead><tr><th>Type</th><th>One-line definition</th><th>Role</th></tr></thead>
        <tbody>
          <tr><td><code>Catalog</code></td><td>What an agency publishes once: its <code>Service</code>s, their <code>EligibilityRule</code>s, and the capabilities it supports.</td><td>Discovery</td></tr>
          <tr><td><code>ServiceSession</code></td><td>The single living record of one interaction. Created, updated, and submitted; carries the attributes, the authorization, messages, and the determination, and moves through a <code>status</code>.</td><td>The spine</td></tr>
          <tr><td><code>Determination</code></td><td>The authoritative outcome the agency of record produces on submit &mdash; award breakdown, audit trail, status, and recourse.</td><td>Outcome</td></tr>
          <tr><td><code>Authorization</code></td><td>A scoped grant letting a specific agent act for a constituent. Its cryptographic proof is deferred to the companion layer.</td><td>Consent</td></tr>
        </tbody>
      </table>
      </div>
      <p>That is the whole core: a catalog you read, a session you advance, a determination
      the agency returns, and an authorization that rides alongside. The core also names the
      actor types &mdash; <code>Constituent</code>, <code>Agent</code>, <code>Intermediary</code>,
      <code>Agency</code> &mdash; and the two agent roles. Everything else is an extension.</p>

      <div class="callout callout--note">
        <p class="callout__label">Why one session instead of five objects</p>
        <p>An earlier sketch modelled each step of the flow as its own object (request,
        receipt, status record&hellip;). Collapsing them into a single status-driven
        <code>ServiceSession</code> is simpler to implement and reason about: there is always
        exactly one authoritative record of where an interaction stands. This is the biggest
        lesson AGP took from agentic commerce &mdash; see <a href="related-work.html#acp">Related
        work</a>.</p>
      </div>

      ${h('crosscutting', 'Three things every session carries')}
      <p>Adopted because government needs them even more than commerce does:</p>
      <ul>
        <li><strong><code>status</code> &mdash; a lifecycle, not a pipeline.</strong> A session is
        always in exactly one state (<code>gathering</code>, <code>ready_to_submit</code>,
        <code>in_progress</code>, <code>requires_intervention</code>, <code>completed</code>,
        <code>denied</code>&hellip;). The agent reads <code>status</code> to know what to do next.</li>
        <li><strong><code>messages[]</code> &mdash; actionable, structured guidance.</strong> Each
        message is an <code>info</code>, <code>warning</code>, or <code>error</code> with a
        <code>resolution</code> (&ldquo;needs your input,&rdquo; &ldquo;sent for review&rdquo;) and a pointer to the
        field at issue &mdash; e.g. &ldquo;proof of income required&rdquo; or &ldquo;identity check needed.&rdquo;</li>
        <li><strong><code>capabilities</code> &mdash; declared, not assumed.</strong> An agency
        states which channels, delivery patterns, and intervention types it supports, so agents
        negotiate rather than guess.</li>
      </ul>

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
      <p class="lede">A government interaction in AGP is <strong>one
      <code>ServiceSession</code></strong> that a constituent agent and an agency agent
      advance together &mdash; agent-to-agent &mdash; through a <strong>status lifecycle</strong>.
      The same five conceptual steps still apply, but each is an <em>operation on the
      session</em> rather than a separate object. Often the life event itself &mdash; a job loss,
      a new baby, a move &mdash; is what starts it.</p>

      <figure>
        <div class="figure-box">
          <svg viewBox="0 0 760 300" role="img" aria-labelledby="flowTitle flowDesc" width="760" height="300">
            <title id="flowTitle">AGP service session status machine</title>
            <desc id="flowDesc">A constituent agent reads the agency's catalog, then creates a ServiceSession in status gathering, adds a scoped authorization to reach status ready to submit, and submits it. The agency of record then decides, moving the one session to completed (approved or provisioned), or to requires intervention for human review, documents, or identity checks (which returns to in progress once resolved), or to denied with recourse. Every transition is an operation on the same session.</desc>
            <defs>
              <marker id="farrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#3c4a63"/></marker>
            </defs>
            <g font-family="-apple-system, Segoe UI, Roboto, sans-serif">
              <text x="16" y="22" font-size="11" fill="#3c4a63">Read catalog &middot; then one session moves through status:</text>
              <!-- main pipeline -->
              <rect x="16" y="60" width="150" height="54" rx="10" fill="#eaf0fe" stroke="#1d4ed8" stroke-width="2"/>
              <text x="91" y="84" text-anchor="middle" font-size="12.5" font-weight="700" fill="#14358f">gathering</text>
              <text x="91" y="101" text-anchor="middle" font-size="10.5" fill="#3c4a63">attributes + consent</text>
              <rect x="212" y="60" width="156" height="54" rx="10" fill="#eaf0fe" stroke="#1d4ed8" stroke-width="2"/>
              <text x="290" y="84" text-anchor="middle" font-size="12.5" font-weight="700" fill="#14358f">ready_to_submit</text>
              <text x="290" y="101" text-anchor="middle" font-size="10.5" fill="#3c4a63">authorization attached</text>
              <rect x="414" y="60" width="150" height="54" rx="10" fill="#fdf3e6" stroke="#b45309" stroke-width="2"/>
              <text x="489" y="84" text-anchor="middle" font-size="12.5" font-weight="700" fill="#b45309">in_progress</text>
              <text x="489" y="101" text-anchor="middle" font-size="10.5" fill="#3c4a63">agency deciding</text>
              <rect x="610" y="60" width="134" height="54" rx="10" fill="#e2f3f0" stroke="#0f766e" stroke-width="2.5"/>
              <text x="677" y="84" text-anchor="middle" font-size="12.5" font-weight="700" fill="#0f766e">completed</text>
              <text x="677" y="101" text-anchor="middle" font-size="10.5" fill="#3c4a63">approved / provisioned</text>
              <!-- transitions -->
              <g stroke="#3c4a63" stroke-width="1.8" fill="none">
                <path d="M166 87 L212 87" marker-end="url(#farrow)"/>
                <path d="M368 87 L414 87" marker-end="url(#farrow)"/>
                <path d="M564 87 L610 87" marker-end="url(#farrow)"/>
                <path d="M489 114 L489 168" marker-end="url(#farrow)"/>
                <path d="M540 195 C580 195 600 140 612 116" stroke-dasharray="5 4" marker-end="url(#farrow)"/>
                <path d="M620 168 L660 120" marker-end="url(#farrow)"/>
              </g>
              <g font-family="-apple-system, Segoe UI, Roboto, sans-serif" font-size="10.5" fill="#3c4a63">
                <text x="189" y="80" text-anchor="middle">+auth</text>
                <text x="391" y="80" text-anchor="middle">submit</text>
                <text x="587" y="80" text-anchor="middle">decide</text>
                <text x="500" y="146" text-anchor="start">needs review</text>
                <text x="572" y="158" text-anchor="start" font-style="italic">resolved</text>
              </g>
              <!-- branch nodes -->
              <rect x="372" y="172" width="170" height="52" rx="10" fill="#fff" stroke="#b45309" stroke-width="2"/>
              <text x="457" y="194" text-anchor="middle" font-size="12" font-weight="700" fill="#b45309">requires_intervention</text>
              <text x="457" y="211" text-anchor="middle" font-size="10" fill="#3c4a63">docs &middot; ID &middot; caseworker</text>
              <rect x="610" y="172" width="134" height="52" rx="10" fill="#fff" stroke="#5d6b85" stroke-width="2"/>
              <text x="677" y="194" text-anchor="middle" font-size="12" font-weight="700" fill="#5d6b85">denied</text>
              <text x="677" y="211" text-anchor="middle" font-size="10" fill="#3c4a63">with recourse</text>
              <!-- authority band -->
              <rect x="414" y="246" width="330" height="40" rx="8" fill="#e2f3f0" stroke="#0f766e" stroke-width="1.5"/>
              <text x="579" y="263" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f766e">Agency of record decides every transition from in_progress on</text>
              <text x="579" y="278" text-anchor="middle" font-size="10.5" fill="#3c4a63">determination &amp; provisioning stay here</text>
            </g>
          </svg>
        </div>
        <figcaption>One <code>ServiceSession</code>, one <code>status</code> at a time. The
        constituent agent drives it to <code>ready_to_submit</code>; from
        <code>in_progress</code> onward, the agency of record owns every transition.</figcaption>
      </figure>

      ${h('steps', 'Step by step')}
      <ol class="steps">
        <li>
          ${h3('s1','Discovery')}
          <span class="step-type">read the Catalog</span>
          <p>The constituent agent reads the agency agent&rsquo;s published
          <a href="schema.html#catalog">catalog</a> to learn which services exist, who&rsquo;s
          eligible, what&rsquo;s needed, through which channels, and which capabilities the agency
          supports. Discovery is read-only and uses no constituent data &mdash; it answers
          <em>&ldquo;what is available and what would it take?&rdquo;</em> No session exists yet.</p>
        </li>
        <li>
          ${h3('s2','Start &amp; eligibility')}
          <span class="step-type">create &rarr; ServiceSession &middot; status: gathering</span>
          <p>The agent <strong>creates a <a href="schema.html#session">ServiceSession</a></strong>
          for a service and, with the constituent&rsquo;s consent, assembles the relevant attributes
          and checks them against the published <a href="schema.html#eligibility">eligibility
          rules</a>. The session sits in <code>gathering</code>, and its
          <a href="schema.html#messages"><code>messages</code></a> say exactly what is still
          needed. The estimate is a preview &mdash; the determination still belongs to the agency.</p>
        </li>
        <li>
          ${h3('s3','Authorization &amp; consent')}
          <span class="step-type">update &rarr; ServiceSession &middot; status: ready_to_submit</span>
          <p>The constituent authorizes <em>this</em> agent and consents to <em>specific,
          scoped</em> data use; the agent attaches a scoped
          <a href="schema.html#authorization-obj">Authorization</a> to the session, moving it to
          <code>ready_to_submit</code>. <strong>This is the named gap.</strong> v1 defines where
          authorization is granted, scoped, verified, and revoked, but defers the cryptographic /
          identity mechanism to a <a href="authorization.html">companion layer</a>.</p>
        </li>
        <li>
          ${h3('s4','Submit &amp; delivery')}
          <span class="step-type">submit &rarr; status: in_progress &rarr; completed</span>
          <p>The agent <strong>submits</strong> the session to the agency agent. The
          <strong>agency of record</strong> verifies the authorization, makes the determination,
          and &mdash; instantly where it can &mdash; provisions the benefit, driving the session to
          <code>completed</code> (or <code>requires_intervention</code> for review, or
          <code>denied</code>). Submit <strong>must</strong> produce an authoritative
          <a href="schema.html#determination">Determination</a>. Authority never leaves the
          agency; the agent&rsquo;s job ends at a well-formed submit.</p>
        </li>
        <li>
          ${h3('s5','Determination, status &amp; recourse')}
          <span class="step-type">read &rarr; the session's Determination</span>
          <p>The session now carries the authoritative
          <a href="schema.html#determination">Determination</a>: the outcome, the award
          breakdown, an <strong>audit trail</strong>, the live <code>status</code>, and an
          explicit <strong>correction / appeal path</strong>. Because there is one session, the
          constituent (via their agent or directly) can always re-read it to see, contest, and
          correct what was done in their name &mdash; recourse is part of the protocol.</p>
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
      <p class="lede">This is the concrete shape of AGP, and it is small on purpose: a
      published <strong>catalog</strong>, one <strong>ServiceSession</strong> that carries the
      whole interaction, and an authoritative <strong>Determination</strong>. The JSON below
      is <strong>v0.1 illustrative</strong> &mdash; meant to be co-authored with agencies against
      real systems, not frozen.</p>

      <div class="callout callout--note">
        <p class="callout__label">Reuse over reinvention</p>
        <p>AGP does not redefine what &ldquo;income,&rdquo; &ldquo;household,&rdquo; or &ldquo;residency&rdquo; mean &mdash;
        those live in mature government data models. AGP objects are thin
        <strong>envelopes</strong> that <em>reference</em> existing definitions and carry
        them through the flow. See <a href="related-work.html">Related work</a> for the
        standards AGP builds on, and <a href="get-started.html">Get started</a> for the
        agency&rsquo;s side.</p>
      </div>

      ${h('catalog', 'The catalog (discovery + capabilities)')}
      <p>An agency agent advertises itself, its services, and <strong>what it supports</strong>
      with a single published <strong>catalog</strong> &mdash; the &ldquo;publish once, read
      everywhere&rdquo; artifact. The <code>capabilities</code> block lets agents negotiate rather
      than guess.</p>
<pre><code><span class="c-com">// GET https://agency.example.gov/.well-known/agp/catalog.json</span>
{
  <span class="c-key">"agp"</span>: <span class="c-str">"2026-06-01"</span>,                  <span class="c-com">// date-based version</span>
  <span class="c-key">"agencyOfRecord"</span>: { <span class="c-key">"id"</span>: <span class="c-str">"us-xx-dhs"</span>,
    <span class="c-key">"name"</span>: <span class="c-str">"State of XX, Department of Human Services"</span>, <span class="c-key">"jurisdiction"</span>: <span class="c-str">"us-xx"</span> },
  <span class="c-key">"agencyAgent"</span>: { <span class="c-key">"endpoint"</span>: <span class="c-str">"https://agency.example.gov/agp"</span>,
    <span class="c-key">"transports"</span>: [<span class="c-str">"mcp"</span>, <span class="c-str">"https+json"</span>], <span class="c-key">"authorization"</span>: <span class="c-str">"ref:companion-layer"</span> },
  <span class="c-key">"capabilities"</span>: {
    <span class="c-key">"channels"</span>: [<span class="c-str">"agp"</span>, <span class="c-str">"web"</span>, <span class="c-str">"in-person"</span>, <span class="c-str">"phone"</span>],
    <span class="c-key">"deliveryPatterns"</span>: [<span class="c-str">"instant"</span>, <span class="c-str">"validate-after"</span>, <span class="c-str">"manual"</span>],
    <span class="c-key">"interventions"</span>: [<span class="c-str">"document_upload"</span>, <span class="c-str">"identity_verification"</span>, <span class="c-str">"caseworker_review"</span>],
    <span class="c-key">"extensions"</span>: [<span class="c-str">"snap"</span>]
  },
  <span class="c-key">"services"</span>: [<span class="c-str">"ref:us-xx-snap"</span>, <span class="c-str">"ref:us-xx-medicaid"</span>]
}</code></pre>

      ${h('service', 'Service')}
      <p>A service or benefit and what it takes to get it. Point <code>requires</code> at
      existing data definitions rather than inventing new ones.</p>
<pre><code>{
  <span class="c-key">"type"</span>: <span class="c-str">"Service"</span>, <span class="c-key">"id"</span>: <span class="c-str">"us-xx-snap"</span>, <span class="c-key">"agencyOfRecord"</span>: <span class="c-str">"us-xx-dhs"</span>,
  <span class="c-key">"name"</span>: <span class="c-str">"Supplemental Nutrition Assistance Program (SNAP)"</span>,
  <span class="c-key">"summary"</span>: <span class="c-str">"Monthly help buying groceries for eligible households."</span>,
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
      <p>Machine-readable conditions over the attributes a Service declares, published so
      agents can preview eligibility before submitting.</p>
<pre><code>{
  <span class="c-key">"type"</span>: <span class="c-str">"EligibilityRule"</span>, <span class="c-key">"id"</span>: <span class="c-str">"us-xx-snap-rules"</span>, <span class="c-key">"service"</span>: <span class="c-str">"us-xx-snap"</span>,
  <span class="c-key">"effective"</span>: <span class="c-str">"2026-01-01"</span>,
  <span class="c-key">"allOf"</span>: [
    { <span class="c-key">"attr"</span>: <span class="c-str">"residency"</span>, <span class="c-key">"equals"</span>: <span class="c-str">"us-xx"</span> },
    { <span class="c-key">"attr"</span>: <span class="c-str">"income.monthlyGross"</span>, <span class="c-key">"atMostPctFPL"</span>: <span class="c-num">130</span>, <span class="c-key">"byHousehold"</span>: <span class="c-str">"householdSize"</span> }
  ],
  <span class="c-key">"provisionalIf"</span>: { <span class="c-key">"attr"</span>: <span class="c-str">"income.recentLoss"</span>, <span class="c-key">"equals"</span>: <span class="c-num">true</span> }
}</code></pre>

      ${h('session', 'ServiceSession — the spine')}
      <p>The single living record of one interaction. The constituent agent creates it,
      updates it, and submits it; <strong>every response is the full authoritative snapshot</strong>,
      so the agent never has to assume prior state. One session, one <code>status</code> at a
      time.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Field</th><th>Type</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td><code>id</code></td><td>string</td><td>Required. The session.</td></tr>
          <tr><td><code>service</code></td><td>ref</td><td>Required. The Service being sought.</td></tr>
          <tr><td><code>status</code></td><td>enum</td><td>Required. See lifecycle below.</td></tr>
          <tr><td><code>attributes</code></td><td>object</td><td>The assembled, consented data.</td></tr>
          <tr><td><code>eligibility</code></td><td>object</td><td>Preview: <code>likely</code> / <code>eligible</code> / <code>ineligible</code> / <code>unknown</code>.</td></tr>
          <tr><td><code>authorization</code></td><td>ref</td><td>The scoped grant (proof deferred).</td></tr>
          <tr><td><code>messages</code></td><td>Message[]</td><td>Actionable guidance &mdash; see below.</td></tr>
          <tr><td><code>determination</code></td><td>Determination</td><td><code>null</code> until submit; authoritative after.</td></tr>
          <tr><td><code>links</code></td><td>Link[]</td><td>Program rules, privacy notice, appeal rights.</td></tr>
          <tr><td><code>expires_at</code></td><td>date-time</td><td>When the session lapses.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Status lifecycle:</strong>
        <code>gathering</code> &rarr; <code>ready_to_submit</code> &rarr; <code>in_progress</code>
        &rarr; <code>completed</code> &mdash; with branches to <code>requires_intervention</code>
        (returns to <code>in_progress</code> once resolved), <code>denied</code>,
        <code>canceled</code>, and <code>expired</code>.</p>
<pre><code><span class="c-com">// the session in 'gathering' — note messages tell the agent what's missing</span>
{
  <span class="c-key">"type"</span>: <span class="c-str">"ServiceSession"</span>, <span class="c-key">"id"</span>: <span class="c-str">"ses_4a17..."</span>, <span class="c-key">"service"</span>: <span class="c-str">"us-xx-snap"</span>,
  <span class="c-key">"status"</span>: <span class="c-str">"gathering"</span>,
  <span class="c-key">"attributes"</span>: { <span class="c-key">"householdSize"</span>: <span class="c-num">3</span>,
    <span class="c-key">"income"</span>: { <span class="c-key">"monthlyGross"</span>: <span class="c-num">0</span>, <span class="c-key">"recentLoss"</span>: <span class="c-num">true</span> }, <span class="c-key">"residency"</span>: <span class="c-str">"us-xx"</span> },
  <span class="c-key">"eligibility"</span>: { <span class="c-key">"result"</span>: <span class="c-str">"likely"</span>, <span class="c-key">"estimateMonthly"</span>: <span class="c-num">535</span>, <span class="c-key">"currency"</span>: <span class="c-str">"USD"</span> },
  <span class="c-key">"authorization"</span>: <span class="c-num">null</span>,
  <span class="c-key">"messages"</span>: [
    { <span class="c-key">"type"</span>: <span class="c-str">"error"</span>, <span class="c-key">"code"</span>: <span class="c-str">"authorization_required"</span>,
      <span class="c-key">"resolution"</span>: <span class="c-str">"requires_constituent_input"</span>, <span class="c-key">"param"</span>: <span class="c-str">"$.authorization"</span>,
      <span class="c-key">"content"</span>: <span class="c-str">"Maria needs to authorize this agent before we can submit."</span> }
  ],
  <span class="c-key">"determination"</span>: <span class="c-num">null</span>,
  <span class="c-key">"expires_at"</span>: <span class="c-str">"2026-06-12T15:04:00Z"</span>
}</code></pre>

      ${h('operations', 'Operations')}
      <p>Five operations on the session &mdash; create, read, update, submit, cancel &mdash; mirror
      its lifecycle. <code>submit</code> <strong>must</strong> produce an authoritative
      <a href="#determination">Determination</a> on the agency of record&rsquo;s system, the way the
      agency&rsquo;s authority is made structural rather than promised.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Operation</th><th>Call</th><th>Effect</th></tr></thead>
        <tbody>
          <tr><td><strong>Create</strong></td><td><code>POST /sessions</code></td><td>Start a session for a service with initial attributes/consent.</td></tr>
          <tr><td><strong>Read</strong></td><td><code>GET /sessions/{id}</code></td><td>Fetch the authoritative current state.</td></tr>
          <tr><td><strong>Update</strong></td><td><code>POST /sessions/{id}</code></td><td>Add attributes, attach the authorization, change channel.</td></tr>
          <tr><td><strong>Submit</strong></td><td><code>POST /sessions/{id}/submit</code></td><td>Hand to the agency of record; <strong>must</strong> yield a Determination.</td></tr>
          <tr><td><strong>Cancel</strong></td><td><code>POST /sessions/{id}/cancel</code></td><td>Terminate unless already completed.</td></tr>
        </tbody>
      </table></div>
      <p class="meta" style="border:none;padding:0;margin:.4rem 0 0;">Conventions: every
      <code>POST</code> carries an <code>Idempotency-Key</code> (no duplicate applications on
      retry) and an <code>API-Version</code> (date-based, e.g. <code>2026-06-01</code>); every
      response returns the full session snapshot.</p>

      ${h('messages', 'messages[] — actionable guidance')}
      <p>The array that does the unglamorous, essential work: telling the agent (and the
      person) exactly what is needed or what happened. Each message is an <code>info</code>,
      <code>warning</code>, or <code>error</code> with a <code>resolution</code> and a
      <code>param</code> pointing at the field at issue. Government leans on this far more than
      commerce &mdash; it is how &ldquo;we need proof of income&rdquo; or &ldquo;sent for caseworker review&rdquo;
      travels machine-actionably.</p>
<pre><code><span class="c-key">"messages"</span>: [
  { <span class="c-key">"type"</span>: <span class="c-str">"warning"</span>, <span class="c-key">"code"</span>: <span class="c-str">"provisional_pending_verification"</span>,
    <span class="c-key">"resolution"</span>: <span class="c-str">"requires_constituent_review"</span>,
    <span class="c-key">"content"</span>: <span class="c-str">"Approved provisionally; please upload proof of income within 30 days."</span> },
  { <span class="c-key">"type"</span>: <span class="c-str">"error"</span>, <span class="c-key">"code"</span>: <span class="c-str">"identity_verification_required"</span>,
    <span class="c-key">"resolution"</span>: <span class="c-str">"requires_intervention"</span>, <span class="c-key">"param"</span>: <span class="c-str">"$.attributes.identity"</span>,
    <span class="c-key">"content"</span>: <span class="c-str">"We could not verify identity automatically; a navigator can help in person."</span> }
]
<span class="c-com">// resolution: recoverable | requires_constituent_input</span>
<span class="c-com">//           | requires_constituent_review | requires_intervention</span></code></pre>

      ${h('determination', 'Determination — the authoritative outcome')}
      <p>What <code>submit</code> produces on the agency&rsquo;s system. It carries the outcome, a
      typed <strong>award breakdown</strong>, the audit trail, and recourse. This is what makes
      an AGP outcome trustworthy and contestable &mdash; and it lives on the session, so there is
      one record, not a scattered request and receipt.</p>
<pre><code>{
  <span class="c-key">"type"</span>: <span class="c-str">"Determination"</span>, <span class="c-key">"id"</span>: <span class="c-str">"det_77b0..."</span>, <span class="c-key">"session"</span>: <span class="c-str">"ses_4a17..."</span>,
  <span class="c-key">"agencyOfRecord"</span>: <span class="c-str">"us-xx-dhs"</span>, <span class="c-key">"outcome"</span>: <span class="c-str">"approved_provisional"</span>,
  <span class="c-key">"award"</span>: [
    { <span class="c-key">"type"</span>: <span class="c-str">"base_allotment"</span>, <span class="c-key">"amountMonthly"</span>: <span class="c-num">740</span> },
    { <span class="c-key">"type"</span>: <span class="c-str">"income_deduction"</span>, <span class="c-key">"amountMonthly"</span>: <span class="c-num">-205</span> },
    { <span class="c-key">"type"</span>: <span class="c-str">"final_award"</span>, <span class="c-key">"amountMonthly"</span>: <span class="c-num">535</span>, <span class="c-key">"currency"</span>: <span class="c-str">"USD"</span> }
  ],
  <span class="c-key">"delivery"</span>: { <span class="c-key">"method"</span>: <span class="c-str">"EBT"</span>, <span class="c-key">"startsBy"</span>: <span class="c-str">"2026-06-13"</span> },
  <span class="c-key">"audit"</span>: [
    { <span class="c-key">"at"</span>: <span class="c-str">"2026-06-11T15:04:02Z"</span>, <span class="c-key">"event"</span>: <span class="c-str">"authorization_verified"</span> },
    { <span class="c-key">"at"</span>: <span class="c-str">"2026-06-11T15:04:03Z"</span>, <span class="c-key">"event"</span>: <span class="c-str">"determination"</span>, <span class="c-key">"by"</span>: <span class="c-str">"us-xx-dhs"</span> }
  ],
  <span class="c-key">"recourse"</span>: { <span class="c-key">"appealUrl"</span>: <span class="c-str">"https://agency.example.gov/appeal/77b0"</span>,
               <span class="c-key">"correctUrl"</span>: <span class="c-str">"https://agency.example.gov/correct/77b0"</span> }
}</code></pre>

      ${h('authorization-obj', 'Authorization — the deferred trust layer')}
      <p>A scoped grant the agent attaches to the session before submit; the agency agent
      verifies it. AGP carves the <em>proof</em> out into a separate companion layer &mdash; the
      same move agentic commerce makes with delegated payment (see
      <a href="related-work.html#acp">Related work</a>). v0.1 specifies the shape and scope;
      the cryptographic <code>proof</code> is supplied later.</p>
<pre><code>{
  <span class="c-key">"type"</span>: <span class="c-str">"Authorization"</span>, <span class="c-key">"id"</span>: <span class="c-str">"auth_9f2c..."</span>,
  <span class="c-key">"constituent"</span>: <span class="c-str">"did:example:maria"</span>, <span class="c-key">"agent"</span>: <span class="c-str">"agent:public-ai-option"</span>,
  <span class="c-key">"purpose"</span>: <span class="c-str">"Apply for SNAP"</span>,
  <span class="c-key">"scope"</span>: { <span class="c-key">"services"</span>: [<span class="c-str">"us-xx-snap"</span>],
    <span class="c-key">"data"</span>: [<span class="c-str">"identity"</span>, <span class="c-str">"householdSize"</span>, <span class="c-str">"income"</span>, <span class="c-str">"residency"</span>],
    <span class="c-key">"expires"</span>: <span class="c-str">"2026-07-01T00:00:00Z"</span> },
  <span class="c-key">"revocable"</span>: <span class="c-num">true</span>,
  <span class="c-key">"proof"</span>: <span class="c-str">"ref:companion-layer"</span>   <span class="c-com">// deferred mechanism</span>
}</code></pre>

      ${h('validate-after', 'Delivery patterns &amp; validate-after')}
      <p>A <code>Service</code> declares its <code>deliveryPattern</code>, and the agency
      declares which patterns it supports in the catalog <code>capabilities</code>. Where law
      and program rules permit, <strong>validate-after</strong> lets the agency provision
      provisionally on attested attributes and verify afterward &mdash; the session sits in
      <code>completed</code> with a <code>provisional_pending_verification</code> warning until
      reconciled. It is an <em>allowed</em> pattern, never required; the agency of record
      decides whether a program can safely use it.</p>

      ${h('transport', 'Transport &amp; versioning')}
      <p>AGP defines <em>what</em> moves, not a new wire protocol. Agency agents advertise
      their <code>transports</code> &mdash; an existing agent transport such as
      <abbr title="Model Context Protocol">MCP</abbr> or plain HTTPS+JSON. The whole spec is
      <strong>date-versioned</strong> (<code>YYYY-MM-DD</code>), sent as <code>API-Version</code>
      on every call, so agencies and agents can evolve without breakage. See
      <a href="related-work.html">Related work</a>.</p>

      ${h('out', 'What is intentionally not here yet')}
      <p>Full normative JSON Schema / OpenAPI for every object, a formal eligibility-rule
      language, webhooks for status changes, and signed-envelope formats are
      <a href="roadmap.html">deferred</a>. v0.1 names the shapes; formalizing them is
      co-authorship work to be done with agencies.</p>`
},

/* ====================================================================== *
 * AUTHORIZATION
 * ==================================================================== */
{ slug: 'authorization',
  desc: 'AGP v1 names the authorization, consent, and identity gap explicitly: it defines the requirement and the interaction points between the two agents but defers the cryptographic and identity mechanism to a companion layer.',
  body: `      <p class="eyebrow">Specification &middot; companion concern</p>
      <h1>Authorization, consent &amp; identity</h1>
      <p class="lede">This is the hard part, and AGP names it as such. The protocol can
      standardize the session-based flow between agents &mdash; but proving that a
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
          <tr><td><strong>Verify</strong></td><td>The agency agent checks the session&rsquo;s <code>Authorization</code> on <code>submit</code>.</td><td>The identity-proofing and verification protocol.</td></tr>
          <tr><td><strong>Revoke</strong></td><td>An authorization can be revoked and the revocation is reflected in the session status.</td><td>Revocation propagation / freshness guarantees.</td></tr>
          <tr><td><strong>Audit</strong></td><td>The <code>Determination</code> records what authorization was relied upon.</td><td>Tamper-evidence / non-repudiation cryptography.</td></tr>
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
      <p class="lede">The home-page vignette, opened all the way up &mdash; and shown twice at
      each step: <strong>what Maria experiences</strong>, and <strong>what the system quietly
      carries</strong> as one <a href="schema.html#session">ServiceSession</a> moves through
      its statuses. The whole point of AGP lives in the gap between those two columns: the
      person feels a short, empathetic conversation; the machinery absorbs the complexity.</p>

      <div class="callout callout--note">
        <p class="callout__label">The scenario &mdash; a life event starts it</p>
        <p><strong>Maria</strong>, in the (fictional) State of XX, was laid off two weeks ago;
        her household of three has lost its main income. That life event is what initiates
        engagement. She uses a <strong>Public AI Option agent</strong>; her local food bank, a
        trusted <strong>intermediary</strong>, is on hand if she needs a human; and the
        <strong>agency of record</strong> is the State of XX Department of Human Services (DHS),
        reachable through its <strong>agency agent</strong>.</p>
      </div>

      <ol class="steps">
        <li>
          ${h3('e1','Discovery')}
          <span class="step-type">read the Catalog &middot; no session yet</span>
          <div class="grid grid-2">
            <div class="card"><p class="card__role">What Maria experiences</p><p>She says: <em>&ldquo;I lost my job and I&rsquo;m worried about groceries this month.&rdquo;</em> Seconds later: <em>&ldquo;You may qualify for food assistance &mdash; want me to check?&rdquo;</em></p></div>
            <div class="card"><p class="card__role">What the system carries</p><p>Her agent reads the DHS <a href="schema.html#catalog">catalog</a>, finds the SNAP <a href="schema.html#service">Service</a> and that it supports <code>validate-after</code>, and flags two related programs. No personal data touched &mdash; discovery is read-only.</p></div>
          </div>
        </li>
        <li>
          ${h3('e2','Start &amp; eligibility')}
          <span class="step-type">create &rarr; ServiceSession &middot; status: gathering</span>
          <div class="grid grid-2">
            <div class="card"><p class="card__role">What Maria experiences</p><p>The agent asks permission to use her household and income to check, then says: <em>&ldquo;You likely qualify for about $535 a month &mdash; here&rsquo;s why.&rdquo;</em></p></div>
            <div class="card"><p class="card__role">What the system carries</p><p>The agent <strong>creates a session</strong> (<code>status: gathering</code>), assembles attributes, and evaluates the published <a href="schema.html#eligibility">EligibilityRule</a>. The session&rsquo;s <a href="schema.html#messages"><code>messages</code></a> note what&rsquo;s still needed. It&rsquo;s a preview &mdash; only DHS can determine.</p></div>
          </div>
        </li>
        <li>
          ${h3('e3','Authorization &amp; consent')}
          <span class="step-type">update &rarr; status: ready_to_submit</span>
          <div class="grid grid-2">
            <div class="card"><p class="card__role">What Maria experiences</p><p>One clear question: <em>&ldquo;Okay to apply for SNAP for you, using your household, income, and address &mdash; just for this?&rdquo;</em> She says yes.</p></div>
            <div class="card"><p class="card__role">What the system carries</p><p>The agent attaches a scoped <a href="schema.html#authorization-obj">Authorization</a> to the session, moving it to <code>ready_to_submit</code>. The DHS agency agent will verify it on submit.</p></div>
          </div>
          <div class="callout callout--gap" style="margin:.9rem 0 0;">
            <p class="callout__label">Where the gap shows up</p>
            <p>AGP v1 specifies that this scoped grant exists and is verified. The
            <em>cryptographic proof</em> it was really Maria &mdash; the <code>proof</code> field &mdash;
            is the <a href="authorization.html">companion layer</a>. With no verifiable digital
            identity, the food-bank <a href="actors.html#intermediary">intermediary</a> could
            carry this step with her in person.</p>
          </div>
        </li>
        <li>
          ${h3('e4','Submit &amp; delivery')}
          <span class="step-type">submit &rarr; in_progress &rarr; completed</span>
          <div class="grid grid-2">
            <div class="card"><p class="card__role">What Maria experiences</p><p><em>&ldquo;You&rsquo;re approved. Benefits reach your EBT card in about 2 days.&rdquo;</em> She did nothing but answer two questions.</p></div>
            <div class="card"><p class="card__role">What the system carries</p><p>The agent <strong>submits</strong>. DHS verifies the authorization, makes the determination, and &mdash; via <code>validate-after</code> &mdash; provisionally approves, driving the session to <code>completed</code>. Submit produced an authoritative <a href="schema.html#determination">Determination</a>. <strong>Authority never left DHS.</strong></p></div>
          </div>
          <div class="callout callout--note" style="margin:.9rem 0 0;">
            <p class="callout__label">If it hadn&rsquo;t been clean</p>
            <p>Had DHS been unable to verify identity automatically, the session would move to
            <code>requires_intervention</code> with a message
            (<code>identity_verification_required</code>, resolution
            <code>requires_intervention</code>) &mdash; and the food-bank navigator could resolve it
            in person, returning the session to <code>in_progress</code>. Nothing is dropped;
            the one session holds the state.</p>
          </div>
        </li>
        <li>
          ${h3('e5','Determination, status &amp; recourse')}
          <span class="step-type">read &rarr; the session's Determination</span>
          <div class="grid grid-2">
            <div class="card"><p class="card__role">What Maria experiences</p><p>A plain receipt she can re-open anytime: approved (~$535/mo), what to upload, and how to appeal. Two weeks later it quietly updates to fully approved &mdash; no new application.</p></div>
            <div class="card"><p class="card__role">What the system carries</p><p>The session now holds the <a href="schema.html#determination">Determination</a>: award breakdown, audit trail, a <code>provisional_pending_verification</code> warning, and recourse URLs. When DHS confirms her documents, the status reconciles &mdash; same session.</p></div>
          </div>
        </li>
      </ol>

      ${h('mapping', 'How it maps back')}
      <div class="table-wrap">
      <table>
        <thead><tr><th>Step</th><th>Operation</th><th>Session status</th><th>Authority</th></tr></thead>
        <tbody>
          <tr><td>1 &middot; Discovery</td><td>read <code>Catalog</code></td><td><em>(no session)</em></td><td>Published by DHS</td></tr>
          <tr><td>2 &middot; Eligibility</td><td><code>create</code></td><td><code>gathering</code></td><td>Rules owned by DHS</td></tr>
          <tr><td>3 &middot; Authorization</td><td><code>update</code></td><td><code>ready_to_submit</code></td><td>Verified by agency agent</td></tr>
          <tr><td>4 &middot; Submit</td><td><code>submit</code></td><td><code>in_progress</code> &rarr; <code>completed</code></td><td><strong>DHS decides &amp; provisions</strong></td></tr>
          <tr><td>5 &middot; Determination</td><td><code>read</code></td><td><code>completed</code> (provisional)</td><td>Issued by DHS</td></tr>
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

      ${h('overview', 'What you publish, and what you implement')}
      <p>Two published artifacts (a catalog and your rules) and one small resource (the
      session) on your agency agent.</p>
      <ol class="steps">
        <li>
          ${h3('g1','Publish your catalog')}
          <p>List your services in a single published
          <a href="schema.html#catalog">catalog</a> at a well-known URL, each a
          <a href="schema.html#service"><code>Service</code></a> with a plain-language summary
          and the attributes it requires &mdash; pointed at your <em>existing</em> data
          definitions, not new ones. In the catalog&rsquo;s <code>capabilities</code> block,
          <strong>declare what you support</strong>: channels, delivery patterns, and which
          interventions (document upload, identity check, caseworker review) you can handle.
          Write it once; every agent can discover it.</p>
        </li>
        <li>
          ${h3('g2','Express your eligibility rules')}
          <p>Capture who qualifies as an
          <a href="schema.html#eligibility"><code>EligibilityRule</code></a> over those same
          attributes, so agents can give constituents an honest preview before they apply. The
          rule is yours and authoritative; agents only <em>read</em> it. Start with the common
          case and refine &mdash; you don&rsquo;t need every edge case to begin.</p>
        </li>
        <li>
          ${h3('g3','Implement the session resource')}
          <p>Expose an <strong>agency agent</strong> over a transport you already run (an
          <abbr title="Model Context Protocol">MCP</abbr> server or HTTPS+JSON) that implements
          the five <a href="schema.html#operations">operations</a> on a
          <a href="schema.html#session"><code>ServiceSession</code></a>:</p>
          <ul>
            <li><code>create</code> / <code>update</code> / <code>read</code> &mdash; hold the
            assembled attributes and consent; <strong>return the full session snapshot</strong>
            every time, so the agent never assumes state.</li>
            <li><code>submit</code> &mdash; verify the authorization, run your determination, and
            provision. Submit <strong>must</strong> produce an authoritative
            <a href="schema.html#determination">Determination</a>.</li>
            <li><code>cancel</code> &mdash; terminate a session that isn&rsquo;t completed.</li>
          </ul>
          <p>Honor <code>Idempotency-Key</code> on every <code>POST</code> (so a retry never
          creates a duplicate application) and an <code>API-Version</code>. Reference
          agency-agent implementations you can adopt instead of building from scratch are a
          <a href="roadmap.html">roadmap</a> deliverable.</p>
        </li>
        <li>
          ${h3('g4','Speak in messages, and choose a delivery pattern')}
          <p>Whenever the session needs something or something happens, say so in
          <a href="schema.html#messages"><code>messages</code></a> with a clear
          <code>resolution</code> &mdash; &ldquo;needs proof of income,&rdquo; &ldquo;sent for caseworker
          review,&rdquo; &ldquo;approved provisionally.&rdquo; And set each service&rsquo;s
          <code>deliveryPattern</code>: <code>instant</code> when you can decide automatically,
          <a href="schema.html#validate-after"><code>validate-after</code></a> where law lets you
          provision provisionally and verify later, or <code>manual</code> where a human must
          review. Entirely your policy choice &mdash; AGP just carries it.</p>
        </li>
        <li>
          ${h3('g5','Stand behind the determination &amp; honor recourse')}
          <p>Every determination records the outcome, an award breakdown, an audit trail, and a
          real correction / appeal path. This is what makes outcomes trustworthy and
          contestable, and it is non-optional.</p>
        </li>
      </ol>

      ${h('verify', 'Verifying authorization (the part you must enforce)')}
      <p>On <code>submit</code>, your agency agent must check that a valid, in-scope
      <a href="schema.html#authorization-obj"><code>Authorization</code></a> covers the session
      before the agency of record acts. v0.1 defines the
      <a href="authorization.html#interaction-points">interaction points</a>; the cryptographic
      verification mechanism is supplied by the companion authorization layer. Until that layer
      lands in your jurisdiction, agencies typically rely on existing identity and an
      <a href="actors.html#intermediary">intermediary</a>-assisted path for constituents
      without verifiable digital identity.</p>

      ${h('checklist', 'Adoption checklist')}
      <div class="callout">
        <ul style="margin:0;">
          <li>&#9633; Pick one high-volume, sympathetic service to pilot.</li>
          <li>&#9633; Publish a <code>catalog.json</code> with one <code>Service</code> and a <code>capabilities</code> block.</li>
          <li>&#9633; Encode the common-case <code>EligibilityRule</code>.</li>
          <li>&#9633; Implement <code>create/read/update/submit/cancel</code> on a <code>ServiceSession</code>.</li>
          <li>&#9633; Return the full session snapshot; honor <code>Idempotency-Key</code>.</li>
          <li>&#9633; Verify <code>Authorization</code> on <code>submit</code>.</li>
          <li>&#9633; Produce a <code>Determination</code> with audit trail and appeal path.</li>
          <li>&#9633; Use <code>messages</code> for everything the person must know or do.</li>
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
        <li><span class="pill pill--in">In v1</span> A <a href="schema.html">draft schema</a> built on a single status-driven <code>ServiceSession</code> (catalog &rarr; session &rarr; determination) and an agency <a href="get-started.html">getting-started guide</a>.</li>
        <li><span class="pill pill--in">In v1</span> The <a href="authorization.html">authorization &amp; consent requirements and interaction points</a> (mechanism deferred).</li>
        <li><span class="pill pill--in">In v1</span> One end-to-end <a href="example.html">worked example</a>.</li>
        <li><span class="pill pill--in">In v1</span> A <a href="governance.html">governance model</a>, <a href="glossary.html">glossary</a>, <a href="faq.html">FAQ</a>, and <a href="open-questions.html">open questions</a>.</li>
      </ul>

      ${h('future', 'Deferred to future versions')}
      <ul>
        <li><span class="pill pill--future">Future</span> Full normative <strong>JSON Schema / OpenAPI</strong> for every object, a formal eligibility-rule language, and webhooks for status changes.</li>
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
      <p>The closest structural model. Looking past the marketing to the actual spec, an
      agentic commerce protocol turns on a <strong>single stateful checkout session</strong>
      driven through a handful of REST operations (create, read, update, complete, cancel) and
      a <strong>status enum</strong> &mdash; with a published <em>product feed</em> for discovery,
      an <em>order</em> created on completion, structured <code>messages</code> and
      <code>totals</code> arrays, idempotency keys, date-based versioning, capability
      negotiation, and the hard payment-trust problem carved out into a separate
      <em>delegated payment</em> spec. It holds to a <strong>&ldquo;merchant of record&rdquo;</strong>
      principle: the merchant stays the system of record, and every response is the
      authoritative snapshot.</p>
      <p><strong>What AGP took:</strong> almost the entire shape. The
      <a href="schema.html#session">single status-driven <code>ServiceSession</code></a>
      (rather than many peer objects) is the biggest borrowing; so are the
      <a href="schema.html#messages"><code>messages</code> + resolution</a> pattern, the typed
      award breakdown, <a href="schema.html#operations">idempotency and date-versioning</a>, and
      <a href="schema.html#catalog">capability declaration</a>. The
      <a href="actors.html#agency">agency of record</a> is AGP&rsquo;s &ldquo;merchant of record,&rdquo; made
      structural by the authoritative-snapshot rule and the requirement that
      <code>submit</code> produce a <a href="schema.html#determination">Determination</a>. And
      AGP <a href="authorization.html">defers authorization/identity</a> exactly as commerce
      defers payment &mdash; to a sibling layer. Government then <em>extends</em> the model where it
      needs more than commerce does: an explicit <code>requires_intervention</code> state and
      richer message resolutions for documents, identity checks, and caseworker review.</p>

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
      capabilities over MCP (or plain HTTPS+JSON), so AGP rides infrastructure agents already
      speak. But MCP is <em>plumbing</em> &mdash; it standardizes how an agent connects, not what a
      government interaction <em>means</em>. AGP is the shared meaning on top; for why that
      distinction matters, see the <a href="faq.html#mcp-skills">FAQ</a>.</p>

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
        <dd>The government agency&rsquo;s machine endpoint in an AGP exchange. It advertises services, answers eligibility queries, verifies authorization, advances service sessions, and returns authoritative determinations &mdash; strictly within the authority of the agency of record.</dd>

        <dt>Agency of record</dt>
        <dd>The government agency that owns a service and retains authority over eligibility determination and provisioning. Authority never transfers away from it to an agent.</dd>

        <dt>Agent-to-agent (A2A)</dt>
        <dd>AGP&rsquo;s core posture: a constituent-side agent and a government agency agent exchange standardized messages directly, rather than an app calling a bespoke API.</dd>

        <dt>Authorization</dt>
        <dd>A scoped grant from a constituent letting a specific agent act on their behalf and use specific data for a specific purpose. Attached to a session before submit; its cryptographic proof is deferred to the companion layer.</dd>

        <dt>Capability declaration</dt>
        <dd>The block in an agency&rsquo;s catalog stating which channels, delivery patterns, and intervention types it supports, so agents negotiate rather than assume.</dd>

        <dt>Catalog</dt>
        <dd>The single published document an agency agent serves to advertise itself and its services &mdash; the entry point for discovery and the &ldquo;publish once&rdquo; artifact.</dd>

        <dt>Companion layer</dt>
        <dd>The deferred authorization / consent / identity mechanism that proves a constituent authorized an agent. AGP v1 defines its interaction points but not its cryptography.</dd>

        <dt>Constituent</dt>
        <dd>The person or household seeking a government service or benefit; the source of authority for any agent action.</dd>

        <dt>Constituent-side agent</dt>
        <dd>Software acting on a constituent&rsquo;s behalf &mdash; the Public AI Option, a state agent, or a trusted third-party / NGO agent. Never a decision-maker of record.</dd>

        <dt>Determination</dt>
        <dd>The authoritative outcome the agency of record produces when a session is submitted: outcome, award breakdown, audit trail, and recourse. Lives on the session; a core type.</dd>

        <dt>EligibilityRule</dt>
        <dd>A machine-readable condition the agency uses to determine who qualifies, expressed over named attributes. Owned and published by the agency.</dd>

        <dt>Extension</dt>
        <dd>A namespaced set of program- or jurisdiction-specific terms layered on the small core. May graduate into core by consensus.</dd>

        <dt>Idempotency key</dt>
        <dd>A client-supplied key on every write so a retried operation never creates a duplicate &mdash; e.g. one job loss never yields two applications.</dd>

        <dt>Intermediary</dt>
        <dd>NGOs, navigators, caseworkers, trusted orgs, and data intermediaries that assist constituents &mdash; including by operating a constituent-side agent for them. Central to equity.</dd>

        <dt>Message</dt>
        <dd>A structured item on a session &mdash; <code>info</code>, <code>warning</code>, or <code>error</code> with a <code>resolution</code> and a pointer to the field at issue &mdash; that tells the agent and the person what is needed or what happened (&ldquo;proof of income required,&rdquo; &ldquo;sent for review&rdquo;).</dd>

        <dt>Pending</dt>
        <dd>The staging area where proposed AGP terms can be seen and used together &mdash; explicitly marked subject to change &mdash; before graduating into the core.</dd>

        <dt>Publish once, read everywhere</dt>
        <dd>The pattern AGP adopts: agencies publish authoritative service metadata and eligibility rules once, and any compliant agent reads them, preserving a chain back to the authoritative source.</dd>

        <dt>Receipt / StatusRecord</dt>
        <dd>Earlier names for what is now folded into the session&rsquo;s <em>Determination</em> and live <code>status</code> &mdash; one record, not a separate request and receipt.</dd>

        <dt>Service</dt>
        <dd>A government service or benefit with its channels and requirements, published once in the agency&rsquo;s catalog. Read during discovery.</dd>

        <dt>ServiceRequest</dt>
        <dd>Earlier name for the act of applying. In the current model an agent <em>submits</em> a <em>ServiceSession</em> rather than sending a separate request object.</dd>

        <dt>ServiceSession</dt>
        <dd>The single living record of one interaction, advanced by the agent through create / update / submit and moved through a status lifecycle by the agency. The spine of the protocol.</dd>

        <dt>Status</dt>
        <dd>The lifecycle state a session is in &mdash; <code>gathering</code>, <code>ready_to_submit</code>, <code>in_progress</code>, <code>requires_intervention</code>, <code>completed</code>, <code>denied</code>, <code>canceled</code>, <code>expired</code>. The agent reads it to know what to do next.</dd>

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

      ${h('mcp-skills', 'Why can&rsquo;t MCP + agent skills just do this?')}
      <p>Because they solve a different layer. <strong>MCP</strong> standardizes <em>how</em> an
      agent connects to a tool or data source; <strong>agent skills</strong> package <em>one
      integration&rsquo;s</em> instructions and tools for a particular agent. Both are real and
      useful &mdash; AGP expects to <em>use</em> MCP as a <a href="schema.html#transport">transport</a>,
      and a skill could implement the constituent-agent side. But neither defines what a
      government interaction <em>means</em>, and that is the actual problem.</p>
      <p>Without a shared standard you are back to bespoke integrations &mdash; just over nicer
      plumbing. Each agency would expose its own ad-hoc MCP tools with its own shapes, and every
      agent or skill author would hand-build against each one: an agent that can do SNAP in one
      state still can&rsquo;t do it in the next. None of that gives you what government actually
      requires:</p>
      <ul>
        <li>a <strong>publish-once</strong> <a href="schema.html#catalog">catalog</a> any compliant agent can read;</li>
        <li>shared <a href="concepts.html">vocabulary</a> &mdash; <code>Service</code>, <code>EligibilityRule</code>, <code>Authorization</code>, <code>Determination</code>;</li>
        <li>the <a href="schema.html#session">session lifecycle</a> and structured <a href="schema.html#messages">messages</a>, so an outcome &mdash; or &ldquo;needs proof of income&rdquo; &mdash; is machine-actionable everywhere;</li>
        <li>the <a href="actors.html#agency">agency-of-record</a> control invariant, scoped consent, and a real recourse path.</li>
      </ul>
      <p>The analogy: MCP is like HTTP &mdash; how to talk. A skill is like a single app. AGP is the
      shared <em>application standard</em> on top &mdash; what the conversation means &mdash; so any
      compliant agent works with any compliant agency without a new skill or server per program.</p>

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
      <p>Publish a <a href="schema.html#catalog">catalog</a> of
      <a href="schema.html#service">services</a> (with the capabilities you support), express
      your <a href="schema.html#eligibility">eligibility rules</a>, and implement the five
      <a href="schema.html#operations">operations</a> on a
      <a href="schema.html#session">ServiceSession</a> on your
      <a href="actors.html#agency-agent">agency agent</a> &mdash; verifying authorization on
      <code>submit</code> and producing a <a href="schema.html#determination">Determination</a>.
      The <a href="get-started.html">Get started</a> guide walks through each.</p>

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
