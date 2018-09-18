import {NgModule} from '@angular/core';
import {MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatToolbarModule,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatInputBase
    } from '@angular/material';

@NgModule({
    imports: [
        MatMenuModule,
        MatToolbarModule,
        MatGridListModule,
        MatIconModule,
        MatTableModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatListModule,
        MatDialogModule,
        MatOptionModule,
        MatSelectModule
    ],
    exports: [
        MatMenuModule,
        MatToolbarModule,
        MatGridListModule,
        MatIconModule,
        MatTableModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatListModule,
        MatDialogModule,
        MatOptionModule,
        MatSelectModule
    ]
})
export class SharedModule {}