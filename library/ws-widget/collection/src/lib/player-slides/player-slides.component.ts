import { Component, Input, OnInit } from '@angular/core'
import { NsWidgetResolver, WidgetBaseComponent } from '@sunbird-cb/resolver/public-api'

@Component({
  selector: 'ws-widget-player-slides',
  templateUrl: './player-slides.component.html',
  styleUrls: ['./player-slides.component.scss'],
})
export class PlayerSlidesComponent extends WidgetBaseComponent
  implements OnInit, NsWidgetResolver.IWidgetData<any> {
  @Input() widgetData!: any

  ngOnInit() { }
}
