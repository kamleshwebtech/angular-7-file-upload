import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

	server_url = 'http://localhost/sites/angularprojects/fileupload/api/';

  constructor(private http: HttpClient) { }

  uploadNewFile(posted_data){
  	console.log('posted-info',posted_data);

  	/*let headers = new Headers();
	headers.append('Content-Type', 'multipart/form-data;boundary='+Math.random());
	headers.append('Accept', 'application/json');*/

  	return this.http.post(
  			this.server_url+'data.php?action=uploadfile', 
  			{ posted_data },
  			/*headers*/
			/*{headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})}*/
  		);
  }

}