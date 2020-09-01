
import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataRetrievalService } from './data-retrieval.service';
import { AuthenticationService } from '../authentication/authentication.service';

describe(('HttpService Test'), () => {

    let service: DataRetrievalService;
    let _httpMock: HttpTestingController;
    let mockAuthService: AuthenticationService

    beforeEach(async(() => {

        mockAuthService = {
            decodeToken: () => {
                return 'user12345'
            }
        } as any

        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                { provide: AuthenticationService, useValue: mockAuthService }
            ]
        }).compileComponents();
        service = TestBed.inject(DataRetrievalService);
        _httpMock = TestBed.inject(HttpTestingController);

    }));

    it('[GetFinances$] Should make a post request to the getfinances API', () => {

        const API = 'api/data/getFinances'
        service.getFinances$()
            .subscribe(resp => {
                expect(resp).toEqual({ message: 200 })
            })

        _httpMock.expectOne({
            url: API,
            method: 'POST'
        }).flush({ message: 200 })

    });

    it('[SetFinances$] Should make a post request to the setfinances API', () => {

        const API = 'api/data/setFinances'
        const finances = {
            50: 500,
            30: 300,
            20: 200
        };
        service.setFinances$(finances)
            .subscribe(resp => {
                expect(resp).toEqual({ message: 200 })
            })

        _httpMock.expectOne({
            url: API,
            method: 'POST'
        }).flush({ message: 200 })

    });


    afterEach(() => {
        _httpMock.verify();
    });

})