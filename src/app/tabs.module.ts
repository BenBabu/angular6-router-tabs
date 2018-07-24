import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './components/tabs-components.module';
import { TabsContainer } from './container/tabs-container.module';

@NgModule({
  declarations: [
    TabComponent,
    TabsContainer
  ],
  imports: [CommonModule],
  exports: [
    TabComponent,
    TabsContainer
  ]
})
export class TabsModule { }
