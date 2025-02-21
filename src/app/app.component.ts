import { Component } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tree-select';
  data = data;
  selectedUsers: any = [9, 10, 11, 12];

  // single select bind value
  // selectedUser = [11, 12]; //take first
  // selectedUser = [11]; 
  selectedUser = 11; 
  // selectedUser = { Id: 11 }; //by Object (you have to attach bindValue)

  config = {
    multiple: true,
    titleCase: true,
    bindLabel: "Name",
    bindValue: "Id",
    includeEntireObject: true,
    groupBy: "Teams",
    noDataFoundText: "No Teams Found",
    placeHolder: "Select Team",
    closeOnSelect: false,
    clearable: true,
    clearAllText: "Remove All",
    dropdownOpen: false,
    readonly: false,
    dropdownPosition: "auto",
    searchable: true,
    expandable: true,
  }

  singleSelectConfig = {
    multiple: false,
    titleCase: true,
    bindLabel: "Name",
    bindValue: "Id",
    includeEntireObject: true,
    groupBy: "Teams",
    noDataFoundText: "No Teams Found",
    placeHolder: "Select Team",
    closeOnSelect: false,
    clearable: true,
    clearAllText: "Remove All",
    dropdownOpen: false,
    readonly: false,
    dropdownPosition: "auto",
    searchable: true,
    expandable: true,
  }

  func(type: any = "a", event: any = "b") {
    console.log(type, event)
  }
}
