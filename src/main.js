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
      status: '{{issue.status}}',
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
      status: '{{issue.status}}',
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
      status: '{{issue.status}}',
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
let showComments = false;
let commentDisplayMode = 'all';
let issueHeaderColor = '#0052CC';
let commentsHeaderColor = '#E9EBEE';

// Function to update the template preview
function updatePreview() {
  const data = showSmartValues ? templateData[currentProduct].smart : templateData[currentProduct].mock;
  const template = generateTemplate(currentTemplate, data, showComments);
  const previewArea = document.getElementById('previewArea');
  if (previewArea) {
    previewArea.innerHTML = template;
  }
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

  // Helper function to generate field rows
  const generateFields = () => {
    let fields = '';
    
    // Common fields for all products
    fields += `
      <div class="space-y-1">
        <div class="text-sm text-gray-500 font-medium">Status</div>
        <div class="flex items-center space-x-2">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            ${data.status}
          </span>
        </div>
      </div>
      <div class="space-y-1">
        <div class="text-sm text-gray-500 font-medium">Priority</div>
        <div class="text-gray-700">${data.priority}</div>
      </div>
      <div class="space-y-1">
        <div class="text-sm text-gray-500 font-medium">Assignee</div>
        <div class="text-gray-700">${data.assignee}</div>
      </div>`;

    // Product-specific fields
    switch (currentProduct) {
      case 'software':
        fields += `
          <div class="space-y-1">
            <div class="text-sm text-gray-500 font-medium">Sprint</div>
            <div class="text-gray-700">${data.sprint}</div>
          </div>
          <div class="space-y-1">
            <div class="text-sm text-gray-500 font-medium">Story Points</div>
            <div class="text-gray-700">${data.storyPoints}</div>
          </div>`;
        break;
      case 'servicedesk':
        fields += `
          <div class="space-y-1">
            <div class="text-sm text-gray-500 font-medium">Request Type</div>
            <div class="text-gray-700">${data.requestType}</div>
          </div>
          <div class="space-y-1">
            <div class="text-sm text-gray-500 font-medium">SLA</div>
            <div class="text-gray-700">${data.sla}</div>
          </div>
          <div class="space-y-1">
            <div class="text-sm text-gray-500 font-medium">Impact</div>
            <div class="text-gray-700">${data.impact}</div>
          </div>`;
        break;
      case 'core':
        fields += `
          <div class="space-y-1">
            <div class="text-sm text-gray-500 font-medium">Due Date</div>
            <div class="text-gray-700">${data.dueDate}</div>
          </div>
          <div class="space-y-1">
            <div class="text-sm text-gray-500 font-medium">Category</div>
            <div class="text-gray-700">${data.category}</div>
          </div>`;
        break;
    }

    return fields;
  };

  if (templateType === 'full') {
    template += `
      <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div
          class="color-block text-white p-5 font-semibold flex items-center justify-between"
          style="background-color: ${issueHeaderColor};"
          onclick="triggerColorPicker('issue')">
          <div class="flex items-center space-x-3">
            <span class="text-lg">${data.issueKey}</span>
            <span class="text-sm opacity-75">${data.type}</span>
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
            <h1 class="text-xl font-semibold text-gray-900">${data.summary}</h1>
            <div class="text-sm text-gray-600">${data.description}</div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${generateFields()}
          </div>

          ${currentProduct === 'software' ? `
            <div class="space-y-2">
              <div class="text-sm text-gray-500 font-medium">Components</div>
              <div class="flex flex-wrap gap-2">
                ${Array.isArray(data.components) ? data.components.map(comp => `
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    ${comp}
                  </span>
                `).join('') : ''}
              </div>
            </div>

            <div class="space-y-2">
              <div class="text-sm text-gray-500 font-medium">Labels</div>
              <div class="flex flex-wrap gap-2">
                ${Array.isArray(data.labels) ? data.labels.map(label => `
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    ${label}
                  </span>
                `).join('') : ''}
              </div>
            </div>
          ` : ''}

          <div class="space-y-1">
            <div class="text-sm text-gray-500 font-medium">Created</div>
            <div class="text-gray-700">${data.created}</div>
          </div>
        </div>
      </div>
    `;

    if (showComments && data.comments) {
      template += `
        <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-6">
          <div
            class="color-block text-gray-700 p-5 font-semibold flex items-center justify-between"
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
            ${Array.isArray(data.comments) ? comments.map(comment => `
              <div class="p-6">
                <div class="flex items-start space-x-3 mb-2">
                  <div class="flex-1">
                    <div class="flex items-center space-x-2">
                      <div class="text-sm font-medium text-gray-700">${showSmartValues ? '{{comment.author}}' : comment.author}</div>
                    </div>
                    <div class="text-xs text-gray-500 mt-1">
                      <span>Created: ${showSmartValues ? '{{comment.created}}' : comment.created}</span>
                    </div>
                  </div>
                </div>
                <div class="prose prose-sm max-w-none text-gray-600">
                  ${showSmartValues ? '{{comment.body.html}}' : comment.content}
                </div>
              </div>
            `).join('') : showSmartValues ? `
              <div class="p-6">
                <div class="flex items-start space-x-3 mb-2">
                  <div class="flex-1">
                    <div class="flex items-center space-x-2">
                      <div class="text-sm font-medium text-gray-700">{{comment.author}}</div>
                    </div>
                    <div class="text-xs text-gray-500 mt-1">
                      <span>Created: {{comment.created}}</span>
                    </div>
                  </div>
                </div>
                <div class="prose prose-sm max-w-none text-gray-600">
                  {{comment.body.html}}
                </div>
              </div>
            ` : ''}
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
            <span class="text-lg">${data.issueKey}</span>
            <div class="flex items-center space-x-2">
              <span class="text-sm opacity-75">${data.type}</span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20">
                ${data.status}
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
            <h1 class="text-lg font-semibold text-gray-900">${data.summary}</h1>
          </div>
          
          <div class="grid grid-cols-2 gap-3 text-sm">
            <div class="space-y-1">
              <div class="text-gray-500 font-medium">Assignee</div>
              <div class="text-gray-700">${data.assignee}</div>
            </div>
            <div class="space-y-1">
              <div class="text-gray-500 font-medium">Priority</div>
              <div class="text-gray-700">${data.priority}</div>
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
                class="color-block text-gray-700 p-4 font-semibold flex items-center justify-between"
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
                ${Array.isArray(data.comments) ? comments.map(comment => `
                  <div class="p-4">
                    <div class="flex items-start space-x-3 mb-2">
                      <div class="flex-1">
                        <div class="flex items-center space-x-2">
                          <div class="text-sm font-medium text-gray-700">${showSmartValues ? '{{comment.author}}' : comment.author}</div>
                        </div>
                        <div class="text-xs text-gray-500 mt-1">
                          <span>Created: ${showSmartValues ? '{{comment.created}}' : comment.created}</span>
                        </div>
                      </div>
                    </div>
                    <div class="prose prose-sm max-w-none text-gray-600">
                      ${showSmartValues ? '{{comment.body.html}}' : comment.content}
                    </div>
                  </div>
                `).join('') : showSmartValues ? `
                  <div class="p-4">
                    <div class="flex items-start space-x-3 mb-2">
                      <div class="flex-1">
                        <div class="flex items-center space-x-2">
                          <div class="text-sm font-medium text-gray-700">{{comment.author}}</div>
                        </div>
                        <div class="text-xs text-gray-500 mt-1">
                          <span>Created: {{comment.created}}</span>
                        </div>
                      </div>
                    </div>
                    <div class="prose prose-sm max-w-none text-gray-600">
                      {{comment.body.html}}
                    </div>
                  </div>
                ` : ''}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  return template;
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

// Function to generate minified HTML
function generateHTML() {
  const data = showSmartValues ? templateData[currentProduct].smart : templateData[currentProduct].mock;
  const template = `
    <!DOCTYPE html>
    <html>
    <body style="font-family: Inter, system-ui, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f9fafb;">
      <!-- Template HTML here -->
    </body>
    </html>
  `;

  document.getElementById("htmlOutput").textContent = template.replace(/\s+/g, ' ').trim();
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
