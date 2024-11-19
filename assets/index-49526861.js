(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();const b={software:{mock:{issueKey:"PROJ-123",summary:"Implement new feature for user authentication",type:"Story",priority:"High",status:"In Progress",assignee:"John Smith",reporter:"Sarah Johnson",created:"2024-01-15 10:30 AM",updated:"2024-01-16 2:45 PM",description:"As a user, I want to be able to authenticate using SSO...",components:["Authentication","Security"],labels:["frontend","sprint-1"],sprint:"Sprint 5",storyPoints:"8",comments:[{author:"Mike Brown",content:"Should we consider adding OAuth support?",created:"2024-01-15 3:20 PM"},{author:"Sarah Johnson",content:"Yes, OAuth would be great. Let's also consider OpenID Connect.",created:"2024-01-15 4:15 PM"},{author:"John Smith",content:"I can help with the OAuth implementation. I've done it before.",created:"2024-01-16 9:30 AM"},{author:"Mike Brown",content:"Great! I'll create a technical design doc for review.",created:"2024-01-16 10:45 AM"},{author:"Sarah Johnson",content:"Technical design approved. Ready to start implementation.",created:"2024-01-16 2:30 PM"},{author:"John Smith",content:"I'll start working on this today.",created:"2024-01-16 2:45 PM"}]},smart:{issueKey:"{{issue.key}}",summary:"{{issue.summary}}",type:"{{issue.type}}",priority:"{{issue.priority}}",status:"{{issue.status.name}}",assignee:"{{issue.assignee}}",reporter:"{{issue.reporter}}",created:"{{issue.created}}",updated:"{{issue.updated}}",description:"{{issue.description}}",components:"{{issue.components}}",labels:"{{issue.labels}}",sprint:"{{issue.sprint}}",storyPoints:"{{issue.storyPoints}}",comments:"{{issue.comments}}"}},servicedesk:{mock:{issueKey:"HELP-456",summary:"Cannot access email account",type:"IT Support",priority:"Medium",status:"Open",requestType:"Email Access",requester:"Jane Doe",assignee:"IT Support Team",created:"2024-01-15 9:15 AM",updated:"2024-01-15 9:30 AM",description:"I am unable to log into my work email since this morning...",impact:"Single user",sla:"4 hours",comments:[{author:"IT Support Team",content:"Have you tried resetting your password?",created:"2024-01-15 9:30 AM"},{author:"Jane Doe",content:"Yes, I tried that but still getting an error.",created:"2024-01-15 10:15 AM"},{author:"IT Support Team",content:"Can you share a screenshot of the error?",created:"2024-01-15 10:30 AM"},{author:"Jane Doe",content:"Screenshot attached. Error code is AUTH-123.",created:"2024-01-15 10:45 AM"},{author:"IT Support Team",content:"Thanks. This looks like an account lock. I'll unlock it now.",created:"2024-01-15 11:00 AM"}]},smart:{issueKey:"{{issue.key}}",summary:"{{issue.summary}}",type:"{{issue.type}}",priority:"{{issue.priority}}",status:"{{issue.status.name}}",requestType:"{{issue.requestType}}",requester:"{{issue.requester}}",assignee:"{{issue.assignee}}",created:"{{issue.created}}",updated:"{{issue.updated}}",description:"{{issue.description}}",impact:"{{issue.impact}}",sla:"{{issue.sla}}",comments:"{{issue.comments}}"}},core:{mock:{issueKey:"TASK-789",summary:"Quarterly financial report preparation",type:"Task",priority:"Medium",status:"To Do",assignee:"Finance Team",reporter:"Department Head",created:"2024-01-15 11:00 AM",updated:"2024-01-15 11:00 AM",description:"Prepare Q4 2023 financial report including...",dueDate:"2024-01-31",category:"Finance",comments:[{author:"Department Head",content:"Please include the new revenue streams in this report.",created:"2024-01-15 11:30 AM"},{author:"Finance Team",content:"Will do. Do you want a breakdown by product line?",created:"2024-01-15 1:45 PM"},{author:"Department Head",content:"Yes, please include product line breakdown.",created:"2024-01-15 2:00 PM"},{author:"Finance Team",content:"First draft ready for review.",created:"2024-01-16 9:15 AM"},{author:"Marketing Lead",content:"Can we add a section comparing Q4 performance to previous quarters?",created:"2024-01-16 10:30 AM"},{author:"Finance Team",content:"Good suggestion. I'll add historical comparison charts.",created:"2024-01-16 11:45 AM"},{author:"Department Head",content:"Also include YoY growth metrics for each product line.",created:"2024-01-16 2:15 PM"},{author:"Finance Team",content:"Updated draft with historical comparisons and YoY metrics ready for review.",created:"2024-01-16 4:30 PM"}]},smart:{issueKey:"{{issue.key}}",summary:"{{issue.summary}}",type:"{{issue.type}}",priority:"{{issue.priority}}",status:"{{issue.status.name}}",assignee:"{{issue.assignee}}",reporter:"{{issue.reporter}}",created:"{{issue.created}}",updated:"{{issue.updated}}",description:"{{issue.description}}",dueDate:"{{issue.dueDate}}",category:"{{issue.category}}",comments:"{{issue.comments}}"}}};let p="software",g="full",s=!1,l="full",m="https://your-domain.atlassian.net",y="#0052CC",v="#f0f0f0";function L(e,t){e==="issue"?y=t:e==="comments"&&(v=t),u()}function C(e){return s?"${jiraBaseUrl}/browse/${issueKey}":`${m}/browse/${e}`}function I(e){return!e||e.length===0?[]:l==="none"?[]:l==="compact"?[e[e.length-1]]:l==="full"?e.slice(-5):[]}function E(e,t){let a="";return t?a+=`
      <div class="text-gray-600">
        <div class="mb-2">
          <span class="font-medium">Priority:</span> ${s?"{{issue.priority}}":e.priority}
        </div>
        <div class="mb-2">
          <span class="font-medium">Status:</span> ${s?"{{issue.status}}":e.status}
        </div>
        <div class="mb-2">
          <span class="font-medium">Assignee:</span> ${s?"{{issue.assignee}}":e.assignee}
        </div>
      </div>
    `:(a+=`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="space-y-3">
          <div>
            <span class="font-medium">Priority:</span> ${s?"{{issue.priority}}":e.priority}
          </div>
          <div>
            <span class="font-medium">Status:</span> ${s?"{{issue.status}}":e.status}
          </div>
          <div>
            <span class="font-medium">Assignee:</span> ${s?"{{issue.assignee}}":e.assignee}
          </div>
          <div>
            <span class="font-medium">Reporter:</span> ${s?"{{issue.reporter}}":e.reporter}
          </div>
          <div>
            <span class="font-medium">Created:</span> ${s?"{{issue.created}}":e.created}
          </div>
        </div>
        <div class="space-y-3">`,p==="software"?a+=`
          <div>
            <span class="font-medium">Components:</span> ${s?"{{issue.components}}":e.components}
          </div>
          <div>
            <span class="font-medium">Fix Version:</span> ${s?"{{issue.fixVersion}}":e.fixVersion}
          </div>
          <div>
            <span class="font-medium">Sprint:</span> ${s?"{{issue.sprint}}":e.sprint}
          </div>
          <div>
            <span class="font-medium">Story Points:</span> ${s?"{{issue.storyPoints}}":e.storyPoints}
          </div>
      `:p==="servicedesk"?a+=`
          <div>
            <span class="font-medium">Request Type:</span> ${s?"{{issue.requestType}}":e.requestType}
          </div>
          <div>
            <span class="font-medium">SLA:</span> ${s?"{{issue.sla}}":e.sla}
          </div>
          <div>
            <span class="font-medium">Customer:</span> ${s?"{{issue.customer}}":e.customer}
          </div>
          <div>
            <span class="font-medium">Impact:</span> ${s?"{{issue.impact}}":e.impact}
          </div>
      `:p==="core"&&(a+=`
          <div>
            <span class="font-medium">Labels:</span> ${s?"{{issue.labels}}":e.labels}
          </div>
          <div>
            <span class="font-medium">Due Date:</span> ${s?"{{issue.dueDate}}":e.dueDate}
          </div>
          <div>
            <span class="font-medium">Category:</span> ${s?"{{issue.category}}":e.category}
          </div>
      `),a+=`
        </div>
      </div>
    `),a}function P(e,t){const a=C(s?"{{issue.key}}":t.issueKey),n=I(t.comments),i=e==="compact";let r="";return r+=`
    <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="color-block text-white ${i?"p-4":"p-5"} font-semibold" style="background-color: ${y};">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <span class="${i?"text-base":"text-lg"}">${s?"{{issue.key}}":t.issueKey}</span>
            <span class="text-sm opacity-75">${s?"{{issue.type}}":t.type}</span>
          </div>
        </div>
      </div>
      
      <div class="${i?"p-4":"p-6"} space-y-4">
        <div class="space-y-2">
          <h1 class="${i?"text-lg":"text-xl"} font-semibold text-gray-900">
            <a href="${a}" class="hover:text-blue-600 hover:underline" target="_blank">
              ${s?"{{issue.summary}}":t.summary}
            </a>
          </h1>
          ${i?"":`
          <p class="text-sm text-gray-600">
            ${s?"{{issue.description}}":t.description}
          </p>
          `}
        </div>

        ${E(t,i)}

        <div>
          <a href="${a}" 
             class="inline-flex items-center justify-center ${i?"px-3 py-1.5 text-sm":"px-4 py-2"} font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm transition-colors"
             target="_blank">
            <svg class="w-4 h-4 ${i?"mr-1.5":"mr-2"}" fill="currentColor" viewBox="0 0 20 20">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l4-4 4 4h-3v4h-2z"/>
            </svg>
            View in Jira
          </a>
        </div>
      </div>
    </div>
  `,l!=="none"&&n.length>0&&(r+=`
      <div class="preview-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-6">
        <div class="color-block text-gray-700 p-5 font-medium" style="background-color: ${v};">
          <span>Comments ${l==="compact"?"(Latest)":"(Last 5)"}</span>
        </div>
        <div class="divide-y divide-gray-100">
          ${n.map(c=>`
            <div class="p-6">
              <div class="flex items-start space-x-3 mb-2">
                <div class="flex-1">
                  <div class="flex items-center space-x-2">
                    <div class="text-sm font-medium text-gray-900">
                      ${s?"{{comment.author}}":c.author}
                    </div>
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    <span>Created: ${s?"{{comment.created}}":c.created}</span>
                  </div>
                </div>
              </div>
              <div class="prose prose-sm max-w-none text-gray-600">
                ${s?"{{comment.content}}":c.content}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `),r+=`
    <div class="mt-6 pt-4 border-t border-gray-200">
      <div class="flex items-center justify-between text-xs text-gray-500">
        <div class="flex items-center space-x-2">
          <span>${s?"{{issue.key}}":t.issueKey}</span>
          <span>•</span>
          <span>${s?"{{issue.type}}":t.type}</span>
          ${s?`
          <span>•</span>
          <span>Updated {{issue.updated}}</span>
          `:`
          <span>•</span>
          <span>Updated ${t.updated}</span>
          `}
        </div>
        <div>
          <a href="${a}" class="text-blue-600 hover:underline" target="_blank">View in Jira</a>
        </div>
      </div>
      <div class="mt-2 text-xs text-gray-400 text-right">
        Generated by Jira Email Template Generator
      </div>
    </div>
  `,r}function B(e,t,a){let n="",i="",r="";return n=`
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: ${y}; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
        <div style="color: white; display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center;">
            <span style="font-size: 18px; margin-right: 8px;">{{issue.key}}</span>
            <span style="opacity: 0.8;">{{issue.type}}</span>
          </div>
        </div>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h1 style="font-size: 24px; margin: 0 0 16px 0;">
          <a href="${m}/browse/{{issue.key}}" style="color: #0052CC; text-decoration: none;">{{issue.summary}}</a>
        </h1>
        <p style="color: #444; margin: 0;">{{issue.description}}</p>
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
        ${E(t,!1)}
      </div>

      <div style="margin-bottom: 24px;">
        <a href="${m}/browse/{{issue.key}}"
           style="display: inline-flex; align-items: center; padding: 8px 16px; background-color: #0052CC; color: white; text-decoration: none; border-radius: 4px; font-size: 14px; font-weight: 500;">
          <svg style="width: 16px; height: 16px; margin-right: 8px;" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l4-4 4 4h-3v4h-2z"/>
          </svg>
          View in Jira
        </a>
      </div>
    </div>
  `,a&&(i=`
      <div style="max-width: 600px; margin: 0 auto; padding: 0 20px 20px;">
        <div style="background-color: ${v}; padding: 8px 16px; border-radius: 4px 4px 0 0;">
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
    `),r=`
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
  `,`<!DOCTYPE html><html><body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;">${n}${i}${r}</body></html>`}function H(){s=!0;const e=B(g,b[p].smart,!1);s=!1,document.getElementById("htmlOutput").value=e}function u(){const e=document.getElementById("previewArea");if(e){const t=s?b[p].smart:b[p].mock;e.innerHTML=P(g,t)}}function M(){document.querySelectorAll("[data-template]").forEach(t=>{const a=t.dataset.template===g;t.classList.toggle("bg-blue-600",a),t.classList.toggle("text-white",a),t.classList.toggle("bg-gray-100",!a),t.classList.toggle("text-gray-700",!a)})}function w(){document.querySelectorAll("[data-comment-display]").forEach(t=>{const a=t.dataset.commentDisplay===l;t.classList.toggle("bg-blue-600",a),t.classList.toggle("text-white",a),t.classList.toggle("bg-gray-100",!a),t.classList.toggle("text-gray-700",!a)})}function k(e){g=e,u(),M()}function D(e){l=e,u(),w()}function S(){s=!s,u()}function A(){l=l==="none"?"full":"none",u(),w()}function T(){const e=document.querySelector('[data-product="software"]');e&&e.classList.add("bg-blue-600","text-white","hover:bg-blue-700");const t=document.querySelector('[data-template="full"]');t&&(t.classList.add("bg-blue-600","text-white"),t.classList.remove("bg-gray-100","text-gray-700")),u(),M(),w(),document.querySelectorAll("[data-product]").forEach(o=>{o.addEventListener("click",d=>{document.querySelectorAll("[data-product]").forEach($=>{$.classList.remove("bg-blue-600","text-white","hover:bg-blue-700"),$.classList.add("bg-gray-100","text-gray-700","hover:bg-gray-200")}),d.target.classList.remove("bg-gray-100","text-gray-700","hover:bg-gray-200"),d.target.classList.add("bg-blue-600","text-white","hover:bg-blue-700"),p=d.target.dataset.product,u()})}),document.querySelectorAll("[data-template]").forEach(o=>{o.addEventListener("click",d=>{k(d.target.dataset.template)})}),document.querySelectorAll("[data-comment-display]").forEach(o=>{o.addEventListener("click",d=>{D(d.target.dataset.commentDisplay)})});const a=document.getElementById("generateHTML");a&&a.addEventListener("click",H);const n=document.getElementById("copyHTML");n&&n.addEventListener("click",async()=>{const o=document.getElementById("htmlOutput");if(o&&o.value)try{await navigator.clipboard.writeText(o.value);const d=n.innerHTML;n.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          `,n.classList.remove("bg-gray-100","text-gray-700","hover:bg-gray-200"),n.classList.add("bg-green-50","text-green-600"),setTimeout(()=>{n.innerHTML=d,n.classList.remove("bg-green-50","text-green-600"),n.classList.add("bg-gray-100","text-gray-700","hover:bg-gray-200")},2e3)}catch(d){console.error("Failed to copy text: ",d)}});const i=document.getElementById("toggleView");i&&i.addEventListener("click",S);const r=document.getElementById("commentsToggle");r&&r.addEventListener("click",A);const c=document.getElementById("jiraUrl");c&&c.addEventListener("input",o=>{m=o.target.value.trim(),u()});const f=document.getElementById("issueHeaderColor"),h=document.getElementById("commentsHeaderColor");f&&(f.value=y,["input","change"].forEach(o=>{f.addEventListener(o,d=>L("issue",d.target.value))})),h&&(h.value=v,["input","change"].forEach(o=>{h.addEventListener(o,d=>L("comments",d.target.value))}));const x=document.getElementById("commentDisplayMode");x&&(x.value=l,x.addEventListener("change",o=>{l=o.target.value,u()}))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",T):T();window.changeTemplate=k;window.toggleSmartValues=S;window.toggleComments=A;
