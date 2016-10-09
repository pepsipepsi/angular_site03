import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

import { ParentComponent }   from './components/parent.component/parent.component';
import { ContentComponent } from './components/content.component/content.component';
import { ArticleService } from './services/article.service';
import { MarkdownPipe } from './services/markdownpipe.pipe';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: ContentComponent },
	{ path: 'articles/:id', component: ContentComponent }
];

@NgModule({
	imports: [ 
	  	BrowserModule,
	  	FormsModule,
	  	HttpModule,
	  	RouterModule.forRoot(routes)
  	],
	declarations: [ 
		ParentComponent,
		ContentComponent,
		MarkdownPipe
	],
	providers: [ 
		ArticleService,
		{provide: LocationStrategy, useClass: HashLocationStrategy}
	],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
	bootstrap: [ ParentComponent ]  
})

export class AppModule { }
