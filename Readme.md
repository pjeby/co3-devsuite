# Co 3 Dev Suite

This project is a minimal forking of [co 3](https://github.com/visionmedia/co) to expose its tests and benchmarks for use by co alternatives/replacements (such as my own co-next).

Changes so far include:

* Tests and benchmarks require `process.env.CO_MODULE` in place of the project directory, if defined

* Tests have been changed to use domains to trap unhandled errors instead of using process-level trapping (as the latter conflicts with running the tests under `gulp-mocha`)

* The package manifest is changed so that test and benchmark files are installed, and the devDependencies switched to regular dependencies.  (This makes it possible to use `co3-devsuite` as a development dependency for another project.) 

* Tests that use setTimeouts have had the durations reduced, so that mocha doesn't give slow test warnings: warnings should only happen if something is *actually* slow.
