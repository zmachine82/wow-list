import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes',
})
export class PipesPipe implements PipeTransform {
  emoji = require('node-emoji');
  resultArray: any[] = [];
  transform(value: string, side: string = 'left'): any {
    return this.emojiOnLeftOrRight(side, value)
  }

  private emojiOnLeftOrRight(side: string, value: string) {
    let emoji = this.emoji.random();
    if(side === 'right') {
      return value + emoji.emoji
    } else if (side === 'left') {
      return emoji.emoji + value
    }
    return value;
  }
}
