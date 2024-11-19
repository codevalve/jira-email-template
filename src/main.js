import './style.css'

let issueHeaderColor = "#0052CC";
let commentsHeaderColor = "#f0f0f0";

// Sample template data
const sampleData = {
  issue: {
    summary: "Update user authentication flow",
    description: "We need to implement a more secure authentication system using OAuth 2.0 and add support for multi-factor authentication (MFA).",
    key: "AUTH-123",
    status: { name: "In Progress" },
    assignee: { displayName: "Jane Smith" },
    priority: { name: "High" },
    comments: [
      {
        author: { displayName: "John Doe" },
        body: { html: "I've started working on the OAuth implementation. Will need to coordinate with the security team for the proper scope definitions." },
        created: { format: () => "2023-11-15 10:30" }
      },
      {
        author: { displayName: "Sarah Johnson" },
        body: { html: "The security team has provided the required OAuth scopes. I'll share the documentation in the next team meeting." },
        created: { format: () => "2023-11-15 14:45" }
      }
    ]
  }
};

// Function to replace template variables with actual data
const replaceTemplateVars = (template, data) => {
  // Replace simple variables
  template = template.replace(/{{([\w.]+)}}/g, (match, path) => {
    const value = path.split('.').reduce((obj, key) => obj && obj[key], data);
    return value !== undefined ? value : match;
  });

  // Handle {{#each}} blocks
  template = template.replace(
    /{{#([\w.]+)}}([\s\S]*?){{\/\1}}/g,
    (match, path, content) => {
      const array = path.split('.').reduce((obj, key) => obj && obj[key], data);
      if (Array.isArray(array)) {
        return array.map(item => replaceTemplateVars(content, { [path.split('.').pop()]: item })).join('');
      }
      return '';
    }
  );

  return template;
};

// Function to update the preview dynamically
const updatePreview = () => {
  const previewArea = document.getElementById("previewArea");
  const template = `
    <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div
        class="color-block text-white p-5 font-semibold flex items-center justify-between"
        style="background-color: ${issueHeaderColor};"
        onclick="triggerColorPicker('issue')">
        <span>Issue Details</span>
        <input
          type="color"
          id="issueColorPicker"
          class="hidden-color-picker"
          value="${issueHeaderColor}"
          onchange="assignHeaderColor('issue', this.value)"
          oninput="assignHeaderColor('issue', this.value)">
      </div>
      <div class="p-6 space-y-3">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-1">
            <div class="text-sm text-gray-500 font-medium">Summary</div>
            <div class="text-gray-700">{{issue.summary}}</div>
          </div>
          <div class="space-y-1">
            <div class="text-sm text-gray-500 font-medium">Key</div>
            <div class="text-gray-700">{{issue.key}}</div>
          </div>
          <div class="space-y-1">
            <div class="text-sm text-gray-500 font-medium">Status</div>
            <div class="text-gray-700">{{issue.status.name}}</div>
          </div>
          <div class="space-y-1">
            <div class="text-sm text-gray-500 font-medium">Priority</div>
            <div class="text-gray-700">{{issue.priority.name}}</div>
          </div>
        </div>
        <div class="space-y-1">
          <div class="text-sm text-gray-500 font-medium">Description</div>
          <div class="text-gray-700">{{issue.description}}</div>
        </div>
        <div class="space-y-1">
          <div class="text-sm text-gray-500 font-medium">Assignee</div>
          <div class="text-gray-700">{{issue.assignee.displayName}}</div>
        </div>
      </div>
    </div>

    <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
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
      <div class="p-6">
        {{#issue.comments}}
        <div class="mb-6 last:mb-0">
          <div class="flex items-start space-x-3 mb-2">
            <div class="flex-1">
              <div class="text-sm font-medium text-gray-700">{{author.displayName}}</div>
              <div class="text-xs text-gray-500">{{created.format}}</div>
            </div>
          </div>
          <div class="text-gray-600 text-sm">{{body.html}}</div>
        </div>
        {{/issue.comments}}
      </div>
    </div>
  `;

  previewArea.innerHTML = replaceTemplateVars(template, sampleData);
};

// Function to trigger the color picker
const triggerColorPicker = (section) => {
  const colorPickerId = section === "issue" ? "issueColorPicker" : "commentsColorPicker";
  const colorPicker = document.getElementById(colorPickerId);
  colorPicker.click();
};

// Function to assign the selected color to the active header
const assignHeaderColor = (section, color) => {
  if (section === "issue") {
    issueHeaderColor = color;
  } else if (section === "comments") {
    commentsHeaderColor = color;
  }
  updatePreview();
};

// Function to generate minified HTML
const generateHTML = () => {
  const template = `
    <!DOCTYPE html>
    <html>
    <body style="font-family: Inter, system-ui, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f9fafb;">
      <div style="border: 1px solid #e5e7eb; border-radius: 12px; max-width: 600px; margin: 0 auto 20px; background: white; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
        <div style="background-color: ${issueHeaderColor}; color: white; padding: 20px; font-weight: 600; border-radius: 12px 12px 0 0;">
          Issue Details
        </div>
        <div style="padding: 24px;">
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 20px;">
            <div>
              <div style="font-size: 0.875rem; color: #6b7280; font-weight: 500; margin-bottom: 4px;">Summary</div>
              <div style="color: #374151;">{{issue.summary}}</div>
            </div>
            <div>
              <div style="font-size: 0.875rem; color: #6b7280; font-weight: 500; margin-bottom: 4px;">Key</div>
              <div style="color: #374151;">{{issue.key}}</div>
            </div>
            <div>
              <div style="font-size: 0.875rem; color: #6b7280; font-weight: 500; margin-bottom: 4px;">Status</div>
              <div style="color: #374151;">{{issue.status.name}}</div>
            </div>
            <div>
              <div style="font-size: 0.875rem; color: #6b7280; font-weight: 500; margin-bottom: 4px;">Priority</div>
              <div style="color: #374151;">{{issue.priority.name}}</div>
            </div>
          </div>
          <div style="margin-bottom: 16px;">
            <div style="font-size: 0.875rem; color: #6b7280; font-weight: 500; margin-bottom: 4px;">Description</div>
            <div style="color: #374151;">{{issue.description}}</div>
          </div>
          <div>
            <div style="font-size: 0.875rem; color: #6b7280; font-weight: 500; margin-bottom: 4px;">Assignee</div>
            <div style="color: #374151;">{{issue.assignee.displayName}}</div>
          </div>
        </div>
      </div>
      <div style="border: 1px solid #e5e7eb; border-radius: 12px; max-width: 600px; margin: 0 auto; background: white; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
        <div style="background-color: ${commentsHeaderColor}; color: #374151; padding: 20px; font-weight: 600; border-radius: 12px 12px 0 0;">
          Comments
        </div>
        <div style="padding: 24px;">
          {{#issue.comments}}
          <div style="margin-bottom: 24px;">
            <div style="display: flex; align-items: flex-start; margin-bottom: 8px;">
              <div>
                <div style="font-size: 0.875rem; font-weight: 500; color: #374151;">{{author.displayName}}</div>
                <div style="font-size: 0.75rem; color: #6b7280;">{{created.format}}</div>
              </div>
            </div>
            <div style="font-size: 0.875rem; color: #4b5563;">{{body.html}}</div>
          </div>
          {{/issue.comments}}
        </div>
      </div>
    </body>
    </html>
  `;

  const minifiedHTML = replaceTemplateVars(template, sampleData).replace(/\s+/g, ' ').trim();
  document.getElementById("htmlOutput").textContent = minifiedHTML;
};

// Initialize the page with the default preview
document.addEventListener("DOMContentLoaded", updatePreview);

// Event listener for the Generate Minified HTML button
document.getElementById("generateHTML").addEventListener("click", generateHTML);

// Make functions available globally
window.triggerColorPicker = triggerColorPicker;
window.assignHeaderColor = assignHeaderColor;
