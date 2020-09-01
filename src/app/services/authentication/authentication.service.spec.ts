
import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

describe(('HttpService Test'), () => {

    let service: AuthenticationService;
    let _httpMock: HttpTestingController;
    let mockRouter = {
        navigate: jasmine.createSpy('navigate')
    };
    let mockHelperService = {
        decodeToken: () => {
            return {
                userId: 'ksdnfksnd'
            }
        }
    };
    let store = {};

    beforeEach(async(() => {

        const mockLocalStorage = {
            getItem: (key: string): string => {
                return key in store ? store[key] : null;
            },
            setItem: (key: string, value: string) => {
                store[key] = `${value}`;
            },
            removeItem: (key: string) => {
                delete store[key];
            },
            clear: () => {
                store = {};
            }
        };

        spyOn(localStorage, 'getItem')
            .and.callFake(mockLocalStorage.getItem);
        spyOn(localStorage, 'setItem')
            .and.callFake(mockLocalStorage.setItem);
        spyOn(localStorage, 'removeItem')
            .and.callFake(mockLocalStorage.removeItem);
        spyOn(localStorage, 'clear')
            .and.callFake(mockLocalStorage.clear);

        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                { provide: Router, useValue: mockRouter },
                { provide: JwtHelperService, useValue: mockHelperService }
            ]
        }).compileComponents();
        service = TestBed.inject(AuthenticationService);
        _httpMock = TestBed.inject(HttpTestingController);

    }));

    it('[LoggedIn$] Should make a post request if the user is logged in', () => {

        const API = 'api/authentication/loggedIn'
        service.loggedIn$()
            .subscribe()

        _httpMock.expectOne({
            url: API,
            method: 'POST'
        })

    });

    it('[DecodeToken] Should call the decodeToken method', () => {
        const spy = spyOn(mockHelperService, 'decodeToken').and.returnValue({
            userId: '#user1'
        })
        service.decodeToken();
        expect(spy).toHaveBeenCalled();
    });

    it('[StoreUserData] it should set localStorage values of user data', () => {
        service.storeUserData('token123', 'user');
        expect(localStorage.getItem('token')).toEqual('token123');
        expect(localStorage.getItem('user')).toEqual('"user"');
    });

    it('[Login$] it should make a post request to the login API', () => {
        const API = 'api/authentication/login';

        service.userLogin$('lewis@gmail.com', 'fakepass')
            .subscribe(resp => {
                expect(resp).toEqual({ user: true })
            });

        _httpMock.expectOne({
            url: API,
            method: 'POST'
        }).flush({ user: true })
    });

    it('[Logout] It should clear the local storage and navigate to the home screen', () => {
        service.userLogout();
        expect(store).toEqual({})
        expect(mockRouter.navigate).toHaveBeenCalledWith([''])
    });

    it('[UpdateAccount] It should make a post request to the update API', () => {
        const API = 'api/authentication/updateAccount';

        const user = {
            username: 'lewis',
            email: 'lewis@gmail.com'
        }

        service.updateAccount$(user)
            .subscribe(resp => {
                expect(resp).toEqual({ message: 'updated' })
            });

        _httpMock.expectOne({
            url: API,
            method: 'POST'
        }).flush({ message: 'updated' })
    });

    it('[UpdatePassword$] It should make a post request to the password API', () => {
        const API = 'api/authentication/updatePassword';

        service.updatePassword$('password')
            .subscribe(resp => {
                expect(resp).toEqual({ message: 'updated' })
            });

        _httpMock.expectOne({
            url: API,
            method: 'POST'
        }).flush({ message: 'updated' })
    });

    it('[GetUser] It should make a post request to the getUser API', () => {
        const API = 'api/authentication/getUser';

        service.getUser$()
            .subscribe(resp => {
                expect(resp).toEqual({
                    username: 'updated',
                    email: 'lewis@gmail.com'
                })
            });

        _httpMock.expectOne({
            url: API,
            method: 'POST'
        }).flush({
            username: 'updated',
            email: 'lewis@gmail.com'
        })
    });

    it('[DeleteAccount] It should make a post request to the delete account API', () => {
        const API = 'api/authentication/deleteAccount';

        service.deleteAccount$()
            .subscribe(resp => {
                expect(resp).toEqual({message: '200'})
            });

        _httpMock.expectOne({
            url: API,
            method: 'POST'
        }).flush({message: '200'})
    });

    it('[RegisterAccount] It should make a post request to the register account API', () => {
        const API = 'api/authentication/register';

        const payload = {
            name: 'DongFather',
            email: 'lewis@gmail.com',
            password: 'fakepass'
        }

        service.registerAccount$(payload)
            .subscribe(resp => {
                expect(resp).toEqual({message: 'account created'})
            });

        _httpMock.expectOne({
            url: API,
            method: 'POST'
        }).flush({message: 'account created'})
    })

    afterEach(() => {
        _httpMock.verify();
    });

})