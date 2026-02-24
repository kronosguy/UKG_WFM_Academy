---
title: Account Management & Administration
description: Manage your KronosGuy account, teams, and organization settings
category: Platform
order: 3
difficulty: Intermediate
estimatedTime: 15 minutes
tags: [account, administration, organization]
---

# Account Management & Administration

## Account Basics

### Creating Your Account

1. **Registration**
   - Navigate to kronosguy.com/academy
   - Click "Get Started" or "Sign Up"
   - Enter email and create password
   - Verify email address
   - Complete onboarding wizard

2. **Profile Setup**
   - Upload profile picture
   - Enter full name and title
   - Select your primary role
   - Choose your department/team
   - Set timezone

### Account Types

#### Individual Learner
- Personal learning dashboard
- Access to all public content
- Unlimited note-taking
- Community forum participation
- Certificates earned

#### Team Member
- Team learning dashboard
- Shared resources with team
- Progress visibility to managers
- Team discussions
- Shared certificates

#### Organization Administrator
- User management for organization
- Learning path customization
- Team and group management
- Analytics and reporting
- Billing and subscriptions

#### Enterprise Administrator
- Multi-team management
- Custom branding
- Advanced reporting
- SSO configuration
- Dedicated support

## Profile Management

### Basic Profile Information

```
Profile
├─ Display Name: Your Public Name
├─ Email: Your Login Email
├─ Phone: Optional (for support)
├─ Profile Picture: Avatar
├─ Bio: Professional Summary (500 chars)
├─ Website: Optional Portfolio/Website
└─ Social Links: GitHub, LinkedIn, Twitter
```

### Role & Experience

Set your professional context:

- **Current Role**: Administrator, Manager, Operator, Analyst, Other
- **Years of Experience**: 0-2, 2-5, 5-10, 10+
- **UKG Experience**: New, Familiar, Expert
- **Department**: HR, Finance, Operations, IT, Other
- **Organization Type**: Enterprise, Mid-Market, Small Business

### Learning Preferences

Customize your learning experience:

- **Preferred Learning Style**: Text, Video, Interactive, Hands-On
- **Difficulty Level**: Beginner, Intermediate, Advanced
- **Content Pacing**: Self-Paced, Cohort-Based
- **Primary Goals**: Certification, Skill Development, Career Change
- **Time Availability**: <5 hrs/week, 5-10 hrs/week, 10+ hrs/week

### Privacy Settings

Control your visibility and data:

```
Privacy & Sharing
├─ Profile Visibility
│  ├─ Public: Visible to all
│  ├─ Private: Only to me
│  └─ Limited: Selected users
├─ Activity Sharing
│  ├─ Show courses I take: Yes/No
│  ├─ Show badges earned: Yes/No
│  └─ Show learning streak: Yes/No
├─ Communication
│  ├─ Allow messages: Yes/No
│  ├─ Allow discussion replies: Yes/No
│  └─ Show email: Yes/No
└─ Data
   ├─ Marketing emails: Yes/No
   ├─ Product updates: Yes/No
   └─ Community digest: Yes/No
```

## Team Management

### Creating Teams

Organization administrators can create teams:

1. **Access Team Admin**: Settings > Teams
2. **Create New Team**
   - Enter team name
   - Add description
   - Select team type (Learning Group, Project Team, Department)
3. **Invite Members**
   - Enter email addresses
   - Assign roles (Member, Lead, Admin)
   - Set permissions
4. **Configure Settings**
   - Privacy level
   - Discussion board settings
   - Shared resources

### Team Roles & Permissions

#### Team Member
- Access team resources
- Participate in discussions
- View team progress
- Share notes with team

#### Team Lead
- All Member permissions
- Invite new members
- Manage team discussions
- View detailed team analytics

#### Team Administrator
- All Lead permissions
- Remove members
- Delete/archive team
- Configure team settings
- Manage learning paths

### Managing Team Members

#### Inviting Members

```bash
Team Settings > Members > Add Members
├─ Enter Email Addresses
├─ Select Role (Member/Lead/Admin)
├─ Set Permissions
└─ Send Invitation
```

#### Managing Permissions

Control what team members can do:

| Permission | Member | Lead | Admin |
|-----------|--------|------|-------|
| View team resources | ✓ | ✓ | ✓ |
| Participate in discussions | ✓ | ✓ | ✓ |
| Upload resources | | ✓ | ✓ |
| Invite members | | ✓ | ✓ |
| Remove members | | | ✓ |
| Delete team | | | ✓ |
| Configure settings | | | ✓ |

#### Removing Members

1. Go to Team Settings > Members
2. Click the user's name
3. Select "Remove from Team"
4. Confirm removal
5. Choose what happens to their resources

### Team Resources

Share learning materials with your team:

- **Shared Collections**: Curated content lists
- **Project Resources**: Documents and guides
- **Discussion Boards**: Team Q&A
- **Code Snippets**: Shared configuration examples
- **Meeting Notes**: Recorded learning sessions

## Security & Account Protection

### Password Management

#### Setting a Strong Password

