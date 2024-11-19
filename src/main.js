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

// Global variables
let currentProduct = 'software';
let issueTemplate = 'full';
let commentTemplate = 'full';
let showSmartValues = false;
let commentDisplayMode = 'full';
let jiraBaseUrl = 'https://your-domain.atlassian.net';
let issueHeaderColor = '#0052CC';
let commentsHeaderColor = '#f0f0f0';

// Function to assign header colors
function assignHeaderColor(type, color) {
  if (type === 'issue') {
    issueHeaderColor = color;
  } else if (type === 'comments') {
    commentsHeaderColor = color;
  }
  updatePreview();
}

// Function to get Jira issue URL
function getJiraIssueUrl(issueKey) {
  return showSmartValues 
    ? `\${jiraBaseUrl}/browse/\${issueKey}`
    : `${jiraBaseUrl}/browse/${issueKey}`;
}

// Function to get filtered comments based on display mode
function getFilteredComments(comments) {
  if (!comments || comments.length === 0) return [];
  if (commentDisplayMode === 'none') return [];
  if (commentDisplayMode === 'compact') return [comments[comments.length - 1]];
  if (commentDisplayMode === 'full') return comments.slice(-5);
  return [];
}

// Function to generate fields based on template type and product type
function generateFields(data, isCompact) {
  let fields = '';
  
  if (isCompact) {
    // Compact template shows only the most important fields in a single column
    fields += `
      <div class="text-gray-600">
        <div class="mb-2">
          <span class="font-medium">Priority:</span> ${showSmartValues ? '{{issue.priority}}' : data.priority}
        </div>
        <div class="mb-2">
          <span class="font-medium">Status:</span> ${showSmartValues ? '{{issue.status}}' : data.status}
        </div>
        <div class="mb-2">
          <span class="font-medium">Assignee:</span> ${showSmartValues ? '{{issue.assignee}}' : data.assignee}
        </div>
      </div>
    `;
  } else {
    // Full template shows all relevant fields in two columns
    fields += `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="space-y-3">
          <div>
            <span class="font-medium">Priority:</span> ${showSmartValues ? '{{issue.priority}}' : data.priority}
          </div>
          <div>
            <span class="font-medium">Status:</span> ${showSmartValues ? '{{issue.status}}' : data.status}
          </div>
          <div>
            <span class="font-medium">Assignee:</span> ${showSmartValues ? '{{issue.assignee}}' : data.assignee}
          </div>
          <div>
            <span class="font-medium">Reporter:</span> ${showSmartValues ? '{{issue.reporter}}' : data.reporter}
          </div>
          <div>
            <span class="font-medium">Created:</span> ${showSmartValues ? '{{issue.created}}' : data.created}
          </div>
        </div>
        <div class="space-y-3">`;

    // Add product-specific fields in the second column
    if (currentProduct === 'software') {
      fields += `
          <div>
            <span class="font-medium">Components:</span> ${showSmartValues ? '{{issue.components}}' : data.components}
          </div>
          <div>
            <span class="font-medium">Fix Version:</span> ${showSmartValues ? '{{issue.fixVersion}}' : data.fixVersion}
          </div>
          <div>
            <span class="font-medium">Sprint:</span> ${showSmartValues ? '{{issue.sprint}}' : data.sprint}
          </div>
          <div>
            <span class="font-medium">Story Points:</span> ${showSmartValues ? '{{issue.storyPoints}}' : data.storyPoints}
          </div>
      `;
    } else if (currentProduct === 'servicedesk') {
      fields += `
          <div>
            <span class="font-medium">Request Type:</span> ${showSmartValues ? '{{issue.requestType}}' : data.requestType}
          </div>
          <div>
            <span class="font-medium">SLA:</span> ${showSmartValues ? '{{issue.sla}}' : data.sla}
          </div>
          <div>
            <span class="font-medium">Customer:</span> ${showSmartValues ? '{{issue.customer}}' : data.customer}
          </div>
          <div>
            <span class="font-medium">Impact:</span> ${showSmartValues ? '{{issue.impact}}' : data.impact}
          </div>
      `;
    } else if (currentProduct === 'core') {
      fields += `
          <div>
            <span class="font-medium">Labels:</span> ${showSmartValues ? '{{issue.labels}}' : data.labels}
          </div>
          <div>
            <span class="font-medium">Due Date:</span> ${showSmartValues ? '{{issue.dueDate}}' : data.dueDate}
          </div>
          <div>
            <span class="font-medium">Category:</span> ${showSmartValues ? '{{issue.category}}' : data.category}
          </div>
      `;
    }

    fields += `
        </div>
      </div>
    `;
  }

  return fields;
}

