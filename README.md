# eslint-config-vocovo

This VoCoVo linting standard expects developers to use Prettier for code formatting, and ESLint for code smell. This config uses Prettier _within_ ESLint as its formatter, unlike some setups where Prettier is run independently.

## Installation

Installation does not assume any previous packages having been installed. Thus the dependency list below includes `eslint` & `prettier`, which may already be installed.

### For formatting within ESLint

Run the following within your project:

`yarn add -D eslint prettier eslint-config-prettier eslint-config-prettier-standard eslint-config-standard eslint-config-standard-react eslint-plugin-import eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-standard eslint-plugin-react prettier-config-standard pretty-quick`

### For formatting independent of ESLint

If you choose to run prettier on its own, e.g as part of a git hook with `pretty-quick`, you will need to give prettier a config. Typically this is done with a `.prettierrc` file into which you add rules.

Manually defining/maintaining prettier rules in your own project risks it falling out of sync with this config, so one way to use this project's `.prettierrc` file _without_ defining rules manually is to add a `"prettier"` key within your `package.json` thus:

```
"prettier": "eslint-config-vocovo/prettierrc"
```