Requirements:
- Minimum 12 characters
- Mix of uppercase and lowercase
- At least one number
- At least one special character (!@#$%^&*)
- Avoid common words or personal information

#### Changing Your Password

1. Go to Settings > Security
2. Click "Change Password"
3. Enter current password
4. Enter new password twice
5. Save changes

#### Password Best Practices

- Change your password every 90 days
- Never share your password
- Use a password manager
- Don't reuse passwords across sites
- Enable two-factor authentication

### Two-Factor Authentication (2FA)

Enhance your account security:

#### Enabling 2FA

1. **Setup Steps**
   - Go to Settings > Security > Two-Factor Auth
   - Choose method (Authenticator App or SMS)
   - Scan QR code or enter secret key
   - Save backup codes in safe location
   - Verify with test code
   - Enable 2FA

2. **Recovery Codes**
   - Store in password manager or safe
   - Each code can only be used once
   - Generate new codes anytime
   - Keep backup copies

#### Authenticator Apps

Recommended apps:
- Google Authenticator
- Microsoft Authenticator
- Authy
- 1Password
- LastPass Authenticator

### Session Management

#### Active Sessions

View and manage your login sessions:

```
Settings > Security > Active Sessions
├─ This Device
│  ├─ Chrome on Windows 10
│  ├─ Signed in 2 hours ago
│  ├─ IP: 192.168.1.100
│  └─ [Sign Out]
├─ iPhone 12
│  ├─ Safari on iOS 15
│  ├─ Signed in 1 day ago
│  └─ [Sign Out]
└─ Desktop
   ├─ Firefox on macOS
   ├─ Signed in 3 days ago
   └─ [Sign Out]
```

#### Signing Out Other Sessions

- "Sign Out All Sessions": Log out everywhere except current device
- "Manage Sessions": Choose which to sign out
- Automatic timeout: 30 days of inactivity

### Third-Party Access

Manage app permissions:

```
Settings > Security > Connected Apps
├─ GitHub (Authorized Jan 1, 2024)
│  ├─ Permissions: Read repositories, Write issues
│  └─ [Revoke Access]
├─ Slack (Authorized Dec 15, 2023)
│  ├─ Permissions: Post messages, Read channels
│  └─ [Revoke Access]
└─ [Connect New App]
```

## Notification Settings

### Email Notifications

Control what emails you receive:

```
Settings > Notifications > Email
├─ Learning Reminders
│  ├─ Module recommendations: [Daily/Weekly/Never]
│  ├─ Course completion reminders: [On/Off]
│  └─ Lab suggestions: [On/Off]
├─ Achievements
│  ├─ Badges earned: [On/Off]
│  ├─ Certificates earned: [On/Off]
│  └─ Streak milestones: [On/Off]
├─ Community
│  ├─ Discussion replies: [On/Off]
│  ├─ Mentions: [On/Off]
│  └─ Community digest: [Weekly/Monthly/Off]
└─ Account
   ├─ Security alerts: [On/Off]
   ├─ Login notifications: [On/Off]
   └─ Product updates: [On/Off]
```

### Notification Frequency

- **Real-Time**: Immediate for important events
- **Daily Digest**: One email per day with all updates
- **Weekly Digest**: Summary of the week
- **Never**: Disable all notifications

### Do Not Disturb

Set quiet hours:

```
Settings > Notifications > Quiet Hours
├─ Enable Quiet Hours: [On/Off]
├─ Start Time: 9:00 PM
├─ End Time: 8:00 AM
├─ Days: [Select Days]
└─ Override for Important: [On/Off]
```

## Subscription & Billing

### Plan Types

#### Free Plan
- Access to community content
- Limited module access
- Basic progress tracking
- Ad-supported experience

#### Pro Plan ($9.99/month)
- Full module access
- Interactive labs
- Unlimited downloads
- No ads
- Priority support

#### Team Plan ($99/month + $5/user)
- All Pro features
- Team management
- Shared resources
- Group analytics
- Dedicated support

#### Enterprise Plan
- Custom pricing
- All features
- SSO integration
- Custom branding
- Dedicated account manager

### Managing Subscription

#### Upgrade Your Plan

1. Go to Settings > Billing > Plan
2. Click "Upgrade to Pro" or "Upgrade to Team"
3. Select billing cycle (Monthly/Annual)
4. Enter payment method
5. Confirm and activate

#### Cancel Your Subscription

1. Go to Settings > Billing > Plan
2. Click "Manage Plan"
3. Select "Cancel Subscription"
4. Choose reason (optional)
5. Confirm cancellation

Your access continues until end of current billing period.

#### Invoices & Receipts

Download invoices anytime:

```
Settings > Billing > Invoices
├─ February 2024: $9.99 [Download PDF]
├─ January 2024: $9.99 [Download PDF]
├─ December 2023: $9.99 [Download PDF]
└─ [View All Invoices]
```

## Data & Export

### Downloading Your Data

Export all your data anytime:

1. Go to Settings > Data & Privacy
2. Click "Request Data Export"
3. Choose format (JSON, CSV, Markdown)
4. Download link sent to email
5. Download available for 30 days

### What's Included

- Profile information
- Learning history
- Achievements and certificates
- Notes and bookmarks
- Discussion posts
- Code snippets
- Collections

### Deletion & Account Removal

#### Delete Specific Data

- Delete all notes
- Delete discussion posts
- Clear learning history
- Remove certificates

#### Delete Account

1. Go to Settings > Data & Privacy
2. Click "Delete Account"
3. Confirm your password
4. Select "Permanent Delete"
5. Account deleted within 24 hours

Note: All data is permanently deleted and cannot be recovered.

## Account Recovery

### I Forgot My Password

1. Click "Forgot Password" on login page
2. Enter your email address
3. Click link in recovery email (valid 1 hour)
4. Enter new password
5. Sign in with new password

### I Lost Access to My Email

Contact support@kronosguy.com with:
- Account email address
- Your full name
- Proof of identity (photo ID or recent billing email)

### I Lost My 2FA Device

1. Use backup codes to log in
2. Go to Settings > Security > Two-Factor Auth
3. Click "Reset 2FA"
4. Set up 2FA with new device
5. Save new backup codes

---

## Next Steps

Optimize your account:

1. **Complete Your Profile**: Add all information
2. **Enable 2FA**: Secure your account
3. **Create a Team**: Invite colleagues
4. **Customize Notifications**: Reduce noise

Continue to the Platform FAQ for more help.
