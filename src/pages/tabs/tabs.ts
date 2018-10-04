//import { SkillsListPage } from './../../../../projectX/ionic3-components/src/pages/list/Skills/Skills';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { IntroPage } from '../intro/intro';
import { ExperiencePage } from '../experience/experience';
import { SkillsListPage } from '../skills/skills'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = IntroPage;
  tab5Root = ExperiencePage;
  tab6Root = SkillsListPage;

  constructor() {

  }
}
