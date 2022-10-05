import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getAllFilmApi } from "../backend-api";

@Injectable({
    providedIn: "root",
  })

export class FilmService{
    headers:HttpHeaders | undefined
    constructor(
        private http:HttpClient
    ){}


    getAllFilm(){
        return this.http.get<any>(getAllFilmApi)
    }
}