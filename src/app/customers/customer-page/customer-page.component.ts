import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { CustomerListComponent } from '../customer-list/customer-list.component';
export class Product1 {
  title: string;
  desc: string; // default hours
}
@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css'],
})
export class CustomerPageComponent {
  constructor(public dialog: MatDialog) {}
  public dragging: boolean;
  count: number = 0;
  missionCriticalTotal: number;
  criticalTotal: number;
  lessCriticalTotal: number;
  totalSet: boolean = true;
  todo = new Array();
  title = '';
  desc = '';
  done = new Array();

  lessCritical = new Array();

  sample = [
    // {
    //   title: 'Being resilient',
    //   desc: 'Rebounding from setbacks and adversity when facing difficult situations.',
    // },
    // {
    //   title: 'Plans and aligns',
    //   desc: 'Planning and prioritizing work to meet commitments aligned with organizational goals.',
    // },
    // {
    //   title: 'Persuades',
    //   desc: 'Using compelling arguments to gain the support and commitment of others.',
    // },
    // {
    //   title: 'Nimble learning',
    //   desc: 'Actively learning through experimentation when tackling new problems, using both successes and failures as learning fodder.',
    // },
    // {
    //   title: 'Interpersonal savvy',
    //   desc: 'Relating openly and comfortably with diverse groups of people.',
    // },
    // {
    //   title: 'Action oriented',
    //   desc: 'Taking on new opportunities and tough challenges with a sense of urgency, high energy, and enthusiasm.',
    // },
    // {
    //   title: 'Cultivates innovation',
    //   desc: 'Creating new and better ways for the organization to be successful.',
    // },

    // {
    //   title: 'Drives engagement',
    //   desc: 'Creating a climate where people are motivated to do their best to help the organization achieve its objectives.',
    // },
    // {
    //   title: 'Values differences',
    //   desc: 'Recognizing the value that different perspectives and cultures bring to an organization.',
    // },
    // {
    //   title: 'Groceries',
    //   desc: 'Pick up groceries',
    // },
    // {
    //   title: 'Decision quality',
    //   desc: 'Making good and timely decisions that keep the organization moving forward.',
    // },
    // {
    //   title: 'Customer focus',
    //   desc: 'Building strong customer relationships and delivering customer-centric solutions.',
    // },
    // {
    //   title: 'COURAGE',
    //   desc: 'Stepping up to address difficult issues, saying what needs to be said.',
    // },
    /*kkkk*/
    {
      title: 'Resourcefulness',
      desc: 'Securing and deploying resources effectively and efficiently.',
    },

    {
      title: 'Being resilient',
      desc: 'Rebounding from setbacks and adversity when facing difficult situations.',
    },
    {
      title: 'Plans and aligns',
      desc: 'Planning and prioritizing work to meet commitments aligned with organizational goals.',
    },
    {
      title: 'Persuades',
      desc: 'Using compelling arguments to gain the support and commitment of others.',
    },
    {
      title: 'Nimble learning',
      desc: 'Actively learning through experimentation when tackling new problems, using both successes and failures as learning fodder.',
    },
    {
      title: 'Interpersonal savvy',
      desc: 'Relating openly and comfortably with diverse groups of people.',
    },
    {
      title: 'Action oriented',
      desc: 'Taking on new opportunities and tough challenges with a sense of urgency, high energy, and enthusiasm.',
    },
    {
      title: 'Cultivates innovation',
      desc: 'Creating new and better ways for the organization to be successful.',
    },

    {
      title: 'Drives engagement',
      desc: 'Creating a climate where people are motivated to do their best to help the organization achieve its objectives.',
    },
    {
      title: 'Values differences',
      desc: 'Recognizing the value that different perspectives and cultures bring to an organization.',
    },
    {
      title: 'Decision quality',
      desc: 'Making good and timely decisions that keep the organization moving forward.',
    },
    {
      title: 'Customer focus',
      desc: 'Building strong customer relationships and delivering customer-centric solutions.',
    },
    {
      title: 'COURAGE',
      desc: 'Stepping up to address difficult issues, saying what needs to be said.',
    },
    {
      title: 'ENSURES ACCOUNTABILITY',
      desc: 'Holding self and others accountable to meet commitments.',
    },
  ];

