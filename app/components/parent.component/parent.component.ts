import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Article } from '../../objects/Article';
import { ArticleService } from '../../services/article.service';

@Component({
	selector: 'my-app',
	moduleId: module.id,
	templateUrl: 'parent.component.html',
	styleUrls: ['parent.component.css']
})

export class ParentComponent implements OnInit{

	title: string = "Codin' for the hack of it"

	constructor(private articleService: ArticleService, private location: Location, private router: Router) {
		router.events.subscribe((val) => console.log('parent routing event occurred'));
	}

	ngOnInit(): void {
		
	}

	onSelect(article: Article): void {
		this.articleService.setSelectedArticle(article);
		this.articleService.getContent(article.name)
	}
}



