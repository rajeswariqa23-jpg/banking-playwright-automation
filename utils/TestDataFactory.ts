import { randomUUID } from 'crypto';

export class TestDataFactory {

  static generateUsername(): string {
    return `user${randomUUID().replace(/-/g, '').slice(0, 15)}`;
  }

  static generateSSN(): string {
    return Math.floor(
      100000000 + Math.random() * 900000000
    ).toString();
  }

  static getCustomerData() {
    return {
      firstName: 'Rajeswari',
      lastName: 'B',
      password: 'Test@123',
      address: '123 Main Street',
      city: 'Atlanta',
      state: 'GA',
      zipCode: '30004',
      phone: '4705551234'
    };
  }

  static getBillPaymentData() {
    return {
      payeeName: 'Electric Company',
      address: '100 Utility Drive',
      city: 'Atlanta',
      state: 'GA',
      zipCode: '30004',
      phone: '4705552222',
      accountNumber: '987654321',
      amount: '50'
    };
  }
}