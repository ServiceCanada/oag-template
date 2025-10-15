/*
 * OAG - custom JS
 */

// Temporary workaround to move the report type label from the metadata section to the H1
(function(document) {
"use strict";
const reportTypeLabel = document.querySelector('dd.report-type-label');
const reportHeading = document.querySelector('h1#wb-cont');
if (reportTypeLabel && reportHeading) {
	reportHeading.removeAttribute('id'); // Remove id from H1 if present

	// Create hgroup with id 'wb-cont'
	const hgroup = document.createElement('hgroup');
	hgroup.id = 'wb-cont';

	// Create paragraph with label
	const p = document.createElement('p'),
		span = document.createElement('span');
	span.className = 'label label-primary';
	span.setAttribute('data-report-type', reportTypeLabel.getAttribute('data-report-type-key') || 'auditor-general-report'); // Default to 'auditor-general-report' if not set
	p.className = 'mb-4'; // Use mb-4 for margin-bottom
	span.textContent = reportTypeLabel.textContent;
	p.appendChild(span);

	// Move H1 into hgroup
	hgroup.appendChild(p);
	hgroup.appendChild(reportHeading.cloneNode(true));

	// Replace original H1 with hgroup
	reportHeading.parentNode.replaceChild(hgroup, reportHeading);
}
})(document);
