import {
  currentProduct,
  currentTemplate,
  showSmartValues,
  showComments,
  // commentDisplayMode, // Not used directly in this file
  // issueHeaderColor, // Not used directly in this file
  // commentsHeaderColor, // Not used directly in this file
  jiraBaseUrl,
  templateData,
  setCurrentProduct,
  setCurrentTemplate,
  setShowSmartValues,
  setShowComments,
  setCommentDisplayMode,
  setIssueHeaderColor,
  setCommentsHeaderColor,
  setJiraBaseUrl,
} from './state.js';

import {
  generateTemplate,
  generateEmailTemplate,
  // getJiraIssueUrl, // Not directly used by UI controller, but by generateTemplate
  // generateFields, // Not directly used by UI controller, but by generateTemplate
  // getFilteredComments // Not directly used by UI controller, but by generateTemplate
} from './templateGenerator.js';

// Function to update the template preview
export function updatePreview() {
  const preview = document.getElementById('previewArea');
  if (!preview) return;

  const data = showSmartValues
    ? templateData[currentProduct].smart
    : templateData[currentProduct].mock;
  const template = generateTemplate(currentTemplate, data, showComments);
  preview.innerHTML = template;
}

// Function to generate HTML for copying
export function generateHTML() {
  // Always use smart values for the minified output for generateEmailTemplate
  const previousShowSmartValues = showSmartValues;
  setShowSmartValues(true); // Temporarily set to true for email generation

  const emailData = templateData[currentProduct].smart; // Use smart data
  const template = generateEmailTemplate(
    currentTemplate,
    emailData,
    showComments,
  );

  setShowSmartValues(previousShowSmartValues); // Reset to original state

  const minifiedTemplate = template
    .replace(/\s+/g, ' ')
    .replace(/>\s+</g, '><')
    .replace(/\n/g, '')
    .trim();

  const htmlOutputEl = document.getElementById('htmlOutput');
  if (htmlOutputEl) {
    htmlOutputEl.value = minifiedTemplate;
  }
}

// Function to change template type
export function changeTemplate(template) {
  setCurrentTemplate(template);
  updatePreview();
  updateTemplateButtons();
  generateHTML(); // Auto-update HTML output
}

// Function to toggle between mock data and smart values
export function toggleSmartValues() {
  setShowSmartValues(!showSmartValues);
  updatePreview();
  updateToggleButton();
  generateHTML(); // Auto-update HTML output
}

// Function to toggle comments visibility
export function toggleComments() {
  setShowComments(!showComments);
  const commentDisplayOptions = document.getElementById(
    'commentDisplayOptions',
  );
  if (commentDisplayOptions) {
    commentDisplayOptions.style.display = showComments ? 'flex' : 'none';
  }
  updateCommentsToggle();
  updatePreview();
  generateHTML(); // Auto-update HTML output
}

// Function to handle comment display mode change
export function changeCommentDisplay(mode) {
  setCommentDisplayMode(mode);

  document.querySelectorAll('[data-comment-display]').forEach((button) => {
    if (button.dataset.commentDisplay === mode) {
      button.classList.remove('bg-gray-100', 'text-gray-700');
      button.classList.add('bg-blue-600', 'text-white');
    } else {
      button.classList.remove('bg-blue-600', 'text-white');
      button.classList.add('bg-gray-100', 'text-gray-700');
    }
  });
  updatePreview();
  generateHTML(); // Auto-update HTML output
}

// Function to update the template selection buttons
export function updateTemplateButtons() {
  document.querySelectorAll('[data-template]').forEach((button) => {
    const isActive = button.dataset.template === currentTemplate;
    button.classList.toggle('bg-blue-600', isActive);
    button.classList.toggle('text-white', isActive);
    button.classList.toggle('bg-gray-100', !isActive);
    button.classList.toggle('text-gray-700', !isActive);
  });
}

// Function to update the toggle button text
export function updateToggleButton() {
  const toggleButton = document.getElementById('toggleView');
  if (toggleButton) {
    toggleButton.textContent = showSmartValues
      ? 'Show Mock Data'
      : 'Show Smart Values';
    toggleButton.classList.toggle('bg-blue-600', !showSmartValues);
    toggleButton.classList.toggle('bg-gray-100', showSmartValues);
    toggleButton.classList.toggle('text-white', !showSmartValues);
    toggleButton.classList.toggle('text-gray-700', showSmartValues);
  }
}

