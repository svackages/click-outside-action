![svackage logo](https://raw.githubusercontent.com/svackages/persistent-store/main/logo.png)

![npm version](https://img.shields.io/npm/v/@svackages/click-outside-action)
![license](https://img.shields.io/github/license/svackages/click-outside-action)

# Click Outside Action

An easy action to check if you clicked outside

Install `npm install @svackages/click-outside-action`

```html
<script>
    import clickOutside from "@svackages/click-outside-action";
    const awesomeCallback = () => console.log('You are awesome 🥳');
</script>
<div
    use:clickOutside={awesomeCallback}>
</div>

```

https://svelte.dev/repl/b817da3d3ad0468caf44e39871694e80?version=3.44.2 (credit: Pebor)
