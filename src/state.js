// Template data for different Jira products
export const templateData = {
  software: {
    mock: {
      issueKey: 'PROJ-123',
      summary: 'Implement new feature for user authentication',
      type: 'Story',
      priority: 'High',
      status: 'In Progress',
      assignee: 'John Smith',
      reporter: 'Sarah Johnson',
      created: '2024-01-15 10:30 AM',
      updated: '2024-01-16 2:45 PM',
      description: 'As a user, I want to be able to authenticate using SSO...',
      components: ['Authentication', 'Security'],
      labels: ['frontend', 'sprint-1'],
      sprint: 'Sprint 5',
      storyPoints: '8',
      comments: [
        {
          author: 'Mike Brown',
          content: 'Should we consider adding OAuth support?',
          created: '2024-01-15 3:20 PM',
        },
        {
          author: 'Sarah Johnson',
          content:
            "Yes, OAuth would be great. Let's also consider OpenID Connect.",
          created: '2024-01-15 4:15 PM',
        },
        {
          author: 'John Smith',
          content:
            "I can help with the OAuth implementation. I've done it before.",
          created: '2024-01-16 9:30 AM',
        },
        {
          author: 'Mike Brown',
          content: "Great! I'll create a technical design doc for review.",
          created: '2024-01-16 10:45 AM',
        },
        {
          author: 'Sarah Johnson',
          content: 'Technical design approved. Ready to start implementation.',
          created: '2024-01-16 2:30 PM',
        },
        {
          author: 'John Smith',
          content: "I'll start working on this today.",
          created: '2024-01-16 2:45 PM',
        },
      ],
    },
    smart: {
      issueKey: '{{issue.key}}',
      summary: '{{issue.summary}}',
      type: '{{issue.type}}',
      priority: '{{issue.priority}}',
      status: '{{issue.status.name}}',
      assignee: '{{issue.assignee}}',
      reporter: '{{issue.reporter}}',
      created: '{{issue.created}}',
      updated: '{{issue.updated}}',
      description: '{{issue.description}}',
      components: '{{issue.components}}',
      labels: '{{issue.labels}}',
      sprint: '{{issue.sprint}}',
      storyPoints: '{{issue.storyPoints}}',
      comments: '{{issue.comments}}',
    },
  },
  servicedesk: {
    mock: {
      issueKey: 'HELP-456',
      summary: 'Cannot access email account',
      type: 'IT Support',
      priority: 'Medium',
      status: 'Open',
      requestType: 'Email Access',
      requester: 'Jane Doe',
      assignee: 'IT Support Team',
      created: '2024-01-15 9:15 AM',
      updated: '2024-01-15 9:30 AM',
      description:
        'I am unable to log into my work email since this morning...',
      impact: 'Single user',
      sla: '4 hours',
      comments: [
        {
          author: 'IT Support Team',
          content: 'Have you tried resetting your password?',
          created: '2024-01-15 9:30 AM',
        },
        {
          author: 'Jane Doe',
          content: 'Yes, I tried that but still getting an error.',
          created: '2024-01-15 10:15 AM',
        },
        {
          author: 'IT Support Team',
          content: 'Can you share a screenshot of the error?',
          created: '2024-01-15 10:30 AM',
        },
        {
          author: 'Jane Doe',
          content: 'Screenshot attached. Error code is AUTH-123.',
          created: '2024-01-15 10:45 AM',
        },
        {
          author: 'IT Support Team',
          content:
            "Thanks. This looks like an account lock. I'll unlock it now.",
          created: '2024-01-15 11:00 AM',
        },
      ],
    },
    smart: {
      issueKey: '{{issue.key}}',
      summary: '{{issue.summary}}',
      type: '{{issue.type}}',
      priority: '{{issue.priority}}',
      status: '{{issue.status.name}}',
      requestType: '{{issue.requestType}}',
      requester: '{{issue.requester}}',
      assignee: '{{issue.assignee}}',
      created: '{{issue.created}}',
      updated: '{{issue.updated}}',
      description: '{{issue.description}}',
      impact: '{{issue.impact}}',
      sla: '{{issue.sla}}',
      comments: '{{issue.comments}}',
    },
  },
  core: {
    mock: {
      issueKey: 'TASK-789',
      summary: 'Quarterly financial report preparation',
      type: 'Task',
      priority: 'Medium',
      status: 'To Do',
      assignee: 'Finance Team',
      reporter: 'Department Head',
      created: '2024-01-15 11:00 AM',
      updated: '2024-01-15 11:00 AM',
      description: 'Prepare Q4 2023 financial report including...',
      dueDate: '2024-01-31',
      category: 'Finance',
      comments: [
        {
          author: 'Department Head',
          content: 'Please include the new revenue streams in this report.',
          created: '2024-01-15 11:30 AM',
        },
        {
          author: 'Finance Team',
          content: 'Will do. Do you want a breakdown by product line?',
          created: '2024-01-15 1:45 PM',
        },
        {
          author: 'Department Head',
          content: 'Yes, please include product line breakdown.',
          created: '2024-01-15 2:00 PM',
        },
        {
          author: 'Finance Team',
          content: 'First draft ready for review.',
          created: '2024-01-16 9:15 AM',
        },
        {
          author: 'Marketing Lead',
          content:
            'Can we add a section comparing Q4 performance to previous quarters?',
          created: '2024-01-16 10:30 AM',
        },
        {
          author: 'Finance Team',
          content: "Good suggestion. I'll add historical comparison charts.",
          created: '2024-01-16 11:45 AM',
        },
        {
          author: 'Department Head',
          content: 'Also include YoY growth metrics for each product line.',
          created: '2024-01-16 2:15 PM',
        },
        {
          author: 'Finance Team',
          content:
            'Updated draft with historical comparisons and YoY metrics ready for review.',
          created: '2024-01-16 4:30 PM',
        },
      ],
    },
    smart: {
      issueKey: '{{issue.key}}',
      summary: '{{issue.summary}}',
      type: '{{issue.type}}',
      priority: '{{issue.priority}}',
      status: '{{issue.status.name}}',
      assignee: '{{issue.assignee}}',
      reporter: '{{issue.reporter}}',
      created: '{{issue.created}}',
      updated: '{{issue.updated}}',
      description: '{{issue.description}}',
      dueDate: '{{issue.dueDate}}',
      category: '{{issue.category}}',
      comments: '{{issue.comments}}',
    },
  },
};