// Function to update the comments toggle button
export function updateCommentsToggle() {
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
export function triggerColorPicker(section) {
  const colorPickerId =
    section === 'issue' ? 'issueColorPicker' : 'commentsColorPicker';
  const colorPicker = document.getElementById(colorPickerId);
  if (colorPicker) {
    colorPicker.click();
  }
}

// Function to assign the selected color to the active header
export function assignHeaderColor(section, color) {
  if (section === 'issue') {
    setIssueHeaderColor(color);
  } else if (section === 'comments') {
    setCommentsHeaderColor(color);
  }
  updatePreview();
  generateHTML(); // Auto-update HTML output
}

// Initialize the page and set up event listeners
export function initializeUI() {
  // Set Jira URL from localStorage
  const jiraUrlInput = document.getElementById('jiraUrl');
  if (jiraUrlInput) {
    jiraUrlInput.value = jiraBaseUrl; // jiraBaseUrl is now loaded from localStorage in state.js
  }

  // Set initial active states for buttons
  const defaultProductBtn = document.querySelector('[data-product="software"]');
  if (defaultProductBtn) {
    defaultProductBtn.classList.add(
      'bg-blue-600',
      'text-white',
      'hover:bg-blue-700',
    );
    defaultProductBtn.classList.remove(
      'bg-gray-100',
      'text-gray-700',
      'hover:bg-gray-200',
    );
  }

  const defaultTemplateBtn = document.querySelector('[data-template="full"]');
  if (defaultTemplateBtn) {
    defaultTemplateBtn.classList.add('bg-blue-600', 'text-white');
    defaultTemplateBtn.classList.remove('bg-gray-100', 'text-gray-700');
  }

  // Initialize UI state
  updatePreview();
  updateToggleButton();
  updateTemplateButtons();
  updateCommentsToggle();
  generateHTML(); // Initial generation of HTML output

  // Set up event listeners
  const generateHtmlBtn = document.getElementById('generateHTML');
  if (generateHtmlBtn) {
    generateHtmlBtn.addEventListener('click', generateHTML);
  }

  const copyHtmlBtn = document.getElementById('copyHTML');
  if (copyHtmlBtn) {
    copyHtmlBtn.addEventListener('click', async () => {
      const htmlOutput = document.getElementById('htmlOutput');
      if (htmlOutput && htmlOutput.value) {
        try {
          await navigator.clipboard.writeText(htmlOutput.value);
          const originalText = copyHtmlBtn.innerHTML;
          copyHtmlBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          `;
          copyHtmlBtn.classList.remove(
            'bg-gray-100',
            'text-gray-700',
            'hover:bg-gray-200',
          );
          copyHtmlBtn.classList.add('bg-green-50', 'text-green-600');
          setTimeout(() => {
            copyHtmlBtn.innerHTML = originalText;
            copyHtmlBtn.classList.remove('bg-green-50', 'text-green-600');
            copyHtmlBtn.classList.add(
              'bg-gray-100',
              'text-gray-700',
              'hover:bg-gray-200',
            );
          }, 2000);
        } catch (err) {
          console.error('Failed to copy text: ', err);
          // Fallback for older browsers or environments where clipboard API might not be available
          htmlOutput.select();
          document.execCommand('copy'); // This is deprecated but can serve as a fallback
        }
      }
    });
  }

  const smartValuesToggle = document.getElementById('toggleView');
  if (smartValuesToggle) {
    smartValuesToggle.addEventListener('click', toggleSmartValues);
  }

  const commentsToggleBtn = document.getElementById('commentsToggle');
  if (commentsToggleBtn) {
    commentsToggleBtn.addEventListener('click', toggleComments);
  }

  document.querySelectorAll('[data-template]').forEach((button) => {
    button.addEventListener('click', (e) => {
      changeTemplate(e.target.dataset.template);
    });
  });

  document.querySelectorAll('[data-product]').forEach((button) => {
    button.addEventListener('click', (e) => {
      document.querySelectorAll('[data-product]').forEach((btn) => {
        btn.classList.remove('bg-blue-600', 'text-white', 'hover:bg-blue-700');
        btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
      });
      e.target.classList.remove(
        'bg-gray-100',
        'text-gray-700',
        'hover:bg-gray-200',
      );
      e.target.classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700');
      setCurrentProduct(e.target.dataset.product);
      updatePreview();
      generateHTML(); // Auto-update HTML output
    });
  });

  // const jiraUrlInput = document.getElementById('jiraUrl'); // Already handled above for initialization
  if (jiraUrlInput) {
    // Check again as it's in a different scope
    jiraUrlInput.addEventListener('input', (e) => {
      setJiraBaseUrl(e.target.value.trim()); // This now also saves to localStorage via state.js
      updatePreview();
      generateHTML(); // Auto-update HTML output
    });
  }

  document.querySelectorAll('[data-comment-display]').forEach((button) => {
    button.addEventListener('click', (e) => {
      changeCommentDisplay(e.target.dataset.commentDisplay);
    });
  });

  // Make functions available globally if needed (e.g., for inline event handlers in HTML)
  // Consider refactoring HTML to avoid this if possible, by attaching events directly in JS
  window.triggerColorPicker = triggerColorPicker;
  window.assignHeaderColor = assignHeaderColor;
}
