import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) {
  }

  async getMembers(): Promise<any> {
    return await this.http.get(environment.goserver + '/api/v1/member').toPromise().then(res => {
      return res;
    }).catch(err => {
      return {'error': err.statusText, 'status': err.status};
    });
  }

  public createMember(name: string, id: string): Observable<any> {
    let data = {};
    data = {'name': name, 'id': id};
    return this.http.put(environment.goserver + '/api/v1/member',
      JSON.stringify(data)).pipe(map(res => res));
  }
}


