# Navicons

[Navicons](http://navicons.web.app/) is a completely open-source icon set with 1,300 icons crafted for web, iOS, Android, and desktop apps. Navicons was built for [Navify Framework](https://navifyframework.web.app/), so icons have both Material Design and iOS versions.

Note: All brand icons are trademarks of their respective owners. The use of these trademarks does not indicate endorsement of the trademark holder by Navify, nor vice versa.

We intend for this icon pack to be used with [Navify](http://navifyframework.web.app/), but it’s by no means limited to it. Use them wherever you see fit, personal or commercial. They are free to use and licensed under [MIT](http://opensource.org/licenses/MIT).


## Using the Web Component

The Navicons Web Component is an easy and performant way to use Navicons in your app. The component will dynamically load an SVG for each icon, so your app is only requesting the icons that you need.

Also note that only visible icons are loaded, and icons which are "below the fold" and hidden from the user's view do not make fetch requests for the svg resource.

### Installation

If you're using [Navify Framework](https://navifyframework.web.app/), Navicons is packaged by default, so no installation is necessary. Want to use Navicons without Navify Framework? Place the following `<script>` near the end of your page, right before the closing </body> tag, to enable them.

```html
<script src="https://unpkg.com/navicons@6/dist/navicons.js"></script>
```

### Basic usage

To use a built-in icon from the Navicons package, populate the `name` attribute on the nav-icon component:

```html
<nav-icon name="heart"></nav-icon>
```

### Custom icons

To use a custom SVG, provide its url in the `src` attribute to request the external SVG file. The `src` attribute works the same as `<img src="...">` in that the url must be accessible from the webpage that's making a request for the image. Additionally, the external file can only be a valid svg and does not allow scripts or events within the svg element.

```html
<nav-icon src="/path/to/external/file.svg"></nav-icon>
```

## Variants
Each app icon in Navicons has a `filled`, `outline` and `sharp` variant. These different variants are provided to make your app feel native to a variety of platforms. The filled variant uses the default name without a suffix. Note: Logo icons do not have outline or sharp variants.

```html
<nav-icon name="heart"></nav-icon> <!--filled-->
<nav-icon name="heart-outline"></nav-icon> <!--outline-->
<nav-icon name="heart-sharp"></nav-icon> <!--sharp-->
```

### Platform specificity
When using icons in Navify Framework you can specify different icons per platform. Use the `md` and `ios` attributes and provide the platform specific icon/variant name.

```html
<nav-icon ios="heart-outline" md="heart-sharp"></nav-icon>
```

## Size

To specify the icon size, you can use the size attribute for our pre-defined font sizes.

```html
<nav-icon size="small"></nav-icon>
<nav-icon size="large"></nav-icon>
```

Or you can set a specific size by applying the `font-size` CSS property on the `nav-icon` component. It's recommended to use pixel sizes that are a multiple of 8 (8, 16, 32, 64, etc.)

```css
nav-icon {
  font-size: 64px;
}
```

## Color

Specify the icon color by applying the `color` CSS property on the `nav-icon` component.

```css
nav-icon {
  color: blue;
}
```

## Stroke width
When using an `outline` icon variant it is possible to adjust the stroke width, for improved visual balance relative to the icon's size or relative to the width of adjacent text. You can set a specific size by applying the `--navicon-stroke-width` CSS custom property to the `nav-icon` component. The default value is 32px.

```html
<nav-icon name="heart-outline"></nav-icon>
```

```css
nav-icon {
  --navicon-stroke-width: 16px;
}
```

## License

Navicons is licensed under the [MIT license](http://opensource.org/licenses/MIT).
