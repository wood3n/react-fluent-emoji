# react-fluent-emoji

react fluent emoji

## Q&A

### svg-sprite don't support linearGradient in Chrome

Should not use `display:none` on `svg-sprite` element or its parant element, you can use `visibility` or `position: absolute` to hide it, something like this:

```html
<div style="height: 0; width: 0; position: absolute; visibility: hidden">
  <svg>
    
  </svg>
</div>
```
