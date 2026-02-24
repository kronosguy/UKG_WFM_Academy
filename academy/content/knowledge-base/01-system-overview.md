---
title: UKG WFM System Overview
description: Complete system architecture, components, and data model overview
category: Knowledge Base
order: 1
difficulty: Beginner
estimatedTime: 15 minutes
tags: [system-overview, architecture, components]
---

# UKG WFM System Overview

## System Components

### Core Modules

UKG Workforce Management is organized into five core functional modules:

#### 1. Time & Attendance

**Primary Function**: Track employee time, calculate hours worked, manage exceptions

**Key Features**:
- Employee clock in/out
- Manual time entry
- Mobile timekeeping
- Exception detection and management
- Timesheet creation and approval
- Compliance tracking
- Real-time dashboards

**Key Tables**:
- `EMP_TIME_ENTRIES`: Individual clock punch records
- `EMPLOYEE_TIMESHEETS`: Aggregated daily timesheet
- `EXCEPTIONS`: Detected rule violations
- `ABSENCE_RECORDS`: Tracked absences and leave

**Typical Workflow**:
```
Employee Clocks In → System Records Punch →
Exception Rules Check → Manager Reviews Timesheet →
Approval/Corrections → Payroll Integration
```

#### 2. Scheduling

**Primary Function**: Create schedules, assign shifts, manage workforce coverage

**Key Features**:
- Schedule creation and publishing
- Shift assignment and trading
- Time-off request management
- Coverage and constraint management
- Optimization recommendations
- Bid management
- Mobile employee access

**Key Tables**:
- `SCHEDULES`: Schedule headers
- `SCHEDULE_SHIFTS`: Individual shift assignments
- `SHIFT_TEMPLATES`: Reusable shift patterns
- `SHIFT_TRADES`: Requested/approved trades
- `TIME_OFF_REQUESTS`: Leave requests

**Typical Workflow**:
```
Review Staffing Needs → Create Schedule Draft →
Apply Constraints → Publish to Employees →
Process Requests → Finalize Schedule →
Distribute to Operations
```

#### 3. Labor Analytics

**Primary Function**: Analyze workforce data, forecast demand, optimize staffing

**Key Features**:
- Historical data analysis
- Demand forecasting
- Budget optimization
- Staffing recommendations
- Performance metrics
- Labor cost analysis
- Predictive analytics

**Key Tables**:
- `HISTORICAL_TRANSACTIONS`: Point-of-sale and transaction data
- `LABOR_FORECAST_DATA`: Forecasted demand by period
- `OPTIMIZATION_RESULTS`: Staffing recommendations
- `BUDGET_ALLOCATIONS`: Budget by period/department

**Typical Workflow**:
```
Import Historical Data → Analyze Demand Patterns →
Create Forecast → Optimize Staffing →
Compare to Budget → Generate Recommendations
```

#### 4. Absences & Leave Management

**Primary Function**: Manage employee leave, track balances, ensure compliance

**Key Features**:
- Absence request tracking
- Leave policy management
- Accrual calculations
- Balance tracking
- Compliance monitoring
- Integration with payroll
- Mobile employee access

**Key Tables**:
- `LEAVE_POLICIES`: Definition of leave types
- `EMPLOYEE_BALANCES`: Current leave balances
- `ABSENCE_ENTRIES`: Individual absence records
- `ACCRUAL_RULES`: Accrual calculation rules

**Typical Workflow**:
```
Employee Requests Leave → Check Policy/Accrual →
Manager Approves → Update Schedule →
Notify Payroll → Deduct Balance
```

#### 5. Administration & Configuration

**Primary Function**: Manage system configuration, users, security, and compliance

**Key Features**:
- User account management
- Role and permission management
- Organization structure
- System configuration
- Audit trails and compliance
- Integration management
- System monitoring

**Key Tables**:
- `USERS`: User account records
- `ROLES`: Role definitions
- `PERMISSIONS`: Permission assignments
- `ORGANIZATION`: Organizational hierarchy
- `AUDIT_LOG`: System change tracking

