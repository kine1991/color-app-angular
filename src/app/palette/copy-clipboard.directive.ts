import { Directive, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appCopyClipboard]'
})
export class CopyClipboardDirective{

  @Input("appCopyClipboard") public payload: string;
  @Output("copied") public copied: EventEmitter<string> = new EventEmitter<string>();

  @HostListener("click", ["$event"]) public onClick(event: MouseEvent) {
    event.preventDefault();
    if (!this.payload) return;

    let listener = (e: ClipboardEvent) => {
      let clipboard = e.clipboardData || window["clipboardData"];
      clipboard.setData("text", this.payload.toString());
      e.preventDefault();

      this.copied.emit(this.payload);
    };

    document.addEventListener("copy", listener, false)
    document.execCommand("copy");
    document.removeEventListener("copy", listener, false);
  }
}


// @Directive({ selector: '[copy-clipboard]' })
// export class CopyClipboardDirective {

//   @Input("copy-clipboard")
//   public payload: string;

//   @Output("copied")
//   public copied: EventEmitter<string> = new EventEmitter<string>();

//   @HostListener("click", ["$event"])
//   public onClick(event: MouseEvent): void {

    // event.preventDefault();
    // if (!this.payload)
    //   return;

  //   let listener = (e: ClipboardEvent) => {
  //     let clipboard = e.clipboardData || window["clipboardData"];
  //     clipboard.setData("text", this.payload.toString());
  //     e.preventDefault();

  //     this.copied.emit(this.payload);
  //   };

  //   document.addEventListener("copy", listener, false)
  //   document.execCommand("copy");
  //   document.removeEventListener("copy", listener, false);
  // }
// }