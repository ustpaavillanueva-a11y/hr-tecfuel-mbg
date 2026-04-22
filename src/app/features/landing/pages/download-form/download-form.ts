import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-download-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './download-form.html',
  styleUrl: './download-form.scss',
})
export class DownloadForm {
   activeIndex = 0;

  readonly sections = [
    {
      title: 'Leave Forms',
      description: 'Forms for leave filing and approval requests.',
      forms: [
        {
          name: 'Leave Request Form',
          note: 'Use this form for vacation, sick leave, and other leave applications.',
        },
        {
          name: 'Return-to-Work Form',
          note: 'Complete this after an approved leave period when required.',
        },
      ],
    },
    {
      title: 'Employee Records',
      description: 'Documents for updating employee information.',
      forms: [
        {
          name: 'Employee Information Form',
          note: 'Use this to update your personal and employment details.',
        },
        {
          name: 'Dependent Update Form',
          note: 'Submit this when adding or updating dependent information.',
        },
      ],
    },
    {
      title: 'General HR Forms',
      description: 'Common downloadable forms for routine HR transactions.',
      forms: [
        {
          name: 'Certificate Request Form',
          note: 'Request employment certificates and similar HR documents.',
        },
        {
          name: 'Clearance Form',
          note: 'Use this for employee clearance processing.',
        },
      ],
    },
  ];

  toggleSection(index: number): void {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }
}
