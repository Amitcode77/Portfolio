import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coding-profile',
  templateUrl: './coding-profile.component.html',
  styleUrls: ['./coding-profile.component.css']
})
export class CodingProfileComponent implements OnInit {

  constructor() { }

  profiles = [
    {pLink : "https://www.codechef.com/users/kodr",
      pImage: "../../assets/codechef.jfif",
      pText: "Codechef"
    },
    {pLink : "https://codeforces.com/profile/amitcode77",
      pImage: "../../assets/codeforces.png",
      pText: "Codeforces"
    },
    {pLink : "https://leetcode.com/amitcode77",
      pImage: "../../assets/leetcode.png",
      pText: "Leetcode"
    },
    {pLink : "https://auth.geeksforgeeks.org/user/7827amit",
      pImage: "../../assets/gfg.png",
      pText: "GeeksForGeeks"
    },
  ]

  ngOnInit(): void {
  }

}
