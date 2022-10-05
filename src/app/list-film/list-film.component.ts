import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { FilmService } from '../services/film.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddFilmComponent } from '../add-film/add-film.component';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {
  dataSource = []
  film_id: number;
  title: string ;
  description: string ;
  release_year: string ;
  rating: number;
  filmCategories: string;
  constructor(
    private filmService:FilmService,
    public dialog: MatDialog
  ) { 
  }

  displayedColumns: string[] = [ 'title', 'description', 'release_year','filmCategories'];

  ngOnInit(): void {
    
  }

  onLoadFilm(e:any){
    this.filmService.getAllFilm().subscribe(res=>{
      console.log(res);
      this.dataSource = res
    })
  }

  addFilm(e:any){
    const dialogRef = this.dialog.open(AddFilmComponent, {
      width: '500px',
      data: { title:this.title,description:this.description,release_year:this.release_year,rating:this.rating,filmCategories:this.filmCategories},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log("result",result);
    });
  }

}
