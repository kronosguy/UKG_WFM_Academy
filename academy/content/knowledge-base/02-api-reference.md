---
title: UKG WFM API Reference
description: Complete REST API documentation for integration and automation
category: Knowledge Base
order: 2
difficulty: Intermediate
estimatedTime: 30 minutes
tags: [api, integration, reference, development]
---

# UKG WFM API Reference

## API Overview

The UKG WFM API provides programmatic access to all major system functions through RESTful endpoints.

### Base URL

```
Production:  https://api.ukg.com/wfm/v1
Sandbox:     https://sandbox-api.ukg.com/wfm/v1
```

### API Version

Current Version: **v1**

Supported versions: v1, v1.1 (deprecated)

Version sunset notice: v1.1 will be deprecated on 2025-12-31

## Authentication

### OAuth 2.0 (Recommended)

```bash
# 1. Request Access Token
POST /oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&
client_id=YOUR_CLIENT_ID&
client_secret=YOUR_CLIENT_SECRET

# Response
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "api"
}

# 2. Use Token in Requests
GET /api/v1/employees
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR...
```

### API Key Authentication

```bash
GET /api/v1/employees
X-API-Key: sk_live_abc123def456ghi789
X-API-Secret: ss_live_xyz789uva456bcd123
```

## Request/Response Format

### Request Headers

```
Content-Type: application/json
Accept: application/json
Authorization: Bearer <token>
X-Request-ID: <unique-id>  (optional, for tracking)
X-Idempotency-Key: <key>   (optional, for safe retries)
```

### Response Format

```json
{
  "success": true,
  "data": {
    "id": 123,
    "name": "John Doe",
    ...
  },
  "meta": {
    "timestamp": "2024-02-24T10:30:00Z",
    "request_id": "req_abc123",
    "api_version": "v1"
  }
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request parameters",
    "details": [
      {
        "field": "email",
        "message": "Email format invalid"
      }
    ]
  },
  "meta": {
    "timestamp": "2024-02-24T10:30:00Z",
    "request_id": "req_abc123"
  }
}
```

## Error Codes

| Code | Status | Description |
|------|--------|-------------|
| INVALID_REQUEST | 400 | Malformed request syntax |
| VALIDATION_ERROR | 400 | Request data validation failed |
| UNAUTHORIZED | 401 | Missing or invalid authentication |
| FORBIDDEN | 403 | Authenticated but not authorized |
| NOT_FOUND | 404 | Resource not found |
| CONFLICT | 409 | Request conflicts with existing data |
| RATE_LIMIT | 429 | Too many requests |
| INTERNAL_ERROR | 500 | Server error |
| SERVICE_UNAVAILABLE | 503 | Service temporarily unavailable |

## Rate Limiting

### Limits

- **Standard**: 1,000 requests/hour per API key
- **Premium**: 10,000 requests/hour per API key
- **Enterprise**: Unlimited

### Headers

```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 997
X-RateLimit-Reset: 1708691400
```

## Pagination

### Query Parameters

```bash
GET /api/v1/employees?page=1&page_size=50&sort=-created_date
```

### Pagination Response

```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "page_size": 50,
    "total_records": 1250,
    "total_pages": 25,
    "has_next": true,
    "has_previous": false
  }
}
```

## Core Endpoints

### Employees

#### List Employees

```bash
GET /api/v1/employees
Query Parameters:
  - page: int (default: 1)
  - page_size: int (default: 50, max: 100)
  - department_id: int (optional)
  - status: ACTIVE|INACTIVE|TERMINATED (optional)
  - sort: string (default: id, prefix - for desc)

Example:
GET /api/v1/employees?page=1&page_size=50&status=ACTIVE&sort=-created_date
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1001,
      "first_name": "John",
      "last_name": "Doe",
      "email": "john.doe@company.com",
      "phone": "555-0100",
      "hire_date": "2020-01-15",
      "department_id": 50,
      "department_name": "Operations",
      "position_id": 100,
      "position_name": "Store Manager",
      "manager_id": 500,
      "status": "ACTIVE",
      "fte": 1.0,
      "pay_frequency": "BIWEEKLY",
      "created_date": "2020-01-15T08:00:00Z",
      "modified_date": "2024-02-20T14:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "page_size": 50,
    "total_records": 145,
    "total_pages": 3
  }
}
```

#### Get Employee by ID

```bash
GET /api/v1/employees/{employee_id}

Example:
GET /api/v1/employees/1001
```

#### Create Employee

```bash
POST /api/v1/employees
Content-Type: application/json

{
  "first_name": "Jane",
  "last_name": "Smith",
  "email": "jane.smith@company.com",
  "phone": "555-0101",
  "hire_date": "2024-03-01",
  "department_id": 50,
  "position_id": 100,
  "manager_id": 500,
  "fte": 1.0,
  "pay_frequency": "BIWEEKLY"
}
```

