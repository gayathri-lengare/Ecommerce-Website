import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat',
  standalone: true,
})
export class PriceFormatPipe implements PipeTransform {

  transform(value: number | string, symbol: string = '₹ '): string {

    if (value == null) return '';

    const amount = Number(value);

    if (isNaN(amount)) return '';

    // Indian number formatting
    const formatted = amount.toLocaleString('en-IN');

    return symbol + formatted;
  }

}
