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
      priority: '{{issue.priority}}',
      status: '{{issue.status.name}}',
      assignee: '{{issue.assignee.name}}',
      reporter: '{{issue.reporter.name}}',
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
      assignee: '{{issue.assignee.name}}',
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
      assignee: '{{issue.assignee.name}}',
      reporter: '{{issue.reporter.name}}',
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
                      <div class="text-sm font-medium text-gray-900">${comment.author}</div>
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

  template += `
    <div class="px-4 pb-4">
      <a href="${issueUrl}" 
         class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm transition-colors"
         target="_blank">
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l4-4 4 4h-3v4h-2z"/>
        </svg>
        View in Jira
      </a>
    </div>
  `;

  return template;
}

// Function to generate email fields with inline styles
function generateEmailFields(data, showSmartValues) {
  const labelStyle = 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 12px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 4px 0;';
  const valueStyle = 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 14px; color: #1f2937; line-height: 20px; font-weight: 400; margin: 0; word-break: break-word;';
  
  // Define fields based on product
  const commonFields = [
    { label: 'Status', value: showSmartValues ? '{{issue.status.name}}' : data.status },
    { label: 'Priority', value: showSmartValues ? '{{issue.priority}}' : data.priority },
    { label: 'Assignee', value: showSmartValues ? '{{issue.assignee.name}}' : data.assignee },
    { label: 'Reporter', value: showSmartValues ? '{{issue.reporter.name}}' : data.reporter },
    { label: 'Created', value: showSmartValues ? '{{issue.created}}' : data.created },
    { label: 'Updated', value: showSmartValues ? '{{issue.updated}}' : data.updated }
  ];

  let productFields = [];
  if (currentProduct === 'software') {
    productFields = [
      { label: 'Sprint', value: showSmartValues ? '{{issue.sprint}}' : data.sprint },
      { label: 'Story Points', value: showSmartValues ? '{{issue.storyPoints}}' : data.storyPoints }
    ];
  } else if (currentProduct === 'servicedesk') {
    productFields = [
      { label: 'Request Type', value: showSmartValues ? '{{issue.requestType}}' : data.requestType },
      { label: 'Impact', value: showSmartValues ? '{{issue.impact}}' : data.impact },
      { label: 'SLA', value: showSmartValues ? '{{issue.sla}}' : data.sla }
    ];
  } else if (currentProduct === 'core') {
    productFields = [
      { label: 'Due Date', value: showSmartValues ? '{{issue.dueDate}}' : data.dueDate },
      { label: 'Category', value: showSmartValues ? '{{issue.category}}' : data.category }
    ];
  }

  // Filter out empty fields (unless in smart values mode, where we always want to show the placeholder)
  const activeFields = [...commonFields, ...productFields].filter(field => 
    showSmartValues || (field.value && field.value !== '')
  );

  let html = '<table width="100%" border="0" cellpadding="0" cellspacing="0" style="width: 100%; margin-top: 24px;">';
  
  for (let i = 0; i < activeFields.length; i += 2) {
    html += '<tr>';
    // First column
    html += `
      <td width="50%" style="padding-bottom: 20px; vertical-align: top; padding-right: 12px;">
        <div style="${labelStyle}">${activeFields[i].label}</div>
        <div style="${valueStyle}">${activeFields[i].value}</div>
      </td>`;
    
    // Second column (if exists)
    if (i + 1 < activeFields.length) {
      html += `
        <td width="50%" style="padding-bottom: 20px; vertical-align: top; padding-left: 12px;">
          <div style="${labelStyle}">${activeFields[i + 1].label}</div>
          <div style="${valueStyle}">${activeFields[i + 1].value}</div>
        </td>`;
    } else {
      html += '<td width="50%"></td>';
    }
    html += '</tr>';
  }
  
  html += '</table>';
  return html;
}