**Response:** 201 Created
```json
{
  "success": true,
  "data": {
    "id": 1002,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@company.com",
    ...
  }
}
```

#### Update Employee

```bash
PUT /api/v1/employees/{employee_id}

{
  "phone": "555-0102",
  "department_id": 51,
  "position_id": 101
}
```

### Time Entries / Punches

#### Record Time Entry (Clock In/Out)

```bash
POST /api/v1/time-entries
Content-Type: application/json

{
  "employee_id": 1001,
  "punch_date": "2024-02-24",
  "punch_time": "09:00:00",
  "punch_type": "IN",
  "punch_source": "KIOSK",
  "location_id": 10
}
```

**Response:** 201 Created
```json
{
  "success": true,
  "data": {
    "id": 500001,
    "employee_id": 1001,
    "punch_date": "2024-02-24",
    "punch_time": "09:00:00",
    "punch_type": "IN",
    "punch_source": "KIOSK",
    "created_date": "2024-02-24T09:00:05Z"
  }
}
```

#### Get Employee Punches

```bash
GET /api/v1/employees/{employee_id}/time-entries
Query Parameters:
  - start_date: date (YYYY-MM-DD)
  - end_date: date (YYYY-MM-DD)
  - page: int (default: 1)
  - page_size: int (default: 50)

Example:
GET /api/v1/employees/1001/time-entries?start_date=2024-02-01&end_date=2024-02-29
```

### Timesheets

#### Get Timesheet for Employee/Date

```bash
GET /api/v1/employees/{employee_id}/timesheets/{date}

Example:
GET /api/v1/employees/1001/timesheets/2024-02-24
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 5001,
    "employee_id": 1001,
    "timesheet_date": "2024-02-24",
    "time_in": "09:00:00",
    "time_out": "17:30:00",
    "hours_worked": 8.5,
    "break_minutes": 30,
    "exceptions": [
      {
        "type": "LATE_ARRIVAL",
        "description": "Arrived 15 minutes late",
        "severity": "LOW"
      }
    ],
    "status": "DRAFT",
    "created_date": "2024-02-24T17:35:00Z"
  }
}
```

#### Approve Timesheet

```bash
PUT /api/v1/employees/{employee_id}/timesheets/{date}/approve
Content-Type: application/json

{
  "notes": "Approved - no exceptions",
  "approved_by_id": 500
}
```

#### List Timesheets for Review

```bash
GET /api/v1/timesheets
Query Parameters:
  - status: DRAFT|SUBMITTED|APPROVED|REJECTED
  - department_id: int
  - start_date: date
  - end_date: date
  - page: int
  - page_size: int

Example:
GET /api/v1/timesheets?status=SUBMITTED&department_id=50&start_date=2024-02-01&end_date=2024-02-29
```

### Schedules

#### Create Schedule

```bash
POST /api/v1/schedules
Content-Type: application/json

{
  "department_id": 50,
  "schedule_start_date": "2024-03-03",
  "schedule_end_date": "2024-03-09",
  "schedule_type": "WEEKLY"
}
```

**Response:** 201 Created
```json
{
  "success": true,
  "data": {
    "id": 100001,
    "department_id": 50,
    "schedule_start_date": "2024-03-03",
    "schedule_end_date": "2024-03-09",
    "status": "DRAFT",
    "created_date": "2024-02-24T10:00:00Z"
  }
}
```

#### Create Schedule Assignment

```bash
POST /api/v1/schedules/{schedule_id}/assignments
Content-Type: application/json

{
  "employee_id": 1001,
  "shift_date": "2024-03-03",
  "shift_start": "08:00:00",
  "shift_end": "17:00:00",
  "position_required": 100
}
```

#### Publish Schedule

```bash
PUT /api/v1/schedules/{schedule_id}/publish
Content-Type: application/json

{
  "publish_date": "2024-02-25T12:00:00Z"
}
```

### Leave/Absence Requests

#### Create Leave Request

```bash
POST /api/v1/leave-requests
Content-Type: application/json

{
  "employee_id": 1001,
  "leave_start_date": "2024-03-15",
  "leave_end_date": "2024-03-17",
  "leave_type_id": 1,
  "hours_requested": 24.0,
  "reason": "Vacation"
}
```

#### Approve Leave Request

```bash
PUT /api/v1/leave-requests/{leave_id}/approve
Content-Type: application/json

{
  "approved_by_id": 500,
  "notes": "Approved"
}
```

#### Get Leave Balances

```bash
GET /api/v1/employees/{employee_id}/leave-balances

Response:
{
  "success": true,
  "data": [
    {
      "leave_type_id": 1,
      "leave_type_name": "Vacation",
      "balance_hours": 80.0,
      "pending_hours": 24.0,
      "available_hours": 56.0
    }
  ]
}
```

### Reports

#### Generate Labor Cost Report

