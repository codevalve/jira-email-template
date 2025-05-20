import {
  templateData,
  currentProduct,
  showSmartValues,
  commentDisplayMode,
  issueHeaderColor,
  commentsHeaderColor,
  jiraBaseUrl,
} from './state.js';

// Function to get Jira issue URL
export function getJiraIssueUrl(issueKey) {
  return showSmartValues
    ? `\${jiraBaseUrl}/browse/\${issueKey}`
    : `${jiraBaseUrl}/browse/${issueKey}`;
}

// Function to generate fields based on product type
export function generateFields() {
  const data = showSmartValues
    ? templateData[currentProduct].smart
    : templateData[currentProduct].mock;
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

// Function to get filtered comments based on display mode
export function getFilteredComments(comments) {
  if (!Array.isArray(comments)) return [];

  // Sort comments by date, most recent first
  const sortedComments = [...comments].sort(
    (a, b) => new Date(b.created) - new Date(a.created),
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
  return result;
}

// Function to generate template
export function generateTemplate(templateType, data, showCommentsState) {
  let template = '';

  let commentsToDisplay = [];
  if (showCommentsState && !showSmartValues && Array.isArray(data.comments)) {
    commentsToDisplay = getFilteredComments(data.comments);
  }
  // For smart values, the looping logic will be embedded directly in the template string.

  const issueUrl = showSmartValues
    ? `\${jiraBaseUrl}/browse/\${data.issueKey}`
    : getJiraIssueUrl(data.issueKey);

  if (templateType === 'compact') {
    template = `
      <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div
          class="color-block text-white p-3 font-semibold flex items-center justify-between"
          style="background-color: ${issueHeaderColor};"
          onclick="window.triggerColorPicker('issue')">
          <div class="flex items-center space-x-2">
            <span class="text-base">${showSmartValues ? '{{issue.key}}' : data.issueKey}</span>
            <span class="text-xs opacity-75">${showSmartValues ? '{{issue.type}}' : data.type}</span>
          </div>
          <input
            type="color"
            id="issueColorPicker"
            class="invisible w-0"
            value="${issueHeaderColor}"
            onchange="window.assignHeaderColor('issue', this.value)"
            oninput="window.assignHeaderColor('issue', this.value)">
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
            ${
              currentProduct === 'software'
                ? `
              <div>
                <span class="text-gray-500">Sprint:</span>
                <span class="text-gray-900 ml-1">${showSmartValues ? '{{issue.sprint}}' : data.sprint}</span>
              </div>
            `
                : currentProduct === 'servicedesk'
                  ? `
              <div>
                <span class="text-gray-500">SLA:</span>
                <span class="text-gray-900 ml-1">${showSmartValues ? '{{issue.sla}}' : data.sla}</span>
              </div>
            `
                  : `
              <div>
                <span class="text-gray-500">Due Date:</span>
                <span class="text-gray-900 ml-1">${showSmartValues ? '{{issue.dueDate}}' : data.dueDate}</span>
              </div>
            `
            }
          </div>

          ${
            currentProduct === 'software'
              ? `
            <div class="space-y-1">
              <div class="text-xs text-gray-500">Components</div>
              <div class="flex flex-wrap gap-1">
                ${
                  showSmartValues
                    ? `
                  {{#issue.components}}
                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {{.}}
                    </span>
                  {{/issue.components}}
                `
                    : Array.isArray(data.components)
                      ? data.components
                          .map(
                            (comp) => `
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    ${comp}
                  </span>
                `,
                          )
                          .join('')
                      : ''
                }
              </div>
            </div>
          `
              : ''
          }
        </div>
      </div>
    `;

    if (showCommentsState) { // Check if comments should be shown at all
      // For compact view, always use the smart value loop for comments section if shown
      // The actual rendering of comments (mock or smart) is handled inside this block
      const compactCommentsHtml = showSmartValues
        ? `
          {{#issue.comments}}
            <div>
              <div class="flex items-center justify-between text-xs mb-1">
                <span class="font-medium text-gray-900">{{author.displayName}}</span>
                <span class="text-gray-500">{{created.format("yyyy-MM-dd HH:mm")}}</span>
              </div>
              <div class="text-gray-600">{{{body.html}}}</div>
            </div>
          {{/issue.comments}}
          {{^issue.comments}}
            <!-- Optionally, message if no comments for smart values -->
          {{/issue.comments}}`
        : commentsToDisplay.length > 0
          ? commentsToDisplay
            .slice(0, 1) // Mock data: show only the latest for compact view
            .map(
              (comment) => `
            <div>
              <div class="flex items-center justify-between text-xs mb-1">
                <span class="font-medium text-gray-900">${comment.author}</span>
                <span class="text-gray-500">${comment.created}</span>
              </div>
              <div class="text-gray-600">${comment.content}</div>
            </div>`,
            )
            .join('')
          : '<!-- No mock comments to display -->';

      if (showSmartValues || commentsToDisplay.length > 0) { // Only add comments section if there's something to show
        template += `
          <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-4">
            <div
              class="color-block text-gray-700 p-2 font-medium flex items-center justify-between"
              style="background-color: ${commentsHeaderColor};"
              onclick="window.triggerColorPicker('comments')">
              <span class="text-sm">Latest Comment</span>
              <input
                type="color"
                id="commentsColorPicker"
                class="invisible w-0"
                value="${commentsHeaderColor}"
                onchange="window.assignHeaderColor('comments', this.value)"
                oninput="window.assignHeaderColor('comments', this.value)">
            </div>
            <div class="p-3 text-sm">
              ${compactCommentsHtml}
            </div>
          </div>
        `;
      }
    }
  } else if (templateType === 'full') {
    template += `
      <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div
          class="color-block text-white p-5 font-semibold flex items-center justify-between"
          style="background-color: ${issueHeaderColor};"
          onclick="window.triggerColorPicker('issue')">
          <div class="flex items-center space-x-3">
            <span class="text-lg">${showSmartValues ? '{{issue.key}}' : data.issueKey}</span>
            <span class="text-sm opacity-75">${showSmartValues ? '{{issue.type}}' : data.type}</span>
          </div>
          <input
            type="color"
            id="issueColorPicker"
            class="hidden-color-picker"
            value="${issueHeaderColor}"
            onchange="window.assignHeaderColor('issue', this.value)"
            oninput="window.assignHeaderColor('issue', this.value)">
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

          ${
            currentProduct === 'software'
              ? `
            <div class="space-y-2">
              <div class="text-sm text-gray-500 font-medium">Components</div>
              <div class="flex flex-wrap gap-2">
                ${
                  showSmartValues
                    ? `
                  {{#issue.components}}
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {{.}}
                    </span>
                  {{/issue.components}}
                `
                    : Array.isArray(data.components)
                      ? data.components
                          .map(
                            (comp) => `
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    ${comp}
                  </span>
                `,
                          )
                          .join('')
                      : ''
                }
              </div>
            </div>

            <div class="space-y-2">
              <div class="text-sm text-gray-500 font-medium">Labels</div>
              <div class="flex flex-wrap gap-2">
                ${
                  showSmartValues
                    ? `
                  {{#issue.labels}}
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {{.}}
                    </span>
                  {{/issue.labels}}
                `
                    : Array.isArray(data.labels)
                      ? data.labels
                          .map(
                            (label) => `
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    ${label}
                  </span>
                `,
                          )
                          .join('')
                      : ''
                }
              </div>
            </div>
          `
              : ''
          }
        </div>
      </div>
    `;

    if (showCommentsState) { // Check if comments should be shown
      const fullCommentsHtml = showSmartValues
        ? `
          {{#issue.comments}}
            <div class="p-6">
              <div class="flex items-start space-x-3 mb-2">
                <div class="flex-1">
                  <div class="flex items-center space-x-2">
                    <div class="text-sm font-medium text-gray-900">{{author.displayName}}</div>
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    <span>Created: {{created.format("yyyy-MM-dd HH:mm")}}</span>
                  </div>
                </div>
              </div>
              <div class="prose prose-sm max-w-none text-gray-600">
                {{{body.html}}}
              </div>
            </div>
          {{/issue.comments}}
          {{^issue.comments}}
            <div class="p-6 text-sm text-gray-500">No comments to display.</div>
          {{/issue.comments}}`
        : commentsToDisplay.length > 0
          ? commentsToDisplay
            .map(
              (comment) => `
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
            </div>`,
            )
            .join('')
          : '<div class="p-6 text-sm text-gray-500">No comments to display.</div>';

      template += `
        <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-6">
          <div
            class="color-block text-gray-700 p-5 font-medium flex items-center justify-between"
            style="background-color: ${commentsHeaderColor};"
            onclick="window.triggerColorPicker('comments')">
            <span>Comments</span>
            <input
              type="color"
              id="commentsColorPicker"
              class="hidden-color-picker"
              value="${commentsHeaderColor}"
              onchange="window.assignHeaderColor('comments', this.value)"
              oninput="window.assignHeaderColor('comments', this.value)">
          </div>
          <div class="divide-y divide-gray-100">
            ${fullCommentsHtml}
          </div>
        </div>
      `;
    }
  } else {
    // This is the 'default' or 'basic' template style
    template += `
      <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div
          class="color-block text-white p-4 font-semibold flex items-center justify-between"
          style="background-color: ${issueHeaderColor};"
          onclick="window.triggerColorPicker('issue')">
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
            onchange="window.assignHeaderColor('issue', this.value)"
            oninput="window.assignHeaderColor('issue', this.value)">
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

          ${
            currentProduct === 'software' && Array.isArray(data.labels)
              ? `
            <div class="flex flex-wrap gap-1">
              ${data.labels
                .map(
                  (label) => `
                <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  ${label}
                </span>
              `,
                )
                .join('')}
            </div>
          `
              : ''
          }

          ${
            showCommentsState // Check if comments should be shown
              ? (() => {
                  const defaultCommentsHtml = showSmartValues
                    ? `
                      {{#issue.comments}}
                        <div class="p-4">
                          <div class="flex items-start space-x-3 mb-2">
                            <div class="flex-1">
                              <div class="flex items-center space-x-2">
                                <div class="text-sm font-medium text-gray-900">{{author.displayName}}</div>
                              </div>
                              <div class="text-xs text-gray-500 mt-1">
                                <span>Created: {{created.format("yyyy-MM-dd HH:mm")}}</span>
                              </div>
                            </div>
                          </div>
                          <div class="mt-1 text-sm text-gray-600">{{{body.html}}}</div>
                        </div>
                      {{/issue.comments}}
                      {{^issue.comments}}
                        <div class="p-4 text-sm text-gray-500">No comments to display.</div>
                      {{/issue.comments}}`
                    : commentsToDisplay.length > 0
                      ? commentsToDisplay
                        .map(
                          (comment) => `
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
                        </div>`,
                        )
                        .join('')
                      : '<div class="p-4 text-sm text-gray-500">No comments to display.</div>';

                  return `
                    <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-4">
                      <div
                        class="color-block p-4 font-medium" style="background-color: ${commentsHeaderColor};"
                        onclick="window.triggerColorPicker('comments')">
                        <span>Comments</span>
                        <input
                          type="color"
                          id="commentsColorPicker"
                          class="hidden-color-picker"
                          value="${commentsHeaderColor}"
                          onchange="window.assignHeaderColor('comments', this.value)"
                          oninput="window.assignHeaderColor('comments', this.value)">
                      </div>
                      <div class="divide-y divide-gray-100">
                        ${defaultCommentsHtml}
                      </div>
                    </div>
                  `;
                })()
              : ''
          }
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

// Function to generate email template HTML
export function generateEmailTemplate(templateType, data, showCommentsState) {
  let commentsToDisplayForMock = [];
  if (showCommentsState && !showSmartValues && Array.isArray(data.comments)) {
    commentsToDisplayForMock = getFilteredComments(data.comments);
  }
  // For smart values, the looping logic will be embedded directly in the template string.

  const issueHtml = `
    <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="text-white p-5 font-semibold" style="background-color: ${issueHeaderColor};">
        <div class="flex items-center space-x-3">
          <span class="text-lg">${data.issueKey}</span>
          <span class="text-sm opacity-75">${data.type}</span>
        </div>
        <h1 class="text-xl mt-2">
          <a href="${jiraBaseUrl}/browse/${data.issueKey}" class="hover:underline" target="_blank">
            ${data.summary}
          </a>
        </h1>
      </div>
      <div class="p-6 space-y-4">
        ${
          templateType === 'full'
            ? `
          <div class="space-y-2">
            <div class="text-sm text-gray-600">${data.description}</div>
          </div>
        `
            : ''
        }
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${generateFields()}
        </div>

        ${
          currentProduct === 'software'
            ? `
          <div class="space-y-2">
            <div class="text-sm text-gray-500 font-medium">Components</div>
            <div class="flex flex-wrap gap-2">
              ${
                Array.isArray(data.components)
                  ? data.components
                      .map(
                        (comp) => `
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  ${comp}
                </span>
              `,
                      )
                      .join('')
                  : ''
              }
            </div>
          </div>

          <div class="space-y-2">
            <div class="text-sm text-gray-500 font-medium">Labels</div>
            <div class="flex flex-wrap gap-2">
              ${
                Array.isArray(data.labels)
                  ? data.labels
                      .map(
                        (label) => `
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  ${label}
                </span>
              `,
                      )
                      .join('')
                  : ''
              }
            </div>
          </div>
        `
            : ''
        }
      </div>
    </div>
  `;

  const commentsHtml = showCommentsState
    ? showSmartValues
      ? `
    <div class="mt-6 max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="p-4 font-medium" style="background-color: ${commentsHeaderColor};">
        Comments
      </div>
      <div class="divide-y divide-gray-100">
        {{#issue.comments}}
          <div class="p-4">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-gray-900">{{author.displayName}}</span>
              <span class="text-sm text-gray-500">{{created.format("yyyy-MM-dd HH:mm")}}</span>
            </div>
            <div class="mt-1 text-sm text-gray-600">{{{body.html}}}</div>
          </div>
        {{/issue.comments}}
        {{^issue.comments}}
          <div class="p-4 text-sm text-gray-500">No comments to display.</div>
        {{/issue.comments}}
      </div>
    </div>`
      : commentsToDisplayForMock.length > 0
        ? `
    <div class="mt-6 max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="p-4 font-medium" style="background-color: ${commentsHeaderColor};">
        Comments
      </div>
      <div class="divide-y divide-gray-100">
          ${commentsToDisplayForMock
            .map(
              (comment) => `
          <div class="p-4">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-gray-900">${comment.author}</span>
              <span class="text-sm text-gray-500">${comment.created}</span>
            </div>
            <div class="mt-1 text-sm text-gray-600">${comment.content}</div>
          </div>`,
            )
            .join('')}
      </div>
    </div>`
        : '<!-- No mock comments to display for email -->'
    : ''; // If showCommentsState is false

  const viewInJiraButtonHtml = `
    <div class="mt-6 max-w-2xl mx-auto">
      <a href="${jiraBaseUrl}/browse/${data.issueKey}" 
         class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
         target="_blank">
        View in Jira
      </a>
    </div>
  `;

  // Return only the content that would go inside the <body> tag.
  // The outer HTML structure (doctype, html, head, body tags) and Tailwind script are removed.
  return `
  <div class="bg-gray-50 p-4">
    ${issueHtml}
    ${commentsHtml}
    ${viewInJiraButtonHtml}
  </div>`;
}