// Function to generate email template HTML
function generateEmailTemplate(templateType, data, showComments) {
  // Ensure comments is an array and filter it
  let comments = [];
  if (showComments) {
    if (Array.isArray(data.comments)) {
      comments = getFilteredComments(data.comments);
    } else if (showSmartValues) {
      comments = ['{{comment.body.html}}'];
    }
  }

  const fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

  const issueTemplate = `
    <!-- Main Issue Card -->
    <table width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);">
      <!-- Header -->
      <tr>
        <td style="background-color: ${issueHeaderColor}; padding: 32px 32px 24px 32px;">
          <table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <div style="font-family: ${fontFamily}; color: rgba(255,255,255,0.9); font-size: 13px; font-weight: 500; margin-bottom: 8px; letter-spacing: 0.025em;">
                  ${data.type.toUpperCase()} <span style="opacity: 0.6; margin: 0 6px;">|</span> ${data.issueKey}
                </div>
                <h1 style="font-family: ${fontFamily}; color: #ffffff; font-size: 24px; font-weight: 700; margin: 0; line-height: 1.3; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">
                  <a href="${jiraBaseUrl}/browse/${data.issueKey}" style="color: #ffffff; text-decoration: none;">
                    ${data.summary}
                  </a>
                </h1>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      
      <!-- Content -->
      <tr>
        <td style="padding: 32px;">
          ${templateType === 'full' ? `
            <div style="font-family: ${fontFamily}; color: #374151; font-size: 15px; line-height: 24px; margin-bottom: 28px;">
              ${data.description}
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; margin-bottom: 28px;"></div>
          ` : ''}
          
          ${generateEmailFields(data, showSmartValues)}
          
          ${currentProduct === 'software' ? `
            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-top: 12px; border-top: 1px solid #f3f4f6; padding-top: 24px;">
              ${(showSmartValues || (data.components && data.components.length > 0)) ? `
              <tr>
                <td style="padding-bottom: 16px;">
                  <div style="font-family: ${fontFamily}; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Components</div>
                  <div>
                    ${Array.isArray(data.components) ? data.components.map(comp => `
                      <span style="display: inline-block; background-color: #f3f4f6; color: #374151; border-radius: 6px; padding: 4px 10px; font-size: 12px; font-family: ${fontFamily}; font-weight: 500; margin-right: 6px; margin-bottom: 6px; border: 1px solid #e5e7eb;">
                        ${comp}
                      </span>
                    `).join('') : ''}
                  </div>
                </td>
              </tr>
              ` : ''}
              ${(showSmartValues || (data.labels && data.labels.length > 0)) ? `
              <tr>
                <td>
                  <div style="font-family: ${fontFamily}; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Labels</div>
                  <div>
                    ${Array.isArray(data.labels) ? data.labels.map(label => `
                      <span style="display: inline-block; background-color: #f3f4f6; color: #374151; border-radius: 6px; padding: 4px 10px; font-size: 12px; font-family: ${fontFamily}; font-weight: 500; margin-right: 6px; margin-bottom: 6px; border: 1px solid #e5e7eb;">
                        ${label}
                      </span>
                    `).join('') : ''}
                  </div>
                </td>
              </tr>
              ` : ''}
            </table>
          ` : ''}
        </td>
      </tr>
    </table>
  `;

  const commentsTemplate = showComments && data.comments && data.comments.length > 0 ? `
    <!-- Comments Card -->
    <table width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 24px auto 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);">
      <tr>
        <td style="background-color: ${commentsHeaderColor}; padding: 16px 32px; border-bottom: 1px solid rgba(0,0,0,0.05);">
          <div style="font-family: ${fontFamily}; font-size: 14px; font-weight: 600; color: #374151;">Activity</div>
        </td>
      </tr>
      <tr>
        <td>
          ${Array.isArray(data.comments) ? getFilteredComments(data.comments).map((comment, index) => `
            <div style="padding: 24px 32px; border-bottom: ${index < data.comments.length - 1 ? '1px solid #f3f4f6' : 'none'};">
              <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom: 8px;">
                    <span style="font-family: ${fontFamily}; font-size: 14px; font-weight: 600; color: #111827;">${comment.author}</span>
                    <span style="font-family: ${fontFamily}; font-size: 12px; color: #9ca3af; float: right;">${comment.created}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div style="font-family: ${fontFamily}; font-size: 14px; color: #4b5563; line-height: 22px;">
                      ${comment.content}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          `).join('') : ''}
        </td>
      </tr>
    </table>
  ` : '';

  const viewInJiraButton = `
    <table width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 32px auto;">
      <tr>
        <td align="center">
          <a href="${jiraBaseUrl}/browse/${data.issueKey}" target="_blank" style="display: inline-block; background-color: #0052cc; color: #ffffff; font-family: ${fontFamily}; font-size: 14px; font-weight: 600; text-decoration: none; padding: 12px 24px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,82,204,0.2);">
            Open in Jira
          </a>
        </td>
      </tr>
      <tr>
        <td align="center" style="padding-top: 16px;">
          <div style="font-family: ${fontFamily}; font-size: 12px; color: #9ca3af;">
            You are receiving this notification because you are watching this issue.
          </div>
        </td>
      </tr>
    </table>
  `;

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Jira Issue - ${data.issueKey}</title>
</head>
<body style="margin: 0; padding: 40px 20px; background-color: #f3f4f6; -webkit-font-smoothing: antialiased;">
  ${issueTemplate}
  ${commentsTemplate}
  ${viewInJiraButton}
</body>
</html>`;
}

// Function to generate HTML for copying
function generateHTML() {
  // Always use smart values for the minified output
  const previousSmartValue = showSmartValues;
  showSmartValues = true;
  
  // Generate the template with current settings
  const template = generateEmailTemplate('full', templateData[currentProduct].smart, showComments);
  
  // Reset smart values to previous state
  showSmartValues = previousSmartValue;
  
  // Minify the HTML by removing unnecessary whitespace and line breaks
  const minifiedTemplate = template
    .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
    .replace(/>\s+</g, '><') // Remove spaces between tags
    .replace(/\n/g, '') // Remove line breaks
    .trim(); // Remove leading/trailing whitespace
  
  // Update the output
  document.getElementById("htmlOutput").value = minifiedTemplate;
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
