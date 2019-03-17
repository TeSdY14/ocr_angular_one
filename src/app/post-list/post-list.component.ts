import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = [
    {
      postTitle: 'Mon Premier Post',
      postContent: 'Lorem Peregrinatione grauiter ducunt ad rusticus tabes. Est magnum habitio, cesaris. Lorem Peregrinatione grauiter ducunt ad rusticus tabes. ' +
        'Lorem Peregrinatione grauiter ducunt ad rusticus tabes. Est magnum habitio, cesaris. Est magnum habitio, cesaris. ' +
        'Lorem Peregrinatione grauiter ducunt ad rusticus tabes. Est magnum habitio, cesaris.',
      postLoveIts: 1,
      postCreatedAt: new Date(2018, 10, 17, 10, 30, 52)
    },
    {
      postTitle: 'Mon Deuxième Post',
      postContent: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ' +
        'eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ' +
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ' +
        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, ' +
        'sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      postLoveIts: 5,
      postCreatedAt: new Date(2019, 3, 17, 13, 52, 51)
    },
    {
      postTitle: 'Mon Troisième Post',
      postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
        'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      postLoveIts: -1,
      postCreatedAt: new Date(2019, 5, 17, 14, 40, 52)
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
