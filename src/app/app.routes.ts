import { Routes } from "@angular/router";
import { HomeComponent, NotFoundComponent } from "./pages";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
    title: "Home | Todo List"
  },
  {
    path: "**",
    component: NotFoundComponent,
    title: "Not Found | Todo List"
  }
];