  ngOnInit() {
    this.openDialog();
    if (this.sample) {
      if (this.sample.length != 0) {
        this.title = 'Choose the ideal qualities for the role.';
        this.desc =
          'Click the appropriate column for the card shown or drag it into place.';
      }
      const modNum = this.sample.length % 3;
      console.log(modNum);
      if (modNum == 0) {
        const splitTotal = this.sample.length / 3;
        this.lessCriticalTotal =
          this.missionCriticalTotal =
          this.criticalTotal =
            splitTotal;
      } else {
        const splitTotal = Math.floor(this.sample.length / 3);
        if (modNum == 1) {
          this.missionCriticalTotal = Math.floor(splitTotal) + 1;
          this.lessCriticalTotal = this.criticalTotal = splitTotal;
        } else {
          this.missionCriticalTotal = splitTotal + 1;
          this.criticalTotal = splitTotal + 1;
          this.lessCriticalTotal = splitTotal;
        }
      }
      console.log(
        this.missionCriticalTotal +
          ' ' +
          this.lessCriticalTotal +
          ' ' +
          this.criticalTotal
      );
    }
  }
  openDialog() {
    // this.dialog.open(CustomerListComponent, {
    //   data: {
    //     animal: 'panda',
    //   },
    // });
  }
  drop(dropListName: string, event: CdkDragDrop<any>) {
    // console.log(event.previousContainer.data[event.previousIndex]);

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    if (
      !(this.todo.length == this.missionCriticalTotal) ||
      !(this.done.length == this.criticalTotal) ||
      !(this.lessCritical.length == this.lessCriticalTotal)
    ) {
      this.totalSet = true;
    } else {
      this.totalSet = false;
    }
  }
  public cardsDragOverFun() {
    this.count++;
    if (this.count == 1) {
      this.title =
        'Balance the columns so that each has ' +
        this.missionCriticalTotal +
        ', ' +
        this.criticalTotal +
        ' and ' +
        this.lessCriticalTotal +
        ' cards.';
      if (this.todo.length !== this.missionCriticalTotal) {
        this.desc =
          'Select a quality and click the appropriate column or drag it into place.';
      } else if (this.todo.length == this.missionCriticalTotal) {
        this.desc =
          'Great job, next part of the exercise is about sorting the items in each column.';
      }
    }
    if (this.count == 2) {
      this.title =
        ' Rank order the qualities in each column from most important down to least important.';
      this.desc =
        'Select a quality and click the appropriate position or drag it into place. After you are done, click NEXT.';
    }
    if (this.count == 3) {
      this.desc =
        'Getting close, make sure to order the Critical column from most to least important. After your are done click NEXT.';
    }
    if (this.count == 4) {
      this.desc =
        'Almost done, make sure to order the Less Critical column from most to least important. After your are done click SUBMIT.';
    }
  }
  public handleClick(event: any): void {
    // event.target.style.transition = 'height 0.25s ease-in';

    if (event.target.parentElement.className == 'cdk-drag example-box') {
      if (event.target.parentElement.style.height == '200px') {
        event.target.parentElement.style.height = '78.39px';
        event.target.parentElement.querySelector('.drop-desc').style.display =
          'none';
        // event.target.style.display = 'none';
      } else {
        event.target.parentElement.style.height = '200px';
        event.target.parentElement.querySelector('.drop-desc').style.display =
          'block';
        // event.target.style.display = 'block';
      }
    } else if (
      event.target.parentElement.className == 'cdk-drop-list example-list'
    ) {
      if (event.target.parentElement.firstChild.style.height == '200px') {
        event.target.parentElement.firstChild.style.height = '78.39px';
        event.target.parentElement.querySelector('.drop-desc').style.display =
          'none';
        // event.target.style.display = 'none';
      } else {
        event.target.parentElement.firstChild.style.height = '200px';
        event.target.parentElement.querySelector('.drop-desc').style.display =
          'block';
        // event.target.style.display = 'block';
      }
    }
  }
}
