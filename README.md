## What is this?
Virtual Keyboard for Angular applications

## Install
### Step 1: Install https://github.com/Vitas23/ng-keyboard
```bash
$ npm install --save http://gitlab.sysmakers.com:81/jwitas/ng-virtual-keyboard.git
```

### Step 2: Import the module
Add `NgVirtualKeyboardModule` as an import in your app's root NgModule.
```typescript
import { NgVirtualKeyboardModule }  from '@protacon/ng-virtual-keyboard';

@NgModule({
  ...
  imports: [
    ...
    NgVirtualKeyboardModule,
  ],
  ...
})
export class AppModule { }
```

## Usage
Simple usage example
```html
<input type="text" value=""
  ng-virtual-keyboard
  ng-virtual-keyboard-layout="alphanumeric"
  ng-virtual-keyboard-placeholder="Custom placeholder text"
/>
```

| Attribute | Description |
| --- | --- |
| `ng-virtual-keyboard`             | Required to initialize Virtual Keyboard to specified input |
| `ng-virtual-keyboard-layout`      | Used layout on keyboard, following keyboards are defaults that you can use `alphanumeric, alphanumericNordic, extended, extendedNordic, numeric, phone` |
| `ng-virtual-keyboard-placeholder` | Override placeholder text, if input has not any - or you want to override input placeholder value |

## License
[The MIT License (MIT)](LICENSE)

