import {NgModule} from '@angular/core'
import { PostService } from './sevices/PostService';
import { PostResoucer } from './sevices/PostResoucer';
import { PostListModules } from './list/PostListModule';

@NgModule (
    {
        imports : [
            PostListModules

        ],
        exports : [
            PostListModules
        ],
        declarations : [],
        providers : [
            PostService,
            PostResoucer
        ],
    }
)
export class BlogModule {

}