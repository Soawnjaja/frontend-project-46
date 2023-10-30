install:
	npm ci
gendiff:
	node src/gendiff.js
lint:
	npx eslint .
publish:
	npm publish --dry-run