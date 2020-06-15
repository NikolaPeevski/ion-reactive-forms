import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-folder",
  templateUrl: "./folder.page.html",
  styleUrls: ["./folder.page.scss"],
})
export class FolderPage implements OnInit {
  public folder: string;
  public registerForm: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
    this.folder = this.activatedRoute.snapshot.paramMap.get("id");
  }

  onRegisterUser() {
    console.log(
      `Email: ${this.registerForm.value.email} Password: ${this.registerForm.value.password}`
    );
  }
}
