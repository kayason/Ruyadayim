import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.page.html',
  styleUrls: ['./detay.page.scss'],
})
export class DetayPage implements OnInit {
  public ruya_adi:any;
  public ruya_aciklama:any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    this.ruya_adi = this.activatedRoute.snapshot.paramMap.get('adi');
    this.ruya_aciklama = this.activatedRoute.snapshot.paramMap.get('aciklama');

  }

}
