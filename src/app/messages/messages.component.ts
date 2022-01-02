/* This component displays the list of messages from the Message Service */
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  /*  the messageService property must be public so that Angular can bind the template to it */
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
