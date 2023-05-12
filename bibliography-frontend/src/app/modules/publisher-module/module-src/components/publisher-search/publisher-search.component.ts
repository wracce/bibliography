import { Component } from '@angular/core';
import { PublisherService } from '../../services/publisher.service';

@Component({
  selector: 'app-publisher-search',
  templateUrl: './publisher-search.component.html',
  styleUrls: ['./publisher-search.component.scss']
})
export class PublisherSearchComponent {
  search = ""
 constructor (public publisherService:PublisherService) {}

 runSearch() {
  this.publisherService.search = this.search;
 }

}
