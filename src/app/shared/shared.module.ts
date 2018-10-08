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
    MatInputBase,
    MatFooterRow,
    MatPaginatorModule,
    MatCardModule
    } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

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
        MatSelectModule,
        MatPaginatorModule,
        MatCardModule,
        MatFormFieldModule,
        ReactiveFormsModule
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
        MatSelectModule,
        MatPaginatorModule,
        MatCardModule,
        MatFormFieldModule,
        ReactiveFormsModule    ]
})
export class SharedModule {}