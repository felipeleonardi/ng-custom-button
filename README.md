# NgCustomButton
### A button with custom properties such as color, size, titling and function call, works in Angular 4/5/6/7.

## Installation

    npm install ng-custom-button --save

## Usage
```javascript
// Import library module
import { NgCustomButtonModule } from 'ngx-spinner';

@NgModule({
	imports: [
		// ...
		NgCustomButtonModule
	]
})
export  class  AppModule  {  }
```

Now use in your template:
```html
<ng-custom-button></ng-custom-button>
```

## NgCustomButton Component

```html
<ng-custom-button
	[colorBtn]="'primary'"
	[sizeBtn]="'medium'"
	[title]="'NgCustomButton'"
	(onClickBtn)="handleClickBtn()"
></ng-custom-button>
```

 - **[colorBtn]**: color of button, the following colors are accepted: primary, secondary, success, danger, warning, info, light and dark.
 - **[sizeBtn]**: size of button, the following sizes are accepted: small, medium, and large.
 - **[title]**: button title.
 - **(onClickBtn)**: output function without parameters.

## Creator

[Felipe Leonardi D'Amaro](https://github.com/felipeleonardi)
