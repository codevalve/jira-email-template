import './style.css'

// Template data for different Jira products
const templateData = {
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
          created: '2024-01-15 3:20 PM'
        },
        {
          author: 'Sarah Johnson',
          content: 'Yes, OAuth would be great. Let\'s also consider OpenID Connect.',
          created: '2024-01-15 4:15 PM'
        },
        {
          author: 'John Smith',
          content: 'I can help with the OAuth implementation. I\'ve done it before.',
          created: '2024-01-16 9:30 AM'
        },
        {
          author: 'Mike Brown',
          content: 'Great! I\'ll create a technical design doc for review.',
          created: '2024-01-16 10:45 AM'
        },
        {
          author: 'Sarah Johnson',
          content: 'Technical design approved. Ready to start implementation.',
          created: '2024-01-16 2:30 PM'
        },
        {
          author: 'John Smith',
          content: 'I\'ll start working on this today.',
          created: '2024-01-16 2:45 PM'
        }
      ]
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
      comments: '{{issue.comments}}'
    }
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
      description: 'I am unable to log into my work email since this morning...',
      impact: 'Single user',
      sla: '4 hours',
      comments: [
        {
          author: 'IT Support Team',
          content: 'Have you tried resetting your password?',
          created: '2024-01-15 9:30 AM'
        },
        {
          author: 'Jane Doe',
          content: 'Yes, I tried that but still getting an error.',
          created: '2024-01-15 10:15 AM'
        },
        {
          author: 'IT Support Team',
          content: 'Can you share a screenshot of the error?',
          created: '2024-01-15 10:30 AM'
        },
        {
          author: 'Jane Doe',
          content: 'Screenshot attached. Error code is AUTH-123.',
          created: '2024-01-15 10:45 AM'
        },
        {
          author: 'IT Support Team',
          content: 'Thanks. This looks like an account lock. I\'ll unlock it now.',
          created: '2024-01-15 11:00 AM'
        }
      ]
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
      comments: '{{issue.comments}}'
    }
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
          created: '2024-01-15 11:30 AM'
        },
        {
          author: 'Finance Team',
          content: 'Will do. Do you want a breakdown by product line?',
          created: '2024-01-15 1:45 PM'
        },
        {
          author: 'Department Head',
          content: 'Yes, please include product line breakdown.',
          created: '2024-01-15 2:00 PM'
        },
        {
          author: 'Finance Team',
          content: 'First draft ready for review.',
          created: '2024-01-16 9:15 AM'
        },
        {
          author: 'Marketing Lead',
          content: 'Can we add a section comparing Q4 performance to previous quarters?',
          created: '2024-01-16 10:30 AM'
        },
        {
          author: 'Finance Team',
          content: 'Good suggestion. I\'ll add historical comparison charts.',
          created: '2024-01-16 11:45 AM'
        },
        {
          author: 'Department Head',
          content: 'Also include YoY growth metrics for each product line.',
          created: '2024-01-16 2:15 PM'
        },
        {
          author: 'Finance Team',
          content: 'Updated draft with historical comparisons and YoY metrics ready for review.',
          created: '2024-01-16 4:30 PM'
        }
      ]
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
      comments: '{{issue.comments}}'
    }
  }
};

// Global state
let currentProduct = 'software';
let currentTemplate = 'full';
let showSmartValues = false;
let showComments = true;
let commentDisplayMode = 'all';
let issueHeaderColor = '#0052CC';  // Jira Blue
let commentsHeaderColor = '#E9E9E9';
let jiraBaseUrl = 'https://your-domain.atlassian.net';  // Default Jira URL

// Function to get Jira issue URL
function getJiraIssueUrl(issueKey) {
  return showSmartValues 
    ? `\${jiraBaseUrl}/browse/\${issueKey}`
    : `${jiraBaseUrl}/browse/${issueKey}`;
}

