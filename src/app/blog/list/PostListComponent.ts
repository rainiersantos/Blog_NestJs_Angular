import {Component,OnInit} from '@angular/core';

@Component({
    selector : 'app-post-list',
    templateUrl: 'postlist.html'
})

export class PostListComponent implements OnInit{
    public postList = postList;
    constructor(){

    }

    ngOnInit(){

    }
}
const postList = [
    {
        title:'Sou Titulo 1',
        subTitle:'Sou SubTitulo 1',
        imageUrl:'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
        title:'Sou Titulo 2',
        subTitle:'Sou SubTitulo 2',
        imageUrl:'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
        title:'Sou Titulo 3',
        subTitle:'Sou SubTitulo 3',
        imageUrl:'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
        title:'Sou Titulo 4',
        subTitle:'Sou SubTitulo 4',
        imageUrl:'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    }

];