c?=commit

install:
		npm ci

brain-games:
		node bin/brain-games.js

publish:
		npm publish --dry-run

lint:
		npx eslint .

git:
		git add -A
		git commit -m "$(c)"
		git push