```bash
POST /api/v1/reports/labor-cost
Content-Type: application/json

{
  "department_id": 50,
  "start_date": "2024-02-01",
  "end_date": "2024-02-29",
  "include_forecast": true
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "report_abc123",
    "report_type": "LABOR_COST",
    "department_id": 50,
    "period_start": "2024-02-01",
    "period_end": "2024-02-29",
    "total_labor_cost": 45250.75,
    "total_hours": 850.5,
    "average_hourly_cost": 53.20,
    "download_url": "https://api.ukg.com/reports/report_abc123/download?format=pdf"
  }
}
```

#### Get Attendance Report

```bash
GET /api/v1/reports/attendance
Query Parameters:
  - start_date: date
  - end_date: date
  - department_id: int
  - format: JSON|PDF|CSV

Example:
GET /api/v1/reports/attendance?start_date=2024-02-01&end_date=2024-02-29&department_id=50&format=JSON
```

## Webhooks

### Event Types

```
time_entry.created
timesheet.submitted
timesheet.approved
schedule.published
leave_request.created
leave_request.approved
employee.created
employee.updated
```

### Subscribe to Webhook

```bash
POST /api/v1/webhooks
Content-Type: application/json

{
  "event_type": "timesheet.submitted",
  "url": "https://yourapp.com/webhooks/timesheet",
  "headers": {
    "Authorization": "Bearer your_token"
  },
  "retry_policy": "exponential_backoff",
  "max_retries": 5
}
```

### Webhook Payload Example

```json
{
  "id": "evt_abc123",
  "type": "timesheet.submitted",
  "timestamp": "2024-02-24T17:35:00Z",
  "data": {
    "timesheet_id": 5001,
    "employee_id": 1001,
    "timesheet_date": "2024-02-24",
    "status": "SUBMITTED",
    "submitted_date": "2024-02-24T17:35:00Z"
  }
}
```

## Code Examples

### Python

```python
import requests
import json

BASE_URL = "https://api.ukg.com/wfm/v1"
API_KEY = "sk_live_abc123"

headers = {
  "X-API-Key": API_KEY,
  "Content-Type": "application/json"
}

# Get employee
response = requests.get(f"{BASE_URL}/employees/1001", headers=headers)
employee = response.json()["data"]
print(f"Employee: {employee['first_name']} {employee['last_name']}")

# Record punch
punch_data = {
  "employee_id": 1001,
  "punch_date": "2024-02-24",
  "punch_time": "09:00:00",
  "punch_type": "IN",
  "punch_source": "KIOSK",
  "location_id": 10
}
response = requests.post(f"{BASE_URL}/time-entries", headers=headers, json=punch_data)
punch = response.json()["data"]
print(f"Punch recorded: {punch['id']}")
```

### JavaScript

```javascript
const BASE_URL = "https://api.ukg.com/wfm/v1";
const API_KEY = "sk_live_abc123";

const headers = {
  "X-API-Key": API_KEY,
  "Content-Type": "application/json"
};

// Get employee
fetch(`${BASE_URL}/employees/1001`, { headers })
  .then(res => res.json())
  .then(data => {
    const employee = data.data;
    console.log(`Employee: ${employee.first_name} ${employee.last_name}`);
  });

// Record punch
const punchData = {
  employee_id: 1001,
  punch_date: "2024-02-24",
  punch_time: "09:00:00",
  punch_type: "IN",
  punch_source: "KIOSK",
  location_id: 10
};

fetch(`${BASE_URL}/time-entries`, {
  method: "POST",
  headers,
  body: JSON.stringify(punchData)
})
  .then(res => res.json())
  .then(data => {
    console.log(`Punch recorded: ${data.data.id}`);
  });
```

### cURL

```bash
# Get employee
curl -X GET "https://api.ukg.com/wfm/v1/employees/1001" \
  -H "X-API-Key: sk_live_abc123" \
  -H "Content-Type: application/json"

# Record punch
curl -X POST "https://api.ukg.com/wfm/v1/time-entries" \
  -H "X-API-Key: sk_live_abc123" \
  -H "Content-Type: application/json" \
  -d '{
    "employee_id": 1001,
    "punch_date": "2024-02-24",
    "punch_time": "09:00:00",
    "punch_type": "IN",
    "punch_source": "KIOSK",
    "location_id": 10
  }'
```

## SDKs & Libraries

Official SDKs available for:
- Python: `pip install ukg-wfm`
- Node.js: `npm install ukg-wfm`
- Java: Maven/Gradle available
- Go: Available on GitHub
- C#/.NET: NuGet package available

---

## Next Steps

1. **Get API Credentials**: Contact support for API keys
2. **Read Sandbox Guide**: Test in sandbox first
3. **Review Examples**: Study code samples for your language
4. **Build Integration**: Start your first API integration

Continue to the troubleshooting and best practices sections.
