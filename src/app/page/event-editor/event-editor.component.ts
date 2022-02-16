import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/service/event.service';
import { Event } from '../../model/event';
@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {
  id:string|null;
  event :Event|null;

  constructor(private _Activatedroute:ActivatedRoute ,  private eventService: EventService,) { 
    this.id=null;
    this.event=null;
  }

  onUpdate(form:NgForm)
  {
    this.eventService.update(this.event as Event).subscribe(
      () =>{},
    )

  }
    ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params =>  { 
       this.id = params.get('id'); 
       let id:string=this.id as string;
       this.eventService.get(parseInt(id)).subscribe(ret=>{
          this.event=ret
          console.log(this.event.id);
       });
    });
  }

}