// Function to generate fields based on product type
function generateFields() {
  const data = showSmartValues ? templateData[currentProduct].smart : templateData[currentProduct].mock;
  let fields = '';

  // Common fields
  fields += `
    <div class="field-group">
      <div class="text-sm text-gray-500 font-medium">Status</div>
      <div class="text-sm text-gray-900">${showSmartValues ? '{{issue.status.name}}' : data.status}</div>
    </div>
    <div class="field-group">
      <div class="text-sm text-gray-500 font-medium">Priority</div>
      <div class="text-sm text-gray-900">${showSmartValues ? '{{issue.priority}}' : data.priority}</div>
    </div>
    <div class="field-group">
      <div class="text-sm text-gray-500 font-medium">Assignee</div>
      <div class="text-sm text-gray-900">${showSmartValues ? '{{issue.assignee}}' : data.assignee}</div>
    </div>
    <div class="field-group">
      <div class="text-sm text-gray-500 font-medium">Reporter</div>
      <div class="text-sm text-gray-900">${showSmartValues ? '{{issue.reporter}}' : data.reporter}</div>
    </div>
    <div class="field-group">
      <div class="text-sm text-gray-500 font-medium">Created</div>
      <div class="text-sm text-gray-900">${showSmartValues ? '{{issue.created}}' : data.created}</div>
    </div>
    <div class="field-group">
      <div class="text-sm text-gray-500 font-medium">Updated</div>
      <div class="text-sm text-gray-900">${showSmartValues ? '{{issue.updated}}' : data.updated}</div>
    </div>
  `;

  // Product specific fields
  if (currentProduct === 'software') {
    fields += `
      <div class="field-group">
        <div class="text-sm text-gray-500 font-medium">Sprint</div>
        <div class="text-sm text-gray-900">${showSmartValues ? '{{issue.sprint}}' : data.sprint}</div>
      </div>
      <div class="field-group">
        <div class="text-sm text-gray-500 font-medium">Story Points</div>
        <div class="text-sm text-gray-900">${showSmartValues ? '{{issue.storyPoints}}' : data.storyPoints}</div>
      </div>
    `;
  } else if (currentProduct === 'servicedesk') {
    fields += `
      <div class="field-group">
        <div class="text-sm text-gray-500 font-medium">Request Type</div>
        <div class="text-sm text-gray-900">${showSmartValues ? '{{issue.requestType}}' : data.requestType}</div>
      </div>
      <div class="field-group">
        <div class="text-sm text-gray-500 font-medium">Impact</div>
        <div class="text-sm text-gray-900">${showSmartValues ? '{{issue.impact}}' : data.impact}</div>
      </div>
      <div class="field-group">
        <div class="text-sm text-gray-500 font-medium">SLA</div>
        <div class="text-sm text-gray-900">${showSmartValues ? '{{issue.sla}}' : data.sla}</div>
      </div>
    `;
  } else if (currentProduct === 'core') {
    fields += `
      <div class="field-group">
        <div class="text-sm text-gray-500 font-medium">Due Date</div>
        <div class="text-sm text-gray-900">${showSmartValues ? '{{issue.dueDate}}' : data.dueDate}</div>
      </div>
      <div class="field-group">
        <div class="text-sm text-gray-500 font-medium">Category</div>
        <div class="text-sm text-gray-900">${showSmartValues ? '{{issue.category}}' : data.category}</div>
      </div>
    `;
  }

  return fields;
}

// Function to update the template preview
function updatePreview() {
  const preview = document.getElementById('previewArea');
  const data = showSmartValues ? templateData[currentProduct].smart : templateData[currentProduct].mock;
  
  // Generate the appropriate template based on currentTemplate
  const template = generateTemplate(currentTemplate, data, showComments);
  
  preview.innerHTML = template;
}

// Function to get filtered comments based on display mode
function getFilteredComments(comments) {
  if (!Array.isArray(comments)) return [];
  
  console.log('Filtering comments. Mode:', commentDisplayMode);
  console.log('Original comments:', comments);
  
  // Sort comments by date, most recent first
  const sortedComments = [...comments].sort((a, b) => 
    new Date(b.created) - new Date(a.created)
  );
  
  let result;
  switch (commentDisplayMode) {
    case 'latest':
      result = sortedComments.slice(0, 1);
      break;
    case 'last5':
      result = sortedComments.slice(0, 5);
      break;
    default:
      result = sortedComments;
  }
  
  console.log('Filtered comments:', result);
  return result;
}

