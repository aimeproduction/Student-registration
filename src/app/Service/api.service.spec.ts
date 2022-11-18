import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule ,HttpTestingController} from "@angular/common/http/testing";
import { ApiService } from './api.service';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {StudentPlayLoad} from "../Models/studentPlayLoad";

describe('ApiService', () => {
  let service: ApiService;
  let httpTestCtrl: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
  });

  beforeEach(() => {
    service=TestBed.get(ApiService)
    httpTestCtrl = TestBed.get(HttpTestingController)
  });



  it('should test httpclient get', () => {
    const testPost: StudentPlayLoad[]=[{
      matricule: 'st13',
      student_firstname: 'Mickayel',
      student_lastname: 'Nangue',
      date: new Date('2022.01.01'),
      street: 'Franz-Ludwigstr 78',
      postcode: '97072',
      city: 'Würzburg'
    }];
    service.get_student_data().subscribe((posts)=>{
      expect(testPost).toBe(posts, 'should check mocked data')
    })
    // @ts-ignore
    const req = httpTestCtrl.expectOne(service.BaseUrl+'posts');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json')
    req.flush(testPost);
  });


});