**Typical Workflow**:
```
Create User → Assign Role → Configure Permissions →
Enable System Access → Monitor Activity →
Update As Needed
```

## Data Model Overview

### Core Entities

```
┌─────────────────────────────────────────────────┐
│                   ORGANIZATION                  │
│ ├─ Company/Enterprise                          │
│ ├─ Business Units                              │
│ ├─ Departments                                 │
│ ├─ Cost Centers                                │
│ └─ Store/Location                              │
└──────────────┬──────────────────────────────────┘
               │
       ┌───────┴───────┐
       ▼               ▼
┌──────────────┐  ┌──────────────┐
│  EMPLOYEE    │  │   POSITION   │
├──────────────┤  ├──────────────┤
│ ID           │  │ ID           │
│ Name         │  │ Title        │
│ Department   │  │ Department   │
│ Role         │  │ Pay Grade    │
│ Status       │  │ FTE          │
└──────┬───────┘  └──────────────┘
       │
       ├──────────────┬──────────────┬───────────────┐
       ▼              ▼              ▼               ▼
┌──────────────┐ ┌────────────┐ ┌────────────┐ ┌──────────┐
│   TIMESHEET  │ │ SCHEDULE   │ │  ABSENCE   │ │ LEAVE    │
│              │ │            │ │            │ │ BALANCE  │
│ Daily Record │ │ Assignment │ │ Record     │ │ Current  │
│ Hours        │ │ Shift Info │ │ Type       │ │ Balance  │
│ Exceptions   │ │ Coverage   │ │ Status     │ │ Policy   │
└──────────────┘ └────────────┘ └────────────┘ └──────────┘
```

### Key Data Entities

#### EMPLOYEE
The core employee record containing all personal and employment information.

```sql
TABLE EMPLOYEE {
  employee_id          INT PRIMARY KEY
  first_name          VARCHAR(50)
  last_name           VARCHAR(50)
  email               VARCHAR(100) UNIQUE
  phone               VARCHAR(20)
  hire_date           DATE
  termination_date    DATE (nullable)
  department_id       INT FOREIGN KEY
  position_id         INT FOREIGN KEY
  manager_id          INT FOREIGN KEY (nullable)
  status              ENUM('ACTIVE', 'INACTIVE', 'TERMINATED')
  fte                 DECIMAL(3,2)
  pay_frequency       ENUM('WEEKLY', 'BIWEEKLY', 'MONTHLY')
  created_date        TIMESTAMP
  modified_date       TIMESTAMP
}
```

#### TIME_ENTRY / PUNCH
Records of individual clock in/out events.

```sql
TABLE TIME_ENTRY {
  time_entry_id       INT PRIMARY KEY
  employee_id         INT FOREIGN KEY
  punch_date          DATE
  punch_time          TIME
  punch_type          ENUM('IN', 'OUT')
  punch_source        ENUM('KIOSK', 'MOBILE', 'MANUAL', 'BADGE')
  location_id         INT FOREIGN KEY
  notes               VARCHAR(255)
  created_date        TIMESTAMP
}
```

#### TIMESHEET
Aggregated daily timesheet record.

```sql
TABLE TIMESHEET {
  timesheet_id        INT PRIMARY KEY
  employee_id         INT FOREIGN KEY
  timesheet_date      DATE
  time_in             TIME
  time_out            TIME
  hours_worked        DECIMAL(5,2)
  break_minutes       INT
  exceptions          TEXT (JSON array)
  status              ENUM('DRAFT', 'SUBMITTED', 'APPROVED', 'REJECTED')
  submitted_date      TIMESTAMP (nullable)
  approved_by         INT FOREIGN KEY (nullable)
  approved_date       TIMESTAMP (nullable)
}
```

#### SCHEDULE_ASSIGNMENT
Employee shift assignments.

