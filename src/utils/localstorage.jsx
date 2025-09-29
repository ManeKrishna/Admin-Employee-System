
const admin = [
    {
    "id": "A001",
    "email": "admin@example.com",
    "name": "Admin",
    "password": "Admin@123"
    }
];

const employees = [
  {
    "id": "E001",
    "name": "John",
    "email": "john@me.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "completed": 1,
      "failed": 0,
      "new": 2
    },
    "tasks": [
      {
        "taskTitle": "Prepare Q3 Report",
        "taskDescription": "Compile the financial report for Q3",
        "taskDate": "2025-07-28",
        "category": "Finance",
        "active": true,
        "completed": false,
        "failed": false,
        "new": true
      },
      {
        "taskTitle": "Client Follow-Up",
        "taskDescription": "Call and update client about proposal",
        "taskDate": "2025-07-25",
        "category": "Client Relations",
        "active": false,
        "completed": true,
        "failed": false,
        "new": false
      },
      {
        "taskTitle": "Team Meeting",
        "taskDescription": "Conduct weekly sync with sales team",
        "taskDate": "2025-07-30",
        "category": "Meetings",
        "active": true,
        "completed": false,
        "failed": false,
        "new": true
      }
    ]
  },
  {
    "id": "E002",
    "name": "Jane",
    "email": "jane.smith@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "completed": 2,
      "failed": 1,
      "new": 1
    },
    "tasks": [
      {
        "taskTitle": "UI Bug Fixes",
        "taskDescription": "Fix styling issues in landing page",
        "taskDate": "2025-07-29",
        "category": "Development",
        "active": true,
        "completed": false,
        "failed": false,
        "new": true
      },
      {
        "taskTitle": "Code Review",
        "taskDescription": "Review pull requests for login module",
        "taskDate": "2025-07-28",
        "category": "Development",
        "active": false,
        "completed": true,
        "failed": false,
        "new": false
      },
      {
        "taskTitle": "Write Unit Tests",
        "taskDescription": "Add test cases for profile component",
        "taskDate": "2025-07-26",
        "category": "Testing",
        "active": false,
        "completed": false,
        "failed": true,
        "new": false
      },
      {
        "taskTitle": "UX Research",
        "taskDescription": "Collect feedback from beta users",
        "taskDate": "2025-07-24",
        "category": "Design",
        "active": false,
        "completed": true,
        "failed": false,
        "new": false
      }
    ]
  },
  {
    "id": "E003",
    "name": "Mike",
    "email": "mike.lee@example.com",
    "password": "Mike@123",
    "taskCount": {
      "active": 1,
      "completed": 2,
      "failed": 1,
      "new": 1
    },
    "tasks": [
      {
        "taskTitle": "Inventory Check",
        "taskDescription": "Audit warehouse stock",
        "taskDate": "2025-07-27",
        "category": "Logistics",
        "active": true,
        "completed": false,
        "failed": false,
        "new": true
      },
      {
        "taskTitle": "Vendor Meeting",
        "taskDescription": "Discuss supply contract with vendor",
        "taskDate": "2025-07-29",
        "category": "Procurement",
        "active": false,
        "completed": true,
        "failed": false,
        "new": false
      },
      {
        "taskTitle": "Monthly Budget Review",
        "taskDescription": "Evaluate last month's expenses",
        "taskDate": "2025-07-20",
        "category": "Finance",
        "active": false,
        "completed": true,
        "failed": false,
        "new": false
      },
      {
        "taskTitle": "Risk Assessment",
        "taskDescription": "Assess warehouse safety compliance",
        "taskDate": "2025-07-18",
        "category": "Safety",
        "active": false,
        "completed": false,
        "failed": true,
        "new": false
      }
    ]
  },
  {
    "id": "E004",
    "name": "Sara",
    "email": "sara.khan@example.com",
    "password": "Sara@123",
    "taskCount": {
      "active": 1,
      "completed": 2,
      "failed": 0,
      "new": 1
    },
    "tasks": [
      {
        "taskTitle": "Customer Survey",
        "taskDescription": "Launch feedback survey to customers",
        "taskDate": "2025-07-30",
        "category": "Marketing",
        "active": true,
        "completed": false,
        "failed": false,
        "new": true
      },
      {
        "taskTitle": "Ad Campaign Setup",
        "taskDescription": "Configure Google Ads campaign",
        "taskDate": "2025-07-27",
        "category": "Advertising",
        "active": false,
        "completed": true,
        "failed": false,
        "new": false
      },
      {
        "taskTitle": "Competitor Analysis",
        "taskDescription": "Research top 3 competitors’ strategies",
        "taskDate": "2025-07-26",
        "category": "Marketing",
        "active": false,
        "completed": true,
        "failed": false,
        "new": false
      }
    ]
  },
  {
    "id": "E005",
    "name": "Ravi",
    "email": "ravi.patel@example.com",
    "password": "Ravi@123",
    "taskCount": {
      "active": 2,
      "completed": 2,
      "failed": 1,
      "new": 2
    },
    "tasks": [
      {
        "taskTitle": "System Backup",
        "taskDescription": "Perform full server backup",
        "taskDate": "2025-07-25",
        "category": "IT",
        "active": false,
        "completed": true,
        "failed": false,
        "new": false
      },
      {
        "taskTitle": "Security Audit",
        "taskDescription": "Check for vulnerabilities in firewall",
        "taskDate": "2025-07-29",
        "category": "Security",
        "active": true,
        "completed": false,
        "failed": false,
        "new": true
      },
      {
        "taskTitle": "Network Setup",
        "taskDescription": "Configure new router in office",
        "taskDate": "2025-07-24",
        "category": "Infrastructure",
        "active": false,
        "completed": true,
        "failed": false,
        "new": false
      },
      {
        "taskTitle": "Software Update",
        "taskDescription": "Upgrade OS on all machines",
        "taskDate": "2025-07-22",
        "category": "Maintenance",
        "active": false,
        "completed": false,
        "failed": true,
        "new": false
      },
      {
        "taskTitle": "Documentation",
        "taskDescription": "Write SOP for onboarding new interns",
        "taskDate": "2025-07-30",
        "category": "Operations",
        "active": true,
        "completed": false,
        "failed": false,
        "new": true
      }
    ]
  }
];


  

  export const setlocalStorage= () => {
    localStorage.setItem('admin', JSON.stringify(admin));
    localStorage.setItem('employees', JSON.stringify(employees));
  }

  export const getlocalStorage= () => {
    const admin= JSON.parse(localStorage.getItem('admin'));
    const employees = JSON.parse(localStorage.getItem('employees'));

    return {employees, admin};
  } 