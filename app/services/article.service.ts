import { Injectable, EventEmitter,  } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Article } from '../objects/Article';
//import { ARTICLES } from '../model/mock-articles';


@Injectable()
export class ArticleService {
	articles: Article[] = [];
	selectedArticle: Article;
	content: string = "";

	constructor(private http:Http) {
		this.getArticles();
		this.selectedArticle = {
			"name": "article014",
			"title": "Presenting Kotlin",
			"img": "images/kotlin.jpg",
			"img_alt": "The twelfth post image"
		};
		console.log(this.getContent(this.selectedArticle.name));
	}

	getArticles(): Article[] {
		this.http.get('model/data_map.json').subscribe(res => {
			this.articles.push(...res.json());
		});
		return this.articles;
	}
	
	getContent(myFilename: string): string {	
		console.log('the address is : ' + 'model/articles/markdown/' + myFilename + '.md');
		this.http.get('model/articles/markdown/' + myFilename + '.md').subscribe(res => this.content = res.text());
		return this.content; 
	}

	setSelectedArticle(newArticle: Article): void{
		this.selectedArticle = newArticle;
	} 
}