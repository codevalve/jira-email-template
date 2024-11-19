(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const v={software:{mock:{issueKey:"PROJ-123",summary:"Implement new feature for user authentication",type:"Story",priority:"High",status:"In Progress",assignee:"John Smith",reporter:"Sarah Johnson",created:"2024-01-15 10:30 AM",updated:"2024-01-16 2:45 PM",description:"As a user, I want to be able to authenticate using SSO...",components:["Authentication","Security"],labels:["frontend","sprint-1"],sprint:"Sprint 5",storyPoints:"8",comments:[{author:"Mike Brown",content:"Should we consider adding OAuth support?",created:"2024-01-15 3:20 PM"},{author:"Sarah Johnson",content:"Yes, OAuth would be great. Let's also consider OpenID Connect.",created:"2024-01-15 4:15 PM"},{author:"John Smith",content:"I can help with the OAuth implementation. I've done it before.",created:"2024-01-16 9:30 AM"},{author:"Mike Brown",content:"Great! I'll create a technical design doc for review.",created:"2024-01-16 10:45 AM"},{author:"Sarah Johnson",content:"Technical design approved. Ready to start implementation.",created:"2024-01-16 2:30 PM"},{author:"John Smith",content:"I'll start working on this today.",created:"2024-01-16 2:45 PM"}]},smart:{issueKey:"{{issue.key}}",summary:"{{issue.summary}}",type:"{{issue.type}}",priority:"{{issue.priority}}",status:"{{issue.status}}",assignee:"{{issue.assignee}}",reporter:"{{issue.reporter}}",created:"{{issue.created}}",updated:"{{issue.updated}}",description:"{{issue.description}}",components:"{{issue.components}}",labels:"{{issue.labels}}",sprint:"{{issue.sprint}}",storyPoints:"{{issue.storyPoints}}",comments:"{{issue.comments}}"}},servicedesk:{mock:{issueKey:"HELP-456",summary:"Cannot access email account",type:"IT Support",priority:"Medium",status:"Open",requestType:"Email Access",requester:"Jane Doe",assignee:"IT Support Team",created:"2024-01-15 9:15 AM",updated:"2024-01-15 9:30 AM",description:"I am unable to log into my work email since this morning...",impact:"Single user",sla:"4 hours",comments:[{author:"IT Support Team",content:"Have you tried resetting your password?",created:"2024-01-15 9:30 AM"},{author:"Jane Doe",content:"Yes, I tried that but still getting an error.",created:"2024-01-15 10:15 AM"},{author:"IT Support Team",content:"Can you share a screenshot of the error?",created:"2024-01-15 10:30 AM"},{author:"Jane Doe",content:"Screenshot attached. Error code is AUTH-123.",created:"2024-01-15 10:45 AM"},{author:"IT Support Team",content:"Thanks. This looks like an account lock. I'll unlock it now.",created:"2024-01-15 11:00 AM"}]},smart:{issueKey:"{{issue.key}}",summary:"{{issue.summary}}",type:"{{issue.type}}",priority:"{{issue.priority}}",status:"{{issue.status}}",requestType:"{{issue.requestType}}",requester:"{{issue.requester}}",assignee:"{{issue.assignee}}",created:"{{issue.created}}",updated:"{{issue.updated}}",description:"{{issue.description}}",impact:"{{issue.impact}}",sla:"{{issue.sla}}",comments:"{{issue.comments}}"}},core:{mock:{issueKey:"TASK-789",summary:"Quarterly financial report preparation",type:"Task",priority:"Medium",status:"To Do",assignee:"Finance Team",reporter:"Department Head",created:"2024-01-15 11:00 AM",updated:"2024-01-15 11:00 AM",description:"Prepare Q4 2023 financial report including...",dueDate:"2024-01-31",category:"Finance",comments:[{author:"Department Head",content:"Please include the new revenue streams in this report.",created:"2024-01-15 11:30 AM"},{author:"Finance Team",content:"Will do. Do you want a breakdown by product line?",created:"2024-01-15 1:45 PM"},{author:"Department Head",content:"Yes, please include product line breakdown.",created:"2024-01-15 2:00 PM"},{author:"Finance Team",content:"First draft ready for review.",created:"2024-01-16 9:15 AM"},{author:"Marketing Lead",content:"Can we add a section comparing Q4 performance to previous quarters?",created:"2024-01-16 10:30 AM"},{author:"Finance Team",content:"Good suggestion. I'll add historical comparison charts.",created:"2024-01-16 11:45 AM"},{author:"Department Head",content:"Also include YoY growth metrics for each product line.",created:"2024-01-16 2:15 PM"},{author:"Finance Team",content:"Updated draft with historical comparisons and YoY metrics ready for review.",created:"2024-01-16 4:30 PM"}]},smart:{issueKey:"{{issue.key}}",summary:"{{issue.summary}}",type:"{{issue.type}}",priority:"{{issue.priority}}",status:"{{issue.status}}",assignee:"{{issue.assignee}}",reporter:"{{issue.reporter}}",created:"{{issue.created}}",updated:"{{issue.updated}}",description:"{{issue.description}}",dueDate:"{{issue.dueDate}}",category:"{{issue.category}}",comments:"{{issue.comments}}"}}};let l="software",f="full",t=!1,c=!1,x="all",m="#0052CC",u="#E9EBEE";function w(){const s=t?v[l].smart:v[l].mock;let e="";return e+=`
    <div class="field-group">
      <div class="text-sm text-gray-500 font-medium">Status</div>
      <div class="text-sm text-gray-900">${t?"{{issue.status}}":s.status}</div>
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
    `),e}function g(){const s=document.getElementById("previewArea"),e=t?v[l].smart:v[l].mock,r=k(f,e,c);s.innerHTML=r}function y(s){if(!Array.isArray(s))return[];console.log("Filtering comments. Mode:",x),console.log("Original comments:",s);const e=[...s].sort((o,a)=>new Date(a.created)-new Date(o.created));let r;switch(x){case"latest":r=e.slice(0,1);break;case"last5":r=e.slice(0,5);break;default:r=e}return console.log("Filtered comments:",r),r}function k(s,e,r){let o="",a=[];return r&&(Array.isArray(e.comments)?a=y(e.comments):t&&(a=["{{comment.body.html}}"])),s==="compact"?(o=`
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
              ${t?"{{issue.summary}}":e.summary}
            </h1>
          </div>
          
          <div class="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span class="text-gray-500">Status:</span>
              <span class="text-gray-900 ml-1">${t?"{{issue.status}}":e.status}</span>
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
            style="background-color: ${u};"
            onclick="triggerColorPicker('comments')">
            <span class="text-sm">Latest Comment</span>
            <input
              type="color"
              id="commentsColorPicker"
              class="invisible w-0"
              value="${u}"
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
            <h1 class="text-xl font-semibold text-gray-900">${t?"{{issue.summary}}":e.summary}</h1>
            <div class="text-sm text-gray-600">${t?"{{issue.description}}":e.description}</div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${w()}
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
            style="background-color: ${u};"
            onclick="triggerColorPicker('comments')">
            <span>Comments</span>
            <input
              type="color"
              id="commentsColorPicker"
              class="hidden-color-picker"
              value="${u}"
              onchange="assignHeaderColor('comments', this.value)"
              oninput="assignHeaderColor('comments', this.value)">
          </div>
          <div class="divide-y divide-gray-100">
            ${Array.isArray(e.comments)?y(e.comments).map(i=>`
              <div class="p-6">
                <div class="flex items-start space-x-3 mb-2">
                  <div class="flex-1">
                    <div class="flex items-center space-x-2">
                      <div class="text-sm font-medium text-gray-700">${i.author}</div>
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
                ${t?"{{issue.status}}":e.status}
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
            <h1 class="text-lg font-semibold text-gray-900">${t?"{{issue.summary}}":e.summary}</h1>
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
                class="color-block p-4 font-medium" style="background-color: ${u};"
                onclick="triggerColorPicker('comments')">
                <span>Comments</span>
                <input
                  type="color"
                  id="commentsColorPicker"
                  class="hidden-color-picker"
                  value="${u}"
                  onchange="assignHeaderColor('comments', this.value)"
                  oninput="assignHeaderColor('comments', this.value)">
              </div>
              <div class="divide-y divide-gray-100">
                ${Array.isArray(e.comments)?y(e.comments).map(i=>`
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
    `,o}function $(){const s=v[l].smart,e=()=>{let d="";return d+=`
      <div class="field-group">
        <div class="text-sm text-gray-500 font-medium">Status</div>
        <div class="text-sm text-gray-900">{{issue.status}}</div>
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
    `,l==="software"?d+=`
        <div class="field-group">
          <div class="text-sm text-gray-500 font-medium">Sprint</div>
          <div class="text-sm text-gray-900">{{issue.sprint}}</div>
        </div>
        <div class="field-group">
          <div class="text-sm text-gray-500 font-medium">Story Points</div>
          <div class="text-sm text-gray-900">{{issue.storyPoints}}</div>
        </div>
      `:l==="servicedesk"?d+=`
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
      `:l==="core"&&(d+=`
        <div class="field-group">
          <div class="text-sm text-gray-500 font-medium">Due Date</div>
          <div class="text-sm text-gray-900">{{issue.dueDate}}</div>
        </div>
        <div class="field-group">
          <div class="text-sm text-gray-500 font-medium">Category</div>
          <div class="text-sm text-gray-900">{{issue.category}}</div>
        </div>
      `),d};function r(){if(!c)return"";const d=Array.isArray(s.comments)?y(s.comments).map(p=>`
      <div class="p-4">
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium text-gray-900">{{author.displayName}}</span>
          <span class="text-sm text-gray-500">{{created.format("yyyy-MM-dd HH:mm")}}</span>
        </div>
        <div class="mt-1 text-sm text-gray-600">{{body.html}}</div>
      </div>
    `).join(""):t?`
      <div class="p-4">
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium text-gray-900">{{author.displayName}}</span>
          <span class="text-sm text-gray-500">{{created.format("yyyy-MM-dd HH:mm")}}</span>
        </div>
        <div class="mt-1 text-sm text-gray-600">{{body.html}}</div>
      </div>
    `:"";return`
      <div class="mt-6 preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="color-block p-4 font-medium" style="background-color: ${u};">
          Comments
        </div>
        <div class="divide-y divide-gray-100">
          {{#issue.comments}}
            ${d}
          {{/issue.comments}}
        </div>
      </div>
    `}function o(){return c?`
      <div class="mt-6 preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="color-block p-4 font-medium" style="background-color: ${u};">
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
    `:""}`${m}${e()}`,`${r()}`;const n=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Jira Notification</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
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
  ${`<div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
    <div class="color-block text-white p-5 font-semibold" style="background-color: ${m};">
      <div class="flex items-center space-x-3">
        <span class="text-lg">{{issue.key}}</span>
        <span class="text-sm opacity-75">{{issue.type}}</span>
      </div>
    </div>
    <div class="p-6 space-y-4">
      <div class="space-y-2">
        <h1 class="text-xl font-semibold text-gray-900">{{issue.summary}}</h1>
        <div class="text-sm text-gray-600">{{issue.description}}</div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${e()}
      </div>

      ${l==="software"?`
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
      `:""}
    </div>
  </div>
  ${o()}
`}
</body>
</html>`.replace(/\s+/g," ").replace(/>\s+</g,"><").replace(/<!--.*?-->/g,"").trim();document.getElementById("htmlOutput").textContent=n}document.querySelectorAll("[data-product]").forEach(s=>{s.addEventListener("click",e=>{document.querySelectorAll("[data-product]").forEach(r=>{r.classList.remove("bg-blue-600","text-white","hover:bg-blue-700"),r.classList.add("bg-gray-100","text-gray-700","hover:bg-gray-200")}),e.target.classList.remove("bg-gray-100","text-gray-700","hover:bg-gray-200"),e.target.classList.add("bg-blue-600","text-white","hover:bg-blue-700"),l=e.target.dataset.product,g()})});function L(){t=!t,g(),h()}function C(){c=!c;const s=document.getElementById("commentDisplayOptions");s.style.display=c?"flex":"none",b(),g()}function A(s){x=s,document.querySelectorAll("[data-comment-display]").forEach(e=>{e.dataset.commentDisplay===s?(e.classList.remove("bg-gray-100","text-gray-700"),e.classList.add("bg-blue-600","text-white")):(e.classList.remove("bg-blue-600","text-white"),e.classList.add("bg-gray-100","text-gray-700"))}),g()}function T(){document.querySelectorAll("[data-template]").forEach(s=>{const e=s.dataset.template===f;s.classList.toggle("bg-blue-600",e),s.classList.toggle("text-white",e),s.classList.toggle("bg-gray-100",!e),s.classList.toggle("text-gray-700",!e)})}function h(){const s=document.getElementById("toggleView");s&&(s.textContent=t?"Show Mock Data":"Show Smart Values",s.classList.toggle("bg-blue-600",!t),s.classList.toggle("bg-gray-100",t),s.classList.toggle("text-white",!t),s.classList.toggle("text-gray-700",t))}function b(){const s=document.getElementById("commentsToggle");s&&(s.textContent=c?"Hide Comments":"Show Comments",s.classList.toggle("bg-blue-600",c),s.classList.toggle("text-white",c),s.classList.toggle("bg-gray-100",!c),s.classList.toggle("text-gray-700",!c))}function M(s){const e=s==="issue"?"issueColorPicker":"commentsColorPicker";document.getElementById(e).click()}function P(s,e){s==="issue"?m=e:s==="comments"&&(u=e),g()}document.addEventListener("DOMContentLoaded",()=>{document.querySelector('[data-product="software"]').classList.add("bg-blue-600","text-white","hover:bg-blue-700");const e=document.querySelector('[data-template="full"]');e.classList.add("bg-blue-600","text-white"),e.classList.remove("bg-gray-100","text-gray-700"),g(),h(),T(),b();const r=document.getElementById("generateHTML");r&&r.addEventListener("click",$);const o=document.getElementById("copyHTML");o&&o.addEventListener("click",async()=>{const n=document.getElementById("htmlOutput");if(n&&n.value)try{await navigator.clipboard.writeText(n.value);const d=o.innerHTML;o.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          `,o.classList.remove("bg-gray-100","text-gray-700","hover:bg-gray-200"),o.classList.add("bg-green-50","text-green-600"),setTimeout(()=>{o.innerHTML=d,o.classList.remove("bg-green-50","text-green-600"),o.classList.add("bg-gray-100","text-gray-700","hover:bg-gray-200")},2e3)}catch(d){console.error("Failed to copy text: ",d)}});const a=document.getElementById("toggleView");a&&a.addEventListener("click",L);const i=document.getElementById("commentsToggle");i&&i.addEventListener("click",C),document.querySelectorAll("[data-template]").forEach(n=>{n.addEventListener("click",d=>{document.querySelectorAll("[data-template]").forEach(p=>{p.classList.remove("bg-blue-600","text-white"),p.classList.add("bg-gray-100","text-gray-700")}),d.target.classList.remove("bg-gray-100","text-gray-700"),d.target.classList.add("bg-blue-600","text-white"),f=d.target.dataset.template,g()})}),document.querySelectorAll("[data-product]").forEach(n=>{n.addEventListener("click",d=>{document.querySelectorAll("[data-product]").forEach(p=>{p.classList.remove("bg-blue-600","text-white","hover:bg-blue-700"),p.classList.add("bg-gray-100","text-gray-700","hover:bg-gray-200")}),d.target.classList.remove("bg-gray-100","text-gray-700","hover:bg-gray-200"),d.target.classList.add("bg-blue-600","text-white","hover:bg-blue-700"),l=d.target.dataset.product,g()})}),document.querySelectorAll("[data-comment-display]").forEach(n=>{n.addEventListener("click",d=>{const p=d.target.dataset.commentDisplay;A(p)})})});window.triggerColorPicker=M;window.assignHeaderColor=P;
