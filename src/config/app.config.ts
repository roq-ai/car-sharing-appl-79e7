interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read car information', 'Create bookings', 'Read booking information', 'Create feedback'],
  ownerAbilities: [
    'Manage company information',
    'Manage user profiles',
    'Manage car fleet',
    'Manage bookings',
    'Manage team members',
    'Review feedbacks',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/2d85fa15-fd18-4e3e-a520-a612fff4673a',
};
