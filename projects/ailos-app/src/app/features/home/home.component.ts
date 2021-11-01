import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../../services/home.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cooperado: any;
  message: string = '';
  public searchForm!: FormGroup;

  constructor(private _serviceHome: HomeService, private fb: FormBuilder, private toastr: ToastrService,) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      cpf: ['', [Validators.required, Validators.maxLength(11)]],
    });
  }

  findCooperative() {
    this.cooperado = null;
    if (this.searchForm.valid) {
      this._serviceHome
        .findCooperadoByCPF(this.searchForm.value.cpf)
        .then((data: any) => {
          if (data.message) this.toastr.error(data.message);
          else this.cooperado = data;
        });
    }
  }
}
