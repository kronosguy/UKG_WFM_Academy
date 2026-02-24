# Codex Deployment: UKG WFM Academy (LMS MASTER VERSION)

This script builds the complete LMS platform, modeled after DataCamp and iximiuz, with full-auto governance.

```powershell
$ErrorActionPreference = "Stop"
$Root = "g:\UKG_WFM_Academy"

# 1. DIRECTORY STRUCTURE
$Dirs = @("$Root\platform", "$Root\academy\ukg", "$Root\academy\labs", "$Root\academy\playgrounds", "$Root\.github\workflows")
foreach ($dir in $Dirs) { if (!(Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force } }

# 2. PLATFORM FILES (Design + Logic)
$Files = @{}
$Files["$Root\platform\styles.css"] = @'
:root { --bg-color:#0d1117; --text-color:#c9d1d9; --accent-color:#58a6ff; --border-color:#30363d; --terminal-green:#3fb950; --font-mono:'JetBrains Mono',monospace; }
body { background:var(--bg-color); color:var(--text-color); font-family:var(--font-mono); padding:2rem; }
#terminal { border:1px solid var(--border-color); background:#010409; padding:1rem; border-radius:6px; }
.lms-card { border:1px solid var(--border-color); padding:1rem; margin:1rem 0; transition:all 0.3s; }
.lms-card:hover { transform:translateX(5px); border-color:var(--accent-color); }
.badge { padding:0.2rem 0.6rem; border:1px solid var(--accent-color); font-size:0.8rem; border-radius:12px; }
'@

$Files["$Root\platform\dashboard.js"] = @'
const LMS = {
    init() { document.querySelectorAll('.load-module').forEach(b => b.onclick = (e) => this.load(e)); },
    load(e) { 
        e.preventDefault(); 
        const v = document.getElementById('v'); v.style.display='block';
        v.innerHTML = `[OK] BOOTING_MODULE: ${e.target.href}...`;
        setTimeout(() => { window.location.href = e.target.href; }, 500);
    }
};
document.addEventListener('DOMContentLoaded', () => LMS.init());
'@

$Files["$Root\platform\index.html"] = @'
<!DOCTYPE html><html><head><link rel="stylesheet" href="styles.css"></head><body><div id="terminal">
    <h1>UKG WFM ACADEMY</h1>
    <div class="lms-card"><h3><span class="badge">CORE</span> UKG Core</h3><a class="load-module" href="../academy/ukg/README.md">LOAD_PATH_./ukg</a></div>
    <div class="lms-card"><h3><span class="badge">LABS</span> Analytics Labs</h3><a class="load-module" href="../academy/labs/README.md">LOAD_PATH_./labs</a></div>
    <div class="lms-card"><h3><span class="badge">PLAYGROUND</span> Playgrounds</h3><a class="load-module" href="../academy/playgrounds/README.md">LOAD_PATH_./playgrounds</a></div>
    <div id="v" style="display:none; color:var(--terminal-green); padding-top:1rem;"></div>
</div><script src="dashboard.js"></script></body></html>
'@

# 3. CURRICULUM (LMS CONTENT)
$Files["$Root\academy\ukg\README.md"] = "# UKG Core`nAdvanced Pay Rules & Location Trust."
$Files["$Root\academy\labs\README.md"] = "# Analytics Labs (DataCamp-Style)`nSQL & AI for Workforce Management."
$Files["$Root\academy\playgrounds\README.md"] = "# Playgrounds (iximiuz-Style)`n Infrastructure Sandboxes."

# 4. GOVERNANCE
$Files["$Root\.github\workflows\deploy.yml"] = "name: Full-Auto`non: [push]`njobs: { d: { runs-on: ubuntu-latest, steps: [ { uses: actions/checkout@v4 } ] } }"
$Files["$Root\WIKI.md"] = "# Academy Wiki`nRoadmap and Standards."

foreach ($p in $Files.Keys) { Set-Content -Path $p -Value $Files[$p] -Encoding utf8 }
Write-Host "LMS DEPLOID. PROJECT READY."
```
