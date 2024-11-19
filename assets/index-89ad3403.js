(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();const y={software:{mock:{issueKey:"PROJ-123",summary:"Implement new feature for user authentication",type:"Story",priority:"High",status:"In Progress",assignee:"John Smith",reporter:"Sarah Johnson",created:"2024-01-15 10:30 AM",updated:"2024-01-16 2:45 PM",description:"As a user, I want to be able to authenticate using SSO...",components:["Authentication","Security"],labels:["frontend","sprint-1"],sprint:"Sprint 5",storyPoints:"8",comments:[{author:"Mike Brown",content:"Should we consider adding OAuth support?",created:"2024-01-15 3:20 PM"},{author:"Sarah Johnson",content:"Yes, OAuth would be great. Let's also consider OpenID Connect.",created:"2024-01-15 4:15 PM"},{author:"John Smith",content:"I can help with the OAuth implementation. I've done it before.",created:"2024-01-16 9:30 AM"},{author:"Mike Brown",content:"Great! I'll create a technical design doc for review.",created:"2024-01-16 10:45 AM"},{author:"Sarah Johnson",content:"Technical design approved. Ready to start implementation.",created:"2024-01-16 2:30 PM"},{author:"John Smith",content:"I'll start working on this today.",created:"2024-01-16 2:45 PM"}]},smart:{issueKey:"{{issue.key}}",summary:"{{issue.summary}}",type:"{{issue.type}}",priority:"{{issue.priority}}",status:"{{issue.status.name}}",assignee:"{{issue.assignee}}",reporter:"{{issue.reporter}}",created:"{{issue.created}}",updated:"{{issue.updated}}",description:"{{issue.description}}",components:"{{issue.components}}",labels:"{{issue.labels}}",sprint:"{{issue.sprint}}",storyPoints:"{{issue.storyPoints}}",comments:"{{issue.comments}}"}},servicedesk:{mock:{issueKey:"HELP-456",summary:"Cannot access email account",type:"IT Support",priority:"Medium",status:"Open",requestType:"Email Access",requester:"Jane Doe",assignee:"IT Support Team",created:"2024-01-15 9:15 AM",updated:"2024-01-15 9:30 AM",description:"I am unable to log into my work email since this morning...",impact:"Single user",sla:"4 hours",comments:[{author:"IT Support Team",content:"Have you tried resetting your password?",created:"2024-01-15 9:30 AM"},{author:"Jane Doe",content:"Yes, I tried that but still getting an error.",created:"2024-01-15 10:15 AM"},{author:"IT Support Team",content:"Can you share a screenshot of the error?",created:"2024-01-15 10:30 AM"},{author:"Jane Doe",content:"Screenshot attached. Error code is AUTH-123.",created:"2024-01-15 10:45 AM"},{author:"IT Support Team",content:"Thanks. This looks like an account lock. I'll unlock it now.",created:"2024-01-15 11:00 AM"}]},smart:{issueKey:"{{issue.key}}",summary:"{{issue.summary}}",type:"{{issue.type}}",priority:"{{issue.priority}}",status:"{{issue.status.name}}",requestType:"{{issue.requestType}}",requester:"{{issue.requester}}",assignee:"{{issue.assignee}}",created:"{{issue.created}}",updated:"{{issue.updated}}",description:"{{issue.description}}",impact:"{{issue.impact}}",sla:"{{issue.sla}}",comments:"{{issue.comments}}"}},core:{mock:{issueKey:"TASK-789",summary:"Quarterly financial report preparation",type:"Task",priority:"Medium",status:"To Do",assignee:"Finance Team",reporter:"Department Head",created:"2024-01-15 11:00 AM",updated:"2024-01-15 11:00 AM",description:"Prepare Q4 2023 financial report including...",dueDate:"2024-01-31",category:"Finance",comments:[{author:"Department Head",content:"Please include the new revenue streams in this report.",created:"2024-01-15 11:30 AM"},{author:"Finance Team",content:"Will do. Do you want a breakdown by product line?",created:"2024-01-15 1:45 PM"},{author:"Department Head",content:"Yes, please include product line breakdown.",created:"2024-01-15 2:00 PM"},{author:"Finance Team",content:"First draft ready for review.",created:"2024-01-16 9:15 AM"},{author:"Marketing Lead",content:"Can we add a section comparing Q4 performance to previous quarters?",created:"2024-01-16 10:30 AM"},{author:"Finance Team",content:"Good suggestion. I'll add historical comparison charts.",created:"2024-01-16 11:45 AM"},{author:"Department Head",content:"Also include YoY growth metrics for each product line.",created:"2024-01-16 2:15 PM"},{author:"Finance Team",content:"Updated draft with historical comparisons and YoY metrics ready for review.",created:"2024-01-16 4:30 PM"}]},smart:{issueKey:"{{issue.key}}",summary:"{{issue.summary}}",type:"{{issue.type}}",priority:"{{issue.priority}}",status:"{{issue.status.name}}",assignee:"{{issue.assignee}}",reporter:"{{issue.reporter}}",created:"{{issue.created}}",updated:"{{issue.updated}}",description:"{{issue.description}}",dueDate:"{{issue.dueDate}}",category:"{{issue.category}}",comments:"{{issue.comments}}"}}};let l="software",h="full",t=!1,d=!0,f="all",m="#0052CC",p="#E9E9E9",x="https://your-domain.atlassian.net";function k(s){return t?"${jiraBaseUrl}/browse/${issueKey}":`${x}/browse/${s}`}function b(){const s=t?y[l].smart:y[l].mock;let e="";return e+=`
    <div class="field-group">
      <div class="text-sm text-gray-500 font-medium">Status</div>
      <div class="text-sm text-gray-900">${t?"{{issue.status.name}}":s.status}</div>
    </div>
    <div class="field-group">
      <div class="text-sm text-gray-500 font-medium">Priority</div>
      <div class="text-sm text-gray-900">${t?"{{issue.priority}}":s.priority}</div>
    </div>
    <div class="field-group">
      <div class="text-sm text-gray-500 font-medium">Assignee</div>
      <div class="text-sm text-gray-900">${t?"{{issue.assignee}}":s.assignee}</div>
    </div>
    <div class="field-group">
      <div class="text-sm text-gray-500 font-medium">Reporter</div>
      <div class="text-sm text-gray-900">${t?"{{issue.reporter}}":s.reporter}</div>
    </div>
    <div class="field-group">
      <div class="text-sm text-gray-500 font-medium">Created</div>
      <div class="text-sm text-gray-900">${t?"{{issue.created}}":s.created}</div>
    </div>
    <div class="field-group">
      <div class="text-sm text-gray-500 font-medium">Updated</div>
      <div class="text-sm text-gray-900">${t?"{{issue.updated}}":s.updated}</div>
    </div>
  `,l==="software"?e+=`
      <div class="field-group">
        <div class="text-sm text-gray-500 font-medium">Sprint</div>
        <div class="text-sm text-gray-900">${t?"{{issue.sprint}}":s.sprint}</div>
      </div>
      <div class="field-group">
        <div class="text-sm text-gray-500 font-medium">Story Points</div>
        <div class="text-sm text-gray-900">${t?"{{issue.storyPoints}}":s.storyPoints}</div>
      </div>
    `:l==="servicedesk"?e+=`
      <div class="field-group">
        <div class="text-sm text-gray-500 font-medium">Request Type</div>
        <div class="text-sm text-gray-900">${t?"{{issue.requestType}}":s.requestType}</div>
      </div>
      <div class="field-group">
        <div class="text-sm text-gray-500 font-medium">Impact</div>
        <div class="text-sm text-gray-900">${t?"{{issue.impact}}":s.impact}</div>
      </div>
      <div class="field-group">
        <div class="text-sm text-gray-500 font-medium">SLA</div>
        <div class="text-sm text-gray-900">${t?"{{issue.sla}}":s.sla}</div>
      </div>
    `:l==="core"&&(e+=`
      <div class="field-group">
        <div class="text-sm text-gray-500 font-medium">Due Date</div>
        <div class="text-sm text-gray-900">${t?"{{issue.dueDate}}":s.dueDate}</div>
      </div>
      <div class="field-group">
        <div class="text-sm text-gray-500 font-medium">Category</div>
        <div class="text-sm text-gray-900">${t?"{{issue.category}}":s.category}</div>
      </div>
    `),e}function u(){const s=document.getElementById("previewArea"),e=t?y[l].smart:y[l].mock,r=A(h,e,d);s.innerHTML=r}function v(s){if(!Array.isArray(s))return[];console.log("Filtering comments. Mode:",f),console.log("Original comments:",s);const e=[...s].sort((o,a)=>new Date(a.created)-new Date(o.created));let r;switch(f){case"latest":r=e.slice(0,1);break;case"last5":r=e.slice(0,5);break;default:r=e}return console.log("Filtered comments:",r),r}function A(s,e,r){let o="",a=[];r&&(Array.isArray(e.comments)?a=v(e.comments):t&&(a=["{{comment.body.html}}"]));const n=t?`${x}/browse/${e.issueKey}`:k(e.issueKey);return s==="compact"?(o=`
      <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div
          class="color-block text-white p-3 font-semibold flex items-center justify-between"
          style="background-color: ${m};"
          onclick="triggerColorPicker('issue')">
          <div class="flex items-center space-x-2">
            <span class="text-base">${t?"{{issue.key}}":e.issueKey}</span>
            <span class="text-xs opacity-75">${t?"{{issue.type}}":e.type}</span>
          </div>
          <input
            type="color"
            id="issueColorPicker"
            class="invisible w-0"
            value="${m}"
            onchange="assignHeaderColor('issue', this.value)"
            oninput="assignHeaderColor('issue', this.value)">
        </div>
        <div class="p-4 space-y-3">
          <div class="space-y-1">
            <h1 class="text-lg font-semibold text-gray-900">
              <a href="${n}" class="hover:text-blue-600 hover:underline" target="_blank">
                ${t?"{{issue.summary}}":e.summary}
              </a>
            </h1>
          </div>
          
          <div class="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span class="text-gray-500">Status:</span>
              <span class="text-gray-900 ml-1">${t?"{{issue.status.name}}":e.status}</span>
            </div>
            <div>
              <span class="text-gray-500">Priority:</span>
              <span class="text-gray-900 ml-1">${t?"{{issue.priority}}":e.priority}</span>
            </div>
            <div>
              <span class="text-gray-500">Assignee:</span>
              <span class="text-gray-900 ml-1">${t?"{{issue.assignee}}":e.assignee}</span>
            </div>
            ${l==="software"?`
              <div>
                <span class="text-gray-500">Sprint:</span>
                <span class="text-gray-900 ml-1">${t?"{{issue.sprint}}":e.sprint}</span>
              </div>
            `:l==="servicedesk"?`
              <div>
                <span class="text-gray-500">SLA:</span>
                <span class="text-gray-900 ml-1">${t?"{{issue.sla}}":e.sla}</span>
              </div>
            `:`
              <div>
                <span class="text-gray-500">Due Date:</span>
                <span class="text-gray-900 ml-1">${t?"{{issue.dueDate}}":e.dueDate}</span>
              </div>
            `}
          </div>

          ${l==="software"?`
            <div class="space-y-1">
              <div class="text-xs text-gray-500">Components</div>
              <div class="flex flex-wrap gap-1">
                ${t?`
                  {{#issue.components}}
                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {{.}}
                    </span>
                  {{/issue.components}}
                `:Array.isArray(e.components)?e.components.map(i=>`
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    ${i}
                  </span>
                `).join(""):""}
              </div>
            </div>
          `:""}
        </div>
      </div>
    `,r&&a.length>0&&(o+=`
        <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-4">
          <div
            class="color-block text-gray-700 p-2 font-medium flex items-center justify-between"
            style="background-color: ${p};"
            onclick="triggerColorPicker('comments')">
            <span class="text-sm">Latest Comment</span>
            <input
              type="color"
              id="commentsColorPicker"
              class="invisible w-0"
              value="${p}"
              onchange="assignHeaderColor('comments', this.value)"
              oninput="assignHeaderColor('comments', this.value)">
          </div>
          <div class="p-3 text-sm">
            ${t?`
              {{#issue.comments}}
                <div>
                  <div class="flex items-center justify-between text-xs mb-1">
                    <span class="font-medium text-gray-900">{{author.displayName}}</span>
                    <span class="text-gray-500">{{created.format("yyyy-MM-dd HH:mm")}}</span>
                  </div>
                  <div class="text-gray-600">{{body.html}}</div>
                </div>
              {{/issue.comments}}
            `:Array.isArray(a)?a.slice(0,1).map(i=>`
              <div>
                <div class="flex items-center justify-between text-xs mb-1">
                  <span class="font-medium text-gray-900">${i.author}</span>
                  <span class="text-gray-500">${i.created}</span>
                </div>
                <div class="text-gray-600">${i.content}</div>
              </div>
            `).join(""):""}
          </div>
        </div>
      `)):s==="full"?(o+=`
      <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div
          class="color-block text-white p-5 font-semibold flex items-center justify-between"
          style="background-color: ${m};"
          onclick="triggerColorPicker('issue')">
          <div class="flex items-center space-x-3">
            <span class="text-lg">${t?"{{issue.key}}":e.issueKey}</span>
            <span class="text-sm opacity-75">${t?"{{issue.type}}":e.type}</span>
          </div>
          <input
            type="color"
            id="issueColorPicker"
            class="hidden-color-picker"
            value="${m}"
            onchange="assignHeaderColor('issue', this.value)"
            oninput="assignHeaderColor('issue', this.value)">
        </div>
        <div class="p-6 space-y-4">
          <div class="space-y-2">
            <h1 class="text-xl font-semibold text-gray-900">
              <a href="${n}" class="hover:text-blue-600 hover:underline" target="_blank">
                ${t?"{{issue.summary}}":e.summary}
              </a>
            </h1>
            <div class="text-sm text-gray-600">${t?"{{issue.description}}":e.description}</div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${b()}
          </div>

          ${l==="software"?`
            <div class="space-y-2">
              <div class="text-sm text-gray-500 font-medium">Components</div>
              <div class="flex flex-wrap gap-2">
                ${t?`
                  {{#issue.components}}
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {{.}}
                    </span>
                  {{/issue.components}}
                `:Array.isArray(e.components)?e.components.map(i=>`
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    ${i}
                  </span>
                `).join(""):""}
              </div>
            </div>

            <div class="space-y-2">
              <div class="text-sm text-gray-500 font-medium">Labels</div>
              <div class="flex flex-wrap gap-2">
                ${t?`
                  {{#issue.labels}}
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {{.}}
                    </span>
                  {{/issue.labels}}
                `:Array.isArray(e.labels)?e.labels.map(i=>`
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    ${i}
                  </span>
                `).join(""):""}
              </div>
            </div>
          `:""}
        </div>
      </div>
    `,r&&e.comments&&(o+=`
        <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-6">
          <div
            class="color-block text-gray-700 p-5 font-medium flex items-center justify-between"
            style="background-color: ${p};"
            onclick="triggerColorPicker('comments')">
            <span>Comments</span>
            <input
              type="color"
              id="commentsColorPicker"
              class="hidden-color-picker"
              value="${p}"
              onchange="assignHeaderColor('comments', this.value)"
              oninput="assignHeaderColor('comments', this.value)">
          </div>
          <div class="divide-y divide-gray-100">
            ${Array.isArray(e.comments)?v(e.comments).map(i=>`
              <div class="p-6">
                <div class="flex items-start space-x-3 mb-2">
                  <div class="flex-1">
                    <div class="flex items-center space-x-2">
                      <div class="text-sm font-medium text-gray-900">${i.author}</div>
                    </div>
                    <div class="text-xs text-gray-500 mt-1">
                      <span>Created: ${i.created}</span>
                    </div>
                  </div>
                </div>
                <div class="prose prose-sm max-w-none text-gray-600">
                  ${i.content}
                </div>
              </div>
            `).join(""):""}
          </div>
        </div>
      `)):o+=`
      <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div
          class="color-block text-white p-4 font-semibold flex items-center justify-between"
          style="background-color: ${m};"
          onclick="triggerColorPicker('issue')">
          <div class="flex items-center space-x-3">
            <span class="text-lg">${t?"{{issue.key}}":e.issueKey}</span>
            <div class="flex items-center space-x-2">
              <span class="text-sm opacity-75">${t?"{{issue.type}}":e.type}</span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20">
                ${t?"{{issue.status.name}}":e.status}
              </span>
            </div>
          </div>
          <input
            type="color"
            id="issueColorPicker"
            class="hidden-color-picker"
            value="${m}"
            onchange="assignHeaderColor('issue', this.value)"
            oninput="assignHeaderColor('issue', this.value)">
        </div>
        <div class="p-4 space-y-3">
          <div class="space-y-1">
            <h1 class="text-lg font-semibold text-gray-900">
              <a href="${n}" class="hover:text-blue-600 hover:underline" target="_blank">
                ${t?"{{issue.summary}}":e.summary}
              </a>
            </h1>
          </div>
          
          <div class="grid grid-cols-2 gap-3 text-sm">
            <div class="space-y-1">
              <div class="text-gray-500 font-medium">Assignee</div>
              <div class="text-gray-700">${t?"{{issue.assignee}}":e.assignee}</div>
            </div>
            <div class="space-y-1">
              <div class="text-gray-500 font-medium">Priority</div>
              <div class="text-gray-700">${t?"{{issue.priority}}":e.priority}</div>
            </div>
          </div>

          ${l==="software"&&Array.isArray(e.labels)?`
            <div class="flex flex-wrap gap-1">
              ${e.labels.map(i=>`
                <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  ${i}
                </span>
              `).join("")}
            </div>
          `:""}

          ${r&&e.comments?`
            <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-4">
              <div
                class="color-block p-4 font-medium" style="background-color: ${p};"
                onclick="triggerColorPicker('comments')">
                <span>Comments</span>
                <input
                  type="color"
                  id="commentsColorPicker"
                  class="hidden-color-picker"
                  value="${p}"
                  onchange="assignHeaderColor('comments', this.value)"
                  oninput="assignHeaderColor('comments', this.value)">
              </div>
              <div class="divide-y divide-gray-100">
                ${Array.isArray(e.comments)?v(e.comments).map(i=>`
                  <div class="p-4">
                    <div class="flex items-start space-x-3 mb-2">
                      <div class="flex-1">
                        <div class="flex items-center space-x-2">
                          <div class="text-sm font-medium text-gray-900">${i.author}</div>
                        </div>
                        <div class="text-xs text-gray-500 mt-1">
                          <span>Created: ${i.created}</span>
                        </div>
                      </div>
                    </div>
                    <div class="mt-1 text-sm text-gray-600">${i.content}</div>
                  </div>
                `).join(""):""}
              </div>
            </div>
          `:""}
        </div>
      </div>
    `,o+=`
    <div class="px-4 pb-4">
      <a href="${n}" 
         class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm transition-colors"
         target="_blank">
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l4-4 4 4h-3v4h-2z"/>
        </svg>
        View in Jira
      </a>
    </div>
  `,o}function L(s,e,r){r&&Array.isArray(e.comments)&&v(e.comments);const o=`
    <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="text-white p-5 font-semibold" style="background-color: ${m};">
        <div class="flex items-center space-x-3">
          <span class="text-lg">${e.issueKey}</span>
          <span class="text-sm opacity-75">${e.type}</span>
        </div>
        <h1 class="text-xl mt-2">
          <a href="${x}/browse/${e.issueKey}" class="hover:underline" target="_blank">
            ${e.summary}
          </a>
        </h1>
      </div>
      <div class="p-6 space-y-4">
        ${s==="full"?`
          <div class="space-y-2">
            <div class="text-sm text-gray-600">${e.description}</div>
          </div>
        `:""}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${b()}
        </div>

        ${l==="software"?`
          <div class="space-y-2">
            <div class="text-sm text-gray-500 font-medium">Components</div>
            <div class="flex flex-wrap gap-2">
              ${Array.isArray(e.components)?e.components.map(i=>`
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  ${i}
                </span>
              `).join(""):""}
            </div>
          </div>

          <div class="space-y-2">
            <div class="text-sm text-gray-500 font-medium">Labels</div>
            <div class="flex flex-wrap gap-2">
              ${Array.isArray(e.labels)?e.labels.map(i=>`
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  ${i}
                </span>
              `).join(""):""}
            </div>
          </div>
        `:""}
      </div>
    </div>
  `,a=r&&e.comments&&e.comments.length>0?`
    <div class="mt-6 max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="p-4 font-medium" style="background-color: ${p};">
        Comments
      </div>
      <div class="divide-y divide-gray-100">
        ${Array.isArray(e.comments)?v(e.comments).map(i=>`
          <div class="p-4">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-gray-900">${i.author}</span>
              <span class="text-sm text-gray-500">${i.created}</span>
            </div>
            <div class="mt-1 text-sm text-gray-600">${i.content}</div>
          </div>
        `).join(""):""}
      </div>
    </div>
  `:"",n=`
    <div class="mt-6 max-w-2xl mx-auto">
      <a href="${x}/browse/${e.issueKey}" 
         class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
         target="_blank">
        View in Jira
      </a>
    </div>
  `;return`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"><\/script>
</head>
<body class="bg-gray-50 p-4">
  ${o}
  ${a}
  ${n}
</body>
</html>`}function C(){const s=t;t=!0;const e=L("full",y[l].smart,d);t=s;const r=e.replace(/\s+/g," ").replace(/>\s+</g,"><").replace(/\n/g,"").trim();document.getElementById("htmlOutput").value=r}document.querySelectorAll("[data-product]").forEach(s=>{s.addEventListener("click",e=>{document.querySelectorAll("[data-product]").forEach(r=>{r.classList.remove("bg-blue-600","text-white","hover:bg-blue-700"),r.classList.add("bg-gray-100","text-gray-700","hover:bg-gray-200")}),e.target.classList.remove("bg-gray-100","text-gray-700","hover:bg-gray-200"),e.target.classList.add("bg-blue-600","text-white","hover:bg-blue-700"),l=e.target.dataset.product,u()})});function T(){t=!t,u(),w()}function P(){d=!d;const s=document.getElementById("commentDisplayOptions");s.style.display=d?"flex":"none",$(),u()}function S(s){f=s,document.querySelectorAll("[data-comment-display]").forEach(e=>{e.dataset.commentDisplay===s?(e.classList.remove("bg-gray-100","text-gray-700"),e.classList.add("bg-blue-600","text-white")):(e.classList.remove("bg-blue-600","text-white"),e.classList.add("bg-gray-100","text-gray-700"))}),u()}function M(){document.querySelectorAll("[data-template]").forEach(s=>{const e=s.dataset.template===h;s.classList.toggle("bg-blue-600",e),s.classList.toggle("text-white",e),s.classList.toggle("bg-gray-100",!e),s.classList.toggle("text-gray-700",!e)})}function w(){const s=document.getElementById("toggleView");s&&(s.textContent=t?"Show Mock Data":"Show Smart Values",s.classList.toggle("bg-blue-600",!t),s.classList.toggle("bg-gray-100",t),s.classList.toggle("text-white",!t),s.classList.toggle("text-gray-700",t))}function $(){const s=document.getElementById("commentsToggle");s&&(s.textContent=d?"Hide Comments":"Show Comments",s.classList.toggle("bg-blue-600",d),s.classList.toggle("text-white",d),s.classList.toggle("bg-gray-100",!d),s.classList.toggle("text-gray-700",!d))}function E(s){const e=s==="issue"?"issueColorPicker":"commentsColorPicker";document.getElementById(e).click()}function H(s,e){s==="issue"?m=e:s==="comments"&&(p=e),u()}document.addEventListener("DOMContentLoaded",()=>{document.querySelector('[data-product="software"]').classList.add("bg-blue-600","text-white","hover:bg-blue-700");const e=document.querySelector('[data-template="full"]');e.classList.add("bg-blue-600","text-white"),e.classList.remove("bg-gray-100","text-gray-700"),u(),w(),M(),$();const r=document.getElementById("generateHTML");r&&r.addEventListener("click",C);const o=document.getElementById("copyHTML");o&&o.addEventListener("click",async()=>{const i=document.getElementById("htmlOutput");if(i&&i.value)try{await navigator.clipboard.writeText(i.value);const c=o.innerHTML;o.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          `,o.classList.remove("bg-gray-100","text-gray-700","hover:bg-gray-200"),o.classList.add("bg-green-50","text-green-600"),setTimeout(()=>{o.innerHTML=c,o.classList.remove("bg-green-50","text-green-600"),o.classList.add("bg-gray-100","text-gray-700","hover:bg-gray-200")},2e3)}catch(c){console.error("Failed to copy text: ",c)}});const a=document.getElementById("toggleView");a&&a.addEventListener("click",T);const n=document.getElementById("commentsToggle");n&&n.addEventListener("click",P),document.querySelectorAll("[data-template]").forEach(i=>{i.addEventListener("click",c=>{document.querySelectorAll("[data-template]").forEach(g=>{g.classList.remove("bg-blue-600","text-white"),g.classList.add("bg-gray-100","text-gray-700")}),c.target.classList.remove("bg-gray-100","text-gray-700"),c.target.classList.add("bg-blue-600","text-white"),h=c.target.dataset.template,u()})}),document.querySelectorAll("[data-product]").forEach(i=>{i.addEventListener("click",c=>{document.querySelectorAll("[data-product]").forEach(g=>{g.classList.remove("bg-blue-600","text-white","hover:bg-blue-700"),g.classList.add("bg-gray-100","text-gray-700","hover:bg-gray-200")}),c.target.classList.remove("bg-gray-100","text-gray-700","hover:bg-gray-200"),c.target.classList.add("bg-blue-600","text-white","hover:bg-blue-700"),l=c.target.dataset.product,u()})}),document.getElementById("jiraUrl").addEventListener("input",i=>{x=i.target.value.trim(),u()}),document.querySelectorAll("[data-comment-display]").forEach(i=>{i.addEventListener("click",c=>{const g=c.target.dataset.commentDisplay;S(g)})})});window.triggerColorPicker=E;window.assignHeaderColor=H;
