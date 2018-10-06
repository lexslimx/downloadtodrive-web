import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-video-payer',
  templateUrl: './video-payer.component.html',
  styleUrls: ['./video-payer.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class VideoPayerComponent implements OnInit {  
 
  ngOnInit() {
 }

  closeResult: string;
  videoUrl: string = "";
  constructor(private modalService: NgbModal) { }
 
}
