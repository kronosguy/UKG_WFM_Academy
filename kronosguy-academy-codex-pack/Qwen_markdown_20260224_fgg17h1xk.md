# KronosGuy Academy — GitHub Integration Specification

**Projects V2 | Wiki | Actions**  
**Target:** kronosguy.com/academy  
**Version:** 1.0.0  

---

## 🗂️ GitHub Projects V2 Configuration

### Project Setup

```yaml
Project:
  name: "UKG WFM Academy — Control Room"
  owner: "kronosguy"
  number: 2
  url: "https://github.com/users/kronosguy/projects/2"

Fields:
  Status:
    type: "single_select"
    options:
      - "Triage"
      - "Scoped"
      - "In Progress"
      - "In Review"
      - "Blocked"
      - "Shipped"
      - "Parked"
  
  Area:
    type: "single_select"
    options:
      - "academy"
      - "fieldmanual"
      - "blueprints"
      - "toolkit"
      - "sdk"
      - "scenarios"
      - "grader"
      - "operator-os"
      - "docs"
      - "platform"
      - "sandbox"
  
  Artifact:
    type: "single_select"
    options:
      - "Lesson"
      - "Exercise"
      - "Lab"
      - "Runbook"
      - "Scenario"
  
  Module:
    type: "single_select"
    options:
      - "M00 Orientation"
      - "M01 Platform Mental Model"
      - "M02 Identity & Access"
      - "M03 Time Collection"
      - "M04 Mobile + Geofence"
      - "M05 Scheduling Ops"
      - "M06 Timecard + Exceptions"
      - "M07 Pay Rules"
      - "M08 Compliance"
      - "M09 Reporting"
      - "M10 APIs + Integration"
      - "M11 Tooling + Automation"
      - "M12 Scenarios + Proof"
      - "M-PLATFORM Systems & Governance"
  
  Effort:
    type: "number"
    range: "1-10"
  
  Target-Start:
    type: "date"
  
  Target-Ship:
    type: "date"