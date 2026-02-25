function getCurriculum() {
  return {
    modules: [
      {
        title: "Orientation & Operator Mindset",
        lessons: [
          {
            title: "What Operator-Grade Means",
            duration: "18 min",
            content: `<h3>The Operator's Difference</h3>
<p>An operator understands <strong>why</strong> configuration exists. They don't memorize paths — they understand dependency chains.</p>
<h3>Three Core Principles</h3>
<ul>
<li><strong>Configuration is downstream logic.</strong> A geofence rule breaks downstream if the device is misconfigured upstream.</li>
<li><strong>Risk compounds vertically.</strong> A pay rule error multiplies across 10,000 employees. Know what you're changing.</li>
<li><strong>You are the safety net.</strong> The system won't stop you from misconfiguring. Your understanding is the firewall.</li>
</ul>
<h3>Drill: Identify the Configuration Chain</h3>
<p>Given a timecard exception, trace it backwards: Which pay rule triggered it? Which schedule created the mismatch? Which employee data enabled the edge case?</p>`
          },
          {
            title: "Environment Models & Risk Tiers",
            duration: "22 min",
            content: `<h3>Environment Types</h3>
<ul>
<li><strong>Dev:</strong> Sandbox. Test everything. Break freely.</li>
<li><strong>Staging:</strong> Production-scale data. No masks. This is where misconfiguration leaks appear.</li>
<li><strong>Production:</strong> Real employees, real pay. One error = payroll impact.</li>
</ul>
<h3>Risk Tiers for Changes</h3>
<p><strong>Tier 1 (Green)</strong> — Reporting, metadata, non-processing changes.</p>
<p><strong>Tier 2 (Yellow)</strong> — Schedule templates, geofence updates, compliance rules.</p>
<p><strong>Tier 3 (Red)</strong> — Pay rules, exception handlers, timecard lifecycle changes.</p>`
          },
          {
            title: "The UKG Risk Triangle",
            duration: "20 min",
            content: `<h3>Data • Configuration • Process</h3>
<p>Every UKG issue sits at the intersection of three forces:</p>
<ul>
<li>Bad <strong>data</strong> (dirty employee records, future-dated schedules)</li>
<li>Bad <strong>configuration</strong> (pay rule conflicts, geofence overlap)</li>
<li>Bad <strong>process</strong> (skipped approvals, no validation before publish)</li>
</ul>
<p>Know which vertex you're fixing. Fixing only one leaves you vulnerable to the other two.</p>`
          },
          {
            title: "Personal Runbook Building",
            duration: "16 min",
            content: `<h3>Your Operator's Notebook</h3>
<p>Every environment is different. Build a runbook:</p>
<ul>
<li>Critical escalation numbers</li>
<li>Core employee segments</li>
<li>Pay rule load order (yours will differ)</li>
<li>Known edge cases in your environment</li>
<li>Rollback procedures for each critical area</li>
</ul>`
          },
          {
            title: "Sandbox Navigation & Core Flows",
            duration: "19 min",
            content: `<h3>The Five Core Flows</h3>
<ul>
<li><strong>Timekeeping:</strong> Capture → Exception Handling → Approval</li>
<li><strong>Scheduling:</strong> Template → Publish → Coverage Validation</li>
<li><strong>Labor:</strong> Time Entries → Pay Rule Evaluation → Compliance Check</li>
<li><strong>Integration:</strong> Pull → Sync → Reconcile</li>
<li><strong>Admin:</strong> Configuration → Testing → Validation → Deploy</li>
</ul>`
          }
        ]
      },
      {
        title: "Platform Mental Model",
        lessons: [
          {
            title: "Configuration Dependency Chains",
            duration: "25 min",
            content: `<h3>Upstream Changes Break Downstream</h3>
<p>Example: A geofence rule depends on device trust, which depends on device deployment, which depends on device type configuration.</p>
<p>Change the device type → geofence breaks → locations mismatch → exceptions.</p>
<h3>Mapping Your Chain</h3>
<p>For each change, ask: What depends on this? What if I change it?</p>`
          },
          {
            title: "Upstream vs. Downstream Failures",
            duration: "23 min",
            content: `<h3>Upstream Failure (Root Cause)</h3>
<p>Device misconfiguration prevents accurate location capture. This is the source.</p>
<h3>Downstream Failure (Symptom)</h3>
<p>Employee gets geofence violation. This is what they see.</p>
<p>Fix the symptom and the employee still violates. Fix the root cause and the symptom disappears.</p>`
          },
          {
            title: "Troubleshooting Workflow",
            duration: "20 min",
            content: `<h3>The Four Steps</h3>
<ol>
<li>Identify the symptom (what's broken?)</li>
<li>Map the dependency chain (what feeds this?)</li>
<li>Test upstream (isolate the root)</li>
<li>Validate downstream (did the fix propagate?)</li>
</ol>`
          },
          {
            title: "Hidden Defaults Discovery",
            duration: "18 min",
            content: `<h3>System Defaults You Can't See</h3>
<p>UKG has dozens of built-in defaults that aren't obvious until they matter.</p>
<ul>
<li>Default exception aging rules</li>
<li>Default approver assignment logic</li>
<li>Default calculation rounding (banker's rounding vs. standard)</li>
</ul>
<p>Know your environment's defaults. They will surprise you.</p>`
          },
          {
            title: "Testing Before Production Deploy",
            duration: "22 min",
            content: `<h3>The Three-Environment Validation</h3>
<p><strong>Dev:</strong> Does it work at all?</p>
<p><strong>Staging:</strong> Does it work with real-scale data?</p>
<p><strong>Production:</strong> Did it break anything else?</p>
<p>Never skip staging. This is where edge cases live.</p>`
          }
        ]
      },
      {
        title: "Identity, Roles & Access",
        lessons: [
          {
            title: "Role Strategy & Design",
            duration: "24 min",
            content: `<h3>Role Types in UKG Pro WFM</h3>
<ul>
<li><strong>Operator:</strong> Configure, approve, manage daily operations</li>
<li><strong>Analyst:</strong> Report, validate data, recommend changes</li>
<li><strong>Manager:</strong> Approve timecards, manage team scheduling</li>
<li><strong>Admin:</strong> Full system access, risk highest</li>
</ul>`
          },
          {
            title: "Duties Segregation",
            duration: "21 min",
            content: `<h3>Separate the Critical Functions</h3>
<p>One person should not: Configure pay rules AND approve timecards using those rules.</p>
<p>This is SOX-relevant. Document it. Audit it. Enforce it.</p>`
          },
          {
            title: "Access Layers & Scoping",
            duration: "19 min",
            content: `<h3>Multi-Level Access Model</h3>
<ul>
<li>Business unit scoping</li>
<li>Department scoping</li>
<li>Employee pool access</li>
<li>Functional access (read vs. approve vs. configure)</li>
</ul>`
          },
          {
            title: "Admin Auditing & Accountability",
            duration: "20 min",
            content: `<h3>Audit Trail Requirements</h3>
<p>Every admin action must be logged: WHO changed WHAT and WHEN.</p>
<p>UKG provides audit logs. Use them. Store them. Review them quarterly.</p>`
          },
          {
            title: "Support & Escalation Patterns",
            duration: "17 min",
            content: `<h3>Building Your Support Matrix</h3>
<p>Tier 1: Field support (schedules, exceptions)</p>
<p>Tier 2: Operations (configuration, approvals)</p>
<p>Tier 3: Engineering (API, integrations, root cause)</p>`
          }
        ]
      },
      {
        title: "Time Collection Control",
        lessons: [
          {
            title: "Capture Methods & Device Trust",
            duration: "26 min",
            content: `<h3>How Time Gets Into UKG</h3>
<ul>
<li><strong>Mobile punch:</strong> Employee opens app, location captured</li>
<li><strong>Kiosk punch:</strong> Physical terminal, no location</li>
<li><strong>System punch:</strong> Scheduled or API-driven</li>
<li><strong>Manual entry:</strong> Manager override (audit required)</li>
</ul>
<h3>Device Trust Hierarchy</h3>
<p>Mobile > Kiosk > System > Manual. Higher trust = fewer exceptions.</p>`
          },
          {
            title: "UTM Fundamentals",
            duration: "23 min",
            content: `<h3>Unified Time Management</h3>
<p>UTM is the capture engine. It feeds timecards.</p>
<p>Issues in UTM → Issues in timecards. Know your UTM setup.</p>`
          },
          {
            title: "Fraud Prevention & Anomaly Detection",
            duration: "21 min",
            content: `<h3>Common Patterns</h3>
<ul>
<li>Punch clustering (all punches at top of hour)</li>
<li>Duplicate punches</li>
<li>Location spoofing (VPN usage)</li>
<li>Time mismatch (punch time ≠ system time)</li>
</ul>`
          },
          {
            title: "Intermittent Capture Failures",
            duration: "19 min",
            content: `<h3>When Mobile Fails</h3>
<p>Network outage → employee can't punch in app.</p>
<p>Setup: Fallback to kiosk or manual entry. Document it.</p>`
          },
          {
            title: "Data Validation & Reconciliation",
            duration: "20 min",
            content: `<h3>Daily Hygiene Checks</h3>
<ul>
<li>No orphaned punches (punch with no employee)</li>
<li>No future-dated entries</li>
<li>Punch quantity matches headcount</li>
<li>Location coordinates are valid</li>
</ul>`
          }
        ]
      },
      {
        title: "Mobile Punching & Geofence",
        lessons: [
          {
            title: "Mobile Governance Strategy",
            duration: "25 min",
            content: `<h3>Device Management at Scale</h3>
<p>Employees use personal phones. How do you control it?</p>
<ul>
<li>Device enrollment & credential storage</li>
<li>OS version control</li>
<li>App versioning & forced updates</li>
<li>Network security (VPN, WiFi restrictions)</li>
</ul>`
          },
          {
            title: "Geofence Strategy & Setup",
            duration: "27 min",
            content: `<h3>Defining Location Boundaries</h3>
<p>Radius-based geofence vs. polygon-based. Radius is simpler; polygon handles complex sites.</p>
<h3>Overlap & Edge Cases</h3>
<p>What happens at building perimeter? At parking lot edge? Inside WiFi but outside geofence?</p>`
          },
          {
            title: "VPN & Remote Work Edge Cases",
            duration: "22 min",
            content: `<h3>The VPN Problem</h3>
<p>Employee on VPN appears to be in different location.</p>
<p>Solutions: Allow VPN zones, require secondary auth, or disable location check for remote workers.</p>`
          },
          {
            title: "Location Trust & Spoofing Prevention",
            duration: "20 min",
            content: `<h3>GPS Accuracy vs. Fraud Risk</h3>
<p>GPS can be spoofed. But also can be inaccurate in urban canyons.</p>
<p>Balance: Require sufficient accuracy AND geofence buffer AND punch confirmation.</p>`
          },
          {
            title: "Outage Triage for Location Services",
            duration: "21 min",
            content: `<h3>When Geofence Fails</h3>
<p>GPS down, no location = geofence exception.</p>
<p>Triage path: Is it device failure? Network? Geofence config? Or legitimate violation?</p>`
          }
        ]
      },
      {
        title: "Scheduling Operations",
        lessons: [
          {
            title: "Schedules as Data",
            duration: "23 min",
            content: `<h3>Schedules Drive Everything</h3>
<p>Expected hours feed pay rules. Schedule patterns feed compliance. Schedules feed forecasting.</p>
<p>Corrupt schedule = corrupt downstream analysis.</p>`
          },
          {
            title: "Zones & Early Starts",
            duration: "24 min",
            content: `<h3>Multi-Location Scheduling</h3>
<p>Employee works across 3 sites. Which geofence applies? Which break rules?</p>
<p>Zone assignment cascades into geofence, pay rules, and compliance.</p>`
          },
          {
            title: "Shift Templates & Patterns",
            duration: "21 min",
            content: `<h3>Template Structure</h3>
<p>Templates define: hours, breaks, job code, pay code.</p>
<p>One template error = applies to 100 employees on that pattern.</p>`
          },
          {
            title: "Publish Churn & Coverage Validation",
            duration: "25 min",
            content: `<h3>The Publish Problem</h3>
<p>Manager publishes schedule with gaps. Employees panic. Last-minute swaps. Chaos.</p>
<p>Solution: Pre-publish coverage validation. Catch gaps before employees see them.</p>`
          },
          {
            title: "Seasonal & Ad-Hoc Changes",
            duration: "19 min",
            content: `<h3>Managing Schedule Volatility</h3>
<p>Holiday schedules, unexpected closures, temporary ramp-ups.</p>
<p>Process: Change control, stakeholder notification, fallback plan.</p>`
          }
        ]
      },
      {
        title: "Timecard Lifecycle",
        lessons: [
          {
            title: "Exception Taxonomy & Root Causes",
            duration: "24 min",
            content: `<h3>Seven Exception Types</h3>
<ul>
<li><strong>Missed Punch:</strong> No punch recorded</li>
<li><strong>Late Punch:</strong> Punch outside schedule window</li>
<li><strong>Geofence Violation:</strong> Punch outside allowed location</li>
<li><strong>Break Violation:</strong> Insufficient break time</li>
<li><strong>Overtime Threshold:</strong> Hours exceed threshold</li>
<li><strong>Compliance Flag:</strong> Regulation trigger</li>
<li><strong>System Exception:</strong> Configuration error</li>
</ul>`
          },
          {
            title: "Exception Aging SLAs",
            duration: "21 min",
            content: `<h3>Time-Based Escalation</h3>
<p>New exceptions: Notify operator.</p>
<p>24h old: Escalate to manager.</p>
<p>48h old: Escalate to director.</p>
<p>Auto-resolve if unreasonable (age cutoff).</p>`
          },
          {
            title: "Timecard Approval Workflows",
            duration: "22 min",
            content: `<h3>Standard Flow</h3>
<p>1. Exceptions resolved</p>
<p>2. Manager reviews</p>
<p>3. Approver signs off</p>
<p>4. Payroll locks card</p>
<h3>Exception Cases</h3>
<p>Partial approval, delegation, escalation.</p>`
          },
          {
            title: "Sign-Off Compliance & Auditing",
            duration: "20 min",
            content: `<h3>Compliance Requirements</h3>
<p>Who approved this timecard? When? For which exceptions?</p>
<p>Maintain audit trail. This is payroll evidence.</p>`
          },
          {
            title: "Payroll Lock & Historical Data Retention",
            duration: "19 min",
            content: `<h3>Payroll Lock Mechanics</h3>
<p>Once locked, timecard can't be modified without admin unlock.</p>
<p>Lock on payroll cutoff. Prevent post-payroll changes. Audit any unlocks.</p>`
          }
        ]
      },
      {
        title: "Pay Rules & Labor",
        lessons: [
          {
            title: "Pay Rule Evaluation Order",
            duration: "26 min",
            content: `<h3>Rules Execute in Sequence</h3>
<p>Rule 1 → Rule 2 → Rule 3</p>
<p>Output of Rule 1 becomes input to Rule 2.</p>
<p>Order matters. Know yours.</p>`
          },
          {
            title: "Common Pay Rule Patterns",
            duration: "23 min",
            content: `<h3>Pattern Examples</h3>
<ul>
<li><strong>Shift Differential:</strong> +$2/hr after 8pm</li>
<li><strong>Overtime Threshold:</strong> 1.5x after 40hrs/week</li>
<li><strong>Holiday Multiplier:</strong> 2x on holiday</li>
<li><strong>Rounding Rules:</strong> Round to nearest 0.25hr</li>
</ul>`
          },
          {
            title: "Edge Cases & Pay Rule Conflicts",
            duration: "24 min",
            content: `<h3>When Rules Collide</h3>
<p>What if holiday AND overtime AND shift diff all apply?</p>
<p>UKG processes in order. But which is most generous? Most restrictive? Mutually exclusive?</p>`
          },
          {
            title: "Testing Methodology & Validation",
            duration: "22 min",
            content: `<h3>Test Before Deploying</h3>
<p>1. Build sample timecards covering edge cases</p>
<p>2. Calculate expected output manually</p>
<p>3. Run through UKG</p>
<p>4. Verify output matches manual calculation</p>`
          },
          {
            title: "Rollback Strategy & Disaster Recovery",
            duration: "21 min",
            content: `<h3>When Pay Rules Break</h3>
<p>Have a rollback plan:</p>
<ul>
<li>Previous rule version saved?</li>
<li>Can you re-run payroll?</li>
<li>Can you adjust post-payroll?</li>
</ul>`
          }
        ]
      },
      {
        title: "Compliance",
        lessons: [
          {
            title: "Meal Break Rules & Enforcement",
            duration: "24 min",
            content: `<h3>State-Level Variations</h3>
<p>California: 30min after 5hrs. Texas: No requirement. New York: Tiered by hours.</p>
<p>Know your states. Each needs different config.</p>`
          },
          {
            title: "Attestation Workflows",
            duration: "21 min",
            content: `<h3>Manager Certification</h3>
<p>Manager attests: "I supervised this employee, hours are accurate."</p>
<p>This is legal evidence. Make it mandatory. Log it.</p>`
          },
          {
            title: "Policy Enforcement & Alerts",
            duration: "22 min",
            content: `<h3>Automated Compliance Checks</h3>
<p>Flag non-compliant timecards before approval.</p>
<p>Example: "Employee worked 14 consecutive hours. Violates fatigue rule."</p>`
          },
          {
            title: "Documentation & Audit Trails",
            duration: "20 min",
            content: `<h3>Record Everything</h3>
<p>Policy version history. Who changed it. When. Why.</p>
<p>You'll need this for audits.</p>`
          },
          {
            title: "Compliance Dashboards & Reporting",
            duration: "19 min",
            content: `<h3>Visibility Layer</h3>
<p>Which locations are compliant? Which policies are most violated? Which changes would help?</p>`
          }
        ]
      },
      {
        title: "Reporting & Metrics",
        lessons: [
          {
            title: "Metric Governance & Definition",
            duration: "25 min",
            content: `<h3>Define Your Metrics Precisely</h3>
<p>"Exception rate" — is that new exceptions today? Unresolved exceptions? By employee? By location?</p>
<p>Ambiguous metric = useless metric.</p>`
          },
          {
            title: "Data Quality Frameworks",
            duration: "23 min",
            content: `<h3>Data Quality Dimensions</h3>
<ul>
<li><strong>Completeness:</strong> No missing records</li>
<li><strong>Accuracy:</strong> Data matches reality</li>
<li><strong>Consistency:</strong> No contradictions</li>
<li><strong>Timeliness:</strong> Data is current</li>
</ul>`
          },
          {
            title: "Cross-Market Normalization",
            duration: "21 min",
            content: `<h3>Comparing Apples to Apples</h3>
<p>Hospital vs. Retail location. Different models, different staffing.</p>
<p>Normalize metrics: "Exception per 100 labor hours" not "Exception per shift."</p>`
          },
          {
            title: "Scorecard Design & Interpretation",
            duration: "22 min",
            content: `<h3>The Executive Dashboard</h3>
<p>Timekeeping accuracy. Payroll timeliness. Compliance rate. Schedule coverage.</p>
<p>Each needs target, current, trend, and action items.</p>`
          },
          {
            title: "Causality Analysis & Root Cause Reporting",
            duration: "20 min",
            content: `<h3>Why, Not Just What</h3>
<p>Report says: "Exceptions up 15% this week."</p>
<p>Find: Scheduling change? New geofence? Holidays? System downtime?</p>`
          }
        ]
      },
      {
        title: "APIs & Integration",
        lessons: [
          {
            title: "API Mental Model",
            duration: "24 min",
            content: `<h3>UKG as a Data Service</h3>
<p>APIs expose: Employees, Timecards, Schedules, Exceptions, Pay Rules.</p>
<p>You PULL data. You don't PUSH unless explicitly configured.</p>`
          },
          {
            title: "Authentication Patterns",
            duration: "22 min",
            content: `<h3>OAuth 2.0 Flow</h3>
<p>1. Request token with credentials</p>
<p>2. Receive access token (expires)</p>
<p>3. Use token in API calls</p>
<p>4. Refresh before expiration</p>`
          },
          {
            title: "Data Pull Pipelines & Scheduling",
            duration: "23 min",
            content: `<h3>Real-Time vs. Batch</h3>
<p><strong>Real-time:</strong> Listen to webhooks (timecard approved)</p>
<p><strong>Batch:</strong> Pull daily at 2am (employee roster sync)</p>`
          },
          {
            title: "Reconciliation & Idempotency",
            duration: "21 min",
            content: `<h3>Handling Failures</h3>
<p>Network fails mid-pull. Did data get written? How do you know?</p>
<p>Solution: Idempotent operations. Re-run safely.</p>`
          },
          {
            title: "Automation & Integration Patterns",
            duration: "20 min",
            content: `<h3>Common Use Cases</h3>
<p>Pull timecards → Sync to payroll. Pull exceptions → Notify via Slack. Pull schedules → Feed forecasting.</p>`
          }
        ]
      },
      {
        title: "Tooling & Automation",
        lessons: [
          {
            title: "Validators & Data Quality Tools",
            duration: "23 min",
            content: `<h3>Pre-Deployment Checks</h3>
<p>Validator: Checks schedule before publish. Catches gaps.</p>
<p>Auditor: Reviews pay rules for conflicts.</p>`
          },
          {
            title: "Operator Tools & Dashboards",
            duration: "21 min",
            content: `<h3>Your Workbench</h3>
<p>Real-time exception feed. Bulk action buttons. Quick filters. Drill-down capability.</p>`
          },
          {
            title: "Packaging & Deployment Automation",
            duration: "22 min",
            content: `<h3>Versioning Config Changes</h3>
<p>Package pay rules, geofences, schedules as deployable unit.</p>
<p>Version it. Test it. Deploy it. Rollback if needed.</p>`
          },
          {
            title: "Reliability Patterns & Error Handling",
            duration: "20 min",
            content: `<h3>Graceful Degradation</h3>
<p>API unavailable? Fall back to cache. Log the failure. Alert ops.</p>
<p>Never silently fail.</p>`
          },
          {
            title: "Toolkit Deployment & Scaling",
            duration: "19 min",
            content: `<h3>From Local to Production</h3>
<p>Dev environment. QA validation. Staging load test. Production gradual rollout.</p>`
          }
        ]
      },
      {
        title: "Scenarios & Proof",
        lessons: [
          {
            title: "Scenario 1: Geofence Chaos Drill",
            duration: "35 min",
            content: `<h3>Situation</h3>
<p>Overnight geofence moved 500 meters. Now 200 employees getting violations.</p>
<h3>Your Tasks</h3>
<ol>
<li>Identify which employees are affected (location data analysis)</li>
<li>Root cause: Was it accidental move or legitimate update?</li>
<li>Triage: Who needs manual approval? Who auto-clears?</li>
<li>Prevent: What controls would catch this before deployment?</li>
</ol>`
          },
          {
            title: "Scenario 2: Pay Rule Regression",
            duration: "35 min",
            content: `<h3>Situation</h3>
<p>New holiday multiplier rule deployed. Now 15% of employees underpaid.</p>
<h3>Your Tasks</h3>
<ol>
<li>Identify affected employees and payment impact</li>
<li>Root cause: Rule evaluation order? Rounding issue? Conflict?</li>
<li>Rollback vs. Fix: Which is safer?</li>
<li>Remediation: How do you correct past pay?</li>
</ol>`
          },
          {
            title: "Scenario 3: Schedule Mismatch Crisis",
            duration: "35 min",
            content: `<h3>Situation</h3>
<p>Manager published schedule with 40% of shifts unassigned (data corruption on import).</p>
<h3>Your Tasks</h3>
<ol>
<li>Identify the scope (which locations? which dates?)</li>
<li>Root cause: API sync failure? Manual error? System bug?</li>
<li>Notification: Who needs to know? How?</li>
<li>Recovery: Can you restore from backup? Republish?</li>
</ol>`
          },
          {
            title: "Scenario 4: Audit Response & Evidence",
            duration: "35 min",
            content: `<h3>Situation</h3>
<p>External auditor flags: "10 timecards approved without manager signature."</p>
<h3>Your Tasks</h3>
<ol>
<li>Trace approval history (who approved? when? audit trail intact?)</li>
<li>Root cause: Approval workflow bypass? System bug? Policy gap?</li>
<li>Remediation: Correct the approvals? Re-approve? Document waiver?</li>
<li>Prevention: What controls stop this in future?</li>
</ol>`
          },
          {
            title: "Capstone Project: Design Full Environment",
            duration: "120 min",
            content: `<h3>Build Complete Configuration</h3>
<p>Design UKG Pro WFM setup for a 500-person hospital network (3 locations, 24/7 operations).</p>
<h3>Deliverables</h3>
<ul>
<li>Role and access matrix</li>
<li>Employee segmentation strategy</li>
<li>Geofence map for all 3 locations</li>
<li>Pay rule evaluation order (3-5 key rules)</li>
<li>Exception handling SLA flow</li>
<li>Compliance policy matrix (meals, breaks, rest days)</li>
<li>Integration touchpoints (payroll, HR, scheduling)</li>
<li>Operator runbook (critical procedures, escalation, rollback)</li>
</ul>`
          }
        ]
      }
    ]
  };
}
