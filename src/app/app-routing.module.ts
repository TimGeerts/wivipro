import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: "huwelijk",
    loadChildren: () =>
      import("./marriage/marriage.module").then(m => m.MarriageModule)
  },
  {
    path: "geboorte",
    loadChildren: () => import("./birth/birth.module").then(m => m.BirthModule)
  },
  {
    path: "manden",
    loadChildren: () =>
      import("./creations/creations.module").then(m => m.CreationsModule)
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./contact/contact.module").then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
