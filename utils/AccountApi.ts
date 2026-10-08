import { APIRequestContext, expect } from '@playwright/test';
import { XMLParser } from 'fast-xml-parser';
import { testConfig } from '../config/testConfig';

export class AccountApi {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getAccount(accountId: string) {
    const response = await this.request.get(
      `${testConfig.baseUrl}services/bank/accounts/${accountId}`
    );

    expect(response.status()).toBe(200);

    const responseText = await response.text();

    const parser = new XMLParser();
    const parsedResponse = parser.parse(responseText);

    return parsedResponse.account;
  }
}