import { SkillsListPage } from './skills';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SkillsListPage,
  ],
  imports: [
    IonicPageModule.forChild(SkillsListPage),
  ],
  exports: [
    SkillsListPage
  ]
})

export class SkillsListPageModule { }