// Function to generate template
function generateTemplate(templateType, data, showComments) {
  let template = '';
  
  // Ensure comments is an array and filter it
  let comments = [];
  if (showComments) {
    if (Array.isArray(data.comments)) {
      comments = getFilteredComments(data.comments);
    } else if (showSmartValues) {
      comments = ['{{comment.body.html}}'];
    }
  }

  const issueUrl = showSmartValues ? `${jiraBaseUrl}/browse/${data.issueKey}` : getJiraIssueUrl(data.issueKey);

  if (templateType === 'compact') {
    template = `
      <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div
          class="color-block text-white p-3 font-semibold flex items-center justify-between"
          style="background-color: ${issueHeaderColor};"
          onclick="triggerColorPicker('issue')">
          <div class="flex items-center space-x-2">
            <span class="text-base">${showSmartValues ? '{{issue.key}}' : data.issueKey}</span>
            <span class="text-xs opacity-75">${showSmartValues ? '{{issue.type}}' : data.type}</span>
          </div>
          <input
            type="color"
            id="issueColorPicker"
            class="invisible w-0"
            value="${issueHeaderColor}"
            onchange="assignHeaderColor('issue', this.value)"
            oninput="assignHeaderColor('issue', this.value)">
        </div>
        <div class="p-4 space-y-3">
          <div class="space-y-1">
            <h1 class="text-lg font-semibold text-gray-900">
              <a href="${issueUrl}" class="hover:text-blue-600 hover:underline" target="_blank">
                ${showSmartValues ? '{{issue.summary}}' : data.summary}
              </a>
            </h1>
          </div>
          
          <div class="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span class="text-gray-500">Status:</span>
              <span class="text-gray-900 ml-1">${showSmartValues ? '{{issue.status.name}}' : data.status}</span>
            </div>
            <div>
              <span class="text-gray-500">Priority:</span>
              <span class="text-gray-900 ml-1">${showSmartValues ? '{{issue.priority}}' : data.priority}</span>
            </div>
            <div>
              <span class="text-gray-500">Assignee:</span>
              <span class="text-gray-900 ml-1">${showSmartValues ? '{{issue.assignee}}' : data.assignee}</span>
            </div>
            ${currentProduct === 'software' ? `
              <div>
                <span class="text-gray-500">Sprint:</span>
                <span class="text-gray-900 ml-1">${showSmartValues ? '{{issue.sprint}}' : data.sprint}</span>
              </div>
            ` : currentProduct === 'servicedesk' ? `
              <div>
                <span class="text-gray-500">SLA:</span>
                <span class="text-gray-900 ml-1">${showSmartValues ? '{{issue.sla}}' : data.sla}</span>
              </div>
            ` : `
              <div>
                <span class="text-gray-500">Due Date:</span>
                <span class="text-gray-900 ml-1">${showSmartValues ? '{{issue.dueDate}}' : data.dueDate}</span>
              </div>
            `}
          </div>

          ${currentProduct === 'software' ? `
            <div class="space-y-1">
              <div class="text-xs text-gray-500">Components</div>
              <div class="flex flex-wrap gap-1">
                ${showSmartValues ? `
                  {{#issue.components}}
                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {{.}}
                    </span>
                  {{/issue.components}}
                ` : Array.isArray(data.components) ? data.components.map(comp => `
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    ${comp}
                  </span>
                `).join('') : ''}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;

    if (showComments && comments.length > 0) {
      template += `
        <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-4">
          <div
            class="color-block text-gray-700 p-2 font-medium flex items-center justify-between"
            style="background-color: ${commentsHeaderColor};"
            onclick="triggerColorPicker('comments')">
            <span class="text-sm">Latest Comment</span>
            <input
              type="color"
              id="commentsColorPicker"
              class="invisible w-0"
              value="${commentsHeaderColor}"
              onchange="assignHeaderColor('comments', this.value)"
              oninput="assignHeaderColor('comments', this.value)">
          </div>
          <div class="p-3 text-sm">
            ${showSmartValues ? `
              {{#issue.comments}}
                <div>
                  <div class="flex items-center justify-between text-xs mb-1">
                    <span class="font-medium text-gray-900">{{author.displayName}}</span>
                    <span class="text-gray-500">{{created.format("yyyy-MM-dd HH:mm")}}</span>
                  </div>
                  <div class="text-gray-600">{{body.html}}</div>
                </div>
              {{/issue.comments}}
            ` : Array.isArray(comments) ? comments.slice(0, 1).map(comment => `
              <div>
                <div class="flex items-center justify-between text-xs mb-1">
                  <span class="font-medium text-gray-900">${comment.author}</span>
                  <span class="text-gray-500">${comment.created}</span>
                </div>
                <div class="text-gray-600">${comment.content}</div>
              </div>
            `).join('') : ''}
          </div>
        </div>
      `;
    }
  } else if (templateType === 'full') {
    template += `
      <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div
          class="color-block text-white p-5 font-semibold flex items-center justify-between"
          style="background-color: ${issueHeaderColor};"
          onclick="triggerColorPicker('issue')">
          <div class="flex items-center space-x-3">
            <span class="text-lg">${showSmartValues ? '{{issue.key}}' : data.issueKey}</span>
            <span class="text-sm opacity-75">${showSmartValues ? '{{issue.type}}' : data.type}</span>
          </div>
          <input
            type="color"
            id="issueColorPicker"
            class="hidden-color-picker"
            value="${issueHeaderColor}"
            onchange="assignHeaderColor('issue', this.value)"
            oninput="assignHeaderColor('issue', this.value)">
        </div>
        <div class="p-6 space-y-4">
          <div class="space-y-2">
            <h1 class="text-xl font-semibold text-gray-900">
              <a href="${issueUrl}" class="hover:text-blue-600 hover:underline" target="_blank">
                ${showSmartValues ? '{{issue.summary}}' : data.summary}
              </a>
            </h1>
            <div class="text-sm text-gray-600">${showSmartValues ? '{{issue.description}}' : data.description}</div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${generateFields()}
          </div>

          ${currentProduct === 'software' ? `
            <div class="space-y-2">
              <div class="text-sm text-gray-500 font-medium">Components</div>
              <div class="flex flex-wrap gap-2">
                ${showSmartValues ? `
                  {{#issue.components}}
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {{.}}
                    </span>
                  {{/issue.components}}
                ` : Array.isArray(data.components) ? data.components.map(comp => `
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    ${comp}
                  </span>
                `).join('') : ''}
              </div>
            </div>

            <div class="space-y-2">
              <div class="text-sm text-gray-500 font-medium">Labels</div>
              <div class="flex flex-wrap gap-2">
                ${showSmartValues ? `
                  {{#issue.labels}}
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {{.}}
                    </span>
                  {{/issue.labels}}
                ` : Array.isArray(data.labels) ? data.labels.map(label => `
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    ${label}
                  </span>
                `).join('') : ''}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;

    if (showComments && data.comments) {
      template += `
        <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-6">
          <div
            class="color-block text-gray-700 p-5 font-medium flex items-center justify-between"
            style="background-color: ${commentsHeaderColor};"
            onclick="triggerColorPicker('comments')">
            <span>Comments</span>
            <input
              type="color"
              id="commentsColorPicker"
              class="hidden-color-picker"
              value="${commentsHeaderColor}"
              onchange="assignHeaderColor('comments', this.value)"
              oninput="assignHeaderColor('comments', this.value)">
          </div>
          <div class="divide-y divide-gray-100">
            ${Array.isArray(data.comments) ? getFilteredComments(data.comments).map(comment => `
              <div class="p-6">
                <div class="flex items-start space-x-3 mb-2">
                  <div class="flex-1">
                    <div class="flex items-center space-x-2">
                      <div class="text-sm font-medium text-gray-700">${comment.author}</div>
                    </div>
                    <div class="text-xs text-gray-500 mt-1">
                      <span>Created: ${comment.created}</span>
                    </div>
                  </div>
                </div>
                <div class="prose prose-sm max-w-none text-gray-600">
                  ${comment.content}
                </div>
              </div>
            `).join('') : ''}
          </div>
        </div>
      `;
    }
  } else {
    template += `
      <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div
          class="color-block text-white p-4 font-semibold flex items-center justify-between"
          style="background-color: ${issueHeaderColor};"
          onclick="triggerColorPicker('issue')">
          <div class="flex items-center space-x-3">
            <span class="text-lg">${showSmartValues ? '{{issue.key}}' : data.issueKey}</span>
            <div class="flex items-center space-x-2">
              <span class="text-sm opacity-75">${showSmartValues ? '{{issue.type}}' : data.type}</span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20">
                ${showSmartValues ? '{{issue.status.name}}' : data.status}
              </span>
            </div>
          </div>
          <input
            type="color"
            id="issueColorPicker"
            class="hidden-color-picker"
            value="${issueHeaderColor}"
            onchange="assignHeaderColor('issue', this.value)"
            oninput="assignHeaderColor('issue', this.value)">
        </div>
        <div class="p-4 space-y-3">
          <div class="space-y-1">
            <h1 class="text-lg font-semibold text-gray-900">
              <a href="${issueUrl}" class="hover:text-blue-600 hover:underline" target="_blank">
                ${showSmartValues ? '{{issue.summary}}' : data.summary}
              </a>
            </h1>
          </div>
          
          <div class="grid grid-cols-2 gap-3 text-sm">
            <div class="space-y-1">
              <div class="text-gray-500 font-medium">Assignee</div>
              <div class="text-gray-700">${showSmartValues ? '{{issue.assignee}}' : data.assignee}</div>
            </div>
            <div class="space-y-1">
              <div class="text-gray-500 font-medium">Priority</div>
              <div class="text-gray-700">${showSmartValues ? '{{issue.priority}}' : data.priority}</div>
            </div>
          </div>

          ${currentProduct === 'software' && Array.isArray(data.labels) ? `
            <div class="flex flex-wrap gap-1">
              ${data.labels.map(label => `
                <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  ${label}
                </span>
              `).join('')}
            </div>
          ` : ''}

          ${showComments && data.comments ? `
            <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-4">
              <div
                class="color-block p-4 font-medium" style="background-color: ${commentsHeaderColor};"
                onclick="triggerColorPicker('comments')">
                <span>Comments</span>
                <input
                  type="color"
                  id="commentsColorPicker"
                  class="hidden-color-picker"
                  value="${commentsHeaderColor}"
                  onchange="assignHeaderColor('comments', this.value)"
                  oninput="assignHeaderColor('comments', this.value)">
              </div>
              <div class="divide-y divide-gray-100">
                ${Array.isArray(data.comments) ? getFilteredComments(data.comments).map(comment => `
                  <div class="p-4">
                    <div class="flex items-start space-x-3 mb-2">
                      <div class="flex-1">
                        <div class="flex items-center space-x-2">
                          <div class="text-sm font-medium text-gray-900">${comment.author}</div>
                        </div>
                        <div class="text-xs text-gray-500 mt-1">
                          <span>Created: ${comment.created}</span>
                        </div>
                      </div>
                    </div>
                    <div class="mt-1 text-sm text-gray-600">${comment.content}</div>
                  </div>
                `).join('') : ''}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  // Add footer section
  template += `
    <div class="mt-6 pt-4 border-t border-gray-200">
      <div class="flex items-center justify-between text-xs text-gray-500">
        <div class="flex items-center space-x-2">
          <span>${showSmartValues ? '{{issue.key}}' : data.issueKey}</span>
          <span>•</span>
          <span>${showSmartValues ? '{{issue.type}}' : data.type}</span>
        </div>
        <div class="flex items-center space-x-2">
          <span>Updated ${showSmartValues ? '{{issue.updated}}' : data.updated}</span>
        </div>
      </div>
      <div class="mt-2 text-xs text-gray-400 text-right">
        Generated by Jira
      </div>
    </div>
  `;

  return template;
}

// Function to generate email template HTML
function generateEmailTemplate(templateType, data, showComments) {
  let issueTemplate = '';
  let commentsTemplate = '';
  let signature = '';

  // Generate issue template
  issueTemplate = `
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: ${issueHeaderColor}; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
        <div style="color: white; display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center;">
            <span style="font-size: 18px; margin-right: 8px;">{{issue.key}}</span>
            <span style="opacity: 0.8;">{{issue.type}}</span>
          </div>
        </div>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h1 style="font-size: 24px; margin: 0 0 16px 0;">
          <a href="${jiraBaseUrl}/browse/{{issue.key}}" style="color: #0052CC; text-decoration: none;">{{issue.summary}}</a>
        </h1>
        <p style="color: #444; margin: 0;">{{issue.description}}</p>
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
        ${generateFields()}
      </div>
    </div>
  `;

  // Generate comments template if needed
  if (showComments) {
    commentsTemplate = `
      <div style="max-width: 600px; margin: 0 auto; padding: 0 20px 20px;">
        <div style="background-color: ${commentsHeaderColor}; padding: 8px 16px; border-radius: 4px 4px 0 0;">
          <span style="color: #444; font-weight: 500;">Comments</span>
        </div>
        <div style="border: 1px solid #E5E7EB; border-top: none; border-radius: 0 0 4px 4px; overflow: hidden;">
          {{#comments}}
            <div style="padding: 16px; border-bottom: 1px solid #E5E7EB;">
              <div style="margin-bottom: 8px;">
                <span style="font-weight: 500; color: #111;">{{author}}</span>
                <span style="color: #666; margin-left: 8px;">{{created}}</span>
              </div>
              <div style="color: #444;">{{content}}</div>
            </div>
          {{/comments}}
        </div>
      </div>
    `;
  }

  // Add footer
  signature = `
    <div style="max-width: 600px; margin: 24px auto 0; padding: 16px 20px 0; border-top: 1px solid #E5E7EB;">
      <div style="display: flex; justify-content: space-between; align-items: center; color: #6B7280; font-size: 12px;">
        <div style="display: flex; align-items: center;">
          <span>{{issue.key}}</span>
          <span style="margin: 0 8px;">•</span>
          <span>{{issue.type}}</span>
        </div>
        <div>
          <span>Updated {{issue.updated}}</span>
        </div>
      </div>
      <div style="margin-top: 8px; text-align: right; color: #9CA3AF; font-size: 12px;">
        Generated by Jira
      </div>
    </div>
  `;

  return `<!DOCTYPE html><html><body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;">${issueTemplate}${commentsTemplate}${signature}</body></html>`;
}

// Function to generate minified HTML
function generateHTML() {
  // Always use smart values for the minified output
  const data = templateData[currentProduct].smart;
  
  // Generate fields based on product type
  const generateFields = () => {
    let fields = '';

    // Common fields
    fields += `
      <div class="field-group">
        <div class="text-sm text-gray-500 font-medium">Status</div>
        <div class="text-sm text-gray-900">{{issue.status.name}}</div>
      </div>
      <div class="field-group">
        <div class="text-sm text-gray-500 font-medium">Priority</div>
        <div class="text-sm text-gray-900">{{issue.priority}}</div>
      </div>
      <div class="field-group">
        <div class="text-sm text-gray-500 font-medium">Assignee</div>
        <div class="text-sm text-gray-900">{{issue.assignee}}</div>
      </div>
      <div class="field-group">
        <div class="text-sm text-gray-500 font-medium">Reporter</div>
        <div class="text-sm text-gray-900">{{issue.reporter}}</div>
      </div>
      <div class="field-group">
        <div class="text-sm text-gray-500 font-medium">Created</div>
        <div class="text-sm text-gray-900">{{issue.created}}</div>
      </div>
      <div class="field-group">
        <div class="text-sm text-gray-500 font-medium">Updated</div>
        <div class="text-sm text-gray-900">{{issue.updated}}</div>
      </div>
    `;

    // Product specific fields
    if (currentProduct === 'software') {
      fields += `
        <div class="field-group">
          <div class="text-sm text-gray-500 font-medium">Sprint</div>
          <div class="text-sm text-gray-900">{{issue.sprint}}</div>
        </div>
        <div class="field-group">
          <div class="text-sm text-gray-500 font-medium">Story Points</div>
          <div class="text-sm text-gray-900">{{issue.storyPoints}}</div>
        </div>
      `;
    } else if (currentProduct === 'servicedesk') {
      fields += `
        <div class="field-group">
          <div class="text-sm text-gray-500 font-medium">Request Type</div>
          <div class="text-sm text-gray-900">{{issue.requestType}}</div>
        </div>
        <div class="field-group">
          <div class="text-sm text-gray-500 font-medium">Impact</div>
          <div class="text-sm text-gray-900">{{issue.impact}}</div>
        </div>
        <div class="field-group">
          <div class="text-sm text-gray-500 font-medium">SLA</div>
          <div class="text-sm text-gray-900">{{issue.sla}}</div>
        </div>
      `;
    } else if (currentProduct === 'core') {
      fields += `
        <div class="field-group">
          <div class="text-sm text-gray-500 font-medium">Due Date</div>
          <div class="text-sm text-gray-900">{{issue.dueDate}}</div>
        </div>
        <div class="field-group">
          <div class="text-sm text-gray-500 font-medium">Category</div>
          <div class="text-sm text-gray-900">{{issue.category}}</div>
        </div>
      `;
    }

    return fields;
  };

  // Function to generate the comments section for preview
  function generatePreviewComments() {
    if (!showComments) return '';
    
    const commentContent = Array.isArray(data.comments) ? getFilteredComments(data.comments).map(comment => `
      <div class="p-4">
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium text-gray-900">{{author.displayName}}</span>
          <span class="text-sm text-gray-500">{{created.format("yyyy-MM-dd HH:mm")}}</span>
        </div>
        <div class="mt-1 text-sm text-gray-600">{{body.html}}</div>
      </div>
    `).join('') : (showSmartValues ? `
      <div class="p-4">
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium text-gray-900">{{author.displayName}}</span>
          <span class="text-sm text-gray-500">{{created.format("yyyy-MM-dd HH:mm")}}</span>
        </div>
        <div class="mt-1 text-sm text-gray-600">{{body.html}}</div>
      </div>
    ` : '');
    
    return `
      <div class="mt-6 preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="color-block p-4 font-medium" style="background-color: ${commentsHeaderColor};">
          Comments
        </div>
        <div class="divide-y divide-gray-100">
          {{#issue.comments}}
            ${commentContent}
          {{/issue.comments}}
        </div>
      </div>
    `;
  }

  // Function to generate the comments section for minified output
  function generateMinifiedComments() {
    if (!showComments) return '';
    
    return `
      <div class="mt-6 preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="color-block p-4 font-medium" style="background-color: ${commentsHeaderColor};">
          Comments
        </div>
        <div class="divide-y divide-gray-100">
          {{#issue.comments}}
            <div class="p-4">
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-900">{{author.displayName}}</span>
                <span class="text-sm text-gray-500">{{created.format("yyyy-MM-dd HH:mm")}}</span>
              </div>
              <div class="mt-1 text-sm text-gray-600">{{body.html}}</div>
            </div>
          {{/issue.comments}}
        </div>
      </div>
    `;
  }

  const template = `<div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
    <div class="color-block text-white p-5 font-semibold" style="background-color: ${issueHeaderColor};">
      <div class="flex items-center space-x-3">
        <span class="text-lg">{{issue.key}}</span>
        <span class="text-sm opacity-75">{{issue.type}}</span>
      </div>
    </div>
    <div class="p-6 space-y-4">
      <div class="space-y-2">
        <h1 class="text-xl font-semibold text-gray-900">
          <a href="${jiraBaseUrl}/browse/{{issue.key}}" class="hover:text-blue-600 hover:underline" target="_blank">
            {{issue.summary}}
          </a>
        </h1>
        <div class="text-sm text-gray-600">{{issue.description}}</div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${generateFields()}
      </div>

      ${currentProduct === 'software' ? `
        <div class="space-y-2">
          <div class="text-sm text-gray-500 font-medium">Components</div>
          <div class="flex flex-wrap gap-2">
            {{#issue.components}}
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {{.}}
              </span>
            {{/issue.components}}
          </div>
        </div>

        <div class="space-y-2">
          <div class="text-sm text-gray-500 font-medium">Labels</div>
          <div class="flex flex-wrap gap-2">
            {{#issue.labels}}
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {{.}}
              </span>
            {{/issue.labels}}
          </div>
        </div>
      ` : ''}
    </div>
  </div>
  ${generatePreviewComments()}
`;

  const minifiedTemplate = `<div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
    <div class="color-block text-white p-5 font-semibold" style="background-color: ${issueHeaderColor};">
      <div class="flex items-center space-x-3">
        <span class="text-lg">{{issue.key}}</span>
        <span class="text-sm opacity-75">{{issue.type}}</span>
      </div>
    </div>
    <div class="p-6 space-y-4">
      <div class="space-y-2">
        <h1 class="text-xl font-semibold text-gray-900">
          <a href="${jiraBaseUrl}/browse/{{issue.key}}" class="hover:text-blue-600 hover:underline" target="_blank">
            {{issue.summary}}
          </a>
        </h1>
        <div class="text-sm text-gray-600">{{issue.description}}</div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${generateFields()}
      </div>

      ${currentProduct === 'software' ? `
        <div class="space-y-2">
          <div class="text-sm text-gray-500 font-medium">Components</div>
          <div class="flex flex-wrap gap-2">
            {{#issue.components}}
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {{.}}
              </span>
            {{/issue.components}}
          </div>
        </div>

        <div class="space-y-2">
          <div class="text-sm text-gray-500 font-medium">Labels</div>
          <div class="flex flex-wrap gap-2">
            {{#issue.labels}}
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {{.}}
              </span>
            {{/issue.labels}}
          </div>
        </div>
      ` : ''}
    </div>
  </div>
  ${generateMinifiedComments()}
`;

  const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Jira Notification</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    /* Email-specific resets and utilities */
    body {
      margin: 0;
      padding: 0;
      width: 100%;
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.5;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    .preview-card {
      background-color: white;
      border-radius: 0.75rem;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      border: 1px solid #f3f4f6;
      overflow: hidden;
      max-width: 600px;
      margin: 20px auto;
    }
    .color-block {
      padding: 1.25rem;
      font-weight: 600;
    }
    .field-group {
      margin-bottom: 1rem;
    }
    .text-sm { font-size: 0.875rem; }
    .text-lg { font-size: 1.125rem; }
    .text-xl { font-size: 1.25rem; }
    .font-medium { font-weight: 500; }
    .font-semibold { font-weight: 600; }
    .text-gray-500 { color: #6b7280; }
    .text-gray-600 { color: #4b5563; }
    .text-gray-900 { color: #111827; }
    .space-y-2 > * + * { margin-top: 0.5rem; }
    .space-y-4 > * + * { margin-top: 1rem; }
    .grid { display: grid; }
    .gap-4 { gap: 1rem; }
    .p-4 { padding: 1rem; }
    .p-6 { padding: 1.5rem; }
    .mt-6 { margin-top: 1.5rem; }
    .divide-y > * + * { border-top: 1px solid #f3f4f6; }
    
    /* Responsive grid */
    @media (min-width: 768px) {
      .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    
    /* Component and label tags */
    .tag {
      display: inline-flex;
      align-items: center;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 500;
      background-color: #f3f4f6;
      color: #1f2937;
      margin: 0.25rem;
    }
  </style>
</head>
<body style="background-color: #f9fafb; padding: 20px;">
  ${minifiedTemplate}
</body>
</html>`;

  // Get the minified HTML
  const minifiedHTML = fullHTML
    .replace(/\s+/g, ' ')  // Replace multiple whitespace with single space
    .replace(/>\s+</g, '><')  // Remove whitespace between tags
    .replace(/<!--.*?-->/g, '')  // Remove comments
    .trim();  // Remove leading/trailing whitespace

  // Update the output
  document.getElementById("htmlOutput").textContent = minifiedHTML;
}

// Function to change template type
function changeTemplate(template) {
  currentTemplate = template;
  updatePreview();
  updateTemplateButtons();
}

// Event listeners for product type buttons
document.querySelectorAll('[data-product]').forEach(button => {
  button.addEventListener('click', (e) => {
    // Update active state
    document.querySelectorAll('[data-product]').forEach(btn => {
      btn.classList.remove('bg-blue-600', 'text-white', 'hover:bg-blue-700');
      btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
    });
    e.target.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
    e.target.classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700');
    
    // Update current product and refresh preview
    currentProduct = e.target.dataset.product;
    updatePreview();
  });
});

// Function to toggle between mock data and smart values
function toggleSmartValues() {
  showSmartValues = !showSmartValues;
  updatePreview();
  updateToggleButton();
}

// Function to toggle comments visibility
function toggleComments() {
  showComments = !showComments;
  const commentDisplayOptions = document.getElementById('commentDisplayOptions');
  commentDisplayOptions.style.display = showComments ? 'flex' : 'none';
  updateCommentsToggle();
  updatePreview();
}

// Function to handle comment display mode change
function changeCommentDisplay(mode) {
  commentDisplayMode = mode;
  
  // Update button states
  document.querySelectorAll('[data-comment-display]').forEach(button => {
    if (button.dataset.commentDisplay === mode) {
      button.classList.remove('bg-gray-100', 'text-gray-700');
      button.classList.add('bg-blue-600', 'text-white');
    } else {
      button.classList.remove('bg-blue-600', 'text-white');
      button.classList.add('bg-gray-100', 'text-gray-700');
    }
  });
  
  // Update the preview with new comment display mode
  updatePreview();
}

// Function to update the template selection buttons
function updateTemplateButtons() {
  document.querySelectorAll('[data-template]').forEach(button => {
    const isActive = button.dataset.template === currentTemplate;
    button.classList.toggle('bg-blue-600', isActive);
    button.classList.toggle('text-white', isActive);
    button.classList.toggle('bg-gray-100', !isActive);
    button.classList.toggle('text-gray-700', !isActive);
  });
}

// Function to update the toggle button text
function updateToggleButton() {
  const toggleButton = document.getElementById('toggleView');
  if (toggleButton) {
    toggleButton.textContent = showSmartValues ? 'Show Mock Data' : 'Show Smart Values';
    toggleButton.classList.toggle('bg-blue-600', !showSmartValues);
    toggleButton.classList.toggle('bg-gray-100', showSmartValues);
    toggleButton.classList.toggle('text-white', !showSmartValues);
    toggleButton.classList.toggle('text-gray-700', showSmartValues);
  }
}

// Function to update the comments toggle button
function updateCommentsToggle() {
  const button = document.getElementById('commentsToggle');
  if (button) {
    button.textContent = showComments ? 'Hide Comments' : 'Show Comments';
    button.classList.toggle('bg-blue-600', showComments);
    button.classList.toggle('text-white', showComments);
    button.classList.toggle('bg-gray-100', !showComments);
    button.classList.toggle('text-gray-700', !showComments);
  }
}

// Function to trigger the color picker
function triggerColorPicker(section) {
  const colorPickerId = section === "issue" ? "issueColorPicker" : "commentsColorPicker";
  const colorPicker = document.getElementById(colorPickerId);
  colorPicker.click();
}

// Function to assign the selected color to the active header
function assignHeaderColor(section, color) {
  if (section === "issue") {
    issueHeaderColor = color;
  } else if (section === "comments") {
    commentsHeaderColor = color;
  }
  updatePreview();
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Set initial active states for buttons
  const defaultProductBtn = document.querySelector('[data-product="software"]');
  defaultProductBtn.classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700');
  
  // Set initial template button state
  const defaultTemplateBtn = document.querySelector('[data-template="full"]');
  defaultTemplateBtn.classList.add('bg-blue-600', 'text-white');
  defaultTemplateBtn.classList.remove('bg-gray-100', 'text-gray-700');
  
  // Initialize UI state
  updatePreview();
  updateToggleButton();
  updateTemplateButtons();
  updateCommentsToggle();
  
  // Set up event listeners
  const generateHtmlBtn = document.getElementById("generateHTML");
  if (generateHtmlBtn) {
    generateHtmlBtn.addEventListener("click", generateHTML);
  }

  const copyHtmlBtn = document.getElementById("copyHTML");
  if (copyHtmlBtn) {
    copyHtmlBtn.addEventListener("click", async () => {
      const htmlOutput = document.getElementById("htmlOutput");
      if (htmlOutput && htmlOutput.value) {
        try {
          await navigator.clipboard.writeText(htmlOutput.value);
          
          // Visual feedback
          const originalText = copyHtmlBtn.innerHTML;
          copyHtmlBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          `;
          copyHtmlBtn.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
          copyHtmlBtn.classList.add('bg-green-50', 'text-green-600');
          
          // Reset after 2 seconds
          setTimeout(() => {
            copyHtmlBtn.innerHTML = originalText;
            copyHtmlBtn.classList.remove('bg-green-50', 'text-green-600');
            copyHtmlBtn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
          }, 2000);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      }
    });
  }

  const smartValuesToggle = document.getElementById("toggleView");
  if (smartValuesToggle) {
    smartValuesToggle.addEventListener("click", toggleSmartValues);
  }

  const commentsToggle = document.getElementById("commentsToggle");
  if (commentsToggle) {
    commentsToggle.addEventListener("click", toggleComments);
  }
  
  // Template style buttons
  document.querySelectorAll('[data-template]').forEach(button => {
    button.addEventListener('click', (e) => {
      document.querySelectorAll('[data-template]').forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-gray-100', 'text-gray-700');
      });
      e.target.classList.remove('bg-gray-100', 'text-gray-700');
      e.target.classList.add('bg-blue-600', 'text-white');
      currentTemplate = e.target.dataset.template;
      updatePreview();
    });
  });
  
  // Product type buttons
  document.querySelectorAll('[data-product]').forEach(button => {
    button.addEventListener('click', (e) => {
      document.querySelectorAll('[data-product]').forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white', 'hover:bg-blue-700');
        btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
      });
      e.target.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
      e.target.classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700');
      currentProduct = e.target.dataset.product;
      updatePreview();
    });
  });

  // Event listener for Jira URL input
  document.getElementById('jiraUrl').addEventListener('input', (e) => {
    jiraBaseUrl = e.target.value.trim();
    updatePreview();
  });
  
  // Comment display options
  document.querySelectorAll('[data-comment-display]').forEach(button => {
    button.addEventListener('click', (e) => {
      const mode = e.target.dataset.commentDisplay;
      changeCommentDisplay(mode);
    });
  });
});

// Make functions available globally
window.triggerColorPicker = triggerColorPicker;
window.assignHeaderColor = assignHeaderColor;
