# eslint-config-vocovo

This VoCoVo linting standard expects developers to use Prettier for code formatting, and ESLint for code smell. This config uses Prettier both inside and outside ESLint. ESLint is only concerned with Javascript, but Prettier can format many different languages. The detail below explains how to use Prettier to good effect in both situations.

## Installation in your project

Installation does not assume any previous packages having been installed. Thus the dependency list below includes `eslint` & `prettier`, which may already be installed.

### For formatting within ESLint

1. Run the following within your project:

`yarn add -D eslint prettier eslint-config-prettier eslint-config-prettier-standard eslint-config-standard eslint-config-standard-react eslint-plugin-import eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-standard eslint-plugin-react prettier-config-standard pretty-quick`

2. Install this repo, the vocovo lint config, by adding the following to your `devDependencies`:

`"eslint-config-vocovo": "https://github.com/vocovo/eslint-config-vocovo",`

and run `yarn` to install it

3. Add these lines to your npm `scripts` section:

```
"lint": "eslint --ext .js src",
"lint:ci": "eslint -f summary --ext .js src",
```

4. Add the following `.eslintrc` to your project root

```
{
  "extends": ["vocovo"],
  "env": {
    "mocha": true
  }
}
```

### For formatting independent of ESLint

If you choose to run prettier on its own, e.g as part of a git hook with `pretty-quick`, you will need to give prettier a config. Typically this is done with a `.prettierrc` file into which you add rules.

Manually defining/maintaining prettier rules in your own project risks it falling out of sync with this config, so one way to use this project's `.prettierrc` file _without_ defining rules manually is to add a `"prettier"` key within your `package.json` thus:

```
"prettier": "eslint-config-vocovo/prettierrc"
```

## Configuring VSCode so linting and auto-fixing work

1. Install [Prettier for VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
2. Install [ESLint for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
3. Open the VSCode settings (Code -> Preferences -> Settings) in json mode, using the `{}` symbol in the top right of the setting screen. then, ensure you have at least the following defined:

```js
{
  // "eslint.autoFixOnSave" conflicts with the default "editor.formatOnSave",
  // but we need to use "editor.formatOnSave" to run Prettier on filetypes ESLint
  // doesn't handle, like CSS.
  "eslint.autoFixOnSave": true,

  // We enable this here, but _disable_ it (below) on the files we want ESLint to handle.
  "editor.formatOnSave": true,

  // Turn it OFF for JS and JSX, we will do this via eslint
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },

  // We want to use vanilla Prettier (i.e not via ESLint) for other languages like CSS and HTML.
  // But we turn it off for JS since we are doing it through Eslint
  "prettier.disableLanguages": ["javascript", "javascriptreact"]
}
```

## Maintenance

All contributions are welcome and encouraged. If this standard doesn't suit your purposes it would be better that we modify this standard so it does, rather than overriding it within each project.