```sql
TABLE SCHEDULE_ASSIGNMENT {
  assignment_id       INT PRIMARY KEY
  employee_id         INT FOREIGN KEY
  shift_date          DATE
  shift_start         TIME
  shift_end           TIME
  shift_id            INT FOREIGN KEY (nullable)
  position_required   INT FOREIGN KEY
  status              ENUM('SCHEDULED', 'CONFIRMED', 'COMPLETED', 'CANCELLED')
  published_date      TIMESTAMP (nullable)
  created_date        TIMESTAMP
}
```

#### ABSENCE_RECORD
Records of absences (call-outs, sick leave, etc.).

```sql
TABLE ABSENCE_RECORD {
  absence_id          INT PRIMARY KEY
  employee_id         INT FOREIGN KEY
  absence_date        DATE
  absence_type        ENUM('SICK', 'PERSONAL', 'UNPAID', 'OTHER')
  reason              VARCHAR(255)
  status              ENUM('REQUESTED', 'APPROVED', 'REJECTED')
  requested_date      TIMESTAMP
  approved_by         INT FOREIGN KEY (nullable)
  approved_date       TIMESTAMP (nullable)
}
```

#### LEAVE_REQUEST
Employee leave/time-off requests.

```sql
TABLE LEAVE_REQUEST {
  leave_id            INT PRIMARY KEY
  employee_id         INT FOREIGN KEY
  leave_start_date    DATE
  leave_end_date      DATE
  leave_type_id       INT FOREIGN KEY
  hours_requested     DECIMAL(7,2)
  status              ENUM('DRAFT', 'SUBMITTED', 'APPROVED', 'REJECTED')
  requested_date      TIMESTAMP
  approved_by         INT FOREIGN KEY (nullable)
  approved_date       TIMESTAMP (nullable)
}
```

## Integration Points

### Inbound Integrations

**Data typically imported:**
- Point-of-sale (POS) transaction data
- Historical time and attendance records
- Employee master data from HR systems
- Organizational structure updates
- Payroll information

**Common integration patterns:**
```
ERP/HRIS System → Data Transform → UKG WFM
POS System → Daily Sales Data → Labor Analytics
Legacy System → Historical Import → Analytics Database
```

### Outbound Integrations

**Data typically exported:**
- Approved timesheets to payroll systems
- Labor cost data to financial systems
- Attendance records to HR systems
- Forecast demand data to planning systems
- KPI/Dashboard data to analytics platforms

**Common patterns:**
```
UKG WFM → Timesheet Export → Payroll System
UKG WFM → Labor Cost → Financial System
UKG WFM → Attendance → HR System
```

### API Capabilities

UKG WFM provides REST APIs for:

- Reading employee data
- Creating/updating time entries
- Managing schedules
- Processing requests
- Generating reports
- Managing configuration

**Example Endpoints:**
```
GET    /api/v1/employees
POST   /api/v1/employees/:id/timesheets
GET    /api/v1/schedules/:schedule_id
PUT    /api/v1/leave_requests/:leave_id/approve
GET    /api/v1/reports/labor_cost
```

## Security Model

### Authentication
- Username/password with multi-factor optional
- SSO/SAML support
- API token authentication
- Session management with configurable timeout

### Authorization
- Role-based access control (RBAC)
- Permission-based resource access
- Organization hierarchy respect
- Data row-level security

### Audit & Compliance
- Complete audit trail of all changes
- User action tracking
- Data access logging
- Compliance reporting

## Performance Characteristics

### Typical Performance Metrics

- **Transaction Response**: <500ms for most operations
- **Report Generation**: <30s for daily reports, <2 min for advanced
- **API Response**: <200ms average for most endpoints
- **Concurrent Users**: Supports 1000+ concurrent users
- **Data Retention**: Configurable, typically 2-7 years

### Scalability Considerations

- Horizontal scaling via application servers
- Database optimization for large organizations (1000+ employees)
- Archive older data for performance
- Indexing strategies for common queries

---

## Next Steps

Now that you understand the system overview:

1. **Explore Core Modules**: Review detailed documentation for each module
2. **Understand Data Flows**: See how data moves through the system
3. **Learn APIs**: Study available integration points
4. **Start a Course**: Begin learning specific functionality

Continue to the next section for detailed API documentation.
