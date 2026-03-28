# Kaizen Demo

This is a simple [Next.js](https://nextjs.org) project to test GitHub Pages and automatic per-commit CI/CD via GitHub Actions and explore continuous improvement (改善) in a practical way.

The website is deployed statically at: [strlst.github.io/kaizendemo/](https://strlst.github.io/kaizendemo/)

## Usage

Feel free to fork this repo as a starting point for a [Next.js](https://nextjs.org) app with an already set up and working GitHub Actions workflow.
In order for the GitHub page to be created, one must first select branch `gh-pages` (created automatically by the workflow) in `Settings` > `Pages` > `Build and deployment` (set branch to `gh-pages` after the workflow runs once).

```sh
# dev test at localhost:3000
npm run dev

# production build, generates static files at out/
npm run build

# serve generated static files
npx serve out
```

## License

This project uses a simple BSD-2-Clause license.
The [Background](https://github.com/strlst/kaizendemo/blob/master/public/images/suwa-torii.jpg) is contributed to the public domain as per [CC0-1.0](https://choosealicense.com/licenses/cc0-1.0/).