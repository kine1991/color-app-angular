import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostsService {

    constructor(private http: HttpClient) { }

    create(post: Post): Observable<Post> {
        return this.http.post(`${environment.fbDbUrl}/posts.json`, post)
            .pipe(
                map(res => {
                    return {
                        ...post,
                        id: Response.name,
                        date: new Date(post.date)
                    }
                })
            )
    }

    getAll(): Observable<Post[]>{
        return this.http.get(`${environment.fbDbUrl}/posts.json`)
            .pipe(map(res => {
                return Object.keys(res).map(key => ({
                    ...res[key],
                    id: key,
                    date: new Date(res[key].date)
                }))
            }))
    }
 
    remove(id: string): Observable<void>{
        return this.http.delete<void>(`${environment.fbDbUrl}/posts/${id}.json`)
    }

    update(post: Post): Observable<Post>{
        return this.http.patch<Post>(`${environment.fbDbUrl}/posts/${post.id}.json`, post)
    }

    getById(id: string): Observable<Post>{
        return this.http.get<Post>(`${environment.fbDbUrl}/posts/${id}.json`)
            .pipe(map((post: Post) => {
                return {
                    ...post,
                    id, 
                    date: new Date(post.date)
                }
            }))
    }
}   