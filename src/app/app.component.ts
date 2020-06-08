import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div
      class="w-screen h-screen flex flex-col items-center justify-center bg-red-300"
    >
      <div class="shadow-xl p-12 rounded bg-white">
        Tailwind CSS is Awesome!
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = "angular-tailwind-example";
}
