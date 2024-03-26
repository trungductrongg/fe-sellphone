import { Observable } from "rxjs";
import { RegisterDTO } from "../DTO/user/register.dto";
import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DOCUMENT } from "@angular/common";
import { HttpUtilService } from "./http.until.service";

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    private apiRegister = `localhost:8088/api/v1/users/register`;
    localStorage?:Storage;
  
    private apiConfig = {
      headers: this.httpUtilService.createHeaders(),
    }
  
    constructor(
      private http: HttpClient,
      private httpUtilService: HttpUtilService,
      @Inject(DOCUMENT) private document: Document
    ) { 
      this.localStorage = document.defaultView?.localStorage;
    }
  
    register(registerDTO: RegisterDTO):Observable<any> {
      return this.http.post(this.apiRegister, registerDTO, this.apiConfig);
    }
}