import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from  '@angular/common';

import { ArticleService } from '../../services/article.service';

@Component({
	selector: 'content-block',
	moduleId: module.id,
	templateUrl: 'content.component.html',	
	styleUrls: ['content.component.css']
})

export class ContentComponent implements OnInit{

	constructor(private articleService: ArticleService, private location: Location, private router: Router) {
		router.events.subscribe((val) => console.log('content routing event occurred'));
	}

	@Input()
	article: {};

	ngOnInit(): void {

	}
}