import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { SettingsService } from './settings.service';
import { Settings } from '@prisma/client';

describe('SettingsService', () => {
  const API_URL = 'http://localhost:3333/api';
  let service: SettingsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(SettingsService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get settings', () => {
    const testData: Settings = {
      id: '0',
      deviceId: '00000000',
      city: 'Będzin',
    };
    const testUrl = `${API_URL}/settings`;

    // Make an HTTP GET request
    httpClient.get<Settings>(testUrl).subscribe((data) =>
      // When observable resolves, result should match test data
      expect(data).toEqual(testData)
    );

    const req = httpTestingController.expectOne(testUrl);

    expect(req.request.method).toEqual('GET');

    req.flush(testData);
  });
});
