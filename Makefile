.PHONY: run-dev
run-dev:
	cd app && yarn start

.PHONY: component-tests-dev
component-tests-dev:
	cd component-test && yarn run cypress open