// Global state
export let currentProduct = 'software';
export let currentTemplate = 'full';
export let showSmartValues = false;
export let showComments = true;
export let commentDisplayMode = 'all';
export let issueHeaderColor = '#0052CC'; // Jira Blue
export let commentsHeaderColor = '#E9E9E9';
// Default Jira URL, try to load from localStorage first
const defaultJiraUrl = 'https://your-domain.atlassian.net';
export let jiraBaseUrl = localStorage.getItem('jiraBaseUrl') || defaultJiraUrl;

// Functions to update state (mutators)
export function setCurrentProduct(product) {
  currentProduct = product;
}

export function setCurrentTemplate(template) {
  currentTemplate = template;
}

export function setShowSmartValues(value) {
  showSmartValues = value;
}

export function setShowComments(value) {
  showComments = value;
}

export function setCommentDisplayMode(mode) {
  commentDisplayMode = mode;
}

export function setIssueHeaderColor(color) {
  issueHeaderColor = color;
}

export function setCommentsHeaderColor(color) {
  commentsHeaderColor = color;
}

export function setJiraBaseUrl(url) {
  jiraBaseUrl = url;
  try {
    localStorage.setItem('jiraBaseUrl', url);
  } catch (e) {
    console.error('Failed to save jiraBaseUrl to localStorage:', e);
  }
}
