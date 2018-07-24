import { Component, Input } from "@angular/core";

import { TabsContainer } from "../container/tabs-container.module";

@Component({
    selector: "tab",
    host: {
        "[class.hidden]": "!active"
    },
    templateUrl: "./tabs-component.html",
    styleUrls: ["./tabs-component.scss"]
})
export class TabComponent {
    @Input() active: boolean;
    @Input() tabTitle: string;

    constructor(tabs: TabsContainer) {
        tabs.addTab(this);
    }
    getTabTitle() {
        return this.tabTitle;
    }
}
