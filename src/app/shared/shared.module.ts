import {NgModule} from '@angular/core';
import {MatGridListModule, MatIconModule, MatMenuModule, MatTableModule, MatToolbarModule} from '@angular/material';

@NgModule({
    imports: [
        MatMenuModule,
        MatToolbarModule,
        MatGridListModule,
        MatIconModule,
        MatTableModule
    ],
    exports: [
        MatMenuModule,
        MatToolbarModule,
        MatGridListModule,
        MatIconModule,
        MatTableModule
    ]
})
export class SharedModule {}