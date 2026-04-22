import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.services';

@Component({
  selector: 'app-download-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './download-form.html',
  styleUrl: './download-form.scss'
})
export class DownloadForm {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  activeIndex = -1;
  readonly isLoggedIn = computed(() => this.authService.isLoggedIn());

  readonly sections = [
    {
      title: 'HR FORM',
      description: 'Downloadable HR forms and internal request documents.',
      forms: [
        { name: 'ATD FORM TEC', file: '/forms/atd-form-tec-1.docx' },
        { name: 'CA FORM TEC', file: '/forms/ca-form-tec-1.docx' },
        { name: 'LEAVE APPLICATION FORM', file: '/forms/leave-application-form-1.docx' },
        { name: 'OT FORM TEC', file: '/forms/ot-form-tec-1.docx' },
        { name: 'PASSLIP FORM', file: '/forms/passlip-form-1.docx' },
        { name: 'TRAVEL ORDER FORM', file: '/forms/travel-order-form-1.docx' },
        { name: 'NPA FORM', file: '/forms/npa-form-1.docx' },
      ],
    },
    {
      title: 'EMPLOYEE RELATIONS SECTION',
      description: 'Employee relations notices, reports, and certification forms.',
      forms: [
        { name: 'INCIDENT REPORT NEW TFESI', file: '/forms/incident-report-new-tfesi.docx' },
        { name: 'NOTICE TO EXPLAIN NEW TFESI', file: '/forms/notice-to-explain-new-tfesi.docx' },
        { name: 'NOTICE OF DISCIPLINARY ACTION NEW TFESI', file: '/forms/notice-of-disciplinary-action-new-tfesi.docx' },
        { name: 'AWOP NOTICE 1st', file: '/forms/awop-notice-1st.docx' },
        { name: 'AWOP NOTICE (FINAL NOTICE)', file: '/forms/awop-notice-final-notice.docx' },
        { name: 'COE SEPARATED TFESI', file: '/forms/coe-separated-tfesi.docx' },
        { name: 'COE TANKER DRIVER', file: '/forms/coe-tanker-driver.docx' },
        { name: 'END OF CONTRACT', file: '/forms/end-of-contract.docx' },
      ],
    },
    {
      title: 'RECRUITMENT',
      description: 'Recruitment files, contracts, and evaluation documents.',
      forms: [
        {
          name: 'Preorientation Slide',
          file: 'https://www.canva.com/design/DAGqp59Vozw/NjZ0XU18txByz48y_0oRVg/edit',
          external: true,
        },
        { name: 'TRAINEESHIP CONTRACT', file: '/forms/traineeship-contract.docx' },
        { name: 'PROBATIONARY CONTRACT', file: '/forms/probationary-contract.docx' },
        { name: 'EMPLOYEE EVALUATION 1', file: '/forms/employee-evaluation-1.docx' },
        { name: 'REGULARIZATION LETTER', file: '/forms/regularization-letter.docx' },
        { name: 'REGULAR EMPLOYMENT CONTRACT 082824', file: '/forms/regular-employment-contract-082824.docx' },
      ],
    },
    {
      title: 'PAYROLL',
      description: 'Policies and payment-related HR references.',
      contentType: 'payroll',
      forms: [],
    },
    {
      title: 'HR SOP',
      description: 'Standard operating procedures and attendance reference.',
      contentType: 'sop',
      forms: [],
    },
  ];

  handleSectionClick(index: number): void {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }

  goToLogin(): void {
    this.router.navigateByUrl('/login');
  }
}
