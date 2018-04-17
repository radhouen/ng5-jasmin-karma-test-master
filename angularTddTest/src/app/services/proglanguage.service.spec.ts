import { MockBackend } from '@angular/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  BaseRequestOptions,
  XHRBackend
} from '@angular/http';
import { ProglanguageService } from './proglanguage.service';

describe('ProglanguagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProglanguageService]
    });
  });

  beforeEach(() => {

        TestBed.configureTestingModule({
          imports: [HttpModule],
          providers: [
            { provide: '', useValue: 'http://example.com' },
            ProglanguageService,
            { provide: XHRBackend, useClass: MockBackend },
          ]
        });
      });


  it('should be created', inject([ProglanguageService], (service: ProglanguageService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getProgLanguages function',
  inject([ProglanguageService], (service: ProglanguageService) => {
    expect(service.getProgLanguages).toBeTruthy();
  }));

  it('should have getProgLanguageById function',
  inject([ProglanguageService], (service: ProglanguageService) => {
    expect(service.getProgLanguageById).toBeTruthy();
  }));

  it('should have getProgLanguagesByName function',
  inject([ProglanguageService], (service: ProglanguageService) => {
    expect(service.getProgLanguagesByName).toBeTruthy();
  }));
  describe('getProgLanguages()', () => {
     it('should return an Observable<Array<Languages>>',
            inject([ProglanguageService, XHRBackend], (proglanguageService, mockBackend) => {
      const mockResponse = {
              data: [
                { id: 0, title: 'java' },
                { id: 1, title: 'python' },
                { id: 2, title: 'javascript' },
                { id: 3, title: 'php' },
              ]
            };
    mockBackend.connections.subscribe((connection) => {
              connection.mockRespond(new Response(new ResponseOptions({
                body: JSON.stringify(mockResponse)
              })));
            });
    proglanguageService.getProgLanguages().subscribe((languages) => {
              expect(languages.length).toBe(4);
              expect(languages[0].title).toEqual('java');
              expect(languages[1].title).toEqual('python');
              expect(languages[2].title).toEqual('javascript');
              expect(languages[3].title).toEqual('php');
            });
          }));
        });


});
