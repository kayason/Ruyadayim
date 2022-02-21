import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public kelime: string;
  public ruyalar: any;

  constructor(private activatedRoute: ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    //web servisten cekecegiz
    //https:microwebservice.net...
    //this.ruyalar = [{adi:"Aslan Pencesi"},{adi:"Aslan Yuvasi"}];
  }

  ruyaBul(){
    console.log(this.kelime)
    this.http.get('https://microwebservice.net/ecodation/20kasim/Halil/ruyadayim.php?kelime_al='+this.kelime).subscribe(data=>{this.ruyalar=data;})

  }

}
