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
        }
      ]
    },
    smart: {
      issueKey: '${issue.key}',
      summary: '${issue.summary}',
      type: '${issue.type}',
      priority: '${issue.priority}',
      status: '${issue.status}',
      assignee: '${issue.assignee}',
      reporter: '${issue.reporter}',
      created: '${issue.created}',
      updated: '${issue.updated}',
      description: '${issue.description}',
      components: '${issue.components}',
      labels: '${issue.labels}',
      sprint: '${issue.sprint}',
      storyPoints: '${issue.storyPoints}',
      comments: '${issue.comments}'
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
        }
      ]
    },
    smart: {
      issueKey: '${issue.key}',
      summary: '${issue.summary}',
      type: '${issue.type}',
      priority: '${issue.priority}',
      status: '${issue.status}',
      requestType: '${issue.requestType}',
      requester: '${issue.requester}',
      assignee: '${issue.assignee}',
      created: '${issue.created}',
      updated: '${issue.updated}',
      description: '${issue.description}',
      impact: '${issue.impact}',
      sla: '${issue.sla}',
      comments: '${issue.comments}'
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
          content: 'Please include the new format for expense reporting',
          created: '2024-01-15 11:30 AM'
        }
      ]
    },
    smart: {
      issueKey: '${issue.key}',
      summary: '${issue.summary}',
      type: '${issue.type}',
      priority: '${issue.priority}',
      status: '${issue.status}',
      assignee: '${issue.assignee}',
      reporter: '${issue.reporter}',
      created: '${issue.created}',
      updated: '${issue.updated}',
      description: '${issue.description}',
      dueDate: '${issue.dueDate}',
      category: '${issue.category}',
      comments: '${issue.comments}'
    }
  }
};

// Initialize state
let currentProduct = 'software';
let currentTemplate = 'full';
let showSmartValues = false;
let showComments = true;
let issueHeaderColor = "#0052CC";
let commentsHeaderColor = "#f0f0f0";

// Function to update the template preview
function updatePreview() {
  const data = showSmartValues ? templateData[currentProduct].smart : templateData[currentProduct].mock;
  const template = generateTemplate(currentTemplate, data, showComments);
  document.getElementById('previewArea').innerHTML = template;
}

// Function to generate template
function generateTemplate(templateType, data, showComments) {
  let template = '';

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
            ${Array.isArray(data.comments) ? data.comments.map(comment => `
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
        </div>
      </div>
    `;
  }

  return template;
}

// Event listeners for product type buttons
document.querySelectorAll('[data-product]').forEach(button => {
  button.addEventListener('click', (e) => {
    // Update active state
    document.querySelectorAll('[data-product]').forEach(btn => {
      btn.classList.remove('bg-blue-600', 'text-white');
      btn.classList.add('bg-gray-100', 'text-gray-700');
    });
    e.target.classList.remove('bg-gray-100', 'text-gray-700');
    e.target.classList.add('bg-blue-600', 'text-white');
    
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
  updatePreview();
  updateCommentsToggle();
}

// Function to change template type
function changeTemplate(template) {
  currentTemplate = template;
  // Hide comments toggle for compact view
  document.getElementById('commentsToggleContainer').style.display = 
    template === 'full' ? 'block' : 'none';
  updatePreview();
  updateTemplateButtons();
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
  toggleButton.textContent = showSmartValues ? 'Show Sample Data' : 'Show Smart Values';
  toggleButton.classList.toggle('bg-purple-600', showSmartValues);
  toggleButton.classList.toggle('bg-blue-600', !showSmartValues);
}

// Function to update the comments toggle button
function updateCommentsToggle() {
  const toggleButton = document.getElementById('toggleComments');
  if (toggleButton) {
    toggleButton.classList.toggle('bg-blue-600', showComments);
    toggleButton.classList.toggle('bg-gray-100', !showComments);
    toggleButton.classList.toggle('text-white', showComments);
    toggleButton.classList.toggle('text-gray-700', !showComments);
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
  document.querySelector('[data-product="software"]')?.classList.add('bg-blue-600', 'text-white');
  document.querySelector('[data-product="software"]')?.classList.remove('bg-gray-100', 'text-gray-700');
  
  document.querySelector('[data-template="full"]')?.classList.add('bg-blue-600', 'text-white');
  document.querySelector('[data-template="full"]')?.classList.remove('bg-gray-100', 'text-gray-700');
  
  // Initialize UI
  updatePreview();
  updateToggleButton();
  updateTemplateButtons();
  updateCommentsToggle();
  
  // Set up event listeners
  document.getElementById("generateHTML")?.addEventListener("click", generateHTML);
  document.getElementById("toggleView")?.addEventListener("click", toggleSmartValues);
  document.getElementById("toggleComments")?.addEventListener("click", toggleComments);
  
  // Template style buttons
  document.querySelectorAll('[data-template]').forEach(button => {
    button.addEventListener('click', (e) => {
      document.querySelectorAll('[data-template]').forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-gray-100', 'text-gray-700');
      });
      e.target.classList.remove('bg-gray-100', 'text-gray-700');
      e.target.classList.add('bg-blue-600', 'text-white');
      changeTemplate(e.target.dataset.template);
    });
  });
  
  // Product type buttons
  document.querySelectorAll('[data-product]').forEach(button => {
    button.addEventListener('click', (e) => {
      document.querySelectorAll('[data-product]').forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-gray-100', 'text-gray-700');
      });
      e.target.classList.remove('bg-gray-100', 'text-gray-700');
      e.target.classList.add('bg-blue-600', 'text-white');
      currentProduct = e.target.dataset.product;
      updatePreview();
    });
  });
});

// Make functions available globally
window.triggerColorPicker = triggerColorPicker;
window.assignHeaderColor = assignHeaderColor;