// Function to generate template
function generateTemplate(templateType, data) {
  const issueUrl = getJiraIssueUrl(showSmartValues ? '{{issue.key}}' : data.issueKey);
  const filteredComments = getFilteredComments(data.comments);
  const isCompact = templateType === 'compact';
  
  let template = '';
  
  // Generate the main issue card with appropriate sizing
  template += `
    <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="color-block text-white ${isCompact ? 'p-4' : 'p-5'} font-semibold" style="background-color: ${issueHeaderColor};">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <span class="${isCompact ? 'text-base' : 'text-lg'}">${showSmartValues ? '{{issue.key}}' : data.issueKey}</span>
            <span class="text-sm opacity-75">${showSmartValues ? '{{issue.type}}' : data.type}</span>
          </div>
        </div>
      </div>
      
      <div class="${isCompact ? 'p-4' : 'p-6'} space-y-4">
        <div class="space-y-2">
          <h1 class="${isCompact ? 'text-lg' : 'text-xl'} font-semibold text-gray-900">
            <a href="${issueUrl}" class="hover:text-blue-600 hover:underline" target="_blank">
              ${showSmartValues ? '{{issue.summary}}' : data.summary}
            </a>
          </h1>
          ${!isCompact ? `
          <p class="text-sm text-gray-600">
            ${showSmartValues ? '{{issue.description}}' : data.description}
          </p>
          ` : ''}
        </div>

        ${generateFields(data, isCompact)}

        <div>
          <a href="${issueUrl}" 
             class="inline-flex items-center justify-center ${isCompact ? 'px-3 py-1.5 text-sm' : 'px-4 py-2'} font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm transition-colors"
             target="_blank">
            <svg class="w-4 h-4 ${isCompact ? 'mr-1.5' : 'mr-2'}" fill="currentColor" viewBox="0 0 20 20">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l4-4 4 4h-3v4h-2z"/>
            </svg>
            View in Jira
          </a>
        </div>
      </div>
    </div>
  `;

  // Generate comments section if needed
  if (commentDisplayMode !== 'none' && filteredComments.length > 0) {
    const isCommentsCompact = commentTemplate === 'compact';
    template += `
      <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-6">
        <div class="color-block text-gray-700 ${isCommentsCompact ? 'p-4' : 'p-5'} font-medium" style="background-color: ${commentsHeaderColor};">
          <span>Comments ${commentDisplayMode === 'compact' ? '(Latest)' : '(Last 5)'}</span>
        </div>
        <div class="divide-y divide-gray-100">
          ${filteredComments.map(comment => `
            <div class="${isCommentsCompact ? 'p-4' : 'p-6'}">
              <div class="flex items-start space-x-3 mb-2">
                <div class="flex-1">
                  <div class="flex items-center space-x-2">
                    <div class="text-sm font-medium text-gray-900">
                      ${showSmartValues ? '{{comment.author}}' : comment.author}
                    </div>
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    <span>Created: ${showSmartValues ? '{{comment.created}}' : comment.created}</span>
                  </div>
                </div>
              </div>
              <div class="prose prose-sm max-w-none text-gray-600">
                ${showSmartValues ? '{{comment.content}}' : comment.content}
              </div>
            </div>
          `).join('')}
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
          ${showSmartValues ? `
          <span>•</span>
          <span>Updated {{issue.updated}}</span>
          ` : `
          <span>•</span>
          <span>Updated ${data.updated}</span>
          `}
        </div>
        <div>
          <a href="${issueUrl}" class="text-blue-600 hover:underline" target="_blank">View in Jira</a>
        </div>
      </div>
      <div class="mt-2 text-xs text-gray-400 text-right">
        Generated by Jira Email Template Generator
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
        ${generateFields(data, false)}
      </div>

      <div style="margin-bottom: 24px;">
        <a href="${jiraBaseUrl}/browse/{{issue.key}}"
           style="display: inline-flex; align-items: center; padding: 8px 16px; background-color: #0052CC; color: white; text-decoration: none; border-radius: 4px; font-size: 14px; font-weight: 500;">
          <svg style="width: 16px; height: 16px; margin-right: 8px;" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l4-4 4 4h-3v4h-2z"/>
          </svg>
          View in Jira
        </a>
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

// Function to generate HTML for copying
function generateHTML() {
  // Always use smart values for the minified output
  showSmartValues = true;
  const template = generateEmailTemplate(issueTemplate, templateData[currentProduct].smart, false);
  showSmartValues = false; // Reset back to previous state
  
  // Update the output
  document.getElementById("htmlOutput").value = template;
}

// Function to update preview
function updatePreview() {
  const previewContainer = document.getElementById('previewArea');
  if (previewContainer) {
    const data = showSmartValues ? templateData[currentProduct].smart : templateData[currentProduct].mock;
    previewContainer.innerHTML = generateTemplate(issueTemplate, data);
  }
}

// Function to update template buttons
function updateTemplateButtons() {
  const buttons = document.querySelectorAll('[data-template]');
  buttons.forEach(button => {
    const isActive = button.dataset.template === issueTemplate;
    button.classList.toggle('bg-blue-600', isActive);
    button.classList.toggle('text-white', isActive);
    button.classList.toggle('bg-gray-100', !isActive);
    button.classList.toggle('text-gray-700', !isActive);
  });
}

// Function to update comments buttons
function updateCommentButtons() {
  const buttons = document.querySelectorAll('[data-comment-display]');
  buttons.forEach(button => {
    const isActive = button.dataset.commentDisplay === commentDisplayMode;
    button.classList.toggle('bg-blue-600', isActive);
    button.classList.toggle('text-white', isActive);
    button.classList.toggle('bg-gray-100', !isActive);
    button.classList.toggle('text-gray-700', !isActive);
  });
}

// Function to change template type
function changeTemplate(template) {
  issueTemplate = template;
  updatePreview();
  updateTemplateButtons();
}

// Function to change comment display mode
function changeCommentDisplay(mode) {
  commentDisplayMode = mode;
  updatePreview();
  updateCommentButtons();
}

// Function to toggle between mock data and smart values
function toggleSmartValues() {
  showSmartValues = !showSmartValues;
  updatePreview();
}

// Function to toggle comments visibility
function toggleComments() {
  commentDisplayMode = commentDisplayMode === 'none' ? 'full' : 'none';
  updatePreview();
  updateCommentButtons();
}

// Initialize UI state
function initializeUI() {
  // Set initial active states for buttons
  const defaultProductBtn = document.querySelector('[data-product="software"]');
  if (defaultProductBtn) {
    defaultProductBtn.classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700');
  }
  
  // Set initial template button state
  const defaultTemplateBtn = document.querySelector('[data-template="full"]');
  if (defaultTemplateBtn) {
    defaultTemplateBtn.classList.add('bg-blue-600', 'text-white');
    defaultTemplateBtn.classList.remove('bg-gray-100', 'text-gray-700');
  }
  
  // Initialize UI state
  updatePreview();
  updateTemplateButtons();
  updateCommentButtons();
  
  // Set up event listeners for product type buttons
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

  // Set up event listeners for template buttons
  document.querySelectorAll('[data-template]').forEach(button => {
    button.addEventListener('click', (e) => {
      changeTemplate(e.target.dataset.template);
    });
  });

  // Set up event listeners for comment display buttons
  document.querySelectorAll('[data-comment-display]').forEach(button => {
    button.addEventListener('click', (e) => {
      changeCommentDisplay(e.target.dataset.commentDisplay);
    });
  });

  // Set up event listener for generate HTML button
  const generateHtmlBtn = document.getElementById('generateHTML');
  if (generateHtmlBtn) {
    generateHtmlBtn.addEventListener('click', generateHTML);
  }

  // Set up event listener for copy HTML button
  const copyHtmlBtn = document.getElementById('copyHTML');
  if (copyHtmlBtn) {
    copyHtmlBtn.addEventListener('click', async () => {
      const htmlOutput = document.getElementById('htmlOutput');
      if (htmlOutput && htmlOutput.value) {
        try {
          await navigator.clipboard.writeText(htmlOutput.value);
          
          // Visual feedback
          const originalText = copyHtmlBtn.innerHTML;
          copyHtmlBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
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

  // Set up event listener for smart values toggle
  const smartValuesToggle = document.getElementById('toggleView');
  if (smartValuesToggle) {
    smartValuesToggle.addEventListener('click', toggleSmartValues);
  }

  // Set up event listener for comments toggle
  const commentsToggle = document.getElementById('commentsToggle');
  if (commentsToggle) {
    commentsToggle.addEventListener('click', toggleComments);
  }

  // Set up event listener for Jira URL input
  const jiraUrlInput = document.getElementById('jiraUrl');
  if (jiraUrlInput) {
    jiraUrlInput.addEventListener('input', (e) => {
      jiraBaseUrl = e.target.value.trim();
      updatePreview();
    });
  }

  // Set up event listeners for color pickers
  const issueHeaderPicker = document.getElementById('issueHeaderColor');
  const commentsHeaderPicker = document.getElementById('commentsHeaderColor');
  
  if (issueHeaderPicker) {
    issueHeaderPicker.value = issueHeaderColor;
    ['input', 'change'].forEach(event => {
      issueHeaderPicker.addEventListener(event, (e) => assignHeaderColor('issue', e.target.value));
    });
  }
  
  if (commentsHeaderPicker) {
    commentsHeaderPicker.value = commentsHeaderColor;
    ['input', 'change'].forEach(event => {
      commentsHeaderPicker.addEventListener(event, (e) => assignHeaderColor('comments', e.target.value));
    });
  }

  // Set up event listener for comment display mode
  const commentModeSelect = document.getElementById('commentDisplayMode');
  if (commentModeSelect) {
    commentModeSelect.value = commentDisplayMode;
    commentModeSelect.addEventListener('change', (e) => {
      commentDisplayMode = e.target.value;
      updatePreview();
    });
  }
}

// Initialize the page
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeUI);
} else {
  initializeUI();
}

// Make functions available globally
window.changeTemplate = changeTemplate;
window.toggleSmartValues = toggleSmartValues;
window.toggleComments = toggleComments;
