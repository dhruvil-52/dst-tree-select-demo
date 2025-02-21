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
  selectedUsers: any = [19, 20];

  config = {
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
    dropdownOpen: true,
    readonly: false,
    multiple: true,
    dropdownPosition: "auto",
    searchable: true,
    expandable: true,
  }

  func(type: any="a", event: any="b") {
    console.log(type, event)
  }
}
