import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SharedService {

    constructor()  {
        // Hidden the sidebar by default
        this.sidebarVisible = false;

        // Set default theme as green
        this.maTheme = 'green';
    }

    // Sidebar visibility
    public sidebarVisible: boolean;
    public sidebarVisibilitySubject: Subject<boolean> = new Subject<boolean>();

    // Theming
    public maTheme: string;
    public maThemeSubject: Subject<string> = new Subject<string>();

    public toggleSidebarVisibilty() {
        this.sidebarVisible = !this.sidebarVisible;
        this.sidebarVisibilitySubject.next(this.sidebarVisible);
    }

    public setTheme(color) {
        this.maTheme = color;
        this.maThemeSubject.next(this.maTheme);
    }

}
