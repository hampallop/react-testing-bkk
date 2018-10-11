setup-dependency:
	yarn
setup-db:
	yarn db:seed

all: setup-dependency setup-db
