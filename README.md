## 💡 What is it?
React Boilerplate aims to extends create-react-app with custom webpack config, and adding modules we use for every project.

## ⚙️ Get started

### Setup
```console
git clone git@github.com:adaptdk/react_boilerplate.git [yourProjectName]
cd [yourProjectName]
yarn install
```

### Developing
```console
yarn start
```

### Production Build
```console
yarn build
```

### Jest Testing
```console
yarn test
```

### 📦 Packages
| Features | Base | Variant 1 | Variant 2 |
| -------- | ---- | --------- | --------- |
| Redux       | ✅ | ✅ | ❌ |
| Router      | ❌ | ✅ | ✅ |
| CSS Modules | ❌ | ❌ | ✅ |

### 🎛 Configuration
Following configs can be edited in `config-overrides.js`
- `bundleAnalyzer`: Set this to true to Analyze the Node Packages included in the build product.
- `isDevEmbedded`: Set this to true if the development build is embedded into another site. This will generate a index.html file without <html>, <head> and <body> tags.
- `isProdEmbedded`: Set this to true if the production build is embedded into another site. This will generate a index.html file without <html>, <head> and <body> tags.

## 🛠 Maintenance of React Boilerplate
### Version numbering.
**1.2.3**
- 1.x.x = Compatibility Breaking Changes
- x.1.x = Major Changes (New features)
- x.x.1 = Minor Changes (Patches)

### Updating
#### Patch Updating
*If you add `-n` after it skips all questions*
```bash
yarn release
```

#### Minor Updating
```bash
yarn release minor
```

#### Major Updating
```bash
yarn release major
```

Check out [Create React App](https://github.com/facebook/create-react-app) for more documentation.
