THEME_PATH := $(CURDIR)
DEV_GHOST_PATH := '/Users/toddbirchard/projects/ghostlocal'
DEV_GHOST_THEME_PATH := '/Users/toddbirchard/projects/ghostlocal/content/themes/hackersandslackers-casper'

define HELP
Manage development of Hackersandslackers Ghost theme.

Usage:

make build           - Install all dependencies & build theme.
make dev             - Restart local ghost instant and compile site.
make clean           - Purge cache, locked, dependencies, logs, & lockfiles.
make update          - Update production dependencies to latest versions.
make reset           - Clean, update, and build site.

endef
export HELP

.PHONY: build dev clean update reset help

all help:
	@echo "$$HELP"

.PHONY: build
build:
	gulp

.PHONY: dev
dev:
	if [ -d $(DEV_GHOST_THEME_PATH) ]; then rm -rf $(DEV_GHOST_THEME_PATH); fi
	cp -R $(THEME_PATH) $(DEV_GHOST_THEME_PATH)
	cd $(DEV_GHOST_PATH) && ghost restart --verbose && cd $(THEME_PATH)
	cd $(DEV_GHOST_THEME_PATH)
	gulp

.PHONY: clean
clean:
	find . -name 'package-lock.json' -delete
	find . -name 'yarn-error.log' -delete
	find . -name '.pnp.cjs' -delete
	find . -wholename '*.lock' -delete
	find . -type d -wholename './.yarn' -exec rm -rf {} +
	find . -type d -wholename '**/node_modules' -exec rm -rf {} +

.PHONY: update
update:
	npm install npm@latest -g
	npm install -g npm-check-updates@latest
	ncu -u
	npm i

.PHONY: reset
reset: clean
	make update
	make build