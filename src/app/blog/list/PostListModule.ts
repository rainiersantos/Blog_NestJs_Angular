import {NgModule} from '@angular/core';
import { PostListComponent } from './PostListComponent';
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';

@NgModule (
    {
        imports : [
            CommonModule,
            MatCardModule,
            MatButtonModule
        ],
        exports : [
            PostListComponent
        ],
        declarations : [
            PostListComponent
        ],
        providers : [],
    }
)
export class PostListModules {

}