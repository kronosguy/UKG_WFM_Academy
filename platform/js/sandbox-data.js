function getSandboxData() {
  return {
    employees: [
      { id: 'EMP001', name: 'Sarah Mitchell', department: 'Emergency', role: 'RN', location: 'Hospital A', phone: '(555) 123-4567' },
      { id: 'EMP002', name: 'James Torres', department: 'Radiology', role: 'Tech', location: 'Hospital A', phone: '(555) 234-5678' },
      { id: 'EMP003', name: 'Maria Gonzalez', department: 'Admin', role: 'Coordinator', location: 'Hospital B', phone: '(555) 345-6789' },
      { id: 'EMP004', name: 'David Chen', department: 'ICU', role: 'RN', location: 'Hospital A', phone: '(555) 456-7890' },
      { id: 'EMP005', name: 'Lisa Johnson', department: 'Surgery', role: 'RN', location: 'Hospital C', phone: '(555) 567-8901' },
      { id: 'EMP006', name: 'Marcus Williams', department: 'Lab', role: 'Tech', location: 'Hospital B', phone: '(555) 678-9012' },
      { id: 'EMP007', name: 'Jennifer Brown', department: 'Nursing', role: 'RN', location: 'Hospital A', phone: '(555) 789-0123' },
      { id: 'EMP008', name: 'Robert Garcia', department: 'Facilities', role: 'Supervisor', location: 'Hospital B', phone: '(555) 890-1234' }
    ],

    timecards: [
      {
        id: 'TC001',
        employeeId: 'EMP001',
        employee: 'Sarah Mitchell',
        period: 'Feb 17-23, 2025',
        status: 'Approved',
        regularHours: 30.2,
        overtimeHours: 0,
        exceptions: [{ type: 'ok', label: 'Clean' }],
        daily: [
          { date: 'Mon 2/17', punch: '07:01–15:03', hours: 7.9 },
          { date: 'Tue 2/18', punch: '07:00–15:02', hours: 8.0 },
          { date: 'Wed 2/19', punch: '07:04–15:00', hours: 7.9 },
          { date: 'Thu 2/20', punch: '06:58–15:01', hours: 8.1 },
          { date: 'Fri 2/21', punch: '—', hours: 0 }
        ]
      },
      {
        id: 'TC002',
        employeeId: 'EMP002',
        employee: 'James Torres',
        period: 'Feb 17-23, 2025',
        status: 'Pending',
        regularHours: 24.1,
        overtimeHours: 0,
        exceptions: [{ type: 'missed', label: 'Missed Punch' }],
        daily: [
          { date: 'Mon 2/17', punch: '08:00–16:05', hours: 8.1 },
          { date: 'Tue 2/18', punch: '—', hours: 0 },
          { date: 'Wed 2/19', punch: '08:02–16:00', hours: 8.0 },
          { date: 'Thu 2/20', punch: '08:00–16:02', hours: 8.0 },
          { date: 'Fri 2/21', punch: '—', hours: 0 }
        ]
      },
      {
        id: 'TC003',
        employeeId: 'EMP003',
        employee: 'Maria Gonzalez',
        period: 'Feb 17-23, 2025',
        status: 'Pending',
        regularHours: 32.5,
        overtimeHours: 1.75,
        exceptions: [{ type: 'ot', label: 'OT > 8hr' }],
        daily: [
          { date: 'Mon 2/17', punch: '09:00–17:30', hours: 8.5 },
          { date: 'Tue 2/18', punch: '09:00–17:00', hours: 8.0 },
          { date: 'Wed 2/19', punch: '09:00–18:45', hours: 9.75 },
          { date: 'Thu 2/20', punch: '09:00–17:00', hours: 8.0 },
          { date: 'Fri 2/21', punch: '—', hours: 0 }
        ]
      },
      {
        id: 'TC004',
        employeeId: 'EMP004',
        employee: 'David Chen',
        period: 'Feb 17-23, 2025',
        status: 'Approved',
        regularHours: 40,
        overtimeHours: 0,
        exceptions: [],
        daily: [
          { date: 'Mon 2/17', punch: '06:00–14:00', hours: 8.0 },
          { date: 'Tue 2/18', punch: '06:00–14:05', hours: 8.1 },
          { date: 'Wed 2/19', punch: '06:00–14:00', hours: 8.0 },
          { date: 'Thu 2/20', punch: '06:00–14:02', hours: 8.0 },
          { date: 'Fri 2/21', punch: '06:00–14:00', hours: 8.0 }
        ]
      },
      {
        id: 'TC005',
        employeeId: 'EMP005',
        employee: 'Lisa Johnson',
        period: 'Feb 17-23, 2025',
        status: 'Pending',
        regularHours: 36.5,
        overtimeHours: 3.5,
        exceptions: [{ type: 'late', label: 'Pending Review' }],
        daily: [
          { date: 'Mon 2/17', punch: '18:00–02:00+1', hours: 8.0 },
          { date: 'Tue 2/18', punch: '18:00–02:30+1', hours: 8.5 },
          { date: 'Wed 2/19', punch: '—', hours: 0 },
          { date: 'Thu 2/20', punch: '18:00–02:15+1', hours: 8.25 },
          { date: 'Fri 2/21', punch: '18:00–01:45+1', hours: 7.75 }
        ]
      }
    ],

    schedules: [
      {
        id: 'SCH001',
        employeeId: 'EMP001',
        employee: 'Sarah Mitchell',
        period: 'Feb 17-23, 2025',
        status: 'Published',
        template: 'Emergency - 7:00 AM',
        shifts: [
          { date: 'Mon 2/17', start: '07:00', end: '15:00', break: 'Unpaid 30m', location: 'Hospital A' },
          { date: 'Tue 2/18', start: '07:00', end: '15:00', break: 'Unpaid 30m', location: 'Hospital A' },
          { date: 'Wed 2/19', start: '07:00', end: '15:00', break: 'Unpaid 30m', location: 'Hospital A' },
          { date: 'Thu 2/20', start: '07:00', end: '15:00', break: 'Unpaid 30m', location: 'Hospital A' }
        ]
      }
    ],

    exceptions: [
      { id: 'EXC001', type: 'missed_punch', severity: 'medium', employee: 'James Torres', date: '2/18/2025', description: 'Missed punch on Tuesday 2/18', status: 'unresolved', created: '2/18/2025 16:45' },
      { id: 'EXC002', type: 'overtime', severity: 'low', employee: 'Maria Gonzalez', date: '2/19/2025', description: 'Overtime > 8 hours on Wednesday', status: 'pending_approval', created: '2/19/2025 18:50' },
      { id: 'EXC003', type: 'late_punch', severity: 'low', employee: 'Lisa Johnson', date: '2/21/2025', description: 'Pending timecard review', status: 'pending_approval', created: '2/21/2025 03:15' }
    ],

    locations: [
      { id: 'LOC001', name: 'Hospital A', address: '123 Medical Center Dr', city: 'New York', state: 'NY', zip: '10001', employees: 35 },
      { id: 'LOC002', name: 'Hospital B', address: '456 Health Blvd', city: 'Boston', state: 'MA', zip: '02101', employees: 22 },
      { id: 'LOC003', name: 'Hospital C', address: '789 Care Avenue', city: 'Philadelphia', state: 'PA', zip: '19103', employees: 18 }
    ],

    payRules: [
      { id: 'PR001', name: 'Regular Time', rate: '$18.00/hr', type: 'base', priority: 1 },
      { id: 'PR002', name: 'Overtime (1.5x)', trigger: '> 40 hrs/week', rate: '$27.00/hr', type: 'multiplier', priority: 2 },
      { id: 'PR003', name: 'Night Differential', trigger: 'After 11:00 PM', rate: '+$2.50/hr', type: 'adjustment', priority: 2 },
      { id: 'PR004', name: 'Holiday Multiplier', trigger: 'Holiday', rate: '2.0x', type: 'multiplier', priority: 3 }
    ],

    activities: [
      { timestamp: '2025-02-21 14:32', user: 'Sarah M.', action: 'Approved timecards', details: 'Approved 5 timecards for week ending 2/21' },
      { timestamp: '2025-02-20 16:15', user: 'James T.', action: 'Manual entry', details: 'Added missed punch for 2/18 08:00-16:05' },
      { timestamp: '2025-02-20 09:30', user: 'Admin', action: 'System', details: 'Published schedule for week 2/24-3/2' },
      { timestamp: '2025-02-19 18:50', user: 'System', action: 'Exception generated', details: 'OT exception for Maria G. - 9.75 hours on 2/19' },
      { timestamp: '2025-02-18 16:45', user: 'System', action: 'Exception generated', details: 'Missed punch for James T. on 2/18' }
    ]
  };
